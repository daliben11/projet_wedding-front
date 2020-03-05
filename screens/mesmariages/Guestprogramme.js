import React,{useState} from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import { Avatar,Header, ListItem, Icon}  from 'react-native-elements';
import Timeline from 'react-native-timeline-flatlist';




export default function Guestprogramme( props ) {

  const data = [
      {time: '15:00', title: 'Début de la cérémonie', description: 'Dress code: caraibe style !'},
      {time: '20:00', title: 'Dîner', description: 'Tu seras à la table Camomille'},
      {time: '21:00', title: 'Party time', description: 'Echauffe bien tes genoux!!'},  
    ];
  
  return (
      
        

    <View style={{flex:1, marginTop: 39}}> 

        <ImageBackground  source={require('../../assets/mariagefondecran.jpg')} style={{flex:1.3}}>
            
            <Text style={{color: 'white', fontFamily:'greatvibes' ,fontSize: 25,marginLeft: 95, marginTop: 170}}> 
            	Janet & John
            </Text>
            <Text 
            	style={{
            		color: 'white', 
            		fontFamily:'greatvibes', 
            		fontSize: 20, 
            		marginBottom: 20, 
            		marginRight: 95, 
            		marginLeft: 95}} >
            	23/08/2020
            </Text>

        </ImageBackground>
        
        <View style={{flex: 0.3, backgroundColor: '#FAEBE4' }}>
            <Text h4 
            	style={{ textAlign:'center',fontWeight: 'bold', fontFamily:'greatvibes'}} 
            	style={styles.container} > 
            	200 jours 11 Heures 37 min 34 s
            </Text>
        </View>

        <Text h4 
        	style={{textAlign:'center', fontFamily:'greatvibes',fontWeight: 'bold'}}  
        	style={styles.container} >
        	Hello cher Etienne.
        	Nous avons la joie et le plaisir de vous convier à notre mariage qui aura lieu au domaine du Morlais en Ardèche le 23/08/2020.
        </Text>

        
        <ScrollView style={{flex:1}}>  

          <Timeline style={{marginTop : 15}}
            data={data}
          />

        </ScrollView>
                
    </View>
	);
}
    const styles = StyleSheet.create({
        container: {
         
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily:'greatvibes',
          fontSize: 21,
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
          marginBottom: 10,
          
        },
      });



