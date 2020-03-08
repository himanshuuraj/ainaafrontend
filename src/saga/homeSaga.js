import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { REGISTER_USER_INFO, SEND_OTP, VERIFY_OTP, VERIFY_EMAIL, CREATE_POST, GET_ALL_POSTS } from "./../redux/constants";
import { getApiCall, postApiCall } from "./../global/request";
import * as Api from "./../global/api";
import {AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    setData, verifyEmail
} from "./../redux/action";
import { registerUserInfo, createPost, getAllPosts, sendNotification, getAllUser, signIn } from "./userInfo";

function* registerUserInfoSaga(action){
    try {
        let obj = action.userData;
        let firebaseToken = yield call(AsyncStorage.getItem, 'firebaseToken');
        obj['token'] = firebaseToken;
        let response = yield call(registerUserInfo, action.userData)
        console.log(response);
        if(response){
            let userInfo = { ...action.userData, userId : response, firebaseToken : firebaseToken };
            yield put(setData({ userInfo }));
            yield call(AsyncStorage.setItem, 'userInfo', JSON.stringify(userInfo));
            Actions.home();
        }
    } catch (e) {
        alert(JSON.stringify(e));
    }
}

function* verifyEmailSaga(action){
    try{
        let obj = {
            email : action.email,
            password : action.password,
        };
        let firebaseToken = yield call(AsyncStorage.getItem, 'firebaseToken');
        if(firebaseToken)
            obj.firebaseToken = firebaseToken;
        let response = yield call(signIn, obj );
        console.log("RESPONSE", response);
        if(!response || response.docs.length == 0){
            yield put(setData({ errorModalInfo : { showModal : true, message : "Credentials not valid", title : "Success" } }));
        }else{
            let userInfo = response.docs[0].data();
            yield call(AsyncStorage.setItem, 'userInfo', JSON.stringify(userInfo));
            Actions.home();
        }
    }catch(err){
        alert(JSON.stringify(err));
    }
}

function* createPostSaga(action){
    try{
        let post = action.post;
        let userInfo = yield call(AsyncStorage.getItem, 'userInfo');
        userInfo = JSON.parse(userInfo);
        post["email"] = userInfo.email;
        post["firstName"] = userInfo.firstName;
        post["lastName"] = userInfo.lastName;
        post["userId"] = userInfo.userId;
        post["createdAt"] = new Date().getTime()
        let response = yield call(createPost, post);
        console.log("RESPONSE", response);
        if(!response){
            yield put(setData({ errorModalInfo : { showModal : true, message : "Error in creating post", title : "Success" } }));
        }else{
            let post = { ...post, postId : response };
            yield put(setData({ postModal : { show : false } }));
            yield put(setData({ errorModalInfo : { showModal : true, message : "Post created Successfully", title : "Success" } }));
            Actions.home();
            var users = yield call(getAllUser);
            sendNotification(users, userInfo);
        }
    }catch(err){
        alert(JSON.stringify(err));
    }
}

function* getAllPostsSaga(action){
    try{
        let response = yield call(getAllPosts);
        if(!response){
            yield put(setData({ errorModalInfo : { showModal : true, message : "Error in reteriving posts", title : "Success" } }));
        }else{
            console.log(response);
            yield put(setData({ postModal : { show : false } }));
            yield put(setData({ allPosts : response }));
        }
    }catch(err){
        alert(JSON.stringify(err));
    }
}

const mySaga = [
    takeLatest( REGISTER_USER_INFO, registerUserInfoSaga ),
    takeLatest( VERIFY_EMAIL, verifyEmailSaga),
    takeLatest( CREATE_POST, createPostSaga),
    takeLatest( GET_ALL_POSTS, getAllPostsSaga )
];

export default mySaga;