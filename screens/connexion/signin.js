import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import LoginForm from './loginform'

/* SIGN-IN */
function Signin( props ) {

	const handleSignIn = () => {
		
		props.navigation.navigate( 'Mes Mariages' );		
	}
  
  return (
        <ScrollView>

            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.logoContainer}>
                <Image 
		              style={styles.logo}
		              source={require('../../assets/logo1.png')} 
                />
                </View>

                <View>
                    <LoginForm signin={handleSignIn}/>
                </View>
                
            </KeyboardAvoidingView>

        </ScrollView >
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
