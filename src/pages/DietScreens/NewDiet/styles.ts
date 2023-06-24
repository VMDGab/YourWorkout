import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const DietOverview = styled.View`
 background-color: ${({ theme }) => theme.colors.Shape};

 width: 350px;
 height: 180px;

 align-self: center;

 margin-top: 100px;
 padding: 24px;
 
 border-radius: 25px;
 border-width: 2px;
 border-color: ${({ theme }) => theme.colors.border};
 justify-content: space-between;
`
export const Type = styled.Text`
font-size: 13px;
font-family: ${({ theme }) => theme.Fonts.SemiBold};
color: ${({ theme }) => theme.colors.Title};

`
export const MacroValue = styled.View`
border-bottom-width: 2px;
border-color: ${({ theme }) => theme.colors.Primary};

align-items: center;
`
export const Value = styled.Text`
font-size: 18px;
font-family: ${({ theme }) => theme.Fonts.Bold};
color: ${({ theme }) => theme.colors.Title};
`
export const Macros = styled.View`
width: 100%;
align-items: center;
flex-direction: row;
justify-content: space-between;
`
export const ButtonStyle = styled.View`
align-items: center;
margin-top: 25px;

`
export const Input = styled.TextInput`
border-bottom-width: 2px;
border-color: ${({ theme }) => theme.colors.Primary};

width: 150px;

color: ${({ theme }) => theme.colors.Title};
font-family: ${({theme}) => theme.Fonts.Bold};
font-size: 15px;
`