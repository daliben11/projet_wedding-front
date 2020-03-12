import React,{useState} from 'react';
//import {connect} from 'react-redux';

import { StyleSheet, Text, View, 
	TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Card, Icon, Overlay, Header, Input } from 'react-native-elements';

import HeaderNav from '../HeaderNav';
import AjoutPresta from './AjoutPresta';



export default function Prestataires(props) {
 
	const [visibleAddPresta, setVisibleAddPresta] = useState(false);

  const listePrestataire = [
    { name:'Lieux',img:require('../../assets/lieuxmariage.jpg')},
    { name:'Traiteur',img: require('../../assets/traiteurmariage.jpg') },
    { name:'Photographe',img: require('../../assets/photomariage.jpeg') },
    { name:'Animation',img: require('../../assets/weddingparty.jpeg' )},
    { name:'Robe',img:require('../../assets/robe.jpg')},
    { name:'Décorateur',img: require('../../assets/decoration.jpeg' )},
    { name:'Patisserie',img: require('../../assets/gateuxmariage.jpg') },
    { name:'Bijoux',img: require('../../assets/bijoux.jpg' )}];
// PRESTATAIRES PAGE ATTENTION



  
	const handleClose = () => {
		setVisibleAddPresta(false);
	}
  
  
  return (
    
     <View style={{flex:1}} >

       <HeaderNav nom='Prestataires'/> 

       
          <View style={{flex:1, backgroundColor:'#FFF'}}  >



            <ScrollView   style={{ marginBottom: 10, marginTop:5}} stickyHeaderIndices={[8]}  >
             
              <View style={{flex:1,flexWrap: 'wrap', flexDirection: 'row',justifyContent: 'space-around'}} >
                  
                  {listePrestataire.map((u,i)=>{
                  	return(
                      <TouchableOpacity
                      	key={`touch${i}`}
                      	onPress={ () => { props.navigation.navigate('PrestaView') } }
                      >
                        <Card key={`card${i}`} image={u.img} containerStyle={{ width: 150, height: 200}}  >
                              <Text style={{marginBottom: 10}} style={styles.card} > {u.name} </Text>
                        </Card>
                      </TouchableOpacity>
                    )
                    })}
							</View>
            </ScrollView>
            
            <View 
              style={{
                width:'100%', height:'auto',
                padding: 5,
                backgroundColor: '#FAEBE4', 
                flexDirection: 'row', alignItems: 'center', justifyContent:'center', 
              }}>
              <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center'}}  
                onPress={() => { 
                	setVisibleAddPresta(true);
                	//props.navigation.navigate( 'AddPresta' );
                }}>
                  <Text style={{ fontFamily:'catamaran-semibold', fontSize:20}}> Editer mes infos </Text>
                  <Icon containerStyle={{paddingLeft: 5}} name='add' type='materialIcons' color='grey' />
                  {/* rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89' size={35}/>} */}
              </TouchableOpacity>
            
            </View>
            
          </View>
          

		        <Overlay
						 isVisible={visibleAddPresta}
						 onBackdropPress={ () => setVisibleAddPresta(false) }
						 windowBackgroundColor="rgba(0, 0, 0, .4)"
						 overlayBackgroundColor="rgba(255, 255, 255, 1)"
						 width="95%" height="95%"
						>
								<AjoutPresta toCloseOverlay={handleClose} /> 
						</Overlay>

            

     </View>
  )

     //   

}
  
  
  
  const styles = StyleSheet.create({
    titleView: {
      fontFamily:'catamaran-regular', 
      color: '#fff',
      alignSelf:'center',
      alignItems: 'center',
    },
    description: {
      fontFamily:'catamaran-semibold',
      fontSize:17,
      lineHeight: 28,
    },
    input:{
      marginTop:10,
    },
   card:{
    marginTop:3,
    fontFamily:'greatvibes',
    fontSize: 21,
    alignSelf:'center',
    alignItems: 'center',
   }
  });



