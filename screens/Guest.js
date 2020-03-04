import React,{useState} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ScrollView } from 'react-native';
import { Avatar, Icon, ListItem, Input,Header} from 'react-native-elements';
import HeaderNav from './HeaderNav';
import * as Progress from 'react-native-progress';

export default function ProfileUser({navigation}) {
  const [modifier,setModifier]=useState(false)
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [birthday, setBirthday]=useState('')
  const [phone, setPhone]=useState('')
  const [mail,setMail]=useState('')
  const [adresse,setAdresse]=useState('')
  const [ville,setVille]=useState('')
  const [codeP,setCodeP]=useState('')
  
if (modifier===false) {
  console.log("test1",codeP)
  
  return (
    
    <View style={{backgroundColor:"#fff",flex:1}} >
      
      <HeaderNav nom='Invités'/> 

  

      <ListItem 
                        
                        rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35}/>}
                        title='Listes des invités (30 sur 150)'
                        subtitle={
                          <View>
                            <Progress.Bar progress={0.3} width={250} height={15} color={'#31AE89'}  />
                          </View>
                        }
       
                      
                        />
      
              <View style={{flex:1}} >

                
<         ScrollView>

                       <ListItem key={1}
                        
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25}/>}
                        title='Neymar'
                        titleStyle={styles.titleView}
                      
                       
                         bottomDivider

                        />

                      <ListItem key={2}
                        
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25}/>}
                        title='Pnl'
                        titleStyle={styles.titleView}
                      
                       
                         bottomDivider

                        />
                           <ListItem key={3}
                        
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25}/>}
                        title='Brad & Angelina'
                        titleStyle={styles.titleView}
                      
                       
                         bottomDivider

                        />
                           <ListItem key={4}
                        
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25}/>}
                        title='John Wayne'
                        titleStyle={styles.titleView}
                        
                       
                         bottomDivider

                        />
                           <ListItem key={5}
                        
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25}/>}
                        title='Corona Virus'
                        titleStyle={styles.titleView}
                       
                       
                         bottomDivider

                        />

                        <ListItem key={6}
                        
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25}/>}
                        title='Neymar'
                        titleStyle={styles.titleView}
                     
                       
                         bottomDivider

                        />

                      <ListItem key={7}
                        
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25}/>}
                        title='Pnl'
                        titleStyle={styles.titleView}
                       
                       
                         bottomDivider

                        />
                           <ListItem key={8}
                        
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25}/>}
                        title='Brad & Angelina'
                        titleStyle={styles.titleView}
                    
                       
                         bottomDivider

                        />
                           <ListItem key={9}
                        
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25}/>}
                        title='John Wayne'
                        titleStyle={styles.titleView}
                      
                       
                         bottomDivider

                        />
                           <ListItem key={10}
                        
                        rightAvatar={ <Icon name='trash-2' type='feather' color='#31AE89' size={25}/>}
                        title='Corona Virus'
                        titleStyle={styles.titleView}
                    
                       
                         bottomDivider

                        />

          </ScrollView>


       </View>
          <View 
            style={{
              width:'100%', height:'auto',
              padding: 5,
              backgroundColor: '#FAEBE4', 
              flexDirection: 'row', alignItems: 'center', justifyContent:'center', 
            }}>
            <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center'}}  onPress={() => {setModifier(true)}}>
                <Text style={{ fontFamily:'catamaran-semibold', fontSize:20}}>Ajouter un invité</Text>
                <Icon containerStyle={{paddingLeft: 5}} name='add' type='materialIcons' color='grey' />
                {/* rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35}/>} */}
            </TouchableOpacity>
            
          </View>
    </View>

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
    },
  

  });



