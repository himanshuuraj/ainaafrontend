import React, { Component } from 'react';
import { View, Dimensions, Text, FlatList, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { setData } from "./../redux/action";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { Color } from './../global/util';
import Modal from "react-native-modal";
 
let { width, height } = Dimensions.get('window');
width = width;

let jnvList = [
    {
        id : "araria",
        area : "JNV Araria"
    },
    {
        id : "katihar",
        area : "JNV Katihar"
    },
    {
        id : "purnea",
        area : "JNV Purnea"
    },
    {
        id : "araria",
        area : "JNV Araria"
    }
];

class PickJNV extends Component {

    constructor(props) {
        super(props);
        this.state = {
            areaList : jnvList,
            show : false
        };
      }

    componentWillReceiveProps(nextProps){
      this.setState({
        show : nextProps.showPickArea,
        areaList : nextProps.areaList
      });
    }

    separator = () => {
      return <View style={{
          marginVertical: 8,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
      }} />;
    }

    render() {
        return (
            <Modal isVisible={this.props.show} style={{ marginVertical : '10%' }}>
                <View style={{ flex: 1, backgroundColor: Color.white, paddingHorizontal : 16, paddingTop : 16 }}>
                    <TextInput placeholder="eg. purnea"
                      onChangeText={searchText => {
                        let areaList = [];
                        if(!searchText)
                          areaList = this.props.areaList;
                        else  
                          areaList = this.state.areaList.filter(item => item.area.toLowerCase().includes(searchText.toLowerCase()));
                        this.setState({ areaList })
                      }}/>
                    {
                      this.separator()
                    }
                        <FlatList
                            data={this.state.areaList}
                            renderItem={({ item, index }) => (
                              <TouchableOpacity key={index}
                                onPress={() => {
                                    this.props.hideShowPickArea();
                                    this.props.selectedArea(item);
                                }}
                                >
                                <Text>{item.area}</Text>
                                {
                                  this.separator()
                                }
                              </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    <TouchableOpacity
                      style={{
                        backgroundColor : Color.themeColor,
                        width : '100%',
                        jutifyContent : 'center',
                        alignItems : 'center',
                        height : 36,
                        marginTop : 16,
                        borderRadius : 4,
                        paddingTop : 8
                      }} 
                      onPress={() => {
                        this.props.hideShowPickArea();
                      }}>
                      <Text style={{
                        fontSize : 16,
                        color : Color.white
                      }}>CLOSE</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }
  }

  function mapStateToProps(state, props) {
    return {
      show : state.testReducer.pickJNV.show,
      areaList : jnvList,
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      setData
    }, dispatch);
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(PickJNV);