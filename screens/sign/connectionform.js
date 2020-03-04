import React from 'react';
import { Button, SocialIcon } from 'react-native-elements';
import { View, Image, StyleSheet } from 'react-native';

/* CONNECTIONFORM */
function Connectionform( props ) {
    return (
        <View style={styles.buttonContainer}>

            <SocialIcon  
            title='Poursuivre avec Facebook' 
            button type='facebook'
            style={styles.buttonLinks} 
            />

            <SocialIcon title='Poursuivre avec Twitter' 
            button type='twitter' 
            style={styles.buttonLinks} 
            />

            <Button title="Inscrivez-vous avec votre email" 
            type="outline"
            style={styles.buttonLinks} 
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderColor: 'black', borderWidth: 1.5 }}
            />

            <Button title="Me connecter" 
            type="clear"
            titleStyle={{ color: 'pink', fontSize: 30, marginTop: 20}}
            onPress={ ()=>props.signin() }
            />
        
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 40,
        padding: 40
     },
    buttonLinks: {
        marginBottom: 50,
    },
})


export default Connectionform
