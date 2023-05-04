import {  RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: .8
})`
width: 165px;
height: 200px;

background-color: ${({theme}) => theme.colors.Shape};

align-items: center;
justify-content: center;

border-radius: 15px;
border-width: 1px;
border-color:${({theme}) => theme.colors.border} ;
`;

export const Icon = styled.View`
width: 140px;
height: 140px;
`
export const Title = styled.Text`
color: ${({theme}) => theme.colors.Title};
font-family: ${({theme}) => theme.Fonts.Medium};;
font-size: 16px;
` 
export const TypeCard = styled.Text`
color: ${({theme}) => theme.colors.Primary};
font-family: ${({theme}) => theme.Fonts.Medium};;
font-size: 16px;
`
