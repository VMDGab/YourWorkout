import styled from 'styled-components/native';
import { RectButton} from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: .7
})`
  width:300px;
  height: 33px;
  background-color: ${({ theme }) => theme.colors.Shape};
  border-radius: 25px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.Title};
`;

export const IconContainer = styled.View`
  padding-left: 15px;
  justify-content: center;
  align-items: center;
  
`
export const Icon = styled(MaterialCommunityIcons)`
font-size: 20px;
color: ${({ theme }) => theme.colors.Primary};
`
export const Title = styled.Text`
  flex: .9;
  text-align: center;
  color: ${({ theme }) => theme.colors.Title};
  font-family: ${({ theme }) => theme.Fonts.Medium};
  font-size: 14px;
`
