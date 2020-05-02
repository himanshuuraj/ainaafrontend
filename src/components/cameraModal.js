import React  from 'react';
import { Dimensions, StatusBar } from "react-native";
import { Color } from "../global/util";
import GalleryImagePicker from "./../components/galleryImagePicker";
import CameraImagePicker from "./../components/cameraImagePicker";
import { useSelector, useDispatch } from 'react-redux';
import { View, Touch, Text } from "./../ui-kit";
import { setData } from "./../redux/action";

let { width, height } = Dimensions.get('window');

export default () => {

    const dispatch = useDispatch()
    const setDataAction = (arg) => dispatch(setData(arg))

    let cameraModal = useSelector(state => state.testReducer.cameraModal)
    if(!cameraModal.show)
        return null

    hideCameraModal = () => {
        setDataAction({
            cameraModal : {
                show: false
            }
        })
    }

    return (
        <View a c={"rgba(52, 52, 52, 0.6)"} jc ai zi={999} to={0} le={0} 
            h={height} w={width}>
            <View w={width-48} br={8} c={'white'} jc pa={16} bw={1} bc={Color.themeColor}>
                {/* <Touch pb={8} onPress={this.hideCameraModal}>
                    <CameraImagePicker />
                </Touch> */}
                <Touch pt={0} onPress={this.hideCameraModal}>
                    <GalleryImagePicker />
                </Touch>
            </View>
            <Touch ai jc mt={50} onPress={this.hideCameraModal}>
                <Text s={18} b c={"#fff"} t={"SKIP"} />
            </Touch>
        </View>
    );
}