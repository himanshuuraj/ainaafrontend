import React, {Component} from 'react';
import { ImagePicker } from 'expo';
import { Touch, Text } from "./../ui-kit";


export default () => {

    _pickImage = async () => {
        try{
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [1, 1],
            });

            if (!result.cancelled) {
                alert(result.uri)
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