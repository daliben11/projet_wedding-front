import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import LogupForm from './logupform'

/* SIGN-IN */
function Signup ( props ) {

	const handleSignUp = () => {
		
		props.navigation.navigate( 'Mes Mariages' );
		props.setLogin({status: true});	
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
                        <LogupForm signup={handleSignUp} />
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
        marginTop: 50,
        width: 250,
        height: 200,
    },
})

export default Signup
