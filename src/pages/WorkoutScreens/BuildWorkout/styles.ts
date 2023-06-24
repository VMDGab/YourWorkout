import styled from 'styled-components/native';

export const Container = styled.View`
background-color: ${({theme}) => theme.colors.BACKGROUND};
height: 100%;
`;

export const TextContainer = styled.View`
margin-top: 100px;
align-items: center;

`
export const Title = styled.Text`
font-size: 20px;
color: ${(props) => props.theme.colors.Title};
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
text-align: center;
`

export const RedTitle = styled.Text`
margin-top: -10px;
font-size: 30px;
color: ${(props) => props.theme.colors.Primary};
font-family: ${(props) => props.theme.Fonts.Bold} ;
text-align: center;

`
export const InputButton = styled.TouchableOpacity`
height: 40px;
width: 50%;

border-width: 2px;
border-radius: 10px;
border-color: ${({theme}) => theme.colors.Primary};
background-color: ${({theme}) => theme.colors.Primary};
align-items: center;
justify-content: center;
`

export const Input = styled.TextInput`
height: 40px;
width: 86%;

border-width: 2px;
border-radius: 10px;
border-color: ${({theme}) => theme.colors.Primary};
background-color: ${({theme}) => theme.colors.Shape};
padding-left: 10px;

font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};

align-self: center;
`

export const InputWrapper = styled.View`
flex-direction: row;
padding: 24px;
justify-content: space-between;
`
export const ButtonText = styled.Text`
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
font-size: 14px;
color: ${({theme}) => theme.colors.Shape};
`

export const Footer = styled.View`
background-color: ${({theme}) => theme.colors.BACKGROUND};
justify-self: flex-end;
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

export const MiniInput = styled.TextInput`
height: 40px;
width: 60px;

border-width: 2px;
border-radius: 10px;
border-color: ${({theme}) => theme.colors.Primary};
background-color: ${({theme}) => theme.colors.Shape};


font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};
font-size: 9px;
text-align: center;


`

export const FormWrapper = styled.View`
width: 100%;
padding: 24px;

`
export const MiniInputWrapper = styled.View`
width: 45%;
flex-direction: row;
justify-content: space-between;

`
export const ExercisesContainer = styled.View`
height:100px;
`