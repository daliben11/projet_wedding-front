import React,{useState} from 'react';

import { View, ScrollView, SafeViewArea } from 'react-native';
import { Icon, Input, Header } from 'react-native-elements';




export default function AjoutPresta( props ) {

  const [type_service, setType_service] = useState('')
  const [company_name, setCompany_name] = useState('')
  const [phone, setPhone] = useState('')
  const [contact_name,setContact_name] = useState('')
  const [website,setWebsite] = useState('')
  
  const [adresse,setAdresse]=useState('')
  const [mail,setMail]=useState('')

  const [prixTotal,setPrixTotal]=useState(0)
  const [zipcode,setZipcode] = useState('')
  
  
  const handleAddPresta = async () => {
  	let myForm = new FormData();
		myForm.append('token', userToken );
		myForm.append('id_wedding', '5e67be5ac820c000174ee417' );
		
		void ( type_service !='' && ( myForm.append('type_service', type_service ) ) );
		void ( company_name !='' && ( myForm.append('company_name', company_name ) ) );
		void ( phone !='' 	 		 && ( myForm.append('phone_number', phone ) ) );
		void ( contact_name !='' && ( myForm.append('contact_name', contact_name ) ) );
		void ( website !=''  		 && ( myForm.append('website', website ) ) );		
		void ( adresse !='' 			&& ( myForm.append('address', adresse ) ) );
		void ( zipcode !=''  		 && ( myForm.append('zipcode', zipcode ) ) );
		void ( prixTotal !=''  	 && ( myForm.append('total_price', prixTotal ) ) );

		
    //sexe: String,
    //avatar: String,
    //password: String,

 	
  	let dataProfile = await fetch('https://weedingplanner.herokuapp.com/presta', {
			method: 'PUT',
			body: myForm, 
		});
		
    let response = await dataProfile.json();
  }
  
  
  return (
  <View style={{backgroundColor:"#F5F8FB", flex:1}}>

         <Header
            leftComponent={<Icon
		          onPress={() => {
		          	props.toCloseOverlay();
		          }}
		          name='close'
            />}
            rightComponent={<Icon
		          onPress={() => {
		          	handleAddPresta();
		          	props.toCloseOverlay();
		          }}
		          name='check'
            />}
            centerComponent={{ text: "Ajouter une presta", 
            	style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } 
            }}
            containerStyle={{
                backgroundColor: '#FAEBE4',
                height: 84,
            }}>
         </Header>
        

          <ScrollView 
          	contentContainerStyle={{
          		backgroundColor:"#F5F8FB",
          		flex:5, alignItems:'center', 
          		marginTop:40
          	}}>
 
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Prestation'
		              onChangeText={(val) => setType_service(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Nom de la société'
		              onChangeText={(val) => setCompany_name(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Website'
		              onChangeText={(val) => setWebsite(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Nom du contact'
		              onChangeText={(val) => setContact_name(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Adresse'
		              onChangeText={(val)=>setAdresse(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Email'
		              onChangeText={(val)=>setMail(val)}
                />
                <Input
		              containerStyle={{marginTop:10}}
		              placeholder='Téléphone'
		              onChangeText={(val)=>setPhone(val)}
                />
        
                <Input
		              containerStyle={{marginTop:15}}
		              placeholder='Prix total'
		              onChangeText={(val) => setPrixTotal(val)}
                />

            </ScrollView>
            
   </View>
  )
}
