import React, {Component}  from 'react';
import { View, Text, Dimensions, TouchableOpacity, StatusBar, ScrollView, StyleSheet } from "react-native";
import { Color } from "../global/util";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { setData, createPost } from "../redux/action";
import GradientView from "./gradientView";
import {
    Form, Textarea, Thumbnail
} from "native-base";
import { Camera } from './../components/camera';

let { width, height } = Dimensions.get('window');
width = width;


class CommentModal extends Component{

    state = {
        text : ""
    }

    render(){
        let commentModal = this.props.commentModal || {};
        if(!commentModal.show)
            return null;
        return (
            <View style={{ 
                position : 'absolute', 
                backgroundColor : "rgba(52, 52, 52, 0.6)",
                justifyContent : 'center',
                alignItems : 'center',
                zIndex : 1,
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
                        Comments
                    </Text>
                    <ScrollView style={{ height : 400 }}>
                        {
                            [...Array(12)].map((item, index) => (
                                <View key={index} style={{ flexDirection : 'row', marginTop : 12 }}>
                                    <View style={{ width : 50 }}>
                                        <Thumbnail small 
                                            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'}}
                                        />
                                    </View>
                                    <View style={{ backgroundColor : '#eee', flex : 1, borderRadius : 16,
                                                    justifyContent : 'center', padding : 8 }}>
                                        <Text> This is the comment </Text>
                                    </View>
                                </View>
                            ))
                        }
                    </ScrollView>
                    <TouchableOpacity style={{
                        position : "absolute",
                        top : 10,
                        right : 10
                    }}
                    onPress={() => {
                        this.props.setData({ 
                            commentModal : {
                                show : false 
                            }
                        });
                    }}
                    >
                        <Text style={{
                            color : 'black',
                            fontSize : 24,
                            fontWeight : 'bold'
                        }}> X </Text>
                    </TouchableOpacity>
                    <View style={{ fontSize : 16, textAlign : 'center', marginTop : 10, flexDirection : 'row', alignItems : 'center' }}>
                        <Textarea 
                            onChangeText={text => this.setState({ text })}
                            rowSpan={1} bordered placeholder="Your comment here ...." style={{ padding : 10, height : 40, flex : 1 }} />
                        <Thumbnail square style={{ width : 30, marginLeft : 12, height : 30 }}
                            source={require('./../images/arrow_right.png')}/>
                    </View>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        commentModal : state.testReducer.commentModal
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      setData,
      createPost
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CommentModal);
  