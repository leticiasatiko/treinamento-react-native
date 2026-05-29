import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import Estilo from './estilo';

export default (props: { principal: string; secundario: string }) => (
    <Fragment>
        <Text style={Estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </Fragment>
)