import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MesMariagesScreen from './screens/MesMariagesScreen'

export default function App() {
  return (
    <View style={styles.container}>
    	<MesMariagesScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
