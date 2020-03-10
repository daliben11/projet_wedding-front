import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';

import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import { Avatar,Header, ListItem, Icon}  from 'react-native-elements';

import * as Progress from 'react-native-progress';
// import IconAntDesign from 'react-native-vector-icons/AntDesign';

import HeaderNav from './HeaderNav';
import MesMariagesScreen from '../screens/mesmariages/MesMariagesScreen'


function Dashboard( props ) {
console.log( "je suis dans dashboard " );

//		useEffect(() => {
//		props.setJustCreateWedding( false );
//	},[]);



    return (
      
      
        <View style={{flex:1}}> 

          <HeaderNav nom='Mon Mariage'/> 
          

            <ImageBackground  source={require('../assets/bougiewedding.jpg')} style={{flex:1}}>
              
            <Text style={{color: 'white', fontFamily:'greatvibes' ,fontSize: 30,textAlign: 'center',
                color: 'white', 
                fontFamily:'greatvibes', 
                fontSize: 30, 
                marginTop: 20,
             }}> 
            	Janet & John 
            </Text>
            <Text 
            	style={{
            		color: 'white', 
            		fontFamily:'greatvibes', 
                fontSize: 20, 
                textAlign: 'center',
              }} >
              23/08/2020
            </Text>

            </ImageBackground>
            
            <View style={{backgroundColor: '#FAEBE4' , height:45, alignItems:'center', justifyContent:'center'}}>
              <Text style={styles.container} > 200 jours 11 Heures 37 min 34 s </Text> 
            </View>
                

                


            <View style={{flex:1 }}>
              
              <ScrollView  style={{flex:1}} >

                	<ListItem  style={{flex:1}}
                		onPress={ ()=>{ props.navigation.navigate('Tasks') } }
                    rightAvatar={ <Icon name='list' type='materialIcons' color='#31AE89'  size={35} />}
                    title='Avancement des tâches (20 sur10)'
                    titleStyle={styles.titleView}
                    subtitle={
                      <View style={styles.subtitleView}>
                        <Progress.Bar progress={0.1} width={200} color={'#31AE89'}  /> 
                      </View>
                    }
                    bottomDivider
                  />
   
                  <ListItem style={{flex:1}} 
                  	onPress={ ()=>{ props.navigation.navigate('Prestations') } }
			              rightAvatar={ <Icon name='playlist-add' type='materialIcons' color='#31AE89' size={35}  />}
			              title='Choix des prestataires (3 sur10)'
			              titleStyle={styles.titleView}
			              subtitle={
			                <View style={styles.subtitleView}>
			                  <Progress.Bar progress={0.3} width={200} color={'#31AE89'}  /> 
			                </View>
			              }
                 		bottomDivider
									/>
                    

                  <ListItem  style={{flex:1}} 
                  	onPress={ ()=>{ props.navigation.navigate('Invites') } }
		                rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35} />}
		                title='Listes des invités (30 sur 150)'
		                titleStyle={styles.titleView}
		                subtitle={
		                  <View style={styles.subtitleView}>
		                    <Progress.Bar progress={0.3} width={200} color={'#31AE89'} /> 
		                  </View>
		                }
	 
		                bottomDivider
                  />
                        
                        
									<ListItem  style={{flex:1}}
										onPress={ ()=>{ props.navigation.navigate('Budget') } }
										rightAvatar={ <Icon name='euro-symbol' type='materialIcons' color='#31AE89'  size={35} />}
										title='Budget(1000€ sur 30000€)'
										titleStyle={styles.titleView}
										subtitle={
											<View style={styles.subtitleView}>
												<Progress.Bar progress={0.3} width={200} color={'#31AE89'} /> 
											</View>
										}
									/>
                
              </ScrollView>

            </View>
                   
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
   
    fontFamily:'greatvibes',
    fontSize: 21,
   
    
  },
  titleView: {
    fontFamily:'catamaran-regular',
    fontWeight:'bold', 
    alignSelf:'center', 
    paddingTop: 10,
    fontSize: 14,
  },
  subtitleView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingLeft: 15,
    paddingTop: 5
  },
  ratingText: {
    paddingLeft: 10,
    paddingRight: 10,
    color: 'grey'
  },
  interSpace:{
    paddingLeft: 30,
  },
  contentContainer: {
    paddingVertical: 20
  }
});



function mapDispatchToProps(dispatch) {
  return {
		setJustCreateWedding: function ( val ) {
			 dispatch( {type: 'setJustCreateWedding', justCreate: val } )
		}
  }
}

export default connect(
  null, 
  mapDispatchToProps
)( Dashboard );

