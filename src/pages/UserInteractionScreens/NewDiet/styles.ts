import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BACKGROUND};
`;

export const DietOverview = styled.View`
 background-color: ${({theme}) => theme.colors.Shape};

 width: 350px;
height: 200px;

flex-direction: row;
 align-self: center;

 margin-top: 100px;
 padding: 24px;
 
 border-radius: 25px;
 border-width: 2px;
 border-color: ${({theme}) => theme.colors.border};
 justify-content: space-between;
`
export const Calorie = styled.View`
align-items: center;
margin-top: -100px;
`
export const CalorieValue = styled.Text`
font-size: 32px;
font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Primary};

`
export const Type = styled.Text`
font-size: 13px;
font-family: ${({theme}) => theme.Fonts.SemiBold};
color: ${({theme}) => theme.colors.Title};

`
export const MacroValue = styled.View`
width: 90px;

border-bottom-width: 2px;
border-color: ${({theme}) => theme.colors.Primary};

align-items: center;
`
export const Value = styled.Text`
font-size: 18px;
font-family: ${({theme}) => theme.Fonts.Bold};
color: ${({theme}) => theme.colors.Title};
`
export const OtherMacros = styled.View`
align-items: center;
`

export const Emphasis = styled.View`
margin-top: 25px;
`
export const ButtonStyle = styled.View`
align-items: center;
margin-top: 25px;

`