import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: ${({theme}) => theme.colors.BACKGROUND};

`;
export const Header = styled.View`
width: 100%;
height: 230px;

background-color: ${({theme}) => theme.colors.Title};

border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;

`
export const HeaderTitle = styled.Text`
font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Shape};
font-size: 32px;
margin-left: 24px;

`

export const CountExercises = styled.View`
padding: 56px 37px 0;

`
export const Count = styled.Text`
font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Primary};
font-size: 36px;

`
export const Title = styled.Text`
font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Title};
font-size: 20px;
margin-top: -15px;

`