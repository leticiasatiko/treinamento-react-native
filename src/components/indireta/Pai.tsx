import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'

export default (props: {}) => {
    const [num, setNum] = useState(0)
    const [texto, setTexto] = useState('')
    function exibirValor(num: number, texto: string) {
        setNum(num)
        setTexto(texto)
    }

    return (
        <>
            <Text>{texto}{num}</Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </>
    )
}