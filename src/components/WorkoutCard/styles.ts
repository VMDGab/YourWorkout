import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: .7
})`
width:320px;
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
width: 90%;
flex-direction: row;
align-items:center;
`
export const Title = styled.Text`
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
color: ${({theme}) => theme.colors.Title};
font-size: 15px;

margin-left: 10px;
`
export const Icon = styled(MaterialCommunityIcons)`
font-size: 20px;
color: ${({theme}) => theme.colors.Primary};
`
