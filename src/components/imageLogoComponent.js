import React from 'react';
import { Image } from 'react-native';
import { getHeight } from "../global/util";
import {View} from "./../ui-kit";

export default props => {
    return (
           <View h={getHeight(16)} w={'100%'} jc ai style={{
             marginTop : getHeight(8),
             marginBottom : getHeight(2)
           }}>
              <Image source={require("./../images/ainaa.png")}
                      style={{flex : 1}}
                      resizeMode = "contain"/>
           </View>
    )
}
