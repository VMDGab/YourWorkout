import React from 'react';
import FoodSvg from '../../../assets/food.svg'
import { ContentButton } from '../../../components/ContentButton';
import { useNavigation } from '@react-navigation/native';
import { TabBar } from '../../../components/tabBar';
import { 
  Container,
  Header,
  CountWrapper,
  Count,
  HeaderTitle,
  Footer,
} from './styles';


export function Diets() {
  const navigation = useNavigation()
  return (
    <Container>
     <Header>
        <CountWrapper>
          <Count>7</Count>
          <HeaderTitle>Dietas Totais</HeaderTitle>
        </CountWrapper>
      <FoodSvg/>
      </Header>
      <Footer>
        <ContentButton
          icon='plus'
          title='Montar nova dieta'
          onPress={() => navigation.navigate('NewDiet')}
        />
      </Footer>
      <TabBar/>
    </Container>
  );
}