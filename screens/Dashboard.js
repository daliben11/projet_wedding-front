import React,{useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar,Header } from 'react-native-elements';

export default function Dashboard({navigation}) {
    return (
      
      <View style={{backgroundColor:"#F5F8FB",flex:1}} >
        <Header
                leftComponent={{ icon: 'menu', color: '#000' }}
                centerComponent={{ text: 'Mon Profil ', style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } }}
                containerStyle={{
                    backgroundColor: '#FAEBE4',
                    height: 84,
                    
                }}
            />
            <View >

              <Avatar containerStyle={{ marginLeft: 30, marginTop: 10}} size="xlarge" rounded showEditButton icon={{ name: 'home' }} source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}/>
              <View style={{position:'absolute', left:220, top:5}}>
                <Text style={styles.title}>Nom</Text>
                <Text style={styles.description}>Guevara</Text>
              </View>
              <View style={{position:'absolute', left:220, top:55}}>
                <Text style={styles.title} >Prénom</Text>
                <Text style={styles.description} >Marion</Text>
              </View>
              <View style={{position:'absolute', left:220, top:105}}>
                <Text style={styles.title}>Téléphone</Text>
                <Text style={styles.description}>06 12 34 56 78</Text>
              </View>
              <View  style={{position:'absolute', left:20, top:155}}>
                <Text style={styles.title}>Email</Text>
                <Text style={styles.description}>marionguevara@guevara.fr</Text>
              </View>
              <View  style={{position:'absolute', left:20, top:205}}>
                <Text style={styles.title}>Adresse</Text>
                <Text style={styles.description}>24bis rue de la Machine, Paris</Text>
              </View>
              <View style={{position:'absolute', left:20, top:255}}>
                <Text style={styles.title}>Code Postal</Text>
                <Text style={styles.description}>75010</Text>
              </View>
              <View style={{position:'absolute', left:20, top:305}}>
                <Text style={styles.title}>Mot de passe</Text>
                <Text style={styles.description}>***********</Text>
              </View>
            </View>
      </View>
    )
  };
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



