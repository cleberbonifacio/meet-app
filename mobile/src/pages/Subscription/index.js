import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import AntIcon from 'react-native-vector-icons/AntDesign';
import PropTypes from 'prop-types';
import Logo from '~/components/Header';

import api from '~/services/api';

import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import {
  Container,
  MeetupList,
  EmptyContainer,
  EmptyText,
  CancelButton,
} from './styles';

function Subscriptions({ isFocused }) {
  const [meetups, setMeetups] = useState([]);

  async function loadMeetups() {
    const response = await api.get('subscriptions');
    setMeetups(response.data);
  }

  useEffect(() => {
    loadMeetups();
  }, [isFocused]);

  async function handleCancelSubscription(data) {
    try {
      await api.delete(`subscriptions/${data.id}`);
      Alert.alert('Sucesso', `Inscrição cancelada`);
      loadMeetups();
    } catch (err) {
      Alert.alert(
        'Erro ao inscrever-se',
        `Falha ao tentar se inscrever no meetup`
      );
    }
  }

  function buttonComponent(item) {
    return (
      <CancelButton onPress={() => handleCancelSubscription(item)}>
        Cancelar inscrição
      </CancelButton>
    );
  }

  return (
    <Background>
      <Logo />
      <Container>
        {meetups.length > 0 ? (
          <MeetupList
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup data={item.Meetup} Button={() => buttonComponent(item)} />
            )}
          />
        ) : (
          <EmptyContainer>
            <EmptyText>Você não possui inscrições.</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    </Background>
  );
}

function SubmitIcon({ tintColor }) {
  return <AntIcon name="tag" size={20} color={tintColor} />;
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: SubmitIcon,
};

SubmitIcon.propTypes = {
  tintColor: PropTypes.string,
};

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

SubmitIcon.defaultProps = {
  tintColor: '#FFF',
};

export default withNavigationFocus(Subscriptions);
