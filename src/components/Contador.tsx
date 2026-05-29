import React, { Fragment, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Estilo from './estilo';

export default ({ inicial = 0, passo = 1 }) => {
    // let numero = props.inicial
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo)

    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}
            />
            <Button title="-" onPress={dec}
            />
        </>
    )
}