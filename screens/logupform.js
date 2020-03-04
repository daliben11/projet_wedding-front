
import React, { Component, useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';

/* LOGUPFORM */
function Logupform() {

            const [date, setDate] = useState(new Date(1598051730000));
            const [mode, setMode] = useState('date');
            const [show, setShow] = useState(false);

            const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShow(Platform.OS === 'ios');
            setDate(currentDate);
            };

            const showMode = currentMode => {
            setShow(true);
            setMode(currentMode);
            };

            const showDatepicker = () => {
            showMode('date');
            };

    return (
     
            <View style={styles.container}>

                <TextInput 
                placeholder="PRENOM"
                placeholderTextColor="rgba(102, 102, 102, 0.5)"
                style={styles.input} 
                />

                <TextInput 
                placeholder="NOM"
                placeholderTextColor="rgba(102, 102, 102, 0.5)"
                style={styles.input} 
                />

                <Button 
                onPress={showDatepicker} 
                titleStyle={{ color: 'rgba(102, 102, 102, 0.5)', fontSize: 10, paddingRight: 200 }}
                buttonStyle={{ backgroundColor: 'white', marginBottom: 10, height: 40 }}
                title="DATE DE NAISSANCE" 
                />
                {show && (
                <DateTimePicker
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                />
                )}

                <TextInput 
                placeholder="EMAIL"
                placeholderTextColor="rgba(102, 102, 102, 0.5)"
                keyboardType="email-address"
                style={styles.input} 
                />

                <TextInput 
                placeholder="MOT DE PASSE"
                placeholderTextColor="rgba(102, 102, 102, 0.5)"
                secureTextEntry
                style={styles.input} 
                />

                <TouchableOpacity style={styles.buttonInscription}>
                    <Text style={styles.buttonText}>INSCRIPTION</Text>
                </TouchableOpacity>

                <Button title="VOUS AVEZ DEJA UN COMPTE" 
                type="clear"
                titleStyle={{ color: 'grey', fontSize: 12, marginTop: 10}}
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
        marginBottom: 10,
        color: 'black',
        paddingHorizontal: 10,
        fontSize: 10
    },
    buttonInscription: {
        backgroundColor: '#f4c6c1',
        paddingVertical: 20,
        marginBottom: 20
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    }
})

export default Logupform