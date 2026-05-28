import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default (props: { min: string; max: string }) => (
    <Text style={Estilo.txtG}>
        O valor {props.max} é maior que o valor {props.min}!
    </Text>
)