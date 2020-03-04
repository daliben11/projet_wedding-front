import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import ConnectionForm from './connectionform'

/* CONNECTION */
function Connection() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <View style={styles.logoContainer}>
               <Image 
               style={styles.logo}
               source={require('../assets/logo1.png')} 
               />
            </View>

            <View>
                <ConnectionForm />
            </View>
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F8FB'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        marginTop: 50,
        width: 200,
        height: 200,
    },
})

export default Connection
