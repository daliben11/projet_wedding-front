import React,{useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,ScrollView} from 'react-native';
import { Avatar, Icon, ListItem, Input,Header, Button, Overlay} from 'react-native-elements';
import HeaderNav from '../HeaderNav';
import * as Progress from 'react-native-progress';
import AddGuest from './AddGuest';


export default function Guest({navigation}) {


  const [modifier,setModifier]=useState(false)
  const [modalVisible, setModalVisible] = useState( false );
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [email,setEmail]=useState('')
  const [guest, setGuest]=useState([]);
  const [listGuest, setListGuest]=useState([]);



  useEffect( () => { 
  
	  async function  etatGuest(){
  
		var dataGuest = await fetch('https://weedingplanner.herokuapp.com/guests', {
  
		  method: 'POST',
		  headers: {'Content-Type':'application/x-www-form-urlencoded'},
		  body: `id=5e67be5ac820c000174ee417`
		  });
		
		  var currentlistGuest = await dataGuest.json();
     
     
      
      setListGuest(currentlistGuest.weddingParticipants)
      console.log("hollaaaa", currentlistGuest ) 
		}
 
    
    etatGuest()
    
	},[modalVisible]);




    var  addGuestFunction = async (a, b, c) => {

      var dataGuest = await fetch('https://weedingplanner.herokuapp.com/addGuests',{

      method: 'POST',
		  headers: {'Content-Type':'application/x-www-form-urlencoded'},
		  body: `id=5e67be5ac820c000174ee417&nom=${a}&prenom=${b}&email=${c}`
      });

      var newGuest = await dataGuest.json()
      setListGuest(newGuest.weddingParticipants)

      console.log("new", newGuest)
      


    }


  return (
    
  <View style={{backgroundColor:"#fff",flex:1}} >


      <HeaderNav nom='Invités'/> 
         <ListItem 
        
            rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35} onPress={()=> navigation.navigate('AddGuest')}
            />
            }

            title='Listes des invités (30 sur 150)'
            subtitle={
            <View>
            <Progress.Bar progress={0.3} width={250} height={15} color={'#31AE89'}  />
            </View>
            }
          />


            <View style={{flex:1}} >

                
             <ScrollView>
                  <View>

                  {listGuest.map((g, i)=>{ 
                    console.log("okkk", listGuest)
                      return( 
                       
                      <ListItem key={i}
                      
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25} onPress={()=> { 
                          console.log(i);
                          let deleteGuest = [...guest];
                          deleteGuest.splice(i , 1);
                          setListGuest(deleteGuest);
                        } }
                        />
                      }
                        title={`${g.nom} ${g.prenom}`}
                        subtitle={g.email}
                        

                        titleStyle={styles.titleView}
                        bottomDivider
                      />
                     
                     )
                    })}

                  </View>
             </ScrollView>

            </View>

                 <View 
                    style={{
                      width:'100%',
                      height: 50,
                      padding: 5,
                      backgroundColor: '#FAEBE4', 
                      flexDirection: 'row', alignItems: 'center', justifyContent:'center', 
                    }}>
                    <TouchableOpacity 
                    onPress={ () => setModalVisible( true ) }style={{flex:1, flexDirection:'row', justifyContent:'center'}}   >
                        <Text style={{ fontFamily:'catamaran-semibold', fontSize:15}}>Ajouter un invité</Text>
                        <Icon containerStyle={{paddingLeft: 5}} name='add' type='materialIcons' color='grey' 
                        
                        />
                        {/* rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35}/>} */}
                    </TouchableOpacity>
                  
                 </View>

				
                        <Overlay
                            isVisible={modalVisible}
                            onBackdropPress={ () => setModalVisible(false) }
                            windowBackgroundColor="rgba(0, 0, 0, .4)"
                            overlayBackgroundColor="rgba(255, 255, 255, 1)"
                            width="90%" height="75%"
                            >
                          <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Input
                                containerStyle={styles.input}
                                label='Nom'
                                placeholder="Jean"
                                // value={codeMariage}
                                onChangeText={ (val) => setNom(val) }
                                style={styles.input} 
                            />
                             <Input
                                containerStyle={styles.input}
                                label='Prenom'
                                placeholder="Neymar"
                                // value={codeMariage}
                                onChangeText={ (val) => setPrenom(val) }
                                style={styles.input} 
                            />
                               <Input
                                containerStyle={styles.input}
                                label='Email'
                                placeholder="jean-neymar@psg.com"
                                // value={codeMariage}
                                onChangeText={ (val) => setEmail(val) }
                                style={styles.input} 
                            />
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                              <Button
                                title="Valider invité"
                                buttonStyle={{backgroundColor:'#FAEBE4', marginTop: 15, }}
                                titleStyle={{color:"#31AE89"}}
                                onPress={ () => {
                                  addGuestFunction(nom, prenom, email);
                                  setModalVisible( false );
                                  
                                  

                               

                              } }
                            />
                            <View style={{padding:10}}/>
                            <Button
                                title="Annuler"
                                buttonStyle={{backgroundColor:'#FAEBE4', marginTop: 15, borderRadius: 5, border:'#000', borderWidth: 0.3 }}
                                titleStyle={{color:"#31AE89"}}
                                onPress={ () => {
                                  setModalVisible( false );
                              } }
                            />
                          </View></View>
                        </Overlay>


  </View>
)
 

};

  const styles = StyleSheet.create({
   
    description: {
      fontFamily:'catamaran-semibold',
      fontSize:17,
      lineHeight: 28,
    },
    input:{
      marginTop:10,
    },
    progressBar: {
     
      height: 20,
      width: '90%',
      backgroundColor: 'white',
      borderColor: '#000',
      borderWidth: 1,
      borderRadius: 5
    },
    titleView: {
      fontFamily:'catamaran-regular',
      fontWeight:'bold', 
      alignSelf:'flex-start', 
      paddingTop: 10,
      fontSize: 14,
    }
  

  });



