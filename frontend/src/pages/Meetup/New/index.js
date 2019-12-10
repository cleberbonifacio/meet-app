import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { MdAddCircleOutline } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';
import Banner from '../BannerInput';
import SelectDate from '../DatePicker';

export default function NewMeetapp() {
  const [date, setDate] = useState();

  async function handleSubmit(data) {
    try {
      const response = await api.post('meetups', data);
      if (response.status !== 200)
        toast.error(
          `Tente novamente, ocorreu um erro!! [${response.body.error}]`
        );
      toast.success('Meetup criado com sucesso!!');
      history.push('/');
    } catch (e) {
      toast.error(`Tente novamente, ocorreu um erro!!`);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Banner name="file_id" />
        <Input name="title" placeholder="Título" />
        <Input multiline name="description" placeholder="Descrição" />
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
