import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex: 1;
`;

export const WelcomeMessage = styled.Text`
font-size: 20px;
color: ${(props) => props.theme.colors.Title};
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
text-align: center;
`

export const TextContainer = styled.View`
margin-top: 100px;
align-items: center;

`
export const Title = styled.Text`
margin-top: -10px;
font-size: 30px;
color: ${(props) => props.theme.colors.Primary};
font-family: ${(props) => props.theme.Fonts.Bold} ;
text-align: center;

`
export const InputButton = styled.TouchableOpacity`
height: 40px;
width: 40px;

border-width: 2px;
border-radius: 10px;
border-color: ${({theme}) => theme.colors.Primary};
background-color: ${({theme}) => theme.colors.Shape};
align-items: center;
justify-content: center;
`

export const Input = styled.TextInput`
height: 40px;
width: 240px;

border-width: 2px;
border-radius: 10px;
border-color: ${({theme}) => theme.colors.Primary};
background-color: ${({theme}) => theme.colors.Shape};
padding-left: 10px;

font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};
`

export const InputWrapper = styled.View`
flex-direction: row;
justify-content: space-around;
padding: 24px;
`
export const Icon = styled(AntDesign)`

font-size: 24px;
color: ${({theme}) => theme.colors.Primary};
`

export const Footer = styled.View`

justify-content: flex-end;
padding-bottom: 24px;

`

export const TitleWorkoutInput = styled.TextInput`
align-self: center;

height: 40px;
width: 240px;

border-bottom-width: 2px;
border-radius: 10px;
border-color: ${({theme}) => theme.colors.Primary};

padding-left: 10px;

font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};

margin: 24px 0px;
`