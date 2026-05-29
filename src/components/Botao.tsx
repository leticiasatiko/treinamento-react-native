import React, { Fragment } from 'react';
import { View, Text, Button } from 'react-native';
import Estilo from './estilo';

export default (props: {}) => {
    
    function executar() {
        console.warn('Executou!')
    }
    
    return (
        <Button title="Executar!"
                onPress={executar}
        />
    )
}