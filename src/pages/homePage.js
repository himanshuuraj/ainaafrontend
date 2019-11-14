import React, {Component} from 'react';
import {
    Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Title, Image, Right
} from "native-base";
import {
  Color
} from "../global/util";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { StatusBar, TextInput, StyleSheet, Text, View } from 'react-native';
import HeaderSection from "./../components/header";

class HomePage extends Component {

  state = {
    activeScreen  : 'home'
  };

  constructor(props){
    super(props);
  }

  renderFeedCard(feed, index){
      return (
        <Card style={{flex: 0}} key={index}>
            <CardItem>
            <Left>
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'}} />
                <Body>
                    <Text>Himanshu Raj</Text>
                    <Text note>JNV Araria (2005- 2012)</Text>
                </Body>
            </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                        Anyone in Mumbai ???
                    </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Left>
                    <Text style={{textDecorationLine: 'underline'}}>5 Comments</Text>
                </Left>
                <Right>
                    <Text style={{textDecorationLine: 'underline'}}> View all Comments </Text>
                </Right>
            </CardItem>
            <View style={{ borderTopWidth: StyleSheet.hairlineWidth, borderTopColor : 'black', marginHorizontal : 16}}/>
            {/* <CardItem style={{ borderWidth : StyleSheet.hairlinewidth, borderColor : 'red', flexDirection: 'row'}}>
                    <Thumbnail 
                        style={{ height : 30, width : 30, marginRight : 16 }}
                        source={{uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/08/17/elon-musk.jpg'}} />
                    <Text>Yeah - i live at anand vihar</Text>
            </CardItem> */}
            <CardItem style={{ borderWidth : StyleSheet.hairlinewidth, borderColor : 'red', flexDirection: 'row'}}>
                    <Thumbnail 
                        style={{ height : 30, width : 30, marginRight : 16 }}
                        source={{uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/08/17/elon-musk.jpg'}} />
                    <TextInput placeholder={'First Comment goes here'} />
            </CardItem>
        </Card>
      );
  }

  render(){
    return (
      <Container>
        <HeaderSection title={'AINAA'} />
        <Content style={{
          paddingHorizontal : 16,
          backgroundColor : Color.backgroundThemeColor
        }}>
            {
                [...Array(10)].map((feed, index) => this.renderFeedCard(feed, index))
            }
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state, props) {
  return {
      data : state.testReducer.test
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
