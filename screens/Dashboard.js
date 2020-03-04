import React,{useState} from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import { Avatar,Header, ListItem, Icon}  from 'react-native-elements';
import * as Progress from 'react-native-progress';
// import IconAntDesign from 'react-native-vector-icons/AntDesign';
import HeaderNav from './HeaderNav';


export default function Dashboard({navigation}) {
    return (
      
      
        <View style={{flex:1}}> 
          <HeaderNav nom='Mon Mariage'/> 
          

            <ImageBackground  source={require('../assets/mariagefondecran.jpg')} style={{flex:1}}>
              
            
              <Text style={{color: 'white', fontFamily:'greatvibes' ,fontSize: 25,marginLeft: 75, marginTop: 140}}> Janet &John</Text>
              <Text style={{color: 'white', fontFamily:'greatvibes',fontSize: 15,marginLeft: 80, marginTop: 5}} >23/08/2020</Text>

            </ImageBackground>
      
                <View style={{flex: 0.2, backgroundColor: '#FAEBE4' }}>
                  <Text h4 style={{ textAlign:'center',fontWeight: 'bold', fontFamily:'greatvibes'}} style={styles.container} > 200 jours 11 Heures 37 min 34 s</Text>
                </View>


              <View  style={{flex:1 , marginBottom: 10, marginBottom: 30}}>
              
    

                        <ListItem key={1}
                        
                        
                        rightAvatar={ <Icon name='list' type='materialIcons' color='#31AE89'  size={35}/>}
                        title='Avancement des tâches (20 sur10)'
                        titleStyle={styles.titleView}
                        subtitle={
                          <View style={styles.subtitleView}>
                            <Progress.Bar progress={0.1} width={200} color={'#31AE89'}  /> 
                          </View>
                        }
                       
                         bottomDivider
                        />
   
                        <ListItem key={2}
                        
                        rightAvatar={ <Icon name='playlist-add' type='materialIcons' color='#31AE89' size={35}/>}
                        title='Choix des prestataires (3 sur10)'
                        titleStyle={styles.titleView}
                        subtitle={
                          <View style={styles.subtitleView}>
                            <Progress.Bar progress={0.3} width={200} color={'#31AE89'}  /> 
                          </View>
                        }
                       
                         bottomDivider

                        />
                    

                        <ListItem key={3}
                        
                        rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35}/>}
                        title='Listes des invités (30 sur 150)'
                        titleStyle={styles.titleView}
                        subtitle={
                          <View style={styles.subtitleView}>
                            <Progress.Bar progress={0.3} width={200} color={'#31AE89'} /> 
                          </View>
                        }
       
                        bottomDivider
                        />
                        
                        
                         <ListItem key={4}
    
                          rightAvatar={ <Icon name='euro-symbol' type='materialIcons' color='#31AE89'  size={35}/>}
                          title='Budget(1000€ sur 30000€)'
                          titleStyle={styles.titleView}
                          subtitle={
                            <View style={styles.subtitleView}>
                              <Progress.Bar progress={0.3} width={200} color={'#31AE89'} /> 
                            </View>
                          }
                        
                         
                        />

               </View>
                          
                      
                          
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
      }
    });



