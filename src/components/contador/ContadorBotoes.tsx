import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Estilo from '../estilo'

export default (props: { inc: () => void; dec: () => void }) => {
    return (
        <>
            <View style={style.Botoes}>
                <Button title="-" onPress={props.dec} />
                <Button title="+" onPress={props.inc} />
            </View>
        </>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: 'row'
    }
})