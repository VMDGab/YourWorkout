import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
`;

export const Header = styled.View`

height: 20%;
flex-direction: row;
justify-content: space-between;
padding: 20px 24px 0;
align-items: center;

background-color: ${({theme}) => theme.colors.Primary};

`
export const HeaderWrapper = styled.View`
flex-direction: row;
`
export const GrettingsMessage = styled.Text`

font-family: ${({theme}) => theme.Fonts.Medium};
color: ${({theme}) => theme.colors.BACKGROUND};
font-size: 12px;
margin: 5px 0 -5px;
`
export const UserName = styled.Text`

font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.BACKGROUND};
font-size: 20px;
`
export const LogoutButton = styled.TouchableOpacity.attrs({
  activeOpacity: .7
})``
export const LogoutIcon = styled(MaterialIcons)`

font-size: 20px;
color: ${({theme}) => theme.colors.BACKGROUND};
`
export const TextWrapper = styled.View`
align-items: flex-start;
`

export const UserPhoto = styled.Image`

height: 50px;
width: 50px;

margin-right: 15px;
border-radius: 10px;
`

export const Logo = styled.View`
padding: 24px;
align-items: center;
`
export const Options = styled.View`
padding: 24px;
justify-content: center;
align-items: center;
`
export const TodayWorkout = styled.View`

justify-content: center;
align-items: center;
margin-bottom: 30px;
`
export const Title = styled.Text`

font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Title};
font-size: 15px;
margin-top: 30px;
margin-left: 40px;

`
export const WorkoutButton = styled.TouchableOpacity.attrs({
  activeOpacity: .7
})`
width:320px;
margin-top:8px;
flex-direction:row;
justify-content:space-between;
align-items:center;
background-color: ${({theme}) => theme.colors.Shape};
padding:15px 10px ;
border-radius:10px;
border-width:1px;
border-color: ${({theme}) => theme.colors.Primary};
`
export const ArrowIcon = styled(MaterialIcons)`

font-size: 25px;
color: ${({theme}) => theme.colors.Primary};
`
export const WorkoutTitle = styled.Text`

font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Title};
font-size: 15px;

margin-left: 10px;

`