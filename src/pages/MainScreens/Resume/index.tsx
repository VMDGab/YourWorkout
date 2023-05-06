import React from 'react';
import { 
  Container,
  Header,
  CountWrapper,
  Count,
  HeaderTitle,
} from './styles';
export function Resume() {
  return (
    <Container>
     <Header>
        <CountWrapper>
          <Count>7</Count>
          <HeaderTitle>Dietas Totais</HeaderTitle>
        </CountWrapper>

      </Header>
    </Container>
  );
}