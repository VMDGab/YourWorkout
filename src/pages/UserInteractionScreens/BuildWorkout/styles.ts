import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const WelcomeMessage = styled.Text`
font-size: 20px;
color: ${(props) => props.theme.colors.Title};
font-family: ${(props) => props.theme.Fonts.SemiBold} ;
text-align: center;
`

export const TextContainer = styled.View`
margin-top: 100px;
align-items: center;

`
export const Title = styled.Text`
margin-top: -10px;
font-size: 30px;
color: ${(props) => props.theme.colors.Primary};
font-family: ${(props) => props.theme.Fonts.Bold} ;
text-align: center;

`
