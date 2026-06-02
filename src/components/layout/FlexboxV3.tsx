import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'
import Quadrado from './Quadrado'

export default (props: {}) => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor="pink" lado={20}/>
            <Quadrado cor="red"  lado={30}/>
            <Quadrado cor="green"  lado={40}/>
            <Quadrado cor="blue"  lado={50}/>
            <Quadrado cor="purple"  lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#000',
    }
})