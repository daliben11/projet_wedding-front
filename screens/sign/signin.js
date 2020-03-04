import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './loginform'

/* SIGN-IN */
function Signin({navigation}) {

	
	const handleClick = () => {
		navigation.navigate('Mes Mariages');
	}
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <View style={styles.logoContainer}>
               <Image 
               style={styles.logo}
               source={require('../../assets/logo1.png')} 
               />
            </View>

            <View>
                <LoginForm signinClick={handleClick}/>
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
        width: 200,
        height: 200,
    },
})

export default Signin
