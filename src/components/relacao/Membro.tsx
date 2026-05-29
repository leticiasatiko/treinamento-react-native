import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'

export default (props: { nome: string; sobrenome: string }) => {
    return (
        <Text style={Estilo.txtG}>
            {props.nome} {props.sobrenome}
        </Text>
    )
}