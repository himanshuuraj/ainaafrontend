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
import { AppLoading, Notifications } from "expo";
import * as Font from "expo-font";
import registerForPushNotificationsAsync from './registerForPushNotificationsAsync';

export default class App extends React.Component {

  state = {
    isReady : false,
    notification: {}
  };

  componentWillMount() {
    this.loadFonts();
  }

  componentDidMount() {
    registerForPushNotificationsAsync();
    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }

  _handleNotification = (notification) => {
    this.setState({notification: notification});
  };

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
