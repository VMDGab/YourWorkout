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
border-color: ${({theme}) => theme.colors.Title};

margin-Top: 20px;
`;

export const WorkoutContainer = styled.View`
flex-direction: row;
align-items:center;
`
export const Title = styled.Text`
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};
font-size: 14px;

margin-left: 20px;
`
export const Icon = styled(MaterialCommunityIcons)`
font-size: 20px;
color: ${({theme}) => theme.colors.Primary};
`
