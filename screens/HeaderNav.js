import React from 'react';
import {Header} from 'react-native-elements';

export default function HeaderNav(){
    return(
        <Header
            leftComponent={{ icon: 'menu', color: '#000' }}
            centerComponent={{ text: 'Mon Profil ', style: {fontFamily:'greatvibes', color: '#000', fontSize:30 } }}
            containerStyle={{
                backgroundColor: '#FAEBE4',
                height: 84,    
            }}
        />

    )
}
