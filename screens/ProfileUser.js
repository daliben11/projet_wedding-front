import React,{useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

export default ProfileUser= ({navigation})=>{
    return (
      <View style={{backgroundColor:"#F5F8FB", marginTop:95}}/* style={styles.container} */>
        <Avatar size="xlarge" rounded showEditButton icon={{ name: 'home' }} source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}/>
        <Text style={styles.title} >Prénom</Text>
        <Text style={styles.description}>Marion</Text>
        <Text style={styles.title}>Nom</Text>
        <Text style={styles.description}>Guevara</Text>
        <Text style={styles.title}>Téléphone</Text>
        <Text style={styles.description}>06 12 34 56 78</Text>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.description}>marionguevara@guevara.fr</Text>
        <Text style={styles.title}>Adresse</Text>
        <Text style={styles.description}>24bis rue de la Machine, Paris</Text>
        <Text style={styles.title}>Code Postal</Text>
        <Text style={styles.description}>75010</Text>
        <Text style={styles.title}>Mot de passe</Text>
        <Text style={styles.description}>*******</Text>
      </View>
    )
  };
  

  const styles = StyleSheet.create({
    title: {
      fontFamily:'catamaran-semibold',
      fontSize:10,
      letterSpacing:2,
      opacity:0.5,
      lineHeight: 20,
    },
    description: {
      fontFamily:'catamaran-semibold',
      fontSize:15,
      lineHeight: 28,
    }
  });