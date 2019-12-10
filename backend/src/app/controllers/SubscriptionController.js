import { Op } from 'sequelize';
import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';
import File from '../models/File';
import User from '../models/User';

import SubscriptionMail from '../jobs/SubscriptionMail';
import Queue from '../../lib/Queue';

class SubscriptionController {
  async index(req, res) {
    const user_id = req.userId;
    const subscriptions = await Subscription.findAll({
      where: {
        user_id,
      },
      include: [
        {
          model: Meetup,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
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
          required: true,
        },
      ],
      order: [[Meetup, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const meetup = await Meetup.findByPk(req.params.meetupId, {
      include: [User],
    });

    if (meetup.user_id === req.userId) {
      return res.status(400).json({
        error: 'Não é possível se inscrever nos seus próprios meetups',
      });
    }

    if (meetup.past) {
      return res
        .status(400)
        .json({ error: 'Não é possível se inscrever em meetups atigos' });
    }

    const checkDate = await Subscription.findOne({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    if (checkDate) {
      return res.status(400).json({
        error: 'Não é possível se inscrever em dois encontros ao mesmo tempo',
      });
    }

    const subscription = await Subscription.create({
      user_id: user.id,
      meetup_id: meetup.id,
    });

    await Queue.add(SubscriptionMail.key, {
      meetup,
      user,
    });

    return res.json(subscription);
  }

  async delete(req, res) {
    const subscription = await Subscription.findByPk(req.params.id);
    if (!subscription) {
      return res.status(404).json({ error: `Inscrição não encontrada` });
    }
    await subscription.destroy();
    return res.send();
  }
}

export default new SubscriptionController();
