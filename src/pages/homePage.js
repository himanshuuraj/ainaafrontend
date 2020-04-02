import React, {Component} from 'react';
import {
    Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Title, Image, Right
} from "native-base";
import {
  Color
} from "../global/util";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { TouchableOpacity, TextInput, StyleSheet, Text, View } from 'react-native';
import HeaderSection from "./../components/header";
import Camera from "./../components/camera";
import { setData, getAllPosts } from "./../redux/action";
// import { Ionicons } from '@expo/vector-icons';

class HomePage extends Component {

  state = {
    activeScreen  : 'home'
  };

  constructor(props){
    super(props);
  }
  
  getAwsImageUrl = (imageUrl) => {
    let imageList = this.state.imageList;
    imageList.push({ uri : imageUrl });
    this.setState({ imageList });
  }

  addImage = () => {
    return (
      <View style={{ ...viewObj }}>
          <Text style={{
            ...textObj
          }}>Pick Gallery</Text>
        <View style={{
            paddingHorizontal : 8,
            paddingVertical : 16
          }}>
          <TouchableOpacity
            style={{
              borderWidth : 1,
              borderColor : Color.black,
              borderRadius : 4,
              justifyContent : 'center',
              alignItems : 'center',
              marginVertical : 8,
              height : 36
            }}
            onPress={e => {
              this.setState({ showCamera : true });
            }}
          >
            <Text style={{ fontSize : 14 }}>ADD IMAGE FROM CAMERA</Text>
          </TouchableOpacity>
          <Camera type={'gallery'} getAwsImageUrl={this.getAwsImageUrl} /> 
        </View>
      </View>
    );
  }

  createPost = () => {
    return (
      <TouchableOpacity style={{ height : 50, borderWidth : StyleSheet.hairlineWidth, borderColor : 'black', flexDirection : 'row', backgroundColor : '#fff',
            marginVertical : 16, borderRadius : 8, alignItems : 'center', justifyContent : 'flex-start', paddingLeft : 8 }}
            onPress={() => {
              this.props.setData({
                postModal : {
                  show : true
                }
              });
            }}
            >
        {/* {
          this.addImage()
        } */}
        <Thumbnail
          small 
          size={20}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'}} />
        <Text style={{ marginLeft : 8 }}>
          Write your post here ...
        </Text>
      </TouchableOpacity>
    )
  }

  renderFeedCard(feed, index){
      return (
        <Card style={{flex: 0}} key={index}>
            <CardItem>
            <Left>
                <Thumbnail source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg'}} />
                <Body>
                    <Text>{feed.firstName + " " + feed.lastName}</Text>
                    <Text note>JNV Araria (2005- 2012)</Text>
                </Body>
            </Left>
            </CardItem>
            <CardItem>
                <Body>
                    <Text>
                        { feed.text }
                    </Text>
                </Body>
            </CardItem>
            <CardItem>
                <Left>
                    <Text>5 Comments</Text>
                </Left>
                <Right>
                    <Text style={{textDecorationLine: 'underline'}}> View all Comments </Text>
                </Right>
            </CardItem>
            {/* <View style={{ borderTopWidth: StyleSheet.hairlineWidth, borderTopColor : 'black', marginHorizontal : 16}}/> */}
            {/* <CardItem style={{ borderWidth : StyleSheet.hairlinewidth, borderColor : 'red', flexDirection: 'row'}}>
                    <Thumbnail 
                        style={{ height : 30, width : 30, marginRight : 16 }}
                        source={{uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/08/17/elon-musk.jpg'}} />
                    <Text>Yeah - i live at anand vihar</Text>
            </CardItem> */}
            {/* <CardItem style={{ borderWidth : StyleSheet.hairlinewidth, borderColor : 'red', flexDirection: 'row'}}>
                    <Thumbnail 
                        style={{ height : 30, width : 30, marginRight : 16 }}
                        source={{uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/08/17/elon-musk.jpg'}} />
                    <TextInput placeholder={'First Comment goes here'} />
            </CardItem> */}
            {/* <Ionicons name="ios-edit" size={28} color="green" style={{position: 'absolute', top : 10, right : 10}}/> */}
            <Icon name="home" style={{position: 'absolute', top : 10, right : 10}}/>
            <Icon name="home" style={{position: 'absolute', top : 10, right : 40}}/>
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
            this.createPost()
          }
          {
              this.props.allPosts.map((feed, index) => this.renderFeedCard(feed, index))
          }
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state, props) {
  return {
      data : state.testReducer.test,
      allPosts : state.testReducer.allPosts || []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setData,
    getAllPosts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

let viewObj = {
  marginTop : 16, 
  borderWidth: StyleSheet.hairlineWidth, 
  borderRadius : 4
}

let textObj = {
  position : 'absolute',
  top : -8,
  left : 8,
  fontSize : 12,
  backgroundColor : Color.white,
  paddingHorizontal : 2,
  backgroundColor : Color.backgroundThemeColor
}
