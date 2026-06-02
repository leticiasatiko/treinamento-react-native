import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default (props: { cor?: string; lado?: number }) => {
    const lado = props.lado ||  50;
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }} />
    )
}