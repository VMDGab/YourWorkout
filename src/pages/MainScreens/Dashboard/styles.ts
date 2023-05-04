import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
`;

export const Header = styled.View`
flex-direction: row;
height: 155px;

align-items: center;
justify-content: space-between;
padding: 50px 24px 0;


background-color: ${({theme}) => theme.colors.Primary};

border-bottom-left-radius: 15px ;
border-bottom-right-radius: 15px ;

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
export const Menu = styled.TouchableOpacity.attrs({
  activeOpacity: .8
})``
export const MenuIcon = styled(MaterialIcons)`

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
export const TodayWorkout = styled.View`
padding: 10px 0px 0px;
align-items: center;
`
export const Title = styled.Text`

font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Title};
font-size: 20px;
margin-top: 20px;
margin-left: 30px;

`
export const WorkoutButton = styled.TouchableOpacity.attrs({
  activeOpacity: .9
})`
width:350px;
height:150px;
justify-content:space-between;
align-items:center;
background-color: ${({theme}) => theme.colors.Shape};
padding:15px 20px ;
border-radius:10px;
border-width:1.5px;
border-color: ${({theme}) => theme.colors.border};

`

export const WorkoutTitle = styled.Text`

font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Title};
font-size: 15px;

text-align: right;


`
export const WorkoutButtonWrapper = styled.View`
flex-direction: row;
justify-content: center;
align-items: center;
`

export const InfoWorkout = styled.View`
align-items: flex-end;
justify-content: space-between;
height:100px;
`

export const Cards = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-between;
padding: 10px 24px;
`
export const Content = styled.ScrollView.attrs({
   showsVerticalScrollIndicator: false
})``