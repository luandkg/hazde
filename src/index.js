

import React,{Component} from 'react';
import { Text,View } from 'react-native';

import styles from './styles/index'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Olá Mundo</Text>
        <Text style={styles.texto2}>Projeto de DevApps</Text>
      </View>
    );
  }
}

