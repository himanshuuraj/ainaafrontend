import React, {Component}  from 'react';
import { View, Text, Dimensions, TouchableOpacity, StatusBar, ScrollView, StyleSheet, ToouchableOpacity } from "react-native";
import { Color } from "../global/util";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { setData, createPost } from "../redux/action";
import GradientView from "./gradientView";
import {
    Form, Textarea
} from "native-base";
import { Camera } from './../components/camera';

let { width, height } = Dimensions.get('window');
width = width;


class PostModal extends Component{

    state = {
        text : ""
    }

    getAwsImageUrl = (imageUrl) => {
        let imageList = this.state.imageList;
        imageList.push({ uri : imageUrl });
        this.setState({ imageList });
    }

    addImage = () => {
        return (
          <View style={{ ...viewObj }}>
              <Text style={{
                ...textObj
              }}>Pick Gallery</Text>
            <View style={{
                paddingHorizontal : 8,
                paddingVertical : 16
              }}>
              <TouchableOpacity
                style={{
                  borderWidth : 1,
                  borderColor : Color.black,
                  borderRadius : 4,
                  justifyContent : 'center',
                  alignItems : 'center',
                  marginVertical : 8,
                  height : 36
                }}
                onPress={e => {
                  this.props.setData({ showCamera : true });
                }}
              >
                <Text style={{ fontSize : 14 }}>ADD IMAGE FROM CAMERA</Text>
              </TouchableOpacity>
              <Camera type={'gallery'} getAwsImageUrl={this.getAwsImageUrl} /> 
            </View>
          </View>
        );
      }

    render(){
        let postModal = this.props.postModal || {};
        if(!postModal.show)
            return null;
        return (
            <View style={{ 
                position : 'absolute', 
                backgroundColor : "rgba(52, 52, 52, 0.6)",
                justifyContent : 'center',
                alignItems : 'center',
                zIndex : 999,
                top : 0,
                left : 0,
                height,
                width,
                marginTop : StatusBar.currentHeight
            }}>
                <View style={{ width: width - 48, borderRadius: 8, backgroundColor : 'white', 
                                justifyContent : 'center',  padding: 16,
                                borderWidth : 1, borderColor : Color.themeColor
                    }}>
                    <Text style={{ fontSize : 18, fontWeight : 'bold' }}>
                        POST HERE
                    </Text>
                    <Form style={{ fontSize : 16, textAlign : 'center', marginTop : 10  }}>
                        <Textarea 
                            onChangeText={text => this.setState({ text })}
                            rowSpan={5} bordered placeholder="Your post here ...." style={{ padding : 10 }} />
                    </Form>
                    {/* <ScrollView horizontal style={{ flexDirection : 'row', marginTop : 16 }}>
                        {
                            [...Array(15)].map(item => (
                                <View style={{ width : 50, height : 50, backgroundColor : 'red', marginRight : 10 }}>

                                </View>
                            ))
                        }
                    </ScrollView> */}

                    {/* {
                        this.addImage()
                    } */}

                    <View style={{ flexDirection : 'row'}}>
                        <TouchableOpacity
                            style={{
                                flex : 1,
                                justifyContent : 'center',
                                marginTop : 20,
                                marginBottom : 5,
                                height : 36,
                                width : '100%',
                                backgroundColor : Color.white,
                                borderWidth : 1,
                                justifyContent : 'center',
                                alignItems : 'center',
                                marginRight : 8
                            }}
                            onPress={e => {
                            }}
                        >
                            <Text style={{ fontSize : 14, color : Color.black }}>
                                CANCEL
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex : 1,
                                justifyContent : 'center',
                                marginTop : 20,
                                marginBottom : 5,
                                height : 36,
                                width : '100%',
                                borderRadius : 4
                            }}
                            onPress={() => {
                                this.props.createPost({ text : this.state.text });
                            }}>
                            <GradientView h={'100%'}>
                                <Text style={{ fontSize : 14, color : Color.themeFontColor, fontWeight : 'bold', textAlign : 'center' }}>
                                    POST
                                </Text>
                            </GradientView>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        postModal : state.testReducer.postModal
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      setData,
      createPost
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostModal);

  let viewObj = {
    marginTop : 16, 
    borderWidth: StyleSheet.hairlineWidth, 
    borderRadius : 4
  }
  
  let textObj = {
    position : 'absolute',
    top : -8,
    left : 8,
    fontSize : 12,
    backgroundColor : Color.white,
    paddingHorizontal : 2,
    backgroundColor : Color.backgroundThemeColor
  }
  