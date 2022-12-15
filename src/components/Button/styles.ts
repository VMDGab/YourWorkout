import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
 `;

export const ButtonStyle = styled.TouchableOpacity.attrs({
    activeOpacity: .7
})`
width: 70%;
height: ${RFPercentage(6)}px;
border-radius: 50px;
background-color: ${(props) => props.theme.colors.Primary};
align-self: center;
align-items: center ;
margin-top: ${RFValue(20)}px;
padding: ${RFValue(5)}px;
justify-content: center;
`
export const TextButton = styled.Text`
font-size: 20px;
color: ${(props) => props.theme.colors.Shape};
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
`