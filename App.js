import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import { Scene, Router, Actions, Reducer } from "react-native-router-flux";

import { Provider } from "react-redux";
import store from "./store";
import { Stack } from "react-native-router-flux";
import LoginPage from "./src/pages/login";
import RegisterationPage from "./src/pages/registeration";
import SplashScreen from "./src/pages/splashScreen";
import Home from "./src/pages/home";
import { AppLoading } from "expo";
import * as Font from "expo-font";

export default class App extends React.Component {

  state = {
    isReady : false
  };

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
      //Ionicons: require('./node_modules/@expo/vector-icons/Ionicons.js')
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Router>
        <Stack key="root">
          <Scene
            hideNavBar={true}
            key="loginPage"
            component={LoginPage}
            title="LoginPage"
          />
          <Scene
            hideNavBar={true}
            key="home"
            component={Home}
            title="Home"
          />
          <Scene
            hideNavBar={true}
            key="splashScreen"
            component={SplashScreen}
            title="splashScreen"
          />
          <Scene
            hideNavBar={true}
            key="registerationPage"
            component={RegisterationPage}
            title="RegisterationPage"
          />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
