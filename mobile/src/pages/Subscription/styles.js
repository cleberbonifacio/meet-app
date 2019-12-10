import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 30,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
})``;

export const EmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin: 30px;
  border-radius: 4px;
`;

export const EmptyText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const CancelButton = styled(Button)`
  background: #f64575;
  width: 90%;
  margin: 20px 0;
  align-self: center;
`;
