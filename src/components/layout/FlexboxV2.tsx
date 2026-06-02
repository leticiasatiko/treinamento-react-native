import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'
import Quadrado from './Quadrado'

export default (props: {}) => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor="pink"/>
            <Quadrado cor="red" />
            <Quadrado cor="green" />
            <Quadrado cor="blue" />
            <Quadrado cor="purple" />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        width: '100%',
        alignItems: "flex-end",
        justifyContent: 'space-evenly',
        backgroundColor: '#000',
    }
})