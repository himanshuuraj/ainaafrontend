import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { AsyncStorage } from "react-native"; 

const PUSH_ENDPOINT = 'http://192.168.1.107:3000/userInfo/5dccedfcff4ce30024aaa87c/update';

export default async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();
  AsyncStorage.setItem('firebaseToken', token);

  console.log(token, "TOKEN");

}