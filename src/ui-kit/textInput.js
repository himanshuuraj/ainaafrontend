import React from 'react';
import { TextInput } from 'react-native';

export default (props) => {
    let { ml, nl, uc, pl, ph, h, mt, style, name, value, onChangeText, ...rest} = props

    let st = { 
      ...{
        paddingLeft : pl ? pl : undefined,
        height : h ? h : undefined,
        marginTop : mt ? mt : undefined
      }, ...style};

    return (
      <TextInput  
        multiline = {ml ? ml : undefined}
        numberOfLines={nl ? nl : undefined}
        underlineColorAndroid={uc ? uc : undefined}
        style={st}
        placeholder={ph ? ph : undefined}
        onChangeText={text => onChangeText(name, text)}
        value={value}  {...rest} />
    );
}