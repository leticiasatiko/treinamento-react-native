import React from 'react'
import { View, Text, Button } from 'react-native'
import Estilo from '../estilo'

export default (props: {min: number, max: number, funcao: (num: number, texto: string) => void}) => {
    function gerarNumero(min: number, max: number) {
        const fator = max - min + 1
        return Math.floor(Math.random() * fator) + min
    }

    return (
        <Button 
            title="Executar!"
            onPress={function() {
                const n = gerarNumero(props.min, props.max)
                props.funcao(n, "Valor gerado: ")
            }}
        />
    )
}