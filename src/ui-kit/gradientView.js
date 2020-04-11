import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo';

let { width, height } = Dimensions.get('window');
width = width;
// height = width * 0.8;

export default props => {

    let {w, h, flex, v} = props;
    return (
            <LinearGradient
                colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                start={v ? {x: 0.0, y: 0.0} : {x: 0.0, y: 1.0}} end={v ? {x: 0.0, y: 1.0} : {x: 1.0, y: 1.0}}
                style={{justifyContent: 'center', height : h, width: w, flex}}
            >
                {props.children}
            </LinearGradient>
    );
  }
