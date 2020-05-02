import React, {Component} from 'react';
import { ImagePicker } from 'expo';
import { Touch, Text } from "../ui-kit";
import { useSelector, useDispatch } from 'react-redux';
import { setData } from "./../redux/action";


export default () => {

    const dispatch = useDispatch()
    const setDataAction = (arg) => dispatch(setData(arg))

    _pickImage = async () => {
        setDataAction({
            camera: {
                show : true
            }
        })
    };

    return (
        <Touch g
            onPress={this._pickImage}
            center={'center'}
            s={14} c={'#fff'} b t={'Select image from camera'}
        />
    );
}