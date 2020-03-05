import React from 'react';
import { connect } from 'react-redux';

import { StyleSheet, View, Image, 
	KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import ConnectionForm from './connectionform'

/* CONNECTION */
function Connection( props ) {

	const toSignIn = () => {
		props.navigation.navigate( 'SignIn' );
		props.setLogin({status: true});
	}
	
	const toSignUp = () => {
		props.navigation.navigate( 'SignUp' );
		props.setLogin({status: true});
	}


    return (
        <ScrollView >
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <TouchableOpacity style={styles.logoContainer}
				        	onPress={ ()=>{ props.navigation.navigate('profilBottom') } }>
				           <Image 
						         style={styles.logo}
						         source={require('../../assets/logo1.png')}
						         
				           />
				        </TouchableOpacity>

                <View>
                    <ConnectionForm toSignIn={toSignIn} toSignUp={toSignUp}/>
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
        width: 200,
        height: 200,
    },
})


function mapStateToProps(state) {
  return { 
	 	isLogin: state.isLogin,
//  	username: state.username,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLogin: function ( val ) {
    	 dispatch( {type: 'setLogin', login: val } )
    }
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)( Connection );

