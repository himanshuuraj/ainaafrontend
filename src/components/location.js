import React, {Component} from 'react';
import { 
  View,
  Image
} from 'react-native';
import {
  getFont,
  Color,
  getHeight,
  Font
} from "../global/util";

export default class Location extends Component {

  state = {
    phone : "",
    password : "",
    gender : "male"
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
           <View style={{
             height : getHeight(60),
             width : "100%",
             justifyContent : "center",
             alignItems : "center"
           }}>
              
           </View>
    )
  }
}
