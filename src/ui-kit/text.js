import React from 'react';
import { Text } from 'react-native';

export default (props) => {
    console.log(props)
    let {s, c, b, t, lh, center} = props
    c = c || "#4a4a4a";
    return (
      <Text style={{
            color : c,
            fontSize : s,
            lineHeight : lh,
            fontWeight: b ? 'bold' : undefined,
            textAlign : center ? 'center' : undefined
      }}>
          {t}
      </Text>
    );
}