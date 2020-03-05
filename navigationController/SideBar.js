import React from 'react'
import { View, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import { DrawerNavigatorItems } from 'react-navigation-drawer'

function SideBar(props) {
    return (
       <ScrollView>
           <ImageBackground 
                style={{ alignSelf:'center', width: undefined, padding: 16, paddingTop: 50, backgroundColor: '#ecf0f1' }}>
                    <Image source={require('../assets/logo1.png')} style={styles.logo}/>
           </ImageBackground>
       <View style={styles.container}>
       
            <DrawerNavigatorItems {...props} />
       
       </View>
   </ScrollView>
)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    logo: {
        width: 180,
        height: 150,
        marginLeft: 50,
        marginBottom: 10,
        padding: 50
    },
})

export default SideBar ;

