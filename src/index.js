import React, { Component } from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// import { Container } from './styles';

export default class App extends Component {

    state = {
        frase:'ola mundo'
    }

    Alterar = () => {
        
        const current =  this.state.frase
        
        if(current == 'Ola React'){
            this.setState({
                frase: this.state.frase = 'Ola mundo'
            })
        }
        else{
            this.setState({
                frase: this.state.frase = 'Ola React'
            })
        }
    }
    Transform = () => {
        this.setState({
            frase: this.state.frase = 'Ola React Native'
        })
    }
    
  render() {
    return(
        <View style={styled.container}>
            <TouchableOpacity onPress={this.Alterar}
                              onLongPress={this.Transform} >
                <Text style={styled.text}>{this.state.frase}</Text>
            </TouchableOpacity>
        </View>
    ) 
    
  }
}

const styled =  StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent: 'center',
    },          
    
    text:{
        fontSize:20,
        textAlign: 'center',
    }
})