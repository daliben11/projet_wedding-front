import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-elements';

/* LOGINFORM */
function Loginform( props ) {
    return (
            <View style={styles.container}>

                <TextInput 
                placeholder="EMAIL"
                placeholderTextColor="rgba(102, 102, 102, 0.5)"
                keyboardType="email-address"
                style={styles.input} 
                />

                <TextInput 
                placeholder="MOT DE PASSE"
                placeholderTextColor="rgba(102, 102, 102, 0.5)"
                secureTextEntry
                style={styles.input} 
                />

                <TouchableOpacity>
                    <Text style={styles.buttonMotdepasse}>MOT DE PASSE OUBLIE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonMeconnecter}>
                    <Text style={styles.buttonText}>ME CONNECTER</Text>
                </TouchableOpacity>

                <Button title="INSCRIVEZ-VOUS" 
                type="clear"
                titleStyle={{ color: 'grey', fontSize: 12, marginBottom: 40}}
                onPress={()=>props.signinClick()}
                />

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
       padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 10
    },
    buttonMeconnecter: {
        backgroundColor: '#f4c6c1',
        paddingVertical: 20,
        marginBottom: 25,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    },
    buttonMotdepasse: {
        textAlign: 'left',
        color: 'grey',
        marginBottom: 20,
        fontSize: 8
    }
})

export default Loginform
