import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

function MesMariagesScreen() {
	
	


}


function mapStateToProps(state) {
  return { 
//  	photoUrlList: state.photoUrlList,
//  	username: state.username,
  }
}

function mapDispatchToProps(dispatch) {
  return {
//    setPhotoUrlList: function ( photo_url_list ) { 
//       dispatch( { type: 'setLocalList', list: photo_url_list } ) 
//    },
//    deletePhotoUrl: function (i) {
//    	 dispatch( {type: 'deleteUrl', index: i } )
//    }
  }
}


export default connect(
  null, 
  null
)( MesMariagesScreen );
