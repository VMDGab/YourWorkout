import React from 'react';
import EclipseSvg from '../../../assets/Ellipse.svg'
import {
    Container,
    DietOverview,
    Calorie,
    CalorieValue,
    Type,
    MacroValue,
    Value,
    OtherMacros,
    Emphasis,
    ButtonStyle,
} from './styles';
import { ContentButton } from '../../../components/ContentButton';

export function NewDiet() {
    return (
        <Container>
            <DietOverview>
                <Emphasis>
                    <EclipseSvg />

                    <Calorie>
                        <CalorieValue>3580</CalorieValue>
                        <Type>Calorias</Type>
                    </Calorie>
                </Emphasis>
                <OtherMacros>

                    <MacroValue>
                        <Value>160g</Value>
                    </MacroValue>
                    <Type>Proteínas</Type>

                    <MacroValue>
                        <Value>250g</Value>
                    </MacroValue>
                    <Type>Carboidratos</Type>

                    <MacroValue>
                        <Value>60g</Value>
                    </MacroValue>
                    <Type>Gorduras</Type>

                </OtherMacros>
            </DietOverview>
            <ButtonStyle>
            <ContentButton title='Nova refeição' icon='plus'/>
            </ButtonStyle>
        </Container>
    );
}