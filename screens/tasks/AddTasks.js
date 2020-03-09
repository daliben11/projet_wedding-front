import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Icon, Input, Header, Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker'
import TimePicker from 'react-native-simple-time-picker';


function AddTasks(props) {


  const [date, setDate] = useState('')
  console.log(date)

  const [state, setState] = useState({ 
    selectedHours: '00', 
    selectedMinutes: '00' 
  })
  console.log(state.selectedHours)
  console.log(state.selectedMinutes)
    
    return (
    <View style={{backgroundColor:"#F5F8FB", flex:1}}>

      
    <ScrollView style={{flex:1}}>
      <View style={{backgroundColor:"#F5F8FB",flex:1, marginTop:40}}>
  
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
            <View style={{margin: 10}}>
                  <Text style={{marginTop: 10, color: '#636e72', fontWeight: 'bold', fontSize: 16}}>Date de la tâche</Text>
                    <DatePicker
                    style={{width: 200, marginTop: 10}}
                    date={date}
                    mode="date"
                    placeholder="Sélectionner une date"
                    format="DD-MM-YYYY"
                    minDate="01-01-1950"
                    maxDate="01-01-2050"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={(date) => setDate(date)}
                  />
            </View>
            <Text style={{marginTop: 10, marginLeft: 10, color: '#636e72', fontWeight: 'bold', fontSize: 16}}>Heure de la tâche</Text>
            <View style={{marginTop: 1, marginLeft: 10, width: 90}}>
              
              <Text style={{color: '#636e72', fontWeight: 'bold', fontSize: 14}}>{state.selectedHours} h {state.selectedMinutes} min</Text>
                  <TimePicker
                  
                  selectedHours={state.selectedHours}
                  //initial Hourse value
                  selectedMinutes={state.selectedMinutes}
                  //initial Minutes value
                  onChange={(hours, minutes) => setState({ 
                        selectedHours: hours, selectedMinutes: minutes 
                  })}
              />
            </View>
          
              <Input
              containerStyle={{marginTop:15}}
              label='Localisation'
              placeholder='Par ex : Paris'
            />



      </View>
    </ScrollView>
    <TouchableOpacity onPress={ () => props.navigation.navigate('AddTaks') }
					style={{
						width:'100%', height:'auto',
						padding: 5,
            backgroundColor: '#FAEBE4', 
            height: 50,
						flexDirection: 'row', alignItems: 'center', justifyContent:'center'
					}}
          >
					<Text style={{paddingLeft: 20}} >
					Ajouter une nouvelle tâche
					</Text>
					<View style={styles.interSpace}/>
					<Icon name='plus' type='feather' color='grey' />
				</TouchableOpacity>
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

  export default AddTasks;
