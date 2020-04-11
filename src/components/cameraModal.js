import React, {Component}  from 'react';
import { View, Text, Dimensions, TouchableOpacity, StatusBar, TouchableHighlight } from "react-native";
import { Color } from "../global/util";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { setData } from "../redux/action";
import Camera from "./../components/camera";
import GradientView from "./../components/gradientView";
import GalleryImagePicker from "./../components/galleryImagePicker";
import CameraImagePicker from "./../components/cameraImagePicker";

let { width, height } = Dimensions.get('window');
width = width;


class CameraModal extends Component{

    state = {
        showCamera : false
    }

    constructor(props){
        super(props)
    }

    hideCamera = () => {
        this.setState({
            showCamera : false
        })
    }

    render(){
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
                {/* <View style={{ height, width, backgroundColor: 'red' }}>
                    <Camera type="camera" hideCamera={this.hideCamera} getAwsImageUrl={this.getAwsImageUrl} />
                </View> */}
                <View style={{ width: width - 48, borderRadius: 8, backgroundColor : 'white', 
                                justifyContent : 'center',  padding: 16,
                                borderWidth : 1, borderColor : Color.themeColor
                    }}>
                    <CameraImagePicker />
                    <GalleryImagePicker />
                </View>
                {/* <Camera type="camera" hideCamera={this.hideCamera} getAwsImageUrl={this.getAwsImageUrl} /> */}
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        confirmModalInfo : state.testReducer.confirmModalInfo
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      setData
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CameraModal);