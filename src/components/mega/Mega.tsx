import React from 'react'
import { View, Text } from 'react-native'
import Estilo from '../estilo'

interface Props {
    qtdDeNumeros?: number
}

export default class Mega extends React.Component<Props> {

    static defaultProps: Props = {
        qtdDeNumeros: 6
    }

    render() {
        return (
            <Text style={Estilo.txtG}>
                Gerador de Mega-Sena
                {this.props.qtdDeNumeros}
            </Text>
        )
    }
}