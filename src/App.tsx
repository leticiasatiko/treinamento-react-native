import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Aleatorio from './components/Aleatorio'
import Contador from './components/Contador'
import MinMax from './components/MinMax'
import CompUm, { Comp2, Comp3 } from './components/Multi'
import Primeiro from './components/Primeiro'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Pai from './components/direta/Pai'
import PaiIndireto from './components/indireta/Pai'
import ContadorV2 from './components/contador/ContadorV2'
import ParImpar from './components/ParImpar'

export default () => (
    <View style={style.App}>

        <ParImpar num={5} />
        {/* 
        <ContadorV2 />
        <PaiIndireto />
        <Pai />
        <Contador inicial={100} passo={10} />
        <Botao />
        <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro" />
        <Aleatorio min={1} max={5} />
        <MinMax min="3" max="10"/>
        <MinMax min="1" max="94"/>
        <CompUm />
        <Comp2 />
        <Comp3 />
        <Primeiro />
        */}
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