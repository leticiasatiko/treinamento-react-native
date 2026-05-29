import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'

import Produtos from './produtos'

export default (props: {}) => {
    return (
        <>
            <Text style={Estilo.txtG}>Lista de Produtos</Text>
            {Produtos.map(p => {
                return <Text key={p.id}>{p.nome} - R$ {p.preco.toFixed(2)}</Text>
            })}
        </>
    )
}