import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';

import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native';
import { Avatar,Header, ListItem, Icon}  from 'react-native-elements';

import * as Progress from 'react-native-progress';
// import IconAntDesign from 'react-native-vector-icons/AntDesign';

import HeaderNav from './HeaderNav';
import MesMariagesScreen from '../screens/mesmariages/MesMariagesScreen'


function Dashboard( props ) {
	//console.log( "je suis dans mon dashboard ", props.myWedding );

	const [wedInfo, setWedInfo]= useState({});
	const [countDays, setCountDays] = useState(0);
	const [countHr, setCountHr] = useState(0);
	const [countMin, setCountMin] = useState(0);
	const [countS, setCountS] = useState(0);


	
	useEffect( () => {  
	
		setWedInfo(props.myWedding);
		//	props.setJustCreateWedding( false );
		
//	
//		async function detailMariage(){
//		
//		    var data = await AsyncStorage.getItem("tokenUser");  
//		    
//		    var dataProfile = await fetch("https://weedingplanner.herokuapp.com/profile",{
//		      method: 'GET',
//		      headers: {'Content-Type':'application/x-www-form-urlencoded'},
//		      body: `tokenUser=${data}`
//		    });
//		    var profile = await dataProfile.json();
//		    
//		    //console.log('get json')
//		    setUser(profile);
//		    
//    }
//    detailMariage();
//    return ()=>{console.log()}
	}, []);
	
	
	var c = ( ()=>{
	//{countDays} jours {countHr} Heures {countMin} min// {countS} s

		let len = props.myWedding.date.length;
		
		let year = Number( props.myWedding.date.slice(len-4) );
		let month = Number( props.myWedding.date.slice(0,2) );
		let day = Number( props.myWedding.date.slice(3,5) );
		
		let date1 = new Date( year , month-1 , day+1 ) ;
		let date2 = Date.now();
		
		//console.log('Date du marige dans store redux...', props.myWedding.date,'///', year, month, day );
		
		let ts =  (Date.parse(date1) - date2)/1000/(3600*24);
		
		var countDays = Math.floor( ts );
		var countHr = Math.floor( (ts - countDays)*24 );
		var countMin = Math.floor( ((ts - countDays)*24-Math.floor( (ts - countDays)*24 ))*60 ) ;
		
		return {countDays, countHr, countMin };
		
	})();

	
	
    return (
      
      
        <View style={{flex:1}}> 

          <HeaderNav nom='Mon Mariage'/> 
          

            <ImageBackground  source={require('../assets/bougiewedding.jpg')} style={{flex:1}}>
              
            <Text style={{color: 'white', fontFamily:'greatvibes' ,fontSize: 30,textAlign: 'center',
                color: 'white', 
                fontFamily:'greatvibes', 
                fontSize: 30, 
                marginTop: 20,
             }}> 
            	{wedInfo.bride} & {wedInfo.groom}
            </Text>
            <Text 
            	style={{
            		color: 'white', 
            		fontFamily:'greatvibes', 
                fontSize: 20, 
                textAlign: 'center',
              }} >
              {wedInfo.date}
            </Text>

            </ImageBackground>
           
            <View style={{backgroundColor: '#FAEBE4' , height:45, alignItems:'center', justifyContent:'center'}}>
              <Text style={styles.container} > {c.countDays} jours {c.countHr} Heures {c.countMin} min </Text> 
            </View>
                

                


            <View style={{flex:1 }}>
              
              <ScrollView  style={{flex:1}} >

                	<ListItem  style={{flex:1}}
                		onPress={ ()=>{ props.navigation.navigate('Tasks') } }
                    rightAvatar={ <Icon name='list' type='materialIcons' color='#31AE89'  size={35} />}
                    title='Avancement des tâches (20 sur10)'
                    titleStyle={styles.titleView}
                    subtitle={
                      <View style={styles.subtitleView}>
                        <Progress.Bar progress={0.1} width={200} color={'#31AE89'}  /> 
                      </View>
                    }
                    bottomDivider
                  />
   
                  <ListItem style={{flex:1}} 
                  	onPress={ ()=>{ props.navigation.navigate('Prestations') } }
			              rightAvatar={ <Icon name='playlist-add' type='materialIcons' color='#31AE89' size={35}  />}
			              title='Choix des prestataires (3 sur10)'
			              titleStyle={styles.titleView}
			              subtitle={
			                <View style={styles.subtitleView}>
			                  <Progress.Bar progress={0.3} width={200} color={'#31AE89'}  /> 
			                </View>
			              }
                 		bottomDivider
									/>
                    

                  <ListItem  style={{flex:1}} 
                  	onPress={ ()=>{ props.navigation.navigate('Invites') } }
		                rightAvatar={ <Icon name='group-add' type='materialIcons' color='#31AE89'  size={35} />}
		                title='Listes des invités (30 sur 150)'
		                titleStyle={styles.titleView}
		                subtitle={
		                  <View style={styles.subtitleView}>
		                    <Progress.Bar progress={0.3} width={200} color={'#31AE89'} /> 
		                  </View>
		                }
	 
		                bottomDivider
                  />
                        
                        
									<ListItem  style={{flex:1}}
										onPress={ ()=>{ props.navigation.navigate('Budget') } }
										rightAvatar={ <Icon name='euro-symbol' type='materialIcons' color='#31AE89'  size={35} />}
										title='Budget(1000€ sur 30000€)'
										titleStyle={styles.titleView}
										subtitle={
											<View style={styles.subtitleView}>
												<Progress.Bar progress={0.3} width={200} color={'#31AE89'} /> 
											</View>
										}
									/>
                
              </ScrollView>

            </View>
                   
        </View>
    );
}



const styles = StyleSheet.create({
  container: {
   
    alignItems: 'center',
   
    fontFamily:'greatvibes',
    fontSize: 21,
   
    
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
  },
  contentContainer: {
    paddingVertical: 20
  }
});

function mapStateToProps(state) {
  return { 
//	 	isLogin: state.isLogin,
	 	myWedding: state.myWedding,
//  	username: state.username,
  }
}

//function mapDispatchToProps(dispatch) {
//  return {
//		setJustCreateWedding: function ( val ) {
//			 dispatch( {type: 'setJustCreateWedding', justCreate: val } )
//		}
//  }
//}

export default connect(
  mapStateToProps, 
  null
)( Dashboard );

