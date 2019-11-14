import React, {Component} from 'react';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
  Badge
} from "native-base";
import {
  Color
} from "../global/util";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import HeaderSection from "./../components/header";

class HomePage extends Component {

  state = {
    activeScreen  : 'home'
  };

  eventsInfo = () => {
    return (
      <View style={{ borderRadius : 8, marginBottom : 8, marginVertical : 16, borderWidth : StyleSheet.hairlineWidth }}>
          <TouchableOpacity style={{ 
            flexDirection : 'row',
            height : 48, paddingHorizontal : 16, alignItems : 'center',
            borderBottomWidth : 1, borderColor : '#bbb', justifyContent: 'space-between' }}>
              <View style={{ flexDirection : 'row' }}>
                <Text>
                  Ongoing Events 
                </Text>
                <View style={{
                  borderRadius : 4,
                  backgroundColor : Color.themeColor,
                  marginLeft : 8,
                  paddingHorizontal : 4,
                  paddingVertical : 2
                }}>
                  <Text style={{
                    color : Color.white
                  }}>2</Text>
                </View>
              </View>
            <Icon name={'ios-arrow-dropright'} style={{ fontSize : 24 }}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection : 'row',
            height : 48, paddingHorizontal : 16, alignItems : 'center',
            borderBottomWidth : 1, borderColor : '#bbb', justifyContent: 'space-between' }}>
              <View style={{ flexDirection : 'row' }}>
            <Text>
              Previous Events
            </Text>
            <View style={{
                  borderRadius : 4,
                  backgroundColor : Color.themeColor,
                  marginLeft : 8,
                  paddingHorizontal : 4,
                  paddingVertical : 2
                }}>
                  <Text style={{
                    color : Color.white
                  }}>5</Text>
                </View>
              </View>
            <Icon name={'ios-arrow-dropright'} style={{ fontSize : 24 }}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection : 'row',
            height : 48, paddingHorizontal : 16, alignItems : 'center',
            borderBottomWidth : 1, borderColor : '#bbb', justifyContent: 'space-between' }}>
              <View style={{ flexDirection : 'row' }}>
            <Text>
              Upcoming Events
            </Text>
            <View style={{
                  borderRadius : 4,
                  backgroundColor : Color.themeColor,
                  marginLeft : 8,
                  paddingHorizontal : 4,
                  paddingVertical : 2
                }}>
                  <Text style={{
                    color : Color.white
                  }}>4</Text>
                </View>
              </View>
            <Icon name={'ios-arrow-dropright'} style={{ fontSize : 24 }}/>
          </TouchableOpacity>
      </View>
    );
  }

  otherInfo = () => {
    return (
      <View style={{ borderRadius : 8, marginBottom : 8, marginVertical : 16, borderWidth : StyleSheet.hairlineWidth }}>
          <TouchableOpacity style={{ 
            flexDirection : 'row',
            height : 48, paddingHorizontal : 16, alignItems : 'center',
            borderBottomWidth : 1, borderColor : '#bbb', justifyContent: 'space-between' }}>
            <Text>
              About Us
            </Text>
            <Icon name={'ios-arrow-dropright'} style={{ fontSize : 24 }}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection : 'row',
            height : 48, paddingHorizontal : 16, alignItems : 'center',
            borderBottomWidth : 1, borderColor : '#bbb', justifyContent: 'space-between' }}>
            <Text>
              Mission
            </Text>
            <Icon name={'ios-arrow-dropright'} style={{ fontSize : 24 }}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection : 'row',
            height : 48, paddingHorizontal : 16, alignItems : 'center',
            borderBottomWidth : 1, borderColor : '#bbb', justifyContent: 'space-between' }}>
            <Text>
              Vision
            </Text>
            <Icon name={'ios-arrow-dropright'} style={{ fontSize : 24 }}/>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection : 'row',
            height : 48, paddingHorizontal : 16, alignItems : 'center', justifyContent: 'space-between' }}>
            <Text>
              Privacy Policy
            </Text>
            <Icon name={'ios-arrow-dropright'} style={{ fontSize : 24 }}/>
          </TouchableOpacity>
      </View>
    );
  }

  render(){
    return (
      <Container>
        <HeaderSection title={'Info'} />
        <Content style={{
          backgroundColor : Color.backgroundThemeColor,
          paddingHorizontal : 16
        }}>
          {
            this.otherInfo()
          }
          {
            this.eventsInfo()
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
