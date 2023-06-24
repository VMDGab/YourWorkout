import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
`;
export const TextContainer = styled.View`

padding-left: 51px;

`
export const Title = styled.Text`
font-size: 20px;
color: ${(props) => props.theme.colors.Title};
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
margin-top: -10px;
`

export const RedTitle = styled.Text`

font-size: 30px;
color: ${(props) => props.theme.colors.Primary};
font-family: ${(props) => props.theme.Fonts.Bold} ;


`

export const FormContainer = styled.View`
align-items: center;
padding: 30px;

`;

export const DefaultInput = styled.TextInput<Props>`
padding-left: 10px;
height:${RFValue(40)}px;
width: 87%;
background-color: ${({ theme }) => theme.colors.Shape};
margin-bottom: ${RFValue(15)}px;
border-radius: 10px;
border-width: 1.5px;
border-color: ${({ theme }) => theme.colors.border};
`

export const DescriptionInput = styled.TextInput<Props>`
padding-left: 10px;
width: 87%;
height:${RFValue(80)}px;
background-color: ${({ theme }) => theme.colors.Shape};
margin-bottom: ${RFValue(10)}px;
border-radius: 10px;
border-width: 1.5px;
border-color: ${({ theme }) => theme.colors.border};
`

export const Macros = styled.View`
align-items: center;
padding: 0px 30px;

`;

export const Footer = styled.View`
margin-top: 50px;
background-color: ${({theme}) => theme.colors.BACKGROUND};
justify-self: flex-end;
padding-bottom: 24px;

`