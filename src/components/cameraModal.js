import React  from 'react';
import { View, Dimensions, StatusBar } from "react-native";
import { Color } from "../global/util";
import GalleryImagePicker from "./../components/galleryImagePicker";
import CameraImagePicker from "./../components/cameraImagePicker";
import { useSelector } from 'react-redux';

let { width, height } = Dimensions.get('window');

export default props => {

    let cameraModal = useSelector(state => state.testReducer.camera)
    if(!cameraModal.show)
        return null

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
                <CameraImagePicker />
                <GalleryImagePicker />
            </View>
        </View>
    );
}