import React from 'react';
import { connect } from 'react-redux';

import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Icon, Image } from 'react-native-elements';


function Accueil ( props ) {
	//console.log( "je suis dans l'accueil ", props.myWedding );

	if ( props.myWedding.justCreate ) {
		
		
		return(
			<View 
				style={{ 
					flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'white'
				}}>
			
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
							flex:0.5, flexDirection:'row', alignItems:'center', justifyContent:'center',
							backgroundColor:'#FAEBE4',
							width: Dimensions.get('window').width*0.9,
							borderRadius: 5, border:'#000', borderWidth: 0.3 ,
						}}
						>
						{/* <Icon name='flower' type='material-community' color='#31AE89'  size={35}/> */}
						<Text
											style={{color:'#000', fontFamily:'greatvibes', fontSize:45}}
											>{` J 'organise \n mon mariage \n      \u263A`}</Text>
				  </View>
				</TouchableOpacity>
				  
			</View>
		
		);
	
	} else {


						return(
						
							<View 
								style={{ 
									flex:1, alignItems:'center', justifyContent:'center',
									marginTop:30, marginTop:150
								}}>
							
								<TouchableOpacity
									onPress={ () => { props.navigation.navigate('CreateWed'); } }
									style={{ 
									flex:1, justifyContent:'space-around'
									}}>
									<View
										style={{ 
											flex:0.3, flexDirection:'row', alignItems:'center', justifyContent:'center',
											backgroundColor:'#FAEBE4',
											width: Dimensions.get('window').width*0.9,
											borderRadius: 5, border:'grey',  borderWidth: 0.3,
										}}
										>
										<Icon name='flower' type='material-community' color='#31AE89'  size={35}/>
										<Text
											style={{color:'#000', fontFamily:'greatvibes', fontSize:25}}
											>{`J 'organise mon mariage \u263A`}</Text>
									</View>
								</TouchableOpacity>
								
								
								<TouchableOpacity 
									style={{ flex:1 }}
									onPress={ () => { props.navigation.navigate('Drawer'); } }
									>
									<View
										style={{ 
											flex:0.3, flexDirection:'row', alignItems:'center', justifyContent:'center',
											backgroundColor:'#FAEBE4',
											width: Dimensions.get('window').width*0.9,
											borderRadius: 1, border:'#000',  borderWidth: 0.3,
										}}
										>
										<Icon name='flower' type='material-community' color='#31AE89'  size={35}/>
										<Text
											style={{color:'#000', fontFamily:'greatvibes', fontSize:25}}
											>{`Je suis invité à un mariage `}</Text>
									</View>
								</TouchableOpacity>
									
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
})

function mapStateToProps(state) {
  return { 
	 	myWedding: state.myWedding,
  }
}


function mapDispatchToProps(dispatch) {
  return {
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
