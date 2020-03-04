import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import ConnectionForm from './connectionform'

/* CONNECTION */
function Connection({navigation}) {

	const handleSignIn =()=>{
		navigation.navigate('SignIn');
	}
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <TouchableOpacity style={styles.logoContainer}
            	onPress={ ()=>{ navigation.navigate('Mes Mariages') } }>
               <Image 
		             style={styles.logo}
		             source={require('../../assets/logo1.png')}
		             
               />
            </TouchableOpacity>

            <View>
                <ConnectionForm signin={handleSignIn}/>
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
