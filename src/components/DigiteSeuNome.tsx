import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Estilo from './estilo'

export default (props: {}) => {
    const [nome, setNome] = useState('Teste')
    return (
        <View>
            <TextInput 
                placeholder="Seu nome" 
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}