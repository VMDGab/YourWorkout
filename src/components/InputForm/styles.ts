import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Octicons } from '@expo/vector-icons'; 
export const Container = styled.View`
width:87%;
`

export const Input = styled.TextInput`
padding-left: 10px;
height:${RFValue(40)}px;
background-color: ${({theme}) => theme.colors.Shape};
margin-bottom: ${RFValue(15)}px;
border-radius: 10px;
border-width: 1.5px;
border-color: ${({ theme }) => theme.colors.Primary};
`
export const Error = styled.Text`
color: ${({ theme }) => theme.colors.Primary};
font-size: ${RFValue(14)};
font-family: ${({ theme }) => theme.Fonts.Medium};
margin: 0 0 7px 0;
`
export const Header = styled.View`
flex-direction: row;
align-items: center;
padding-left: 5px;
margin-bottom: ${RFValue(8)}px;
`
export const Icon = styled(Octicons)`
color: ${({ theme }) => theme.colors.Title};
font-size: ${RFValue(20)};
margin-right: 10px;

`
export const Title = styled.Text`
color: ${({ theme }) => theme.colors.Title};
font-size: ${RFValue(14)};
font-family: ${({ theme }) => theme.Fonts.Medium};
`