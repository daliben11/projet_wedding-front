import React from 'react';
import { Button, SocialIcon } from 'react-native-elements';
import { View, Image, StyleSheet , Dimensions, ImageBackground} from 'react-native';
import * as Facebook from 'expo-facebook';

/* CONNECTIONFORM */
function Connectionform( props ) {

    const LoginWithFacebook = async ()=>{

        await Facebook.initializeAsync('2249633582006462');
        
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(
              { permissions:['public_profile', 'email'] },
            );
            console.log(type+'--', token)
    
            if (type == 'success') {
              console.log('jfjfjntntn')
              // Get the user's name using Facebook's Graph API
              const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
              var res = await response.json()
              console.log(res)
            } 
        }


    return (
       
        
        <View style={styles.buttonContainer}>

            <SocialIcon  
            title='Poursuivre avec Facebook' 
            button type='facebook'
            style={styles.buttonLinks} 
            onPress={()=> LoginWithFacebook()}
            />

            <Button title="Inscrivez-vous avec votre email" 
		          type="outline"
		          style={styles.buttonLinks} 
		          titleStyle={{ color: '#31AE89' }}
		          buttonStyle={{ borderColor: 'black', borderWidth: 0.3 , marginBottom: 25, backgroundColor:'#FAEBE4'}}
		          onPress={ () => props.toSignUp() }
            />

            <Button title="Me connecter"          
                  type="outline"
                  style={styles.buttonLinks}
                  titleStyle={{ color: '#31AE89' }}
                  buttonStyle={{ borderColor: 'black', borderWidth: 0.3 , marginBottom: 15, backgroundColor:'#FAEBE4'}}
		        //   titleStyle={{ color: 'white', fontSize: 30, marginTop: 1, backgroundColor:'#FAEBE4', flexDirection:'row', alignItems:'center', justifyContent:'center',
                //   backgroundColor:'#FAEBE4',
                //   width: Dimensions.get('window').width*0.9,
                //   borderRadius: 1, border:'#000',  borderWidth: 0.3, color:'#000'}}
		          onPress={ () => props.toSignIn() }
            />
        	{/* style={{ 
											flex:0.3, flexDirection:'row', alignItems:'center', justifyContent:'center',
											backgroundColor:'#FAEBE4',
											width: Dimensions.get('window').width*0.9,
											borderRadius: 1, border:'#000',  borderWidth: 0.3,
										}} */}
        </View>
        
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 40,
        padding: 40
     },
    buttonLinks: {
        marginBottom: 25,
        
    },
})


export default Connectionform
