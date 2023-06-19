import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
export const Container = styled.View`
    width: 100%;
    height: 70px;


    border-width: 2px;
    border-color: ${({theme}) => theme.colors.Shape};
    border-bottom-color: ${({theme}) => theme.colors.Primary};

    background-color: ${({theme}) => theme.colors.Shape};
    flex-direction: row;
    justify-content: flex-end;
    justify-content: space-between;
    padding: 13px 40px;
`;

export const NavigationButton = styled.TouchableOpacity`
align-items: center;
`

export const Title = styled.Text`
font-family: ${({theme}) => theme.Fonts.Medium};
color: ${({theme}) => theme.colors.Title};
font-size: 11px;

`
export const Icon = styled(MaterialCommunityIcons)`
font-size: 30px;
`