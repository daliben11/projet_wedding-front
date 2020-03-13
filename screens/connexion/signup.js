import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import LogupForm from './logupform'

/* SIGN-IN */
function Signup ( props ) {

	const handleSignUp = () => {
		
		props.navigation.navigate( 'Enter',{ screen: 'Accueil' } );
		//props.setLogin({status: true});	
	}
	
	const handleSignIn = () => {
		props.navigation.navigate( 'SignIn' );
	}

    return (
           
                      <ImageBackground  style={{flex:1}} source={require('../../assets/weddingimg2.jpg')} style={styles.container} >

                <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <TouchableOpacity 
                            onPress={()=>props.navigation.navigate( 'Home' )}
                        >
                      
                        </TouchableOpacity>

                    </View>

                    <View >
                        <LogupForm signup={handleSignUp} signin={handleSignIn} />
                    </View>

                </KeyboardAvoidingView>
                </ImageBackground>

    
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

export default Signup ;
