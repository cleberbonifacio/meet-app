import * as Yup from 'yup';
import { Op } from 'sequelize';
import { isBefore, startOfDay, endOfDay, parseISO } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async index(req, res) {
    const where = {};
    const page = req.query.page || 1;

    if (req.query.date) {
      const searchDate = parseISO(req.query.date);
      where.date = {
        [Op.between]: [startOfDay(searchDate), endOfDay(searchDate)],
      };
    }

    const meetups = await Meetup.findAll({
      where,
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        {
          model: User,
          attributes: ['name', 'email'],
        },
        {
          model: File,
          as: 'banner',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(meetups);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required('Título é obrigatório'),
      file_id: Yup.number().required('Banner é obrigatório'),
      description: Yup.string().required('Descrição é obrigatório'),
      location: Yup.string().required('Localização é obrigatório'),
      date: Yup.date().required('Data é obrigatória'),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Preencha todos os dados corretamente' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'Esta data já passou' });
    }

    const user_id = req.userId;

    const meetup = await Meetup.create({
      ...req.body,
      user_id,
    });

    return res.json(meetup);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      file_id: Yup.number(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Preencha todos os dados corretamente' });
    }

    const user_id = req.userId;

    const meetup = await Meetup.findByPk(req.params.id);

    if (meetup.user_id !== user_id) {
      return res.status(401).json({ error: 'Acesso não permitido' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res.status(400).json({ error: 'Data inválida' });
    }

    if (meetup.past) {
      return res.status(400).json({
        error: 'Esse meetup já foi realizado e não pode ser alterado',
      });
    }

    await meetup.update(req.body);

    return res.json(meetup);
  }

  async delete(req, res) {
    const user_id = req.userId;

    const meetup = await Meetup.findByPk(req.params.id);

    if (meetup.user_id !== user_id) {
      return res.status(401).json({ error: 'Acesso não permitido' });
    }

    if (meetup.past) {
      return res
        .status(400)
        .json({ error: 'Meetup que já aconteceu não pode ser excluído' });
    }

    await meetup.destroy();

    return res.send();
  }
}

export default new MeetupController();
