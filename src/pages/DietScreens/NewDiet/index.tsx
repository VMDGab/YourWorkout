import React, { useState } from 'react';
import EclipseSvg from '../../../assets/Ellipse.svg'
import {
    Container,
    DietOverview,
    Type,
    MacroValue,
    Value,
    Macros,
    ButtonStyle,
    Input,
} from './styles';
import { ContentButton } from '../../../components/ContentButton';

export function NewDiet() {

    const Meals = '@YourWorkout:Refeicoes';
    const [nameDiet, setNameDiet] = useState('');

    return (
        <Container>
            <DietOverview>
                <Input 
                placeholder='Nome da dieta'
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={setNameDiet}
                value={nameDiet}
                />
                <Macros>
                    <MacroValue>
                        <Value>160g</Value>
                    <Type>Proteínas</Type>
                    </MacroValue>

                    <MacroValue>
                        <Value>160g</Value>
                        <Type>Proteínas</Type>
                    </MacroValue>
                    <MacroValue>
                        <Value>250g</Value>
                    <Type>Carboidratos</Type>
                    </MacroValue>

                    <MacroValue>
                        <Value>60g</Value>
                    <Type>Gorduras</Type>
                    </MacroValue>

                </Macros>
            </DietOverview>
            <ButtonStyle>
                <ContentButton title='Nova refeição' icon='plus' />
            </ButtonStyle>
        </Container>
    );
}