import React,{useState} from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import { Avatar,Header, ListItem, Icon}  from 'react-native-elements';
import Timeline from 'react-native-timeline-flatlist';
import HeaderNav from '../HeaderNav';




export default function Guestprogramme( props ) {

  const data = [
      {time: '15:00', title: 'Début de la cérémonie', description: 'Dress code: caraibe style !'},
      {time: '20:00', title: 'Dîner', description: 'Tu seras à la table Camomille'},
      {time: '21:00', title: 'Party time', description: 'Echauffe bien tes genoux!!'},  
    ];
  
  return (
      
        

    <View style={{flex:1}}> 
    
       <HeaderNav nom='Programme'/>

          <View style={{flex:1}}>
              <ImageBackground  style={{flex:1}} source={require('../../assets/mariagefondecran.jpg')} >
                  
              <Text  style={{color: 'white', fontFamily:'greatvibes' ,fontSize: 25,marginLeft: 95, marginBottom: 5, marginTop: 120}}>    
                   'Janet & John '
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
            </View>

             <View >
              <View style={{ backgroundColor: '#FAEBE4' }}>
                  <Text  h4
                    style={styles.container} > 
                    200 jours 11 Heures 37 min 34 s
                  </Text>
              </View>
             </View>

        <Text h4 
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



