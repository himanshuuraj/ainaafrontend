import React, { useReducer, useState, useContext, useRef, useEffect } from 'react';
import {
  Container,
  Content,
} from "native-base";
import {AsyncStorage} from 'react-native';
import {
  Color,
  viewObj,
  textObj
} from "../global/util";
import { useDispatch, useSelector } from 'react-redux';
import HeaderSection from "./../components/header";
import { setData, updateUserDetails, getUserDetail } from "./../redux/action";
import { Text, View, TextInput, Image, Touch, SearchModal } from './../ui-kit';

const initialState = {
  currentAddress: {},
  permanentAddress: {},
  jnv : {},
  bloodGroup : {}
}

const reducer = (state, { field, value }) => {
  if(field == "userInfo"){
    return {
      ...state,
      ...value
    }
  }
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

  const [state, dispatchStateAction] = useReducer(reducer, initialState);

  const [jnvSearchModal, setJnvSearchModal] = useState(false);
  const [bloodGroupSearchModal, setBloodGroupSearchModal] = useState(false);
  const [permanentCitySearchModal, setPermanentCitySearchModal] = useState(false);
  const [permanentStateSearchModal, setPermanentStateSearchModal] = useState(false);
  const [currentCitySearchModal, setCurrentCitySearchModal] = useState(false);
  const [currentStateSearchModal, setCurrentStateSearchModal] = useState(false);

  const dispatch = useDispatch()
  const setDataAction = (arg) => dispatch(setData(arg))

  let userInfo = useSelector(state => state.testReducer.userInfo) || [];
  let profilePic = useSelector(state => state.testReducer.loadedImageUrl);
  let jnvList = useSelector(state => state.testReducer.jnvList) || [];
  let bloodGroupList = useSelector(state => state.testReducer.bloodGroupList) || [];
  let cityList = useSelector(state => state.testReducer.cityList) || [];
  let stateList = useSelector(state => state.testReducer.stateList) || [];

  useEffect(() => {
    this.onMount();
  }, []);

  useEffect(() => {
    dispatchStateAction({ field : "userInfo", value : userInfo });
  }, [userInfo]);

  useEffect(() => {
    userInfo["profilePic"] = profilePic;
    dispatchStateAction({ field : "userInfo", value : userInfo });
  }, [profilePic]);

  onMount = async() => {
    let userInfo = await AsyncStorage.getItem('userInfo');
    userInfo = JSON.parse(userInfo);
    dispatchStateAction({ field : "userInfo", value : userInfo });
    setDataAction({ loadedImageUrl : userInfo.profilePic });
  } 

  hideShowPickArea = () => setDataAction({ pickJNV : { show : false } })

  formOnChangeText = (field, value) => {
    dispatchStateAction({ field, value });
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
          <Touch onPress={() => { setPermanentCitySearchModal(true) }}>
            <TextInput ml nl={2} uc={"#bbb"} ph="Katihar" pl={16} editable={false}
              value={state.permanentAddress.city}/>
          </Touch>
          <Text t={'State'} />
          <Touch onPress={() => { setPermanentStateSearchModal(true) }}>
            <TextInput ml nl={2} uc={"#bbb"} ph="Bihar" pl={16} editable={false}
              value={state.permanentAddress.state}/>
          </Touch>
          <Text t={'Pincode'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="560035" pl={16} pb={4} keyboardType='numeric'
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
          <Touch onPress={() => { setCurrentCitySearchModal(true) }}>
            <TextInput ml nl={2} uc={"#bbb"} ph="Katihar" pl={16} editable={false}
              value={state.currentAddress.city}/>
          </Touch>
          <Text t={'State'} />
          <Touch onPress={() => { setCurrentStateSearchModal(true) }}>
            <TextInput ml nl={2} uc={"#bbb"} ph="Bihar" pl={16} editable={false}
              value={state.currentAddress.state}/>
          </Touch>
          <Text t={'Pincode'} />
          <TextInput ml nl={2} uc={"#bbb"} ph="560035" pl={16} pb={4} keyboardType='numeric'
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
            <TextInput uc={"#bbb"} ph="1234567890" pl={16} pb={4} maxLength={10}
            onChangeText={this.formOnChangeText} name={'phoneNumber'} keyboardType='numeric'
            value={state.phoneNumber}/>
            <Text t={'Email'} />
            <TextInput uc={"#bbb"} ph="hraj3116@gmail.com" pb={4} pl={16}
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
            <Touch onPress={() => { setJnvSearchModal(true) }}>
              <TextInput ml nl={2} uc={"#bbb"} ph="JNV Katihar" pl={16} editable={false}
                name={'jnv.name'} value={state.jnv.name}/>
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

  profilePicUI = () => {
    return (
      <View style={{ ...viewObj, marginTop : 16, paddingVertical : 8, justifyContent : 'center', alignItems : 'center' }}>
        <Text style={{ ...textObj }} t={'Profile Pic'} />
        <Image uri={profilePic ? profilePic : (state.profilePic || 'https://image.cnbcfm.com/api/v1/image/106069136-1565284193572gettyimages-1142580869.jpeg?v=1566321345&w=1400&h=950')}
            w={160} h={160} br={80}/>
        <Touch onPress={() => {
          setDataAction({
            cameraModal : {
              show : true
            }
          })
        }} g w={160} mt={8} mb={8} br={4} s={16} h={36} c={'#fff'} t={'EDIT'}/>
      </View>
    )
  }

  bloodGroup = () => {
    return <View style={{ ...viewObj }}>
            <Text style={{ ...textObj }} t={'Blood Group'} />
            <Touch onPress={() => { setBloodGroupSearchModal(true) }}>
              <TextInput ml nl={2} uc={"#bbb"} ph="B+" pl={16} editable={false} h={'100%'}
                name={'bloodGroup.name'} value={state.bloodGroup.name}/>
            </Touch>
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
            if(profilePic)
              state["profilePic"] = profilePic;
            dispatch(updateUserDetails(state));
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

  closeSearchModal = name => {
    if(name == "jnv"){
      setJnvSearchModal(false);
    }
    else if(name == "bloodGroup"){
      setBloodGroupSearchModal(false);
    }
    else if(name == "currentCity"){
      setCurrentCitySearchModal(false);
    }
    else if(name == "currentState"){
      setCurrentStateSearchModal(false);
    }
    else if(name == "permanentCity"){
      setPermanentCitySearchModal(false);
    }
    else if(name == "permanentState"){
      setPermanentStateSearchModal(false);
    }
  }

  selectedItem = (name, value) => {
    if(name == "permanentState"){
      name = "permanentAddress.state";
      value = value.name;
    }else if(name == "permanentCity"){
      name = "permanentAddress.city";
      value = value.name;
    }else if(name == "currentState"){
      name = "currentAddress.state";
      value = value.name;
    }else if(name == "currentCity"){
      name = "currentAddress.city";
      value = value.name;
    }
    dispatchStateAction({ field: name, value });
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
          this.profilePicUI()
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
        <SearchModal show={jnvSearchModal} name={'jnv'} closeSearchModal={this.closeSearchModal} 
            itemList={jnvList} selectedItem={this.selectedItem}/>
        <SearchModal show={bloodGroupSearchModal} name={'bloodGroup'} closeSearchModal={this.closeSearchModal} 
            itemList={bloodGroupList} selectedItem={this.selectedItem}/>
        <SearchModal show={permanentCitySearchModal} name={'permanentCity'} closeSearchModal={this.closeSearchModal} 
            itemList={cityList} selectedItem={this.selectedItem}/>
        <SearchModal show={permanentStateSearchModal} name={'permanentState'} closeSearchModal={this.closeSearchModal} 
            itemList={stateList} selectedItem={this.selectedItem}/>
        <SearchModal show={currentCitySearchModal} name={'currentCity'} closeSearchModal={this.closeSearchModal} 
            itemList={cityList} selectedItem={this.selectedItem}/>
        <SearchModal show={currentStateSearchModal} name={'currentState'} closeSearchModal={this.closeSearchModal} 
            itemList={stateList} selectedItem={this.selectedItem}/>
      </Content>
    </Container>
  );
}
