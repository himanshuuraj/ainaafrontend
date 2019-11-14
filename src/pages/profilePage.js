import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Icon,
  Button
} from "native-base";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import {
  Color,
  viewObj,
  textObj
} from "../global/util";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import HeaderSection from "./../components/header";

class ProfilePage extends Component {

  state = {
    activeScreen  : 'home'
  };
  
  permanentAddress = () => {
    return (
      <View style={{ ...viewObj, marginBottom : 8 }}>
          <Text style={{
            ...textObj
          }}>Permanent Address</Text>
          <View style={{
            paddingHorizontal : 8,
            paddingVertical : 16
          }}>
            <Text>Line1</Text>
            <TextInput 
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="Belmonte Heights"/>
            <Text>Line2</Text>
            <TextInput
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="18th B Main Road"/>
            <Text>LandMark</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="near Cult.fit Gym"/>
            <Text>City</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="Patna"/>
            <Text>State</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="Bihar"/>
            <Text>PinCode</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="560034"
              keyboardType='numeric'/>
          </View>
      </View>
    );
  }

  currentAddress = () => {
    return (
      <View style={{ ...viewObj, marginBottom : 8 }}>
          <Text style={{
            ...textObj
          }}>Current Address</Text>
          <View style={{
            paddingHorizontal : 8,
            paddingVertical : 16
          }}>
            <Text>Line1</Text>
            <TextInput 
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="Belmonte Heights"/>
            <Text>Line2</Text>
            <TextInput
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="18th B Main Road"/>
            <Text>LandMark</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="near Cult.fit Gym"/>
            <Text>City</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="Patna"/>
            <Text>State</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="Bihar"/>
            <Text>PinCode</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="560034"
              keyboardType='numeric'/>
          </View>
      </View>
    );
  }

  communicationDetails = () => {
    return (
      <View style={{ ...viewObj, marginBottom : 8 }}>
          <Text style={{
            ...textObj
          }}>Communication Details</Text>
          <View style={{
            paddingHorizontal : 8,
            paddingVertical : 16
          }}>
            <Text>Phone Number</Text>
            <TextInput 
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="9934258424"/>
            <Text>Email</Text>
            <TextInput
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="hraj3116@gmail.com"/>
          </View>
      </View>
    );
  }

  navodayaDetails = () => {
    return (
      <View style={{ ...viewObj, marginBottom : 8 }}>
          <Text style={{
            ...textObj
          }}>Navodaya Details</Text>
          <View style={{
            paddingHorizontal : 8,
            paddingVertical : 16
          }}>
            <Text>Navodaya Name</Text>
            <TextInput 
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="JNV Katihar"/>
            <Text>Passout Year</Text>
            <TextInput
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="2012"/>
            <Text>Migration</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="JNV-Patna"/>
            <Text>Address of JNV</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              numberOfLines = {4}
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="JNV araria R.S. 560034"/>
          </View>
      </View>
    );
  }

  profilePic = () => {
    return (
      <View style={{ ...viewObj, marginTop : 16, paddingVertical : 8, justifyContent : 'center', alignItems : 'center' }}>
            <Text style={{
              ...textObj
            }}>Profile Pic</Text>
            <Image source={{uri: 'https://image.cnbcfm.com/api/v1/image/106069136-1565284193572gettyimages-1142580869.jpeg?v=1566321345&w=1400&h=950'}} 
               style={{ width: 160, height: 160, borderRadius: 160/ 2  }}/>
               <TouchableOpacity style={{
                 paddingVertical : 6,
                 width : 160,
                 marginVertical : 8,
                 borderRadius : 8,
                 borderWidth : 1,
                 justifyContent : 'center',
                 alignItems : 'center'
               }}>
                  <Text style={{ fontSize : 16 }}>EDIT</Text>
                </TouchableOpacity>
      </View>
    )
  }

  render(){
    return (
      <Container>
        <HeaderSection title={'Profile'} />
        <Content style={{
          backgroundColor : Color.backgroundThemeColor,
          padding : 16,
          width : "100%"
        }}>
          {
            this.profilePic()
          }
          <View style={{ ...viewObj }}>
            <Text style={{
              ...textObj
            }}>Full Name</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              placeholder="Full Name"
              style={{
                paddingLeft : 16,
                paddingBottom : 2,
                height : 40,
                marginTop : 4
              }}/>
          </View>
          {
            this.communicationDetails()
          }
          <View style={{ ...viewObj }}>
            <Text style={{
              ...textObj
            }}>Current Status</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              placeholder="Job/Study/Others"
              style={{
                paddingLeft : 16,
                paddingBottom : 2,
                height : 40,
                marginTop : 4
              }}/>
          </View>
          <View style={{ ...viewObj }}>
            <Text style={{
              ...textObj
            }}>Blood Group</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              placeholder="B+"
              style={{
                paddingLeft : 16,
                paddingBottom : 2,
                height : 40,
                marginTop : 4
              }}/>
          </View>
          {
            this.navodayaDetails()
          }
          {
            this.currentAddress()
          }
          {
            this.permanentAddress()
          }
          <View style={{ ...viewObj, marginBottom : 32 }}>
            <Text style={{
              ...textObj
            }}>Area Of Interest</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              placeholder="Playing football"
              style={{
                paddingLeft : 16,
                paddingBottom : 2,
                height : 40,
                marginTop : 4
              }}/>
          </View>
          
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state, props) {
  return {
      data : state.testReducer.test
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
