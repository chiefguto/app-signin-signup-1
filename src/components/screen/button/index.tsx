import React from 'react';
import { Container, Title } from './styles'; // Importa um componente chamado Container
import { TouchableOpacityProps } from 'react-native'; // Importa propriedades específicas do TouchableOpacity
import { PropsWithChildren } from "react"; // Importa o tipo PropsWithChildren de React
interface ButtonProps extends TouchableOpacityProps {
    title: string; // Define uma propriedade obrigatória chamada 'title' do tipo string
}
/* Button é um componente que recebe propriedades (props) do tipo ButtonProps, que estende as propriedades
do TouchableOpacity e exige uma propriedade adicional chamada title. O componente Button renderiza um
componente Container */
export const Button: React.FunctionComponent<ButtonProps> = ({ title, ...otherProps }: PropsWithChildren<ButtonProps>) => {
    /*
        ...otherProps - permite que todas as propriedades contidas aqui sejam passadas como propriedades
    para o Container
     */
    return <Container{...otherProps}>
    <Title>{title}</Title>
    </Container>
};
