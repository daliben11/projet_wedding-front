import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Avatar, Icon, Input, Header, Button } from 'react-native-elements';



export default function AddGuest(props) {

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
    <View style={{backgroundColor:"#F5F8FB",flex:1}}>
  
        <Header
              leftComponent={<Icon
                onPress={() => {setModifier(false)}}
                name='close'
              />}
              rightComponent={<Icon
                onPress={() => {setModifier(false)}}
                name='check'
              />}
              centerComponent={{ text: "Ajouter une nouvelle tâche ", style: {fontFamily:'greatvibes', color: '#000', fontSize:26 } }}
              containerStyle={{
                  backgroundColor: '#FAEBE4',
                  height: 84,
              }}>
          </Header>
      
    <ScrollView style={{flex:1}}>
      <View style={{backgroundColor:"#F5F8FB",flex:1, alignItems:'center', marginTop:40}}>
  
            <Input
              containerStyle={{marginTop:15}}
              label='Titre'
              placeholder='Par ex : Réservation de la salle...'
            />
            <Input
              containerStyle={{marginTop:15}}
              label='Description'
              placeholder='Par ex : Appleler Mme Dupont au 06...'
            />  
              <Input
              containerStyle={{marginTop:15}}
              label='Date'
              placeholder='Par ex : 9 septembre 2020'
            />
            
{/*         <Button onPress={showDatepicker} title="Choisir la date" />
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
        )} */}

            <Input
              containerStyle={{marginTop:15}}
              label='Heure de début'
              placeholder='Par ex : 09h00'
            />

            <Input
              containerStyle={{marginTop:15}}
              label='Heure de fin'
              placeholder='Par ex : 14h00'
            />
          
              <Input
              containerStyle={{marginTop:15}}
              label='Localisation'
              placeholder='Par ex : Paris'
            />



      </View>
    </ScrollView>
  </View>
    )
  }

  const styles = StyleSheet.create({
    row: {
        marginLeft: 10,
        marginTop: 15,
        flex: 1,
        flexDirection: "row"
    },
    inputWrap: {
      flex: 1,
      borderColor: "#cccccc",
      borderBottomWidth: 1,
      marginBottom: 10
    },
    inputdate: {
      fontSize: 14,
      marginBottom: -12,
      color: "#6a4595"
    },
    inputcvv: {
      fontSize: 14,
      marginBottom: -12,
      color: "#6a4595"
    }
  });