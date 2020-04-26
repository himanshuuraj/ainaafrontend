import React, { useReducer, useState, useContext, useRef } from 'react';
import {
  Container,
  Content,
} from "native-base";
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
import { Text, View, TextInput, Image, Touch } from './../ui-kit';

const initialState = {
  currentAddress: {},
  permanentAddress: {},
  jnv : {},
}

const reducer = (state, { field, value }) => {
  if(field.includes(".")){
    let field2 = field.split(".")[1];
    let field1 = field.split(".")[0];
    let obj = {};
    obj[field1] = state[field1];
    obj[field1] = { ...obj[field1], [field2]: value };
    obj[field1][field2] = value;
    return {
      ...state,
      ...obj
    }
  }
  return {
    ...state,
    [field]: value
  }
}

export default props => {

  const [state, dispatch] = useReducer(reducer, initialState);

  formOnChangeText = (field, value) => {
    dispatch({ field, value });
  }

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
  
  permanentAddress = () => {
    return (
      <View mb={8} style={{ ...viewObj }}>
        <Text style={{ ...textObj  }} t={'Permanent Address'} />
        <View pt={16} pb={8} ph={8}>
          <Text t={'Line1'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="Belmonte Heights" pl={16}
            onChangeText={this.formOnChangeText} name={'permanentAddress.line1'}
            value={state.permanentAddress.line1}/>
          <Text t={'Line2'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="18th B Main Road" pl={16}
            onChangeText={this.formOnChangeText} name={'permanentAddress.line2'}
            value={state.permanentAddress.line2}/>
          <Text t={'LandMark'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="City Mall" pl={16} pb={4}
            onChangeText={this.formOnChangeText} name={'permanentAddress.landmark'}
            value={state.permanentAddress.landmark}/>
          <Text t={'City'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="Delhi" pl={16} pb={4}
            onChangeText={this.formOnChangeText} name={'permanentAddress.city'}
            value={state.permanentAddress.city}/>
          <Text t={'State'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="Bihar" pl={16} pb={4}
            onChangeText={this.formOnChangeText} name={'permanentAddress.state'}
            value={state.permanentAddress.state}/>
          <Text t={'Pincode'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="560035" pl={16} pb={4}
            onChangeText={this.formOnChangeText} name={'permanentAddress.pincode'}
            value={state.permanentAddress.pincode}/>
        </View>
      </View>
    );
  }

  currentAddress = () => {
    return (
      <View mb={8} style={{ ...viewObj }}>
        <Text style={{ ...textObj  }} t={'Current Address'} />
        <View pt={16} pb={8} ph={8}>
          <Text t={'Line1'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="Belmonte Heights" pl={16}
            onChangeText={this.formOnChangeText} name={'currentAddress.line1'}
            value={state.currentAddress.line1}/>
          <Text t={'Line2'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="18th B Main Road" pl={16}
            onChangeText={this.formOnChangeText} name={'currentAddress.line2'}
            value={state.currentAddress.line2}/>
          <Text t={'LandMark'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="City Mall" pl={16} pb={4}
            onChangeText={this.formOnChangeText} name={'currentAddress.landmark'}
            value={state.currentAddress.landmark}/>
          <Text t={'City'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="Delhi" pl={16} pb={4}
            onChangeText={this.formOnChangeText} name={'currentAddress.city'}
            value={state.currentAddress.city}/>
          <Text t={'State'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="Bihar" pl={16} pb={4}
            onChangeText={this.formOnChangeText} name={'currentAddress.state'}
            value={state.currentAddress.state}/>
          <Text t={'Pincode'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="560035" pl={16} pb={4}
            onChangeText={this.formOnChangeText} name={'currentAddress.pincode'}
            value={state.currentAddress.pincode}/>
        </View>
      </View>
    );
  }

  communicationDetails = () => {
    return (
      <View style={{ ...viewObj, marginBottom : 8 }}>
          <Text style={{ ...textObj }} t={'Communication Details'} />
          <View ph={8} pt={16} pb={4}>
            <Text t={'Phone Number'} />
            <TextInput uc={"#bbb"} ph="1234567890" pl={16} pb={4}
            onChangeText={this.formOnChangeText} name={'phone'} keyboardType='numeric'
            value={state.phone}/>
            <Text t={'Email'} />
            <TextInput uc={"#bbb"} ph="hraj3116@gmail.com" pl={16}
            onChangeText={this.formOnChangeText} name={'email'}
            value={state.email}/>
          </View>
      </View>
    );
  }

  navodayaDetails = () => {
    return (
      <View style={{ ...viewObj, marginBottom : 8 }}>
        <Text style={{ ...textObj }} t={'Navodaya Details'} />
          <View ph={8} pt={16} pb={4}>
            <Text t={'Navodaya Name'} />
            <Touch onPress={() => {
                  // this.props.setData({
                  //   pickJNV : {
                  //     show : true
                  //   }
                  // });
                }}>
              <TextInput ml nl={2} uc={"#bbb"} ph="JNV Katihar" pl={16} editable={false}
                onChangeText={this.formOnChangeText} name={'jnv.area'} value={state.jnv.area}/>
            </Touch>
            <Text t={'Admission Year'}/>
            <TextInput ml nl={2} uc={"#bbb"} ph="2012" pl={16}
              onChangeText={this.formOnChangeText} name={'admissionYear'} keyboardType='numeric'
              value={state.admissionYear}/>
            <Text t={'Passout Year'} />
            <TextInput ml nl={2} uc={"#bbb"} ph="2016" pl={16}
              onChangeText={this.formOnChangeText} name={'passoutYear'} keyboardType='numeric'
              value={state.passoutYear}/>
          </View>
      </View>
    );
  }

  profilePic = () => {
    return (
      <View style={{ ...viewObj, marginTop : 16, paddingVertical : 8, justifyContent : 'center', alignItems : 'center' }}>
        <Text style={{ ...textObj }} t={'Profile Pic'} />
        <Image uri={'https://image.cnbcfm.com/api/v1/image/106069136-1565284193572gettyimages-1142580869.jpeg?v=1566321345&w=1400&h=950'}
            w={160} h={160} br={80}/>
        <Touch g w={160} mt={8} mb={8} br={4} s={16} h={36} c={'#fff'} t={'EDIT'}/>
      </View>
    )
  }

  bloodGroup = () => {
    return <View style={{ ...viewObj }}>
            <Text style={{ ...textObj }} t={'Blood Group'} />
            <TextInput ml nl={2} uc={"#bbb"} ph="B+" pl={16} pb={2} h={40} mt={4}
              onChangeText={this.formOnChangeText} name={'bloodGroup'}
              value={state.bloodGroup}/>
          </View>
  }

  nameUI = () => {
    return (
      <View style={{ ...viewObj, marginBottom : 8 }}>
          <Text style={{ ...textObj }} t={'Full Name'} />
          <View ph={8} pt={16} pb={4}>
            <Text t={'First Name'} />
            <TextInput ml nl={2} uc={"#bbb"} ph="Prem" pl={16} pb={2} h={40} mt={4}
              onChangeText={this.formOnChangeText} name={'firstName'}
              value={state.firstName}/>
            <Text t={'Last Name'} />
            <TextInput ml nl={2} uc={"#bbb"} ph="Prem" pl={16} pb={2} h={40} mt={4}
              onChangeText={this.formOnChangeText} name={'lastName'}
              value={state.lastName}/>
          </View>
      </View>
    );
  }

  updateUI = () => {
    return <Touch jc mb={40} w={'100%'} br={4} mr={8} fl={1} g s={16} c={Color.themeFontColor} b t={'UPDATE'}
          onPress={e => {
            console.log(state, "STATE");
          }}
        />
  }

  statusUI = () => {
    return (
      <View style={{ ...viewObj }}>
        <Text style={{ ...textObj }} t={'Current Status'} />
        <TextInput ml nl={2} uc={"#bbb"} ph="Job/Study/Others" pl={16} pb={2} h={40} mt={4}
              onChangeText={this.formOnChangeText} name={'status'}
              value={state.status}/>
      </View>
    )
  }

  areaOfInterest = () => {
    return (
      <View mb={32} style={{ ...viewObj }}>
        <Text style={{ ...textObj }} t={'Area Of Interest'} />
        <TextInput uc={"#bbb"} ph="Playing football" pl={16} pb={2} h={40} mt={4}
              onChangeText={this.formOnChangeText} name={'areaOfInterest'}
              value={state.areaOfInterest}/>
      </View>
    )
  }

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
            this.nameUI()
          }
          {
            this.communicationDetails()
          }
          {
            this.statusUI()
          }
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
          {
            this.areaOfInterest()
          }
          {
            this.updateUI()
          }
          <JNVList hideShowPickArea={this.hideShowPickArea} selectedArea={this.selectedArea}/>
        </Content>
      </Container>
    );
}

// function mapStateToProps(state, props) {
//   return {
//       data : state.testReducer.test
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({
//     setData
//   }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
