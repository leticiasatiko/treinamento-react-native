import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'
import Quadrado from './Quadrado'

export default (props: {}) => {
    return (
        <View style={style.FlexV1}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {  
        flexGrow: 1, 
        width: 100,
        backgroundColor: '#000',
    },
    V0: {
        backgroundColor: 'pink',
        height: 150,
    },
    V1: {
        backgroundColor: 'red',
        flexGrow: 1,
    },
    V2: {
        backgroundColor: 'blue',
        flexGrow: 10,
    }
})