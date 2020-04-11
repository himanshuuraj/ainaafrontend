import React, {useState, useEffect, useRef} from 'react';
import {
  Text, 
  View,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Color, getHeight } from '../global/util';
import { uploadOnAWSRequest } from "../global/request";
let { width, height } = Dimensions.get('window');

export default props => {

  let [cameraPermission, setCameraPermission] = useState(null);
  let [cameraType, setCameraType] = useState(Camera.Constants.Type.front);
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

  if (cameraPermission === null)
    return null;

  return (
    <View style={{ position : 'absolute', height, width, top: StatusBar.currentHeight, left : 0 }}>
        <View style={{flex : 1}}>
            <Camera 
              ref={cameraRef}
              type={cameraType}
              style={{ flex: 1 }}>
                <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        style={{
                          position : 'absolute',
                          top : StatusBar.currentHeight,
                          right : 10,
                          borderWidth : 1,
                          borderColor : Color.white,
                          borderRadius : 4,
                          justifyContent : 'center',
                          alignItems : 'center',
                          height : 36,
                          paddingHorizontal : 20
                        }}
                        onPress={() => {
                          this.props.hideCamera();
                      }}>
                      <Text style={{ fontSize: 18, color: 'white'}}> CLOSE </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={{
                        position : 'absolute',
                        bottom : 10,
                        left : 10,
                        borderWidth : 1,
                        borderColor : Color.white,
                        borderRadius : 4,
                        width : 60,
                        justifyContent : 'center',
                        alignItems : 'center',
                        height : 36
                      }}
                      onPress={() => {
                        type = cameraType === Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back
                        console.log(type)
                        setCameraType(type);
                    }}>
                      <Text style={{ fontSize: 18, color: 'white' }}> Flip </Text>
                  </TouchableOpacity>
                </View>
            </Camera>
        </View>
        <View style={{height: getHeight(6)}}>
            <TouchableOpacity style={{
                width: '100%',
                height: '100%',
                justifyContent : 'center',
                alignItems : 'center',
                backgroundColor : Color.themeColor
            }} onPress={() => {
                this.snap();
            }}>
                <Text style={{ 
                  color : 'white',
                  fontSize : 18
                }}>Save Image</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}