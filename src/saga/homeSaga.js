import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { REGISTER_USER_INFO, 
    VERIFY_EMAIL, 
    CREATE_POST, 
    GET_ALL_POSTS,
    DELETE_POST
 } from "./../redux/constants";
import { getApiCall, postApiCall, deleteApiCall } from "./../global/request";
import * as Api from "./../global/api";
import {AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    setData, getAllPosts
} from "./../redux/action";

function* registerUserInfoSaga(action){
    try {
        let obj = action.userData;
        let firebaseToken = yield call(AsyncStorage.getItem, 'firebaseToken');
        obj['token'] = firebaseToken;
        let response = yield call(postApiCall, Api.apiToInsertUserInfo, obj );
        console.log("RESPONSE", response);
        if(response.success){
            let userInfo = response.body;
            yield put(setData({ userInfo }));
            yield call(AsyncStorage.setItem, 'userInfo', JSON.stringify(userInfo));
            Actions.home();
        }else{
            alert(response.message);
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
        let response = yield call(postApiCall, Api.apiToVerifyEmail, obj );
        console.log("RESPONSE", response);
        if(!response.success){
            alert(response.message);
        }else{
            let userInfo = response.body;
            if(!userInfo){
                alert(response.message);
            }else{
                yield call(AsyncStorage.setItem, 'userInfo', JSON.stringify(response));
                Actions.home();
            }
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
        post["userId"] = userInfo._id;
        let response = yield call(postApiCall, Api.apiToCreatePost, post);
        console.log("RESPONSE", response);
        if(!response.success){
            yield put(setData({ errorModalInfo : { showModal : true, message : "Error in creating post", title : "Success" } }));
        }else{
            yield put(setData({ postModal : { show : false } }));
            yield put(setData({ errorModalInfo : { showModal : true, message : "Post created Successfully", title : "Success" } }));
            Actions.home();
        }
    }catch(err){
        alert(JSON.stringify(err));
    }
}

function* getAllPostsSaga(action){
    try{
        let response = yield call(getApiCall, Api.apiToGetAllPosts);
        console.log("RESPONSE", response);
        if(!response.success){
            yield put(setData({ errorModalInfo : { showModal : true, message : "Error in reteriving posts", title : "Success" } }));
        }else{
            yield put(setData({ postModal : { show : false } }));
            yield put(setData({ allPosts : response.body }));
        }
    }catch(err){
        alert(JSON.stringify(err));
    }
}

function* deletePostSaga(action){
    try{
        let url = Api.apiToDeletePost
        url = url.replace('{id}', action.id)
        let response = yield call(deleteApiCall, url);
        console.log("RESPONSE", response);
        if(!response.success){
            yield put(setData({ errorModalInfo : { showModal : true, message : "Error in reteriving posts", title : "Success" } }));
        }else{
            yield put(getAllPosts());
            yield put(setData({ confirmModalInfo : { showModal : false } }));
        }
    }catch(err){
        alert(JSON.stringify(err));
    }
}

const mySaga = [
    takeLatest( REGISTER_USER_INFO, registerUserInfoSaga ),
    takeLatest( VERIFY_EMAIL, verifyEmailSaga),
    takeLatest( CREATE_POST, createPostSaga),
    takeLatest( GET_ALL_POSTS, getAllPostsSaga ),
    takeLatest( DELETE_POST, deletePostSaga )
];

export default mySaga;