import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default (props) => {
    let { t, w, h, a, r, style, uri, onPress, ...rest} = props

    let st = { 
      ...{
        width : w ? w : undefined,
        height : h ? h : undefined,
        position : a ? 'absolute' : undefined,
        top : t ? t : undefined,
        right : r ? r : undefined
      }, ...style};

    if (onPress) 
      return <TouchableOpacity onPress={onPress}>
        <Image {...rest} style={st} source={{ uri }} />
      </TouchableOpacity>

    return (
      <Image {...rest} style={st} source={{ uri }} />
    );
}