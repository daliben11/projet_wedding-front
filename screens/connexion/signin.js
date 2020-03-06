import React, { Component } from 'react';

import { StyleSheet, Image, 
	View, KeyboardAvoidingView, ScrollView, 
	AsyncStorage } from 'react-native';

import LoginForm from './loginform'

/* SIGN-IN */
function Signin( props ) {

	const handleSignIn = () => {
		props.navigation.navigate( 'Mes Mariages' );		
		props.setLogin({status: true});
	}
  
  const handleSignUp = () => {
		props.navigation.navigate( 'SignUp' );		
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
                    <LoginForm signin={handleSignIn} signup={handleSignUp}/>
                </View>
                
            </KeyboardAvoidingView>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F8FB',
        marginTop:40
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 200,
    },
})

export default Signin
