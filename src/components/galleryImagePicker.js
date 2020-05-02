import React, {Component} from 'react';
import { ImagePicker } from 'expo';
import { Touch, Text } from "./../ui-kit";
import { uploadOnAWSRequest } from "./../global/request";
import { useDispatch, useSelector } from 'react-redux';
import { setData } from "./../redux/action";


export default () => {

    const dispatch = useDispatch()
    const setDataAction = (arg) => dispatch(setData(arg))

    _pickImage = async () => {
        try{
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [1, 1],
                quality : 1
            });

            if (!result.cancelled) {
                this.ajaxCall(result);
            }
        }catch(e){
            console.log(e, "ERR");
        }
    };

    ajaxCall = async (obj) => {
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
          setDataAction({ loading : { show : true }, cameraModal : { show : false }});
          let response = await uploadOnAWSRequest(data);
          console.log(response, "Response");
          setDataAction({ loading : { show : false } })
          if(response.success){
            setDataAction({ loadedImageUrl : response.message });
          }
        }catch(err){
            setDataAction({ loading : { show : false } })
            console.log(err, "ERROR");
        }
    }

    return (
        <Touch g
            onPress={this._pickImage}
            center={'center'}
            s={14} c={'#fff'} b t={'Select image from gallery'}
        />
    );
}