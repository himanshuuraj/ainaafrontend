import React, {Component} from 'react';
import {
  Text, 
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  Icon
} from "native-base";
import {
  getFont,
  Color,
  getHeight
} from "../global/util";
import OrWithComponent from "./../components/orWithComponent";
import { Actions } from 'react-native-router-flux';
import * as Facebook from 'expo-facebook';

export default class RegisterationComponent extends Component {

  state = {
    phone : "",
    password : ""
  };

  constructor(props){
    super(props);
  }

  logIn = async() => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('448026115917209', {
        permissions: ['public_profile', 'email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
        alert("cancel");
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* { this.props.screenType !== "forgotPassword" &&
            <OrWithComponent/>
        }
        { this.props.screenType !== "forgotPassword" && (
           <View style={{
            width : "100%",
            flexDirection : "row",
            height : getHeight(6)
          }}>

              <TouchableOpacity style={{
                width : "49%",
                display : "flex",
                flexDirection : "row",
                backgroundColor : Color.themeFontColor,
                borderRadius : 5,
                justifyContent : "center",
                alignItems : "center",
                marginRight : "1%"
              }}
              onPress={() => {
                this.logIn();
              }}
              >
                <Icon name='logo-facebook' style={{
                  marginRight : 15
                }} />
                <Text style={{
                  fontSize : getFont(16)
                }}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                width : "49%",
                display : "flex",
                flexDirection : "row",
                backgroundColor : Color.themeFontColor,
                borderRadius : 5,
                justifyContent : "center",
                alignItems : "center",
                marginLeft : "1%"
              }}>
                <Icon name='logo-google' style={{
                  marginRight : 15
                }} />
                <Text style={{
                  fontSize : getFont(16)
                }}>Google</Text>
              </TouchableOpacity>
          </View>
          )  
        } */}
          <View style={{
            width : "100%",
            flexDirection : "row",
            height : getHeight(6),
            justifyContent : "center",
            marginTop : getHeight(6)
          }}>
            <Text style={{
              color : Color.themeFontColor,
              marginRight : 10
            }}>
            {
              this.props.screenType != 'login' ? 'Already have an account' : 'New to AINAA?'
            }
            </Text>
            <Text style={{
              color : Color.themeFontColor,
              textDecorationLine: 'underline'
            }} onPress={() => {
              if(this.props.screenType === 'login')
                Actions.registerationPage();
              else
                Actions.loginPage();
            }}>
              {
              this.props.screenType != 'login' ? 'LOGIN' : 'REGISTER'
              }
            </Text>
          </View>
        </React.Fragment>
    );
  }
}
