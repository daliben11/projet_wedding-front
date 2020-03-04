import React from 'react';
import {Header} from 'react-native-elements';

export default function HeaderNav(props){
    return(
            <Header
                leftComponent={{ icon: 'menu', color: '#000' }}
                centerComponent={{ text: `${props.nom} `, style: {fontFamily:'greatvibes', color: '#000', fontSize:30, marginTop: 5 } }}
                containerStyle={{
                    backgroundColor: '#FAEBE4',
                    height: 84,
                    
                }}
            />
    )
}
