import React, {Component} from 'react';
import { ImagePicker } from 'expo';
import { Touch, Text } from "./../ui-kit";


export default () => {

    _pickImage = async () => {
        console.log("AAAA");
        try{
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        if (!result.cancelled) {
            // this.setState({ image: result.uri });
        }
        }catch(e){
            console.log(e, "ERR");
        }
    };

    return (
        <Touch g
            onPress={this._pickImage}
            center={'center'}
            s={14} c={'#fff'} b t={'Select image from gallery'}
        />
    );
}