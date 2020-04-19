import React, {useState, useEffect, useRef} from 'react';
import {
  StatusBar,
  Dimensions
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Color } from '../global/util';
import { uploadOnAWSRequest } from "../global/request";
import { View, Touch } from "./../ui-kit";
import { useSelector } from 'react-redux';
import { shallowEqual, useSelector } from 'react-redux'


let { width, height } = Dimensions.get('window');

export default props => {

  let [cameraPermission, setCameraPermission] = useState(null);
  let [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  let [showCamera, toggleCamera] = useState(true);
  const cameraRef = useRef(null);

  useEffect(() => {
    setCamearPermissionOnInit();
  }, [cameraPermission]);

  setCamearPermissionOnInit = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    await setCameraPermission(status === "granted")
  }

  ajaxCall = async (obj, source = 'gallery') => {
      var data = new FormData();
      let v = obj.uri.split('/');
      v = v[v.length - 1];
      data.append('file', {
          uri: obj.uri,
          type: 'image/*',
          name: v
      });
      console.log(data);
      try{
        let response = await uploadOnAWSRequest(data);
        if(response.success){
          this.props.getAwsImageUrl(response.message);
        }else{
            this.props.setData({
              errorModalInfo : {
                showModal : true,
                message : response.message
              }
            });
        }
      }catch(err){
        this.props.setData({
          errorModalInfo : {
            showModal : true,
            message : JSON.stringify(err)
          }
        });
      }
      this.props.setData({
        loading : {
          show : false
        }
      });
      if(source == 'camera')
        this.props.hideCamera();
  }

  snap = async () => {
    // this.props.setData({
    //   loading : {
    //     show : true
    //   }
    // });
    console.log(cameraRef)
    try{
      if (cameraRef) {
        let photo = await cameraRef.current.takePictureAsync();
        console.group(photo, "PHOTO")
        // this.ajaxCall(photo, 'camera');
      }else{
        this.props.setData({
          loading : {
            show : false
          },
          errorModalInfo : {
            showModal : true,
            title : "Oops!",
            message : "Cannot load camera"
          }
        });
      }
    }catch(err){
      console.log(err)
    }
  };

  hideCamera = () => {
    toggleCamera(!showCamera )
  }

  flipCamera = () => {
    setCameraType(cameraType === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back);
  }

  if (cameraPermission === null)
    return null;

  if (!showCamera)
    return null;

  return (
    <View a h={height} w={width} to={StatusBar.currentHeight} le={0}>
        <View fl={1}>
            <Camera ref={cameraRef} type={cameraType} style={{ flex: 1 }}>
                <View row c={'transparent'} fl={1}>
                    <Touch h={36} jc a s={18} c={Color.white} t={'CLOSE'} w={120} 
                        boc={Color.white} br={4} bw={1} to={StatusBar.currentHeight} ri={10}
                        pH={20} onPress={hideCamera}/>
                    <Touch
                        a s={18} c={'#fff'} t={'FLIP'} h={36} ai jc w={60}
                        boc={Color.white} br={4} bw={1} le={10} bo={10}
                        onPress={flipCamera}/>
                </View>
            </Camera>
        </View>
        <Touch g w={width}
          c={'#fff'} s={18} t={'Save Image'} 
          boc={Color.white} onPress={snap}/>
    </View>
  );
}