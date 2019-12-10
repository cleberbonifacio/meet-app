import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  margin-bottom: 15px;
  border-radius: 4px;
`;
export const Banner = styled.Image`
  width: 100%;
  height: 150px;
`;
export const MeetupTitleText = styled.Text`
  color: #333;
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0 10px 15px;
`;
export const MeetupDate = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 10px 15px;
`;

export const MeetupDateText = styled.Text`
  color: #999;
  margin-left: 5px;
`;

export const MeetupLocation = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 10px 18px;
`;

export const MeetupLocationText = styled.Text`
  color: #999;
  margin-left: 11px;
`;

export const MeetupOrganizer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 0 10px 14px;
`;

export const MeetupOrganizerText = styled.Text`
  color: #999;
  margin-left: 6px;
`;
