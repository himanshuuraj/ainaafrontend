import React from 'react';
import { View } from 'react-native';

export default (props) => {
    let { c, a, row, jc, ai, height, width } = props
    return (
      <View style={{ ...{
          position : a ? 'absolute' : undefined, 
          backgroundColor : c,
          flexDirection : row ? "row" : "column",
          justifyContent : jc ? "center" : undefined,
          alignItems : ai ? "center" : undefined,
          height : height ? height : undefined,
          width : width ? width : undefined
        }, ...props.style }}>
          {props.children}
      </View>
    );
}