import React, { Component } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import LogupForm from './logupform'

/* SIGN-IN */
function Signup ( props ) {

	const handleSignUp = () => {
		
		props.navigation.navigate( 'Enter' );
		props.setLogin({status: true});	
	}
	
	const handleSignIn = () => {
		props.navigation.navigate( 'SignIn' );
	}

    return (
            <ScrollView>
                
                <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
                    <View style={{flex:3,alignItems:'center'}}>
                        <TouchableOpacity 
                            onPress={()=>props.navigation.navigate( 'Home' )}
                        >
                            <Image 
                            style={styles.logo}
                            source={require('../../assets/logo1.png')}
                            />
                        </TouchableOpacity>

                    </View>

                    <View >
                        <LogupForm signup={handleSignUp} signin={handleSignIn} />
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

export default Signup ;
