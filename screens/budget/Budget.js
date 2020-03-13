import React,{useState, useEffect} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ScrollView } from 'react-native';
import { Icon, ListItem, Card, Overlay,Input,Button} from 'react-native-elements';
import HeaderNav from '../HeaderNav';
import AddBudget from './AddBudget';
import {connect} from 'react-redux';
import DatePicker from 'react-native-datepicker'
import * as Progress from 'react-native-progress';


export default function Budget(props) {
  const [modifier,setModifier]=useState(false)
  
  const [listePrestataire, setListePrestataire]= useState([]);
  const [budgetTotal,setBudgetTotal]=useState(0);
 
  const [montant,setMontant]=useState('');
  const [date,setDate]=useState('');
  const [index,setIndex]=useState('');
  console.log(montant,date)

  const [modalVisible, setModalVisible] = useState( false );

  useEffect( () => { 

    async function  etatBudget(){

      var dataBudget = await fetch('https://weedingplanner.herokuapp.com/budget', {

        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `id=5e67be5ac820c000174ee417`
        });
       
        var budget = await dataBudget.json();
        
        // currentchange
        // setListePrestataire(budget.wedding.serviceProviders)
        // console.log("afficher liste presta", listePrestataire)
        setListePrestataire(budget.prestataire)
        setBudgetTotal(budget.budget)
        console.log("YOOOOOOO", listePrestataire)
      }
          etatBudget()

	},[modalVisible]);


  var addBudget = async () => {
    await fetch('https://weedingplanner.herokuapp.com/addbudget', {

        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `id=5e67be5ac820c000174ee417&index=${index}&date=${date}&montant=${montant}`
        });
        setListePrestataire(budget.prestataire)
        
  }
 


  
if (modifier===false) {
  
  
  return (
    
     <View style={{flex:1}} >

       <HeaderNav nom='Budget'/> 

       
          <View style={{flex:1}} >
                <View style={{marginBottom:15}}>
                  <ListItem 
                      rightAvatar={ <Icon name='euro-symbol' type='materialIcons' color='#31AE89'  size={35}/>}
                      title='Budget '
                      subtitle={
                    <View>
                      <Progress.Bar progress={0.3} width={250} height={15} color={'#31AE89'}  />
                    </View>
                    }
                  />

                 </View>
                    <View style={{flex:1,flexWrap: 'wrap', flexDirection: 'row',justifyContent: 'space-around', marginBottom:20}}>
                      <View style={{flex:0.4,height:60, backgroundColor: '#31AE89',justifyContent:'center'}}><Text style={styles.titleView}> Budget  {budgetTotal}€</Text></View>
                      
                      <View style={{ flex:0.4,height:60,backgroundColor: '#31AE89',justifyContent:'center'}}><Text style={styles.titleView}> Montant payé {"\n"}      10 000€</Text></View>
                 </View>
           
            <ScrollView  stickyHeaderIndices={[8]} style={{marginBottom: 10, marginTop:30}} >
              <ScrollView   style={{ marginBottom: 10, marginTop:5}} stickyHeaderIndices={[8]}  >
              
                <View style={{flex:1,flexWrap: 'wrap', flexDirection: 'row',justifyContent: 'space-around'}} >
                    
                          {listePrestataire.map((u,i)=>{
                        
                          return(
                              <TouchableOpacity
                              onPress={ () => {
                                setModalVisible( true ),
                                setIndex(i),
                                console.log(index)     
                                }} 
                              
                              >
                                <Card key={i} image={{ uri: ("https://weedingplanner.herokuapp.com/" + u.img.slice(2)) }}
                                	containerStyle={{ width: 150, height: 220}}  >
                                      <Text style={{marginBottom: 10}} style={styles.card} > {u.type_service}</Text>
                                </Card>
                              </TouchableOpacity>
                            )
                            })}
                </View>
                
              </ScrollView>
            </ScrollView>
            
        </View>

            

                  <Overlay
                    isVisible={modalVisible}
                    onBackdropPress={ () => setModalVisible(false) }
                    windowBackgroundColor="rgba(0, 0, 0, .4)"
                    overlayBackgroundColor="#F5F8FB"
                    width="90%" height="75%"
                  >
                    <View style={{flex:1, alignItems:'center', marginTop:40}}>
                         
                          <Input
                            containerStyle={{marginTop:15}}
                            placeholder='Montant'
                            label='Montant'
                            onChangeText={(val) => setMontant(val)}
                          />  
                            <View style={{flex:1 ,margin: 10}}>
                              <Text style={{marginTop: 10, color: '#636e72', fontWeight: 'bold', fontSize: 16}}>Date du mariage</Text>
                                <DatePicker
                                style={{width: 200, marginTop: 10}}
                                date={date}
                                mode="date"
                                placeholder="Sélectionner une date"
                                format="MM-DD-YYYY"
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


                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                      <Button
                        title="Ajouter un payement"
                        buttonStyle={{backgroundColor:'#FAEBE4', marginTop: 15}}
                        titleStyle={{color:"#31AE89"}}
                        onPress={ () => {
                            addBudget()
                            setModalVisible( false );
                        } }
                      />
                      <View style={{padding:10}}/>
                      <Button
                        title="Annuler"
                        buttonStyle={{backgroundColor:'#FAEBE4', marginTop: 15, borderColor: 'grey'}}
                        titleStyle={{color:"#31AE89"}}
                        onPress={ () => {
                            setModalVisible( false );
                        } }
                      />
							     </View>

                  </View>
                  </Overlay>

     </View>

  )


  } else {
    return (
      <AddBudget nom='Mon Budget'/>
    )
  }

  };
  const styles = StyleSheet.create({
    titleView: {
      fontFamily:'catamaran-regular', 
      color: '#fff',
      alignSelf:'center',
      alignItems: 'center',
    },
    description: {
      fontFamily:'catamaran-semibold',
      fontSize:17,
      lineHeight: 28,
    },
    input:{
      marginTop:10,
    },
   card:{
    fontFamily:'greatvibes',
    fontSize: 21,
    alignSelf:'center',
    alignItems: 'center'
    
   }
  });



