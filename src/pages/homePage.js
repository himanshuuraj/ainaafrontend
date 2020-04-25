import React, { useCallback, useEffect } from 'react';
import {
    Container, Content, Card, CardItem, Thumbnail, Left, Body, Right
} from "native-base";
import {
  Color
} from "../global/util";
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import HeaderSection from "./../components/header";
import Camera from "./../components/camera";
import { setData, getAllPosts, deletePost } from "./../redux/action";
import { Image } from "./../ui-kit";


export default props => {

  const dispatch = useDispatch()
  useEffect(() => {
    getAllPosts();
  }, []);

  let allPosts = useSelector(state => state.testReducer.allPosts) || []
  console.log(allPosts, "POSTS");

  const setDataAction = (arg) => dispatch(setData(arg))
  
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
              setDataAction({
                postModal : {
                  show : true
                }
              })
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

  renderFeedCard = (feed, index) => {
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
                  <Text>{feed.comment.length ? feed.comment.length : "No "} Comments</Text>
                </Left>
                <Right>
                    <Text style={{textDecorationLine: 'underline'}}> View all Comments </Text>
                </Right>
            </CardItem>

            <Image w={20} h={20} a t={5} r={2} onPress={() => {setDataAction({
              confirmModalInfo : {
                showModal : true,
                message : "Do you want to delete the post",
                primaryText : "Delete",
                primaryAction : () => dispatch(deletePost(feed._id)),
              }
            })}}
              uri = 'https://img.pngio.com/trash-can-icon-png-359844-free-icons-library-trash-icon-png-512_512.jpg'
            />
            <Image w={20} h={20} a t={5} r={30}
              uri = 'https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Edit-01-512.png'
            />
        </Card>
      );
  }
    
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
              allPosts.map((feed, index) => this.renderFeedCard(feed, index))
          }
        </Content>
      </Container>
    );
}

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
