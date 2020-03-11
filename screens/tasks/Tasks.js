import React ,{ useState, useEffect } from 'react';

import { View, ScrollView, SafeAreaView, Text, TextInput, StyleSheet, TouchableOpacity  } from 'react-native';

import { Icon, Header, ListItem, Overlay, Input, Button } from 'react-native-elements';

import * as Progress from 'react-native-progress';

import HeaderNav from '../HeaderNav';


function Tasks( props ) {

	const [listTasks, setListTasks]= useState([]);
 
	useEffect( () => { 
  
	  async function  etatTasks(){
  
		var dataTasks = await fetch('https://weedingplanner.herokuapp.com/budget', {
  
		  method: 'POST',
		  headers: {'Content-Type':'application/x-www-form-urlencoded'},
		  body: "id=5e67be5ac820c000174ee417"
		  });
		 
		  var tasks = await dataTasks.json();
		  
		  
		  
		  
		  setListTasks(tasks.wedding.tasksPersonal)
		}
		console.log("YOOOOOOO", listTasks)
			etatTasks()
  
  },[]);
			  

	//5e67be5ac820c000174ee417 id d'un mariage

	
		return(

			<View style={{
					flex:1,
					backgroundColor:'#FFF'
				}}>

				<HeaderNav nom='Mes tâches'/>			
				
				<ListItem 
                      rightAvatar={ <Icon name="ios-calendar" type="ionicon" color="#31AE89"  size={35}/>}
                      title='Avancement des tâches'
                      subtitle={
                    <View>
                      <Progress.Bar progress={0.3} width={250} height={15} color={'#31AE89'}  />
                    </View>
                    }
                  />

					
				<ScrollView>
				
				{	listTasks.map( (u,i) => {
					const newDate= new Date(u.dateOut)

						
					return(
						
						<ListItem key={i}
							onPress={ () => props.navigation.navigate( nextPage ) }
							rightAvatar={{ source: require('../../assets/picture-1.jpg') }}
							title={u.title}
							titleStyle={styles.titleView}
							subtitle={
								<View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
									<View style={styles.subtitleView}>
										<Icon name='clock' type='evilicon' color='grey' />
										<Text style={styles.ratingText}>{newDate.getDate()+"/"+(newDate.getMonth()+1)+"/"+newDate.getFullYear()}</Text>
									</View>
									<View style={styles.subtitleView}>
										<Icon name='location-on' type='materialIcons' color='grey' />
										<Text style={styles.ratingText}>Paris</Text>
								  </View>
								</View>
							}
							
							bottomDivider
						/>
					);
				})
				
					
				}
					
					
				</ScrollView>

				<TouchableOpacity onPress={ () => props.navigation.navigate('AddTaks') }
					style={{
						width:'100%', height:'auto',
						padding: 5,
						backgroundColor: '#FAEBE4', 
						height: 50,
						flexDirection: 'row', alignItems: 'center', justifyContent:'center'
					}}>
					<Text style={{paddingLeft: 20}}>
					Ajouter une nouvelle tâche
					</Text>
					<View style={styles.interSpace}/>
					<Icon name='plus' type='feather' color='grey' />
				</TouchableOpacity>
				

				
			</View>
	
		);
	}




const styles = StyleSheet.create({
	titleView: {
		fontFamily:'catamaran-regular',
		fontWeight:'bold', 
		paddingTop: 10
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
	input: { 
		alignSelf:'flex-start', 
		width: '70%', 
		marginTop: 10,
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.7)',
		marginBottom: 20,
		paddingHorizontal: 10
	}
});


export default Tasks; 
