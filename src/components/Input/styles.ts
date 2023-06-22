import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Octicons } from '@expo/vector-icons'; 

interface Props {
    isFocused: boolean
}
export const Container = styled.View`
    width:87%;
    margin-bottom: 8px;
   
 
 `;

export const Icon = styled(Octicons)`
color: ${({ theme }) => theme.colors.Title};
font-size: ${RFValue(20)};
margin-right: 10px;

`
export const Header = styled.View`
flex-direction: row;
align-items: center;
padding-left: 5px;
margin-bottom: ${RFValue(8)}px;
`
export const Title = styled.Text`
color: ${({ theme }) => theme.colors.Title};
font-size: ${RFValue(14)};
font-family: ${({ theme }) => theme.Fonts.Medium};
`

export const InputText = styled.TextInput<Props>`
padding-left: 10px;
height:${RFValue(40)}px;
background-color: ${({ theme }) => theme.colors.Shape};
margin-bottom: ${RFValue(15)}px;
border-radius: 10px;
border-width: 1.5px;
border-color: ${({ theme }) => theme.colors.border};
    ${({ isFocused, theme }) => isFocused && css`
    
    border-bottom-width: 2px ;
    border-bottom-color: ${theme.colors.Primary} ;

`}
`