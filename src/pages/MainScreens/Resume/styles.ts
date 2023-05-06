import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
  
background-color: ${({theme}) => theme.colors.BACKGROUND};
`;

export const Header = styled.View`
width: 100%;
height: 230px;

background-color: ${({theme}) => theme.colors.Primary};

border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;

flex-direction: row;

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