import React,{useState} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ScrollView, Image } from 'react-native';
import { Icon, ListItem, Card, Header} from 'react-native-elements';
import HeaderNav from '../HeaderNav';
import {connect} from 'react-redux';



export default function Prestataires({navigation}) {
  const [modifier,setModifier]=useState(false)
  const [prestataire,setPrestataire]=useState(0)
 
// PRESTATAIRES PAGE ATTENTION

  

  
  
  return (
    
     <View style={{flex:1}} >

       <HeaderNav nom='Prestataires'/> 

       
          <View style={{flex:1, backgroundColor:'#FFF'}}  >



            <ScrollView  stickyHeaderIndices={[8]} style={{marginBottom: 10, marginTop:5}} >
             
                <View style={{flex: 1, flexDirection: 'row', marginTop: 0}}>

                        <Card  containerStyle={{padding: 0, marginLeft:13}}>
                          <View >
                            <Image 
                              resizeMode="cover"
                              source={require('../../assets/lieuxmariage.jpg')} style={{width: 150, height: 150}}
                            />
                            <Text style={{marginBottom: 10}} style={styles.card} >Lieux </Text>
                          </View>
                        </Card>
                        <Card  containerStyle={{padding: 0, marginLeft:13}}>
                          <View >
                            <Image 
                              resizeMode="cover"
                              source={require('../../assets/traiteurmariage.jpg')}style={{width: 150, height: 150}}
                            />
                            <Text style={{marginBottom: 10}} style={styles.card} > Traîteur </Text>
                          </View>
                        </Card>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>

                        <Card  containerStyle={{padding: 0, marginLeft:13}}>
                          <View >
                            <Image 
                              resizeMode="cover"
                              source={require('../../assets/photomariage.jpeg')} style={{width: 150, height: 150}}
                            />
                            <Text style={{marginBottom: 10}} style={styles.card} >Photographe </Text>
                          </View>
                        </Card>

                        <Card  containerStyle={{padding: 0, marginLeft:13}}>
                          <View >
                            <Image 
                              resizeMode="cover"
                              source={require('../../assets/weddingparty.jpeg')} style={{width: 150, height: 150}}
                            />
                          <Text style={{marginBottom: 10}} style={styles.card} >Animation </Text>
                          </View>
                        </Card>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>

                    <Card  containerStyle={{padding: 0, marginLeft:13}}>
                      <View >
                        <Image 
                          resizeMode="cover"
                          source={require('../../assets/robe.jpg')} style={{width: 150, height: 150}}
                        />
                      <Text style={{marginBottom: 10}} style={styles.card} >Robe </Text>
                      </View>
                    </Card>

                    <Card  containerStyle={{padding: 0, marginLeft:13}}>
                      <View >
                        <Image 
                          resizeMode="cover"
                          source={require('../../assets/decoration.jpeg')} style={{width: 150, height: 150}}
                        />
                      <Text style={{marginBottom: 10}} style={styles.card} > Déco </Text>
                      </View>
                    </Card>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>

                    <Card  containerStyle={{padding: 0, marginLeft:13}}>
                      <View >
                        <Image 
                          resizeMode="cover"
                          source={require('../../assets/gateuxmariage.jpg')} style={{width: 150, height: 150}}
                        />
                        <Text style={{marginBottom: 10}} style={styles.card} >Patisserie</Text>
                      </View>
                    </Card>

                    <Card  containerStyle={{padding: 0, marginLeft:13}}>
                      <View >
                        <Image 
                          resizeMode="cover"
                          source={require('../../assets/bijoux.jpg')} style={{width: 150, height: 150}}
                        />
                      <Text style={{marginBottom: 10}} style={styles.card} >Bijoux {"\n"}(900€)</Text>
                      </View>
                    </Card>
                </View>
              
            </ScrollView>
            
            
          </View>
            

     </View>
  )


  

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
    marginTop:3,
    fontFamily:'greatvibes',
    fontSize: 21,
    alignSelf:'center',
    alignItems: 'center',
   }
  });



