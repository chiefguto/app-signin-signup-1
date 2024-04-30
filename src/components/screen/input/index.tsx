import React, { PropsWithChildren } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container } from './styles';
// Linha 8 - Aqui definimos um componente chamado Input, que é uma função que recebe um conjunto de propriedades (props).
// Essas propriedades são desestruturadas e armazenadas na variável otherProps.
// O operador de propagação (...) permite que todas as propriedades passadas ao componente Input sejam repassadas para o componente TextInput da linha 12.
// Isso facilita a configuração do componente Input com várias propriedades que são passadas diretamente para o componente TextInput.
export const Input: React.FunctionComponent<TextInputProps> = ({ ...otherProps }: PropsWithChildren<TextInputProps>) => {
    return (
        <Container>
            {/* ...otherProps - frequentemente chamado de "spread" - passa todas as propriedades do TextInput para o componente TextInput da linha 14. */}
            <TextInput placeholderTextColor="rgb(192, 192, 192)" {...otherProps} />
        </Container>
    );
};
