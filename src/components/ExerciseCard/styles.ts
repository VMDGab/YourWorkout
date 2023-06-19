import styled from 'styled-components/native';
import { Octicons } from '@expo/vector-icons'; 

export const Container = styled.View`
width:300px;
padding: 14px;

flex-direction: row;

justify-content: space-between;


border-width: 2px;
border-radius: 10px;
border-color: ${({theme}) => theme.colors.border};

margin-Top: 20px;
background-color: ${({theme}) => theme.colors.Shape};
`;

export const WorkoutContainer = styled.View`
flex-direction: row;
align-items:center;
`
export const Title = styled.Text`
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};
font-size: 20px;

margin-left: 5px;
margin-top: 10px;
`
export const Icon = styled(Octicons)`
font-size: 22px;
color: ${({theme}) => theme.colors.Primary};
`
export const Info = styled.View`
width: 90%;
justify-content: space-between;
`
export const Repetitions = styled.Text`
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};
font-size: 14px;

`
export const Series = styled.Text`
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};
font-size: 14px;
`
export const Volume = styled.View`
flex-direction: row;
padding-left: 5px;
`
export const SeparatorLine = styled.View`
height: 20px;
width: 2px;
background-color: ${({theme}) => theme.colors.Primary};
margin-left: 5px;
margin-right: 5px;
`
export const CardIcons = styled.View`
flex:1;

justify-content: space-between;
`