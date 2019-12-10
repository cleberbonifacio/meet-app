import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Alert, View } from 'react-native';
import { addDays, subDays, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Logo from '~/components/Header';
import Background from '~/components/Background';
import Meetup from '~/components/Meetup';

import api from '~/services/api';

import {
  Container,
  Header,
  LeftButton,
  RightButton,
  DateText,
  MeetupList,
  EmptyContainer,
  EmptyText,
  SubscriptionButton,
} from './styles';

export default function Dashboard() {
  const [actualDate, setActualDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);
  const profile = useSelector(state => state.user.profile);

  async function handleSubscription(data) {
    try {
      await api.post(`meetups/${data.id}/subscriptions/`);
      Alert.alert(
        'Parabéns',
        `Inscrição feita com sucesso no meetup ${data.title}`
      );
    } catch (err) {
      if (err.response.status === 401) {
        Alert.alert(
          'Erro ao inscrever-se',
          `Você já está inscrito no meetup ${data.title}`
        );
      } else {
        Alert.alert(
          'Erro ao inscrever-se',
          `Erro ao tentar se inscrever no meetup ${data.title}`
        );
      }
    }
  }

  function emptyContent() {
    return <View />;
  }

  function buttonComponent(item) {
    return (
      <SubscriptionButton onPress={() => handleSubscription(item)}>
        Realizar inscrição
      </SubscriptionButton>
    );
  }

  const dateFormatted = useMemo(
    () => format(actualDate, "dd 'de' MMMM", { locale: pt }),
    [actualDate]
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          date: format(actualDate, 'yyyy-MM-dd'),
        },
      });

      setMeetups(response.data);
    }
    loadMeetups();
  }, [actualDate]);

  function handlePlusDay() {
    setActualDate(addDays(actualDate, 1));
  }

  function handleSubDay() {
    setActualDate(subDays(actualDate, 1));
  }
  return (
    <Background>
      <Container>
        <Logo />
        <Header>
          <LeftButton onPress={handleSubDay}>
            <Icon name="chevron-left" size={30} color="#FFF" />
          </LeftButton>
          <DateText>{dateFormatted}</DateText>
          <RightButton onPress={handlePlusDay}>
            <Icon name="chevron-right" size={30} color="#FFF" />
          </RightButton>
        </Header>
        {meetups.length > 0 ? (
          <MeetupList
            data={meetups}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Meetup
                data={item}
                Button={() =>
                  item.past || item.user_id === profile.id
                    ? emptyContent()
                    : buttonComponent(item)
                }
              />
            )}
          />
        ) : (
          <EmptyContainer>
            <EmptyText>Não há meetups nesta data.</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};
