import React,{useState} from 'react';
import { View, ScrollView, TouchableOpacity , Text} from 'react-native';
import { Icon, Input,Header} from 'react-native-elements';


 export default function AddBudget({navigation}) {
    const [modifier,setModifier]=useState(false)
    const [budget,setBudget]=useState(0)
  
  return (
  <View style={{backgroundColor:"#F5F8FB",flex:1}}>

   
    
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
                  <View 
                    style={{
                      width:'100%', height:50,
                      padding: 5,
                      backgroundColor: '#FAEBE4', 
                      flexDirection: 'row', alignItems: 'center', justifyContent:'center', 
                    }}>
                    <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center'}}   >
                        <Text style={{ fontFamily:'catamaran-semibold', fontSize:15}}>Ajouter une nouvelle dépense</Text>
                        <Icon containerStyle={{paddingLeft: 5}} name='add' type='materialIcons' color='grey' />
                        {/* rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35}/>} */}
                    </TouchableOpacity>
                  
                 </View>
  
</View>
  )
}
