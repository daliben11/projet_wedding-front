import React,{useState} from 'react';
import { View, ScrollView } from 'react-native';
import { Icon, Input,Header} from 'react-native-elements';


 export default function AddBudget({navigation}) {
    const [modifier,setModifier]=useState(false)
    const [budget,setBudget]=useState(0)
  
  return (
  <View style={{backgroundColor:"#F5F8FB",flex:1}}>

      <Header
            leftComponent={<Icon
              onPress={() => {setModifier(false)}}
              name='close'
            />}
            rightComponent={<Icon
              onPress={() => {setModifier(false)}}
              name='check'
            />}
            centerComponent={{ text: "Ajouter un presta ", style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } }}
            containerStyle={{
                backgroundColor: '#FAEBE4',
                height: 84,
            }}>
        </Header>
    
  <ScrollView style={{flex:1}}>
    <View style={{backgroundColor:"#F5F8FB",flex:1, alignItems:'center', marginTop:40}}>

          
            
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Prestataire'
              label='Prestataire'
              onChangeText={(val) => setNom(val)}
            />
            <Input
              containerStyle={{marginTop:15}}
              placeholder='Montant'
              label='Montant'
              onChangeText={(val) => setPrenom(val)}
            />  
              <Input
              containerStyle={{marginTop:15}}
              placeholder='Date'
              label='Date'
              onChangeText={(val)=>setMail(val)}
            />
              <Input
              containerStyle={{marginTop:15}}
              placeholder='Note'
              label='Note'
              onChangeText={(val)=>setPhone(val)}

            />

            

    </View>
  </ScrollView>
</View>
  )
}
