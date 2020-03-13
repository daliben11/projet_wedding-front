import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { AsyncStorage, View, Text, Button, 
	StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Icon, Image } from 'react-native-elements';


function Accueil ( props ) {
	//console.log( "je suis dans l'accueil ", props.myWedding );
	
	const [iHaveAWed, setiHaveAWed] = useState(false);
	
	const weddingsList = [];
	
	
	useEffect( () => {  
	
		async function detailMariages(){
		
		    var data = await AsyncStorage.getItem("tokenUser");
		    		    
		    var dataProfile = await fetch("https://weedingplanner.herokuapp.com/profile",{ //
		      method: 'POST',
		      headers: {'Content-Type':'application/x-www-form-urlencoded'},
		      body: `tokenUser=${data}`
		    });
		    var profile = await dataProfile.json();
		    
		    console.log('mes mariages ', profile._id);
				
				
				
				profile.id_wedding.map( async (el,i) => {
					//console.log( 'id', el );
					//let myurl = `https://weedingplanner.herokuapp.com/getwedding`;
					
					let myurl = `http://10.2.3.25:3000/getwedding`
					
					let dataWed = await fetch( myurl, {
						method: 'POST',
						headers: {'Content-Type':'application/x-www-form-urlencoded'},
						body: `id=${el}`
					});
					
					//var data = await fetch( myurl );
					dataWed = await dataWed.json();
					//console.log('\n\n\nwed ', dataWed.wedding.wedDescription);
					
					weddingsList.push(dataWed.wedding);
					
					console.log('compare', dataWed.wedding.ownership, profile._id)
					
					if ( dataWed.wedding.ownership === profile._id ){
						setiHaveAWed(true);

//						props.setMyWedding( 
//							{ status: true,
//								justCreate: false, 
//								date: dataWed.wedding.wedDate, 
//								bride: dataWed.wedding.brideName, 
//								groom: dataWed.wedding.groomName, 
//								city: dataWed.wedding.wedCity,
//								description: dataWed.wedding.wedDescription }
//						);
					}
					
					
				});
				
		    
    }
    detailMariages();
    return ()=>{ console.log() }
	}, []);
	
//	useEffect(()=>{
//		
//		props.setMyWedding({status: true});
//		return ()=>{ console.log() }
//		
//	},[iHaveAWed]);
	
console.log('i have a wed', iHaveAWed )


	if ( props.myWedding.justCreate ) {
		
		
		return(
			
			<View 
				style={{ 
					flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#fff'
				}}>
			            <ImageBackground  style={{flex:1}} source={require('../assets/weddingimg2.jpg')} style={styles.container} >
                  
			
	 
				  
				<TouchableOpacity
					onPress={ () => { 
						props.navigation.navigate( 'Drawer', { screen: 'DashboardScreen' } );
					} }
					style={styles.buttonLinks} 
					style={{ 
					flex:1, justifyContent:'space-around'
					}}>
					<View
						style={{ 
							flex:0.3, flexDirection:'row', alignItems:'center', justifyContent:'center',
							backgroundColor:'#fff',  opacity: .9,
							width: Dimensions.get('window').width*0.8,
							borderRadius: 30, border:'grey',  borderWidth: 0.1, marginTop: 15, marginBottom:10
						}}
						>
						{/* <Icon name='flower' type='material-community' color='#31AE89'  size={35}/> */}
						<Text
											style={{color:'#000', fontFamily:'greatvibes', fontSize:40, color: '#31AE89'}}
											>{` J 'organise \n mon mariage ! `}</Text>
				  </View>
				</TouchableOpacity>
				</ImageBackground>
			</View>
		
		);
	
	} else {

						return(
						
							<View 
								style={{ 
									flex:1, alignItems:'center', justifyContent:'center',
									
								}}>
							<ImageBackground  style={{flex:1}} source={require('../assets/weddingimg2.jpg') } style={styles.container} >
								<TouchableOpacity
									onPress={ () => { 
										if( iHaveAWed ){
											props.navigation.navigate( 'Drawer', {screen:'DashboardScreen'} ); 
										} else {
											props.navigation.navigate( 'CreateWed' ); 
										} 
										
									} }
									style={{ flex:0.5 }}>
									<View
										style={{ 
											flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center',
											backgroundColor:'#FAEBE4',
											backgroundColor:'#fff',  opacity: .9,
											width: Dimensions.get('window').width*0.7,
											borderRadius: 30, border:'grey',  borderWidth: 0.2, marginTop: 90, marginBottom:10
										}}
										>
										{/* <Icon name='flower' type='material-community' color='#31AE89'  size={35}/> */}
										<Text
											style={{color:'#000', fontFamily:'greatvibes', fontSize:35, color: '#31AE89'}}
											>{` J 'organise mon \n       mariage `}</Text>
									</View>
									
								</TouchableOpacity>
								
								
								<TouchableOpacity 
									style={{ flex:0.5 }}
									onPress={ () => { props.navigation.navigate('Drawer'); } }
									>
									<View
										style={{ 
											flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center',
											backgroundColor:'#FAEBE4',
											backgroundColor:'#fff',  opacity: .9,
											width: Dimensions.get('window').width*0.7,
											borderRadius: 30, border:'#000',  borderWidth: 0.2, marginTop: 100, marginBottom:10
										}}
										>
										{/* <Icon name='flower' type='material-community' color='#31AE89'  size={35}/> */}
										<Text
											style={{color:'#000', fontFamily:'greatvibes', fontSize:35, color: '#31AE89'}}
											>{` Je suis invité  `}</Text>
									</View>
								</TouchableOpacity>
								</ImageBackground>
									
							</View>
						
						);
					}
}
const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 40,
        padding: 40
     },
    buttonLinks: {
        marginBottom: 25,
        
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 100,
	  },
})

function mapStateToProps(state) {
  return { 
	 	myWedding: state.myWedding,
  }
}


function mapDispatchToProps(dispatch) {
  return {
  	setMyWedding: function (val) {
  		dispatch( {type: 'setMyWedding', wedding: val })
  	},
		setJustCreateWedding: function ( val ) {
			 dispatch( {type: 'setJustCreateWedding', justCreate: val } )
		}
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)( Accueil );


// &nbsp;


/*
  		<Button
  			iconRight="true"
				icon={<Icon name='flower' type='material-community' color='#31AE89'  size={35}/>}
				title={`J'organise mon mariage \u263A`}
				titleStyle={{borderColor:'#fff'}}
				color="#FAEBE4" 
				buttonStyle={{ 
  				width: Dimensions.get('window').width*0.8,
  				height: Dimensions.get('window').height*0.25,
  				borderColor:'grey'
  				}}
			/>
*/
