import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
} from "native-base";
import { View, TextInput, Image, TouchableOpacity, TouchableHighlight } from "react-native";
import {
  Color,
  viewObj,
  textObj
} from "../global/util";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import HeaderSection from "./../components/header";
import JNVList from "./../components/jnvList";
import { setData } from "./../redux/action";
import GradientView from "./../components/gradientView";

class ProfilePage extends Component {

  state = {
    activeScreen  : 'home',
    userData : {
      currentAddress : {},
      permanentAddress : {},
      jnv : {}
    }
  };

  hideShowPickArea = () => {
    this.props.setData({
      pickJNV : {
        show : false
    }
    });
  }

  selectedArea = jnv => {
    this.updateData({ jnv });
  }

  updateData = obj => {
    let userData = this.state.userData;
    userData = { ...userData, ...obj };
    this.setState({userData});
  } 
  
  permanentAddress = () => {
    return (
      <View style={{ ...viewObj, marginBottom : 8 }}>
          <Text style={{
            ...textObj
          }}>Permanent Address</Text>
          <View style={{
            paddingHorizontal : 8,
            paddingTop : 16,
            paddingBottom : 4
          }}>
            <Text>Line1</Text>
            <TextInput 
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="Belmonte Heights"
              onChangeText={line1 => {
                let permanentAddress = this.state.userData.permanentAddress;
                permanentAddress.line1 = line1;
                this.updateData({ permanentAddress });
              }}
              value={this.state.userData.permanentAddress.line1}
              />
            <Text>Line2</Text>
            <TextInput
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="18th B Main Road"
              onChangeText={line2 => {
                let permanentAddress = this.state.userData.permanentAddress;
                permanentAddress.line2 = line2;
                this.updateData({ permanentAddress });
              }}
              value={this.state.userData.permanentAddress.line2}
              />
            <Text>LandMark</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="near Cult.fit Gym"
              onChangeText={landmark => {
                let permanentAddress = this.state.userData.permanentAddress;
                permanentAddress.landmark = landmark;
                this.updateData({ permanentAddress });
              }}
              value={this.state.userData.permanentAddress.landmark}
              />
            <Text>City</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="Patna"
              onChangeText={city => {
                let permanentAddress = this.state.userData.permanentAddress;
                permanentAddress.city = city;
                this.updateData({ permanentAddress });
              }}
              value={this.state.userData.permanentAddress.city}
              />
            <Text>State</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="Bihar"
              onChangeText={state => {
                let permanentAddress = this.state.userData.permanentAddress;
                permanentAddress.state = state;
                this.updateData({ permanentAddress });
              }}
              value={this.state.userData.permanentAddress.state}
              />
            <Text>PinCode</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="560034"
              keyboardType='numeric'
              onChangeText={pinCode => {
                let permanentAddress = this.state.userData.permanentAddress;
                permanentAddress.pinCode = pinCode;
                this.updateData({ permanentAddress });
              }}
              value={this.state.userData.permanentAddress.pinCode}
              />
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
            paddingTop : 16,
            paddingBottom : 8
          }}>
            <Text>Line1</Text>
            <TextInput 
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="Belmonte Heights"
              onChangeText={line1 => {
                let currentAddress = this.state.userData.currentAddress;
                currentAddress.line1 = line1;
                this.updateData({ currentAddress });
              }}
              value={this.state.userData.currentAddress.line1}/>
            <Text>Line2</Text>
            <TextInput
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="18th B Main Road"
              onChangeText={line2 => {
                let currentAddress = this.state.userData.currentAddress;
                currentAddress.line2 = line2;
                this.updateData({ currentAddress });
              }}
              value={this.state.userData.currentAddress.line2}
              />
            <Text>LandMark</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="near Cult.fit Gym"
              onChangeText={landmark => {
                let currentAddress = this.state.userData.currentAddress;
                currentAddress.landmark = landmark;
                this.updateData({ currentAddress });
              }}
              value={this.state.userData.currentAddress.landmark}
              />
            <Text>City</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="Patna"
              onChangeText={city => {
                let currentAddress = this.state.userData.currentAddress;
                currentAddress.city = city;
                this.updateData({ currentAddress });
              }}
              value={this.state.userData.currentAddress.city}
              />
            <Text>State</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="Bihar"
              onChangeText={state => {
                let currentAddress = this.state.userData.currentAddress;
                currentAddress.state = state;
                this.updateData({ currentAddress });
              }}
              value={this.state.userData.currentAddress.state}
              />
            <Text>PinCode</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="560034"
              keyboardType='numeric'
              onChangeText={pinCode => {
                let currentAddress = this.state.userData.currentAddress;
                currentAddress.pinCode = pinCode;
                this.updateData({ currentAddress });
              }}
              value={this.state.userData.currentAddress.pinCode}
              />
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
            paddingTop : 16,
            paddingBottom : 4
          }}>
            <Text>Phone Number</Text>
            <TextInput 
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="1234567890"
              onChangeText={phone => {
                this.updateData({ phone });
              }}
              keyboardType='numeric'
              value={this.state.userData.phone}/>
            <Text>Email</Text>
            <TextInput
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="hraj3116@gmail.com"
              onChangeText={email => {
                this.updateData({ email });
              }}
              value={this.state.userData.email}/>
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
            paddingTop : 16,
            paddingBottom : 4
          }}>
            <Text>Navodaya Name</Text>
            <TouchableHighlight onPress={() => {
                  this.props.setData({
                    pickJNV : {
                      show : true
                    }
                  });
                }}>
              <TextInput 
                multiline
                numberOfLines={2}
                underlineColorAndroid="#bbb"
                style={{
                  paddingLeft : 16
                }}
                editable={false}
                placeholder="JNV Katihar"
                value={this.state.userData.jnv.area}
                />
              </TouchableHighlight>
            <Text>Admission Year</Text>
            <TextInput
              multiline
              numberOfLines={2}
              keyboardType='numeric'
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="2012"
              onChangeText={admissionYear => {
                this.updateData({ admissionYear });
              }}
              value={this.state.userData.admissionYear}/>
            <Text>Passout Year</Text>
            <TextInput
              multiline
              numberOfLines={2}
              keyboardType='numeric'
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="2012"
              onChangeText={passoutYear => {
                this.updateData({ passoutYear });
              }}
              value={this.state.userData.passoutYear}/>
            {/* <Text>Migration</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="JNV-Patna"/> */}
            {/* <Text>Address of JNV</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              numberOfLines = {4}
              style={{
                paddingLeft : 16,
                paddingBottom : 4
              }}
              placeholder="JNV araria R.S. 560034"/> */}
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

  bloodGroup = () => {
    return <View style={{ ...viewObj }}>
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
              }}
              onChangeText={bloodGroup => {
                this.updateData({bloodGroup});
              }}
              value={this.state.userData.bloodGroup}/>
          </View>
  }

  name = () => {
    return (
      <View style={{ ...viewObj, marginBottom : 8 }}>
          <Text style={{
            ...textObj
          }}>Full Name</Text>
          <View style={{
            paddingHorizontal : 8,
            paddingTop : 16,
            paddingBottom : 4
          }}>
            <Text>First Name</Text>
            <TextInput 
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="Prem"
              onChangeText={firstName => {
                this.updateData({ firstName });
              }}
              value={this.state.userData.firstName}/>
            <Text>Last Name</Text>
            <TextInput
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16
              }}
              placeholder="Piyush"
              onChangeText={lastName => {
                this.updateData({ lastName });
              }}
              value={this.state.userData.lastName}/>
          </View>
      </View>
    );
  }

  updateUI = () => {
    return <TouchableOpacity
          style={{
              flex : 1,
              justifyContent : 'center',
              marginBottom : 40,
              height : 48,
              width : '100%',
              borderRadius : 4,
              marginRight : 8
          }}
          onPress={e => {
            console.log(this.state);
          }}
      >
        <GradientView h={'100%'}>
            <Text style={{ fontSize : 14, color : Color.themeFontColor, fontWeight : 'bold', textAlign : 'center' }}>
                UPDATE
            </Text>
        </GradientView>
      </TouchableOpacity>
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
          {
            this.name()
          }
          
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
          {
            this.bloodGroup()
          }
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

          {
            this.updateUI()
          }

          <JNVList hideShowPickArea={this.hideShowPickArea} selectedArea={this.selectedArea}/>
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
    setData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
