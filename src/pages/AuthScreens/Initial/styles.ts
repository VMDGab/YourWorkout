import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
`;

export const Svgs = styled.View`
align-items: center;
margin-top:80px;

`
export const MainText = styled.Text`
font-size: 17px;
color: ${(props) => props.theme.colors.Title};
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
margin-top: -120%;
text-align: center;
`
export const LoginOptions = styled.View`
margin-top: ${RFValue(30)}px;
`
export const Separator = styled.View`
margin: 20px 0 20px;
flex-direction: row;
width: 70%;
align-items: center;
align-self: center;
justify-content: space-between;
`
export const Line = styled.View`
width: 100px;
height: 2px;
background-color: ${({theme}) => theme.colors.Shape};
`
export const SignUpButton = styled.TouchableOpacity.attrs({
    activeOpacity: .7
})`
width: 70%;
height: ${RFPercentage(7)}px;
border-radius: 10px;

background-color: ${({theme}) => theme.colors.Title};
align-self: center;
align-items: center ;
justify-content: center;

`
export const Title = styled.Text`

font-size: 20px;
color: ${(props) => props.theme.colors.Title};
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
text-align: center;
`
export const ButtonTitle = styled.Text`

font-size: 20px;
color: ${(props) => props.theme.colors.Shape};
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
text-align: center;
`