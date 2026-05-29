import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Estilo from '../estilo'

import Produtos from './produtos'

export default (props: {}) => {
    const produtoRender = ({ item: p }: { item: { id: number; nome: string; preco: number } }) => {
        return <Text>{p.id}) {p.nome} - R$ {p.preco.toFixed(2)}</Text>
    }

    return (
        <>
            <Text style={Estilo.txtG}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={produtoRender}
            />
        </>
    )
}