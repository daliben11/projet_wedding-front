import React,{useState} from 'react';
import { StyleSheet, View, Text,TouchableOpacity,ScrollView, Image } from 'react-native';
import { Icon, ListItem, Card, Header} from 'react-native-elements';
import HeaderNav from '../HeaderNav';
import AddBudget from './AddBudget';
import {connect} from 'react-redux';
import * as Progress from 'react-native-progress';


export default function Budget({navigation}) {
  const [modifier,setModifier]=useState(false)
  const [budget,setBudget]=useState(0)
 


  
if (modifier===false) {
  
  
  return (
    
     <View style={{flex:1}} >

       <HeaderNav nom='Budget'/> 

       
          <View style={{flex:1}} >
                <View >
                  <ListItem 
                      rightAvatar={ <Icon name='euro-symbol' type='materialIcons' color='#31AE89'  size={35}/>}
                      title='Budget (1 000 € sur 30 000€)'
                      subtitle={
                    <View>
                      <Progress.Bar progress={0.3} width={250} height={15} color={'#31AE89'}  />
                    </View>
                    }
                  />

                 </View>
                    <View style={{flex: 1, flexDirection: 'row', marginBottom:40, marginLeft:15, marginRight:15, marginTop:10}}>
                    <View style={{flex: 1,width:50, height: 60, backgroundColor: '#31AE89'}}><Text style={styles.titleView}> Budget  {"\n"}12 000€</Text></View>
                    <Text>       </Text>   
                    <View style={{flex: 1 , width: 50, height: 60, backgroundColor: '#31AE89'}}><Text style={styles.titleView}> Montant payé {"\n"}      10 000€</Text></View>
                 </View>
           
            <ScrollView  stickyHeaderIndices={[8]} style={{marginBottom: 10, marginTop:30}} >
              <ScrollView >
                <View style={{flex: 1, flexDirection: 'row', marginTop: 0}}>

                        <Card  containerStyle={{padding: 0, marginLeft:13}}>
                          <View >
                            <Image 
                              resizeMode="cover"
                              source={require('../../assets/lieuxmariage.jpg')} style={{width: 150, height: 150}}
                            />
                            <Text style={{marginBottom: 10}} style={styles.card} >Lieux {"\n"}(1000 €) </Text>
                          </View>
                        </Card>
                        <Card  containerStyle={{padding: 0, marginLeft:13}}>
                          <View >
                            <Image 
                              resizeMode="cover"
                              source={require('../../assets/traiteurmariage.jpg')}style={{width: 150, height: 150}}
                            />
                            <Text style={{marginBottom: 10}} style={styles.card} > Traîteur  {"\n"} (900 €) </Text>
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
                            <Text style={{marginBottom: 10}} style={styles.card} >Photographe{"\n"} (500€) </Text>
                          </View>
                        </Card>

                        <Card  containerStyle={{padding: 0, marginLeft:13}}>
                          <View >
                            <Image 
                              resizeMode="cover"
                              source={require('../../assets/weddingparty.jpeg')} style={{width: 150, height: 150}}
                            />
                          <Text style={{marginBottom: 10}} style={styles.card} >Animation {"\n"}(1000€)</Text>
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
                      <Text style={{marginBottom: 10}} style={styles.card} >Robe {"\n"}(700€) </Text>
                      </View>
                    </Card>

                    <Card  containerStyle={{padding: 0, marginLeft:13}}>
                      <View >
                        <Image 
                          resizeMode="cover"
                          source={require('../../assets/decoration.jpeg')} style={{width: 150, height: 150}}
                        />
                      <Text style={{marginBottom: 10}} style={styles.card} > Déco {"\n"}(1200€) </Text>
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
                        <Text style={{marginBottom: 10}} style={styles.card} >Patisserie {"\n"}(350€)</Text>
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
            </ScrollView>
            
        </View>

                 <View 
                    style={{
                      width:'100%', height:'auto',
                      padding: 5,
                      backgroundColor: '#FAEBE4', 
                      flexDirection: 'row', alignItems: 'center', justifyContent:'center', 
                    }}>
                    <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center'}}   >
                        <Text style={{ fontFamily:'catamaran-semibold', fontSize:15}}>Ajouter une nouvelle dépense</Text>
                        <Icon containerStyle={{paddingLeft: 5}} name='add' type='materialIcons' color='grey' />
                        {/* rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35}/>} */}
                    </TouchableOpacity>
                  </View>


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
    marginTop:3,
    fontFamily:'greatvibes',
    fontSize: 21,
    alignSelf:'center',
    alignItems: 'center',
   }
  });



