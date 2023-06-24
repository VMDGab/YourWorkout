import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { BackButton } from '../../../components/BackButton';
import { ParamListBase, NavigationProp, useNavigation } from '@react-navigation/native';
import { Button } from '../../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Yup from 'yup';
import uuid from 'react-native-uuid';

import {
    Container,
    TextContainer,
    RedTitle,
    Title,
    FormContainer,
    DefaultInput,
    DescriptionInput,
    Macros,
    Footer,
} from './styles';

export function NewMeal() {

    const navigation = useNavigation<NavigationProp<ParamListBase>>();

    const Meals = '@YourWorkoutt:Refeicoes'
    const [nameMeal, setNameMeal] = useState('');
    const [descriptionMeal, setDescriptionMeal] = useState('');

    const [calories, setCalories] = useState('');
    const [proteins, setProteins] = useState('');
    const [carbo, setCarbo] = useState('');
    const [fat, setFat] = useState('');


    function handleGoBack() {
        navigation.goBack()
    }

   async function handleSaveMeal(){
        try {
            const schema = Yup.object().shape({

                nameMeal: Yup
                  .string()
                  .required('Informe o nome da refeição'),
        
                  descriptionMeal: Yup
                  .string()
                  .required('Informe a descrição da refeicão'),

                  calories: Yup
                  .number()
                  .required('Informe as calorias'),

                  proteins: Yup
                  .number()
                  .required('Informe as proteínas'),

                  carbo: Yup
                  .number()
                  .required('Informe os carboidratos'),

                  fat: Yup
                  .number()
                  .required('Informe a gordura'),
              })
        
              await schema.validate({ nameMeal, descriptionMeal, calories, proteins, carbo, fat})

              const NewMeal = {
                id: String(uuid.v4()),
                nameMeal,
                descriptionMeal,
                calories,
                proteins,
                carbo,
                fat
              }

              await AsyncStorage.setItem(Meals, JSON.stringify(NewMeal))
              navigation.navigate('NewDiet')
        } catch (error) {
            if(error instanceof Yup.ValidationError){
                Alert.alert('Opa', error.message)
               }else{
                 Alert.alert(
                   'Erro ao salvar',
                   'Ocorreu um erro ao salvar a refeição, verifique os campos novamente'
                 )
               }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <BackButton onPress={handleGoBack} />

                <TextContainer>
                    <RedTitle>Monte seu</RedTitle>
                    <Title>Novo Treino</Title>
                </TextContainer>

                <FormContainer>
                    <DefaultInput
                        placeholder='Nome da refeição'
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={setNameMeal}
                        value={nameMeal}
                    />
                    <DescriptionInput
                        placeholder='Descrição da refeição'
                        autoCorrect={false}
                        autoCapitalize='none'
                        multiline
                        numberOfLines={4}
                        onChangeText={setDescriptionMeal}
                        value={descriptionMeal}
                    />

                </FormContainer>

                <Macros>
                    <DefaultInput
                        placeholder='Calorias'
                        keyboardType='numeric'
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={setCalories}
                        value={calories}
                    />
                    <DefaultInput
                        placeholder='Proteínas'
                        keyboardType='numeric'
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={setProteins}
                        value={proteins}
                    />
                    <DefaultInput
                        placeholder='Carboidratos'
                        keyboardType='numeric'
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={setCarbo}
                        value={carbo}
                    />

                    <DefaultInput
                        placeholder='Gorduras'
                        keyboardType='numeric'
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={setFat}
                        value={fat}
                    />
                </Macros>

                <Footer>
                    <Button Title='Salvar' onPress={handleSaveMeal}/>
                </Footer>
            </Container>
        </TouchableWithoutFeedback>
    );
}