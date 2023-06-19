import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
justify-content: space-between;
background-color: ${({theme}) => theme.colors.BACKGROUND};
`;

export const Header = styled.View`
width: 100%;
height: 230px;

background-color: ${({theme}) => theme.colors.Title};

border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;

flex-direction: row;
justify-content: space-between;
align-items: flex-end;

padding: 24px;
`
export const Count = styled.Text`
font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Shape};
font-size: 36px;

`
export const HeaderTitle = styled.Text`
font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Shape};
font-size: 20px;

`
export const CountWrapper = styled.View``

export const Footer = styled.View`
flex:.9 ;
margin-bottom: 20px;
justify-content: flex-end;
align-items: center;
`