import React, {Component} from 'react';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon
} from "native-base";
import {
  Color
} from "../global/util";
import HomePage from "./homePage";
import SearchPage from "./searchPage";
import ProfilePage from "./profilePage";
import SettingsPage from "./settingsPage";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { AsyncStorage } from "react-native"; 
import { setData } from "./../redux/action";

class Home extends Component {

  state = {
    activeScreen  : 'home'
  };

  constructor(props){
    super(props);
  }

  async componentDidMount(){
    let userInfo = await AsyncStorage.getItem("userInfo");
    if(userInfo){
      userInfo = JSON.parse(userInfo);
      this.props.setData({ userInfo });
    }
  }

  getContent = () => {
    switch(this.state.activeScreen){
      case 'home':
        return <HomePage />;
      case 'search':
        return <SearchPage />;
      case 'profile':
        return <ProfilePage />;
      case 'settings':
        return <SettingsPage />; 
      default :
        return <HomePage />;
    }
  }

  setActiveContent = (activeScreen) => {
    this.setState({ activeScreen });
  } 

  render(){
    return (
      <Container>
          {
            this.getContent()
          }
        <Footer>
          <FooterTab style={{ backgroundColor : Color.themeColor }}>
            <Button onPress={() => { this.setActiveContent('home'); }}>
              <Icon name='ios-home' style={{ 
                fontSize : this.state.activeScreen == 'home' ? 22 : 18,
                color : this.state.activeScreen == 'home' ? Color.white : Color.backgroundThemeColor,
                marginBottom : 2
              }} />
              <Text style={{
                fontSize : this.state.activeScreen == 'home' ? 14 : 12,
                color : this.state.activeScreen == 'home' ? Color.white : Color.backgroundThemeColor
              }}>Home</Text>
            </Button>
            <Button onPress={() => { this.setActiveContent('search'); }}>
              <Icon name='ios-search' style={{ 
                fontSize : this.state.activeScreen == 'search' ? 22 : 18,
                color : this.state.activeScreen == 'search' ? Color.white : Color.backgroundThemeColor,
                marginBottom : 2
              }} />
              <Text style={{
                fontSize : this.state.activeScreen == 'search' ? 14 : 12,
                color : this.state.activeScreen == 'search' ? Color.white : Color.backgroundThemeColor
              }}>Search</Text>
            </Button>
            <Button onPress={() => { this.setActiveContent('profile'); }}>
              <Icon name='ios-person' style={{ 
                fontSize : this.state.activeScreen == 'profile' ? 22 : 18,
                color : this.state.activeScreen == 'profile' ? Color.white : Color.backgroundThemeColor,
                marginBottom : 2
              }} />
              <Text style={{
                fontSize : this.state.activeScreen == 'profile' ? 14 : 12,
                color : this.state.activeScreen == 'profile' ? Color.white : Color.backgroundThemeColor
              }}>Profile</Text>
            </Button>
            <Button onPress={() => { this.setActiveContent('settings'); }}>
              <Icon name='ios-settings' style={{ 
                fontSize : this.state.activeScreen == 'settings' ? 22 : 18,
                color : this.state.activeScreen == 'settings' ? Color.white : Color.backgroundThemeColor,
                marginBottom : 2
              }} />
              <Text style={{
                fontSize : this.state.activeScreen == 'settings' ? 14 : 12,
                color : this.state.activeScreen == 'settings' ? Color.white : Color.backgroundThemeColor
              }}>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
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
    setData
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
