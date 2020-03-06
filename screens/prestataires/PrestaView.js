import React,{useState} from 'react';
import { StyleSheet, View, Text, ImageBackground,TouchableOpacity , Dimensions, ScrollView } from 'react-native';
import { Icon, ListItem, Card, Header, Avatar, Input} from 'react-native-elements';
import HeaderNav from '../HeaderNav';
import {connect} from 'react-redux';




export default function PrestaView({navigation}) {

  const [modifier,setModifier]=useState(false)
  const [prestataire,setPrestataire]=useState(0)
 
  

  
  
  return (
    
     <View style={{flex:1, backgroundColor:'#fff'}} >

       <HeaderNav nom='Prestataires'/> 

        <ImageBackground  source={require('../../assets/prestataire.jpeg')} style={{flex:1}}/> 

            <View  style={{flex: 0.4, flexDirection: 'row',  alignSelf:'center', alignItems: 'center',}} >
            <Text style={styles.titleView} >Passion Events</Text>
            </View>

             

             <ListItem key={1}
                        leftIcon={ <Icon name='location' type='evilicon' color='#31AE89' size={25}/>}
                        title='24, av. de la Marne Paris 12e'
                      />
   
                      <ListItem key={2}
                           leftIcon={ <Icon name='contact-mail' type='materialcommunityicon' color='#31AE89' size={25}/>}
                           title='01 43 24 05 84'
                       />
   
                       <ListItem key={3}
                           leftIcon={ <Icon name='euro-symbol' type='materialIcons'  color='#31AE89' size={25}/>}
                           title='Brad & Angelina'
                            bottomDivider
   
                       />

                      
                          <ScrollView contentContainerStyle={styles.contentContainer}  style={{flex:1}}  >
                       
                           <ListItem key={1}
                            title='Historique de paiements'
                            titleStyle={{fontSize: 15}} 
                            subtitle={
                              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                              <Text style={{alignSelf:'flex-start'}}>10/02/2020</Text>
                                <View >
                                  <Text >1349 €</Text>
                                </View>
                              </View>
                            }
                           />
   
                           <ListItem  key={2}
                            subtitle={
                              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                              <Text style={{alignSelf:'flex-start'}}>10/02/2020</Text>
                                <View >
                                  <Text >1349 €</Text>
                                </View>
                              </View>
                            }
                           />

                             <ListItem  key={3}
                             subtitle={
                              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                              <Text style={{alignSelf:'flex-start'}}>10/02/2020</Text>
                                <View >
                                  <Text >1349 €</Text>
                                </View>
                              </View>
                              }
                             />

                             <ListItem  key={4}
                              subtitle={
                             <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                              <Text style={{alignSelf:'flex-start'}}>10/02/2020</Text>
                                <View >
                                  <Text >1349 €</Text>
                                </View>
                              </View>
                            }
                            />

                              <ListItem  key={5}
                              subtitle={
                              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                              <Text style={{alignSelf:'flex-start'}}>10/02/2020</Text>
                                <View >
                                  <Text >1349 €</Text>
                                </View>
                              </View>
                             }

                            />
                             <ListItem  key={6}
                              subtitle={
                              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                              <Text style={{alignSelf:'flex-start'}}>10/02/2020</Text>
                                <View >
                                  <Text >1349 €</Text>
                                </View>
                              </View>
                              }
                              />
                         
                           </ScrollView>
                          
                          

                                <View 
                                  style={{
                                    width:'100%', height:'auto',
                                    padding: 5,
                                    backgroundColor: '#FAEBE4', 
                                    flexDirection: 'row', alignItems: 'center', justifyContent:'center', 
                                  }}>
                                  <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center'}}  
                                    onPress={() => {setModifier(true)}}>
                                      <Text style={{ fontFamily:'catamaran-semibold', fontSize:20}}>Editer mes infos</Text>
                                      <Icon containerStyle={{paddingLeft: 5}} name='add' type='materialIcons' color='grey' />
                                      {/* rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35}/>} */}
                                  </TouchableOpacity>
                                
                                </View>
             
            
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
   
   titleView: {
     fontFamily:'catamaran-regular', 
     fontWeight:'500',
     fontSize: 25,
     alignSelf:'flex-start', 
  
  },
  ratingText: {
		paddingLeft: 10,
		paddingRight: 10,
		color: 'grey'
  },
    contentContainer: {
      paddingVertical: 20
    }
  });



