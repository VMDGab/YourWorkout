import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
`;
export const Svgs = styled.View`
align-items: center;
margin-top:150px;
flex:.9;
`
export const Icon = styled(MaterialIcons)`
margin-top:-7px;
font-size: 25px;
color: ${({theme}) => theme.colors.Primary};
`

export const Title = styled.Text`
margin-top:-10px;
font-size: 20px;
color: ${(props) => props.theme.colors.Title};
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
text-align: center;
`

export const SignUpContainer = styled.View`

align-items: flex-end;
margin-top:60px;
margin-bottom: -30%;
`
export const SignUpButton = styled.TouchableOpacity.attrs({
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
margin-top:-100%;
align-items: flex-start;
align-self: center;
`
export const InputContainer = styled.View`

padding:24px;
align-items: center;

`
export const SocialLoginOptions = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 30px;
`
 
export const MainText = styled.Text`
  font-size: 15px;
color: ${(props) => props.theme.colors.Title};
font-family: ${(props) => props.theme.Fonts.Medium} ;
`