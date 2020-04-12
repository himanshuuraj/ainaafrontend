import React from 'react';
import { View } from 'react-native';

export default (props) => {
    let { c, a, row, jc, ai, h, w, style, le, bo, ri, to, fl, ...rest} = props

    let st = { 
        ...{
          position : a ? 'absolute' : undefined, 
          backgroundColor : c,
          flexDirection : row ? "row" : "column",
          justifyContent : jc ? "center" : undefined,
          alignItems : ai ? "center" : undefined,
          height : h ? h : undefined,
          width : w ? w : undefined,
          flex : fl ? fl : undefined,
          left : le ? le : undefined,
          bottom : bo ? bo : undefined,
          right : ri ? r : undefined,
          top : to ? to : undefined,
        }, ...style};

    return (
      <View {...rest} style={st}>
          {props.children}
      </View>
    );
}