import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'
import If from './if'

export default (props: { usuario: { nome: string; email: string } }) => {
    const usuario = props.usuario || {}
    return (
        <>
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtG}>
                    {usuario.nome} - {usuario.email}
                </Text>
            </If>
        </>
    )   
}   