import React, {Component} from 'react';
import {
  ImageBackground,
  AsyncStorage,
  View, Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SplashScreen extends Component {

  componentDidMount(){
    setTimeout(() => {
      // let userInfo = await AsyncStorage.getItem("userInfo");
      // if(userInfo)
      //   Actions.homeDetails();
      // else  
        Actions.loginPage();
    }, 3000);
  }

  render() {
    return (
      <View style={{ flex : 1, justifyContent : 'center', alignItems : 'center', backgroundColor : 'white'}}>
        <Image source={require('./../images/background_image.jpg')} resizeMode='contain' style={{height : 300, width : 160}}/>
      </View>
    );
  }
}
