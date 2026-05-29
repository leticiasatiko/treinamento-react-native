import React from "react";
import { View, Text } from "react-native";

import Estilo from "./estilo";

export default (props: { min: number; max: number }) => {
    const delta = props.max - props.min + 1
    const aleatorio = Math.floor(Math.random() * delta) + props.min
    return (
        <View>
            <Text style={Estilo.txtG}>
                O número aleatório entre {props.min} e {props.max} é: {aleatorio}
            </Text>
        </View>
    )
}