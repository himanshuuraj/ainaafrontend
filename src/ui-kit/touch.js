import React from 'react';
import Text from "./text";
import { TouchableOpacity } from 'react-native';
import GradientView from "./gradientView";

export default (props) => {
    let {c, h, r, g, t, b, w, center} = props
    c = c || "#4a4a4a";
    if(g)
        return (
            <TouchableOpacity
                style={{
                    height : h || 48,
                    justifyContent : center || 'center',
                    width : w || '100%',
                    borderRadius : r || 4,
                    marginRight : 8
                }}
                onPress={props.onPress}
            >
                <GradientView h={'100%'}>
                    <Text s={14} c={c} b={b} t={t} center/>
                </GradientView>
            </TouchableOpacity>
        );
    else 
        return (
            <TouchableOpacity
                style={{
                    height : h || 48,
                    justifyContent : center || 'center',
                    width : w || '100%',
                    borderRadius : r || 4,
                    marginRight : 8
                }}
                onPress={props.onPress}
            >
                <Text s={14} c={c} b={b} t={t}/>
            </TouchableOpacity>
        )
}