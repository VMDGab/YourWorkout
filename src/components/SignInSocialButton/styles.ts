import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
export const Button = styled.TouchableOpacity`
  height: ${RFValue(50)}px;
  width: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.Shape};
  border-radius: 50px;
  align-items: center;
  flex-direction: row;
  border-width: 1.5px;
border-color: ${({ theme }) => theme.colors.Primary};
margin-left: 10px;
`;

export const ImageContainer = styled.View`
flex:1;
align-items: center;

`
