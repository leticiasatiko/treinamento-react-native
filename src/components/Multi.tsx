import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from './estilo'

function Comp1() {
    return <Text style={Estilo.txtG}>Comp #01</Text>
}

function Comp2() {
    return <Text style={Estilo.txtG}>Comp #02</Text>
}

function Comp3() {
    return <Text style={Estilo.txtG}>Comp #03</Text>
}

export { Comp2, Comp3 }
export default Comp1