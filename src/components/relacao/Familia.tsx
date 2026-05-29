import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'
import Membro from './Membro'

export default (props: { children: React.ReactNode }) => {
    return (
        <>
            <Text>Membros da Família</Text>
            {props.children}
        </>
    )
}