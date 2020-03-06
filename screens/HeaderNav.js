import React from 'react';
import { withNavigation } from 'react-navigation';
import { Header, Icon } from 'react-native-elements';

function HeaderNav( props ){
    return(
            <Header
                leftComponent={
		              <Icon name='menu' color='#000'
											onPress={ () => {props.navigation.openDrawer();} }
									/>
								}
                centerComponent={{ text: `${props.nom} `, style: {fontFamily:'greatvibes', color: '#000', fontSize:30, marginTop: 5 } }}
                containerStyle={{
                    backgroundColor: '#FAEBE4',
                    height: 84,
                    
                }}
            />
    )
}

export default withNavigation( HeaderNav );
