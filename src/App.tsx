import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Aleatorio from './components/Aleatorio'

import MinMax from './components/MinMax'
import CompUm, { Comp2, Comp3 } from './components/Multi'
import Primeiro from './components/Primeiro'

export default () => (
    <View style={style.App}>
        <Aleatorio first={1} last={100} />

        {/* <MinMax min="3" max="10"/>
        <MinMax min="1" max="94"/>
        <CompUm />
        <Comp2 />
        <Comp3 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})