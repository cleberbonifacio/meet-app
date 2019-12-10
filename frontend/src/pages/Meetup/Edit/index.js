import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';
import Banner from '../BannerInput';
import SelectDate from '../DatePicker';

export default function EditMeetapp({ match }) {
  const [details, setDetails] = useState({});
  const [date, setDate] = useState();

  useEffect(() => {
    async function loadDetails() {
      const response = await api.get(`organizing/${match.params.id}`);
      const { url } = response.data.banner;

      setDetails({
        ...response.data,
        dateFormatted: format(
          parseISO(response.data.date),
          "d 'de' MMMM, 'às' HH'h'",
          {
            locale: pt,
          }
        ),
        url,
      });
    }

    loadDetails();
  }, [match.params.id]);

  async function handleSubmit(data) {
    try {
      const response = await api.put(`meetups/${match.params.id}`, data);
      if (response.status !== 200)
        toast.error(
          `Tente novamente, ocorreu um erro!! [${response.body.error}]`
        );
      toast.success('Meetup editado com sucesso!!');
      history.push('/');
    } catch (e) {
      toast.error(`Tente novamente, ocorreu um erro!!`);
    }
  }

  return (
    <Container>
      <Form initialData={details} onSubmit={handleSubmit}>
        <Banner name="file_id" />
        <Input name="title" placeholder="Título" />
        <Input
          multiline
          rows={6}
          name="description"
          placeholder="Descrição completa"
          value={details.description}
        />
        <SelectDate
          selected={date}
          setSelected={setDate}
          name="date"
          placeholder="Data do evento"
        />
        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
