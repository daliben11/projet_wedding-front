import React,{useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,ScrollView} from 'react-native';
import { Avatar, Icon, ListItem, Input,Header} from 'react-native-elements';
import HeaderNav from '../HeaderNav';
import * as Progress from 'react-native-progress';
import AddGuest from './AddGuest';


export default function Guest({navigation}) {
  const [modifier,setModifier]=useState(false)
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [birthday, setBirthday]=useState('')
  const [phone, setPhone]=useState('')
  const [mail,setMail]=useState('')
  const [adresse,setAdresse]=useState('')
  const [ville,setVille]=useState('')
  const [codeP,setCodeP]=useState('')
  const [guest, setGuest]=useState([ 
    {name:'bob'},
    {name:'danny'},
    {name:'jon'},
    {name:'billy'},
    
]);

  




if (modifier===false) {
  
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

                  {guest.map((ng,i)=>{ 
                      return( 
                       
                      <ListItem key={i}
                      
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25} onPress={()=> { 
                          console.log(i);
                          let newGuest = [...guest];
                          newGuest.splice(i , 1);
                          setGuest(newGuest);
                        } }
                        />
                      }
                        title={ng.name}
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
                    <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center'}}   >
                        <Text style={{ fontFamily:'catamaran-semibold', fontSize:15}}>Ajouter un invité</Text>
                        <Icon containerStyle={{paddingLeft: 5}} name='add' type='materialIcons' color='grey'  onPress={()=> navigation.navigate('AddGuest')}
                        />
                        {/* rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35}/>} */}
                    </TouchableOpacity>
                  
                 </View>


   </View>
  )
 

} else {
  return (
    <AddGuest nom='Invites'/>
  )
}
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



