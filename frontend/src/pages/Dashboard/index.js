import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdChevronRight, MdAddCircleOutline } from 'react-icons/md';
import api from '~/services/api';

import { Container, Meet } from './styles';

export default function Dashboard() {
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const meetups = response.data.map(meet => {
        meet.date = format(parseISO(meet.date), "d 'de' MMMM, 'às' HH'h'", {
          locale: pt,
        });
        return {
          id: meet.id,
          title: meet.title,
          date: meet.date,
        };
      });

      setMeetup(meetups);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <Link to="/meetup/new">
          <MdAddCircleOutline size={18} color="#fff" />
          Novo Meetup
        </Link>
      </header>
      <ul>
        {meetup.map(meet => (
          <Meet key={meet.id}>
            <Link to={`/meetup/${meet.id}/details/`}>
              <aside>
                <strong>{meet.title}</strong>
              </aside>
              <div>
                <span>{meet.date}</span>
                <MdChevronRight size={20} color="#fff" />
              </div>
            </Link>
          </Meet>
        ))}
      </ul>
    </Container>
  );
}
