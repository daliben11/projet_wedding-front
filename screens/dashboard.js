import React,{useState} from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import { Avatar,Header, ListItem, Icon}  from 'react-native-elements';

export default function Dashboard({navigation}) {
    return (
      
      
        <View style={{flex:1, marginTop: 39}}> 
    
    
         <ImageBackground  source={require('./assets/coeurimg.jpg')} style={styles.container} >
         <Icon  name='heartbeat' type='evilicon' color='grey' justifyContent='start'  size={62}/>
           
            <Text style={{color: 'white', FamilyFont: 'greatVibes',fontSize: 30, marginTop: 150, marginRight: 100}}>Janet & John</Text><Text style={{color: 'white', fontSize: 20}} >23/08/2020</Text></ImageBackground>
      
            <View style={{flex: 0.3, backgroundColor: '#FAEBE4', justifyContent: 'center' }}>
              <Text h4 style={{textAlign:'center',fontWeight: 'bold'}} > 200 jours 11 Heures 37 min 34 s</Text>
            </View>
              <ScrollView  style={{flex:3, marginTop: 15}}>
    
                          <ListItem key={1}
                                  title='Avancement des tâches (20 sur 100)'
                                  subtitle={
                                    <View style={styles.subtitleView}>
                                        <Icon name='list-ul'type='evilicon' color='grey' />
                                        <View style={styles.interSpace}/>
                                    </View>
                                    }
                                  titleStyle={{paddingTop: 10, paddingLeft: 0}}
                                  bottomDivider
    
                                  
                                />
                                <ListItem key={1}
                        
                        title='Choix des prestaraires (3 sur 10)'
                        subtitle={
                          <View>
                              <Icon name='clock' type='evilicon' color='grey' />
                              <View style={styles.interSpace}/>
                          </View>
                          }
                        titleStyle={{paddingTop: 10, paddingLeft: 0}}
                        bottomDivider
    />
                    
                        <ListItem 
    
                        title='Listes des invités (30 sur 150)'
                        subtitle={
                          <View>
                              <Icon name='heartbeat' type='evilicon' color='grey' />
                              <View style={styles.interSpace}/>
                          </View>
                          }
                        titleStyle={{paddingTop: 10, paddingLeft: 0}}
                        bottomDivider
                        />
                        
                        
                         <ListItem 
    
                        title='Budget (1 000€ sur 30 000€)'
                        subtitle={
                          <View>
                              <Icon name='clock' type='evilicon' color='grey' />
                              <View style={styles.interSpace}/>
                          </View>
                          }
                        titleStyle={{paddingTop: 10, paddingLeft: 0}}
                        bottomDivider
                        />
                        
      
      <Text style={{color: 'black'}}></Text>
      
    
         <View style={{flex: 1}}/>
          </ScrollView>
         
    
        
         </View>
      );
    }
  const styles = StyleSheet.create({
    title: {
      fontFamily:'catamaran-semibold',
      fontSize:12,
      letterSpacing:2,
      opacity:0.5,
      lineHeight: 20,
    },
    description: {
      fontFamily:'catamaran-semibold',
      fontSize:17,
      lineHeight: 28,
    }
  });



