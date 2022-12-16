import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
`;

export const Icon = styled(MaterialIcons)`
margin-top:-7px;
font-size: 25px;
color: ${({theme}) => theme.colors.Primary};
`

export const Title = styled.Text`

font-size: 20px;
color: ${(props) => props.theme.colors.Title};
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
text-align: center;
`

export const SignInContainer = styled.View`

align-items: flex-end;
margin-top:60px;
margin-bottom: 10%;
`
export const SignInButton = styled.TouchableOpacity.attrs({
  activeOpacity: .7
})`
flex-direction:row;
align-items:center;
`

export const WelcomeMessage = styled.Text`

font-size: 30px;
color: ${(props) => props.theme.colors.Primary};
font-family: ${(props) => props.theme.Fonts.Bold} ;
text-align: center;
`

export const TextContainer = styled.View`

align-items: flex-start;
padding-left:50px;
`
export const InputContainer = styled.View`

padding:24px;
align-items: center;

`
