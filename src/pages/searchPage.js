import React, {Component} from 'react';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon
} from "native-base";
import {
  Color,
  viewObj,
  textObj
} from "../global/util";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { View, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import HeaderSection from "./../components/header";
class SearchPage extends Component {

  state = {
    addFilters : true
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <Container>
        <HeaderSection title={'Search'} />
        <Content style={{
          paddingLeft : "4%",
          width : "100%",
          paddingRight : "4%",
          backgroundColor : '#eee',
          paddingTop : 20
        }}>
          <TextInput 
              multiline
              numberOfLines={2}
              underlineColorAndroid="#bbb"
              style={{
                paddingLeft : 16,
                height : 40,
                borderWidth : 1,
                borderColor : Color.themeColor,
                borderRadius : 4
              }}
              placeholder="Search here ...."/>
            <View style={{ alignItems : "flex-end" }}>
              <Button 
                onPress={() => {
                  this.setState({ addFilters : !this.state.addFilters });
                }}
                style={{ backgroundColor : Color.themeColor, marginTop : 16, borderRadius : 4, height : 40 }}>
                <Icon name='ios-add' style={{ margin : 0 }}/>
                <Text> Filters</Text>
              </Button>
            </View>
            {
              this.state.addFilters && (
                <View style={{ ...viewObj, marginBottom : 8 }}>
                  <Text style={{
                    ...textObj
                  }}>FILTERS</Text>
                  <View style={{ 
                    flexDirection : 'row',
                    height : 32,
                    margin : 8,
                    alignItems : 'center',
                    justifyContent : 'space-between',
                    borderBottomWidth : StyleSheet.hairlineWidth
                  }}>
                    <Text> Search by name </Text>
                    <TouchableHighlight style={{
                      marginRight : 16,
                      borderWidth : 1,
                      borderRadius : 4,
                      paddingHorizontal : 4
                    }}>
                      <Icon name="ios-add" style={{
                        fontSize: 20
                      }}/>
                    </TouchableHighlight>
                  </View>
                  <View style={{ 
                    flexDirection : 'row',
                    height : 32,
                    margin : 8,
                    alignItems : 'center',
                    justifyContent : 'space-between',
                    borderBottomWidth : StyleSheet.hairlineWidth
                  }}>
                    <Text> Search by phone number </Text>
                    <TouchableHighlight style={{
                      marginRight : 16,
                      borderWidth : 1,
                      borderRadius : 4,
                      paddingHorizontal : 4
                    }}>
                      <Icon name="ios-add" style={{
                        fontSize: 20
                      }}/>
                    </TouchableHighlight>
                  </View>
                  <View style={{ 
                    flexDirection : 'row',
                    height : 32,
                    margin : 8,
                    alignItems : 'center',
                    justifyContent : 'space-between',
                    borderBottomWidth : StyleSheet.hairlineWidth
                  }}>
                    <Text> Search by email </Text>
                    <TouchableHighlight style={{
                      marginRight : 16,
                      borderWidth : 1,
                      borderRadius : 4,
                      paddingHorizontal : 4
                    }}>
                      <Icon name="ios-add" style={{
                        fontSize: 20
                      }}/>
                    </TouchableHighlight>
                  </View>
                  <View style={{ 
                    flexDirection : 'row',
                    height : 32,
                    margin : 8,
                    alignItems : 'center',
                    justifyContent : 'space-between',
                    borderBottomWidth : StyleSheet.hairlineWidth
                  }}>
                    <Text> Search in particular JNV </Text>
                    <TouchableHighlight style={{
                      marginRight : 16,
                      borderWidth : 1,
                      borderRadius : 4,
                      paddingHorizontal : 4
                    }}>
                      <Icon name="ios-add" style={{
                        fontSize: 20
                      }}/>
                    </TouchableHighlight>
                  </View>
                  <View style={{ 
                    flexDirection : 'row',
                    height : 32,
                    margin : 8,
                    alignItems : 'center',
                    justifyContent : 'space-between',
                    borderBottomWidth : StyleSheet.hairlineWidth
                  }}>
                    <Text> Search by current location </Text>
                    <TouchableHighlight style={{
                      marginRight : 16,
                      borderWidth : 1,
                      borderRadius : 4,
                      paddingHorizontal : 4
                    }}>
                      <Icon name="ios-add" style={{
                        fontSize: 20
                      }}/>
                    </TouchableHighlight>
                  </View>
                  <View style={{ 
                    flexDirection : 'row',
                    height : 32,
                    margin : 8,
                    alignItems : 'center',
                    justifyContent : 'space-between',
                    borderBottomWidth : StyleSheet.hairlineWidth
                  }}>
                    <Text> Search in batch </Text>
                    <TouchableHighlight style={{
                      marginRight : 16,
                      borderWidth : 1,
                      borderRadius : 4,
                      paddingHorizontal : 4
                    }}>
                      <Icon name="ios-add" style={{
                        fontSize: 20
                      }}/>
                    </TouchableHighlight>
                  </View>
                  <View style={{ 
                    flexDirection : 'row',
                    height : 32,
                    margin : 8,
                    alignItems : 'center',
                    justifyContent : 'space-between',
                    borderBottomWidth : StyleSheet.hairlineWidth
                  }}>
                    <Text> Search by blood group </Text>
                    <TouchableHighlight style={{
                      marginRight : 16,
                      borderWidth : 1,
                      borderRadius : 4,
                      paddingHorizontal : 4
                    }}>
                      <Icon name="ios-add" style={{
                        fontSize: 20
                      }}/>
                    </TouchableHighlight>
                  </View>
                  <View style={{ 
                    flexDirection : 'row',
                    height : 32,
                    margin : 8,
                    alignItems : 'center',
                    justifyContent : 'space-between',
                    borderBottomWidth : StyleSheet.hairlineWidth
                  }}>
                    <Text> Search by area of interest </Text>
                    <TouchableHighlight style={{
                      marginRight : 16,
                      borderWidth : 1,
                      borderRadius : 4,
                      paddingHorizontal : 4
                    }}>
                      <Icon name="ios-add" style={{
                        fontSize: 20
                      }}/>
                    </TouchableHighlight>
                  </View>
                </View>
              )
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
