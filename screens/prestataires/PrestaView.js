import React,{useState} from 'react';
//import {connect} from 'react-redux';

import { StyleSheet, View, Text, ImageBackground,TouchableOpacity , Dimensions, ScrollView } from 'react-native';
import { Icon, ListItem, Card, Header, Avatar, Input} from 'react-native-elements';

import HeaderNav from '../HeaderNav';





export default function PrestaView( props ) {

  const prestataire =  props.navigation.state.params.params.presta;
  

	//setPrestataire( props.navigation.state.params );
  console.log('presta ici ', prestataire);
  
  return (
    
     <View style={{flex:1, backgroundColor:'#fff'}} >

       <HeaderNav nom='Prestataires'/> 

						<ImageBackground style={{flex:0.9}}
							source={{ uri: ("https://weedingplanner.herokuapp.com/" + prestataire.img.slice(2)) }} /> 

            <View  style={{flex: 0.25, flexDirection: 'row', alignSelf:'center'}} >
		          <Text style={styles.titleView} >
		          	Comme chez-soi{/*prestataire.company_name*/}
		          </Text>
            </View>
			 
             

            <ListItem key={1}
	            leftIcon={ <Icon name='location' type='evilicon' color='#31AE89' size={25}/>}
	            title="13 rue de la Vie, Paris" 
	          />{/*prestataire.address*/}

	          <ListItem key={2}
	               leftIcon={ <Icon name='contact-mail' type='materialcommunityicon' color='#31AE89' size={25}/>}
	               title="06 12 34 56 78"
	           />{/*prestataire.phone_number*/}

	          <ListItem key={3}
	               leftIcon={ <Icon name='user' type='font-awesome'  color='#31AE89' size={25}/>}
	               title="Mme Pinaud"
	               bottomDivider
	           />{/*prestataire.contact_name*/} 

                
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



