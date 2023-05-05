import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
width:300px;
padding: 14px;

flex-direction: row;

justify-content: space-between;
align-items:center;

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
export const Icon = styled(MaterialCommunityIcons)`
font-size: 20px;
color: ${({theme}) => theme.colors.Primary};
`
export const Info = styled.View`

justify-content: space-between;
`
export const Repetitions = styled.Text`
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};
font-size: 14px;
margin-left: 10px;
`
export const Series = styled.Text`
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};
font-size: 14px;
`
export const Volume = styled.View`
flex-direction: row;
justify-content: space-between;
margin-left: 10px;
`