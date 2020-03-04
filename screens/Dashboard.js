import React,{useState} from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import { Avatar,Header, ListItem, Icon}  from 'react-native-elements';
import * as Progress from 'react-native-progress';
// import IconAntDesign from 'react-native-vector-icons/AntDesign';


export default function Dashboard({navigation}) {
    return (
      
      
        <View style={{flex:1}}> 
        
          <Header
                leftComponent={{ icon: 'menu', color: '#000' }}
                centerComponent={{ text: 'Mon recap ', style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } }}
                containerStyle={{
                    backgroundColor: '#FAEBE4',
                    height: 84,
                    
                }}
          />

     
            <ImageBackground  source={require('../assets/mariagefondecran.jpg')} style={{flex:1.3}}>
            
              <Text style={{color: 'white', fontFamily:'greatvibes' ,fontSize: 30,marginLeft: 110, marginTop: 190}}> Janet &John</Text>
              <Text style={{color: 'white', fontFamily:'greatvibes', fontSize: 20, marginBottom: 20, marginRight: 95, marginLeft: 100}} >23/08/2020</Text>

            </ImageBackground>
      
                <View style={{flex: 0.3, backgroundColor: '#FAEBE4' }}>
                  <Text h4 style={{ textAlign:'center',fontWeight: 'bold', fontFamily:'greatvibes'}} style={styles.container} > 200 jours 11 Heures 37 min 34 s</Text>
                </View>


              <ScrollView  style={{flex:3, marginTop: 15}}>
              
    

                        <ListItem key={1}
                        
                        
                        rightAvatar={ <Icon name='list' type='materialIcons' color='black'  size={45}/>}
                        title='Avancement des tâches (20 sur10)'
                        titleStyle={styles.titleView}
                        subtitle={
                          <View style={styles.subtitleView}>
                            <Progress.Bar progress={0.3} width={200} /> 
                          </View>
                        }
                       
                         bottomDivider
                        />
   
                        <ListItem key={2}
                        
                        rightAvatar={ <Icon name='playlist-add' type='materialIcons' color='black' size={45}/>}
                        title='Choix des prestataires (3 sur10)'
                        titleStyle={styles.titleView}
                        subtitle={
                          <View style={styles.subtitleView}>
                            <Progress.Bar progress={0.3} width={200} /> 
                          </View>
                        }
                       
                         bottomDivider

                        />
                    

                        <ListItem key={3}
                        
                        rightAvatar={ <Icon name='group-add' type='materialIcons' color='black'  size={45}/>}
                        title='Listes des invités (30 sur 150)'
                        titleStyle={styles.titleView}
                        subtitle={
                          <View style={styles.subtitleView}>
                            <Progress.Bar progress={0.3} width={200} /> 
                          </View>
                        }
       
                        bottomDivider
                        />
                        
                        
                         <ListItem key={4}
    
                          rightAvatar={ <Icon name='euro-symbol' type='materialIcons' color='black'  size={45}/>}
                          title='Budget(1000€ sur 30000€)'
                          titleStyle={styles.titleView}
                          subtitle={
                            <View style={styles.subtitleView}>
                              <Progress.Bar progress={0.3} width={200} /> 
                            </View>
                          }
                        
                          bottomDivider
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



