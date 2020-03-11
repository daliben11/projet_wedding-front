import React,{useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity ,ScrollView } from 'react-native';
import {Card} from 'react-native-elements';
import HeaderNav from '../HeaderNav';
import {connect} from 'react-redux';



export default function Prestataires({navigation}) {
 


  const listePrestataire = [
    { name:'Lieux',img:require('../../assets/lieuxmariage.jpg')},
    { name:'Traiteur',img: require('../../assets/traiteurmariage.jpg') },
    { name:'Photographe',img: require('../../assets/photomariage.jpeg') },
    { name:'Animation',img: require('../../assets/weddingparty.jpeg' )},
    { name:'Robe',img:require('../../assets/robe.jpg')},
    { name:'Décorateur',img: require('../../assets/decoration.jpeg' )},
    { name:'Patisserie',img: require('../../assets/gateuxmariage.jpg') },
    { name:'Bijoux',img: require('../../assets/bijoux.jpg' )}];
// PRESTATAIRES PAGE ATTENTION

  

  
  
  return (
    
     <View style={{flex:1}} >

       <HeaderNav nom='Prestataires'/> 

       
          <View style={{flex:1, backgroundColor:'#FFF'}}  >



            <ScrollView   style={{ marginBottom: 10, marginTop:5}} stickyHeaderIndices={[8]}  >
             
                <View style={{flex:1,flexWrap: 'wrap', flexDirection: 'row',justifyContent: 'space-around'}} >
                    
                    {listePrestataire.map((u,i)=>{
                    return(
                        <TouchableOpacity>
                          <Card key={i} image={u.img} containerStyle={{ width: 150, height: 200}}  >
                                <Text style={{marginBottom: 10}} style={styles.card} > {u.name} </Text>
                          </Card>
                        </TouchableOpacity>
                      )
                      })}

               {/* <TouchableOpacity>
                        <Card  containerStyle={{padding: 0, marginLeft:13}}>
                          <View >
                            <Image 
                              resizeMode="cover"
                              source={require('../../assets/traiteurmariage.jpg')}style={{width: 150, height: 150}}
                            />
                            <Text style={{marginBottom: 10}} style={styles.card} > Traîteur </Text>
                          </View>
                        </Card>
                      </TouchableOpacity>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                      <TouchableOpacity>
                        <Card  containerStyle={{padding: 0, marginLeft:13}} >
                          <View >
                            <Image 
                              resizeMode="cover"
                              source={require('../../assets/photomariage.jpeg')} style={{width: 150, height: 150}}
                            />
                            <Text style={{marginBottom: 10}} style={styles.card} >Photographe </Text>
                          </View>
                        </Card>
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Card  containerStyle={{padding: 0, marginLeft:13}}>
                          <View >
                            <Image 
                              resizeMode="cover"
                              source={require('../../assets/weddingparty.jpeg')} style={{width: 150, height: 150}}
                            />
                          <Text style={{marginBottom: 10}} style={styles.card} >Animation </Text>
                          </View>
                        </Card>
                      </TouchableOpacity>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <Card  containerStyle={{padding: 0, marginLeft:13}}>
                      <View >
                        <Image 
                          resizeMode="cover"
                          source={require('../../assets/robe.jpg')} style={{width: 150, height: 150}}
                        />
                      <Text style={{marginBottom: 10}} style={styles.card} >Robe </Text>
                      </View>
                    </Card>
                  </TouchableOpacity>
                    
                  <TouchableOpacity>
                    <Card  containerStyle={{padding: 0, marginLeft:13}}>
                      <View >
                        <Image 
                          resizeMode="cover"
                          source={require('../../assets/decoration.jpeg')} style={{width: 150, height: 150}}
                        />
                      <Text style={{marginBottom: 10}} style={styles.card} > Déco </Text>
                      </View>
                    </Card>
                  </TouchableOpacity>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                   <TouchableOpacity>
                    <Card  containerStyle={{padding: 0, marginLeft:13}}>
                      <View >
                        <Image 
                          resizeMode="cover"
                          source={require('../../assets/gateuxmariage.jpg')} style={{width: 150, height: 150}}
                        />
                        <Text style={{marginBottom: 10}} style={styles.card} >Patisserie</Text>
                      </View>
                    </Card>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Card  containerStyle={{padding: 0, marginLeft:13}}>
                      <View >
                        <Image 
                          resizeMode="cover"
                          source={require('../../assets/bijoux.jpg')} style={{width: 150, height: 150}}
                        />
                      <Text style={{marginBottom: 10}} style={styles.card} >Bijoux </Text>
                      </View>
                    </Card>
                  </TouchableOpacity> */}
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



