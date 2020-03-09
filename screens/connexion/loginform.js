import React, { Component,useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text,AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

/* LOGINFORM */
function Loginform( props ) {
    const [isLogged,setIsLogged] = useState(false);
    // state sign in
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [messageSignIn,setMessageSignIn] = useState("");
    console.log(email,password)
//gestion sign in >>>> envoi au back les champs de signin (récupéré par button) et met à jour les états (islogin, message et token)
    var handleSignIn = async () =>{
        if((email=="")||(password=="")) {
        setMessageSignIn("Champs requis !")
        console.log(messageSignIn)
        }

        else {
        let data = await fetch("https://tranquil-journey-96536.herokuapp.com/sign-in",{
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: `email=${email}&password=${password}`
        });

        let dataJson = await data.json();
        console.log(dataJson.result)
        if(dataJson.result==false){
            setMessageSignIn("Identifiant incorrect")
            console.log(dataJson)
        } else {
            props.signin()
            console.log(dataJson)
            AsyncStorage.setItem("tokenUser",dataJson.tokenUser)

        }
        }
        
    }
    

    return (
            <View style={styles.container}>

                <TextInput 
		              placeholder="EMAIL"
		              placeholderTextColor="rgba(102, 102, 102, 0.5)"
                      style={styles.input} 
                      onChangeText={(value) => setEmail(value)} 
                      value={email}
                />

                <TextInput 
		              placeholder="MOT DE PASSE"
		              placeholderTextColor="rgba(102, 102, 102, 0.5)"
		              secureTextEntry
                      style={styles.input} 
                      onChangeText={(value) => setPassword(value)} 
                      value={password}
                />
                

                <TouchableOpacity>
                    <Text style={styles.buttonMotdepasse}>MOT DE PASSE OUBLIE</Text>
                </TouchableOpacity>

                <Button title="ME CONNECTER" 
                    buttonStyle={{backgroundColor:'#f4c6c1'}}
                    onPress={()=>handleSignIn()}
                />

                <Button title="INSCRIVEZ-VOUS" 
                type="clear"
                titleStyle={{ color: 'grey', fontSize: 12, marginBottom: 40}}
                onPress={ ()=>props.signup() }
                />

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
       padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 10
    },
    buttonMeconnecter: {
        backgroundColor: '#f4c6c1',
        paddingVertical: 20,
        marginBottom: 25,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    },
    buttonMotdepasse: {
        textAlign: 'left',
        color: 'grey',
        marginBottom: 20,
        fontSize: 8
    }
})

export default Loginform
