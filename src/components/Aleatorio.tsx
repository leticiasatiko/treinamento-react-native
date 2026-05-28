import React from "react";
import { View, Text } from "react-native";

import Estilo from "./estilo";

export default (props: { first: number; last: number }) => (
    <View>
        <Text style={Estilo.txtG}>
            O número aleatório entre {props.first} e {props.last} é: {Math.floor(Math.random() * (props.last - props.first + 1)) + props.first}
        </Text>
    </View>
)