import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import Estilo from '../estilo'
import MegaNumero from './MegaNumero'

interface Props {
    qtdDeNumeros?: number
}

export default class Mega extends React.Component<Props> {

    state = {
        qtdDeNumeros: this.props.qtdDeNumeros
            ? this.props.qtdDeNumeros
            : 0,
        numeros: []
    }

    alterarQtdNumeros = (qtde: string) => {
        this.setState({ qtdDeNumeros: +qtde})
    }

    gerarNumeroNaoContido = (num: number[]): number => {
        const novo = Math.floor(Math.random() * 60) + 1
        return num.includes(novo) ? this.gerarNumeroNaoContido(num) : novo
    }

    gerarNumeros2 = () => {
        const { qtdDeNumeros } = this.state
        const numeros: number[] = []
        for (let i =0; i < qtdDeNumeros; i++) {
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }

        numeros.sort((a, b) => a - b)
        this.setState({ numeros: numeros })
    }
    
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdDeNumeros)
            .fill(0)
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a: number, b: number) => a - b)
        this.setState({ numeros: numeros })
    }

    exibirNumeros = () => {
        const num = this.state.numeros
        return num.map((n: number) => {
            return <MegaNumero num={n} />
        })
    }
    
    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                    {this.state.qtdDeNumeros}
                </Text>
                <TextInput 
                            keyboardType={'numeric'}
                            placeholder="Qtde de Números"
                            value={this.state.qtdDeNumeros ? String(this.state.qtdDeNumeros) : ''}
                            onChangeText={this.alterarQtdNumeros} />
                <Button 
                    title="Gerar" 
                    onPress={this.gerarNumeros} 
                />
                <Text style={{ marginTop: 20 }}>
                    {this.state.numeros.join(', ')}
                </Text>
                <View style={{ marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}