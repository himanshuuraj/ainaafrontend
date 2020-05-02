import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { REGISTER_USER_INFO, 
    VERIFY_EMAIL, 
    CREATE_POST, 
    GET_ALL_POSTS,
    DELETE_POST,
    UPDATE_USER_DETAILS,
    GET_USER_DETAIL
 } from "./../redux/constants";
import { getApiCall, postApiCall, deleteApiCall, putApiCall } from "./../global/request";
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
        yield put(setData({ loading : { show : true } }));
        let response = yield call(postApiCall, Api.apiToInsertUserInfo, obj );
        yield put(setData({ loading : { show : false } }));
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
        yield put(setData({ loading : { show : true } }));
        let response = yield call(postApiCall, Api.apiToVerifyEmail, obj );
        yield put(setData({ loading : { show : false } }));
        console.log("RESPONSE", response);
        if(!response.success){
            alert(response.message);
        }else{
            let userInfo = response.body;
            if(!userInfo){
                alert(response.message);
            }else{
                yield call(AsyncStorage.setItem, 'userInfo', JSON.stringify(response.body));
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
        post["profilePic"] = userInfo.profilePic;
        post["jnv"] = userInfo.jnv && userInfo.jnv.area;
        yield put(setData({ loading : { show : true } }));
        let response = yield call(postApiCall, Api.apiToCreatePost, post);
        yield put(setData({ loading : { show : false } }));
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
        yield put(setData({ loading : { show : true } }));
        let response = yield call(getApiCall, Api.apiToGetAllPosts);
        yield put(setData({ loading : { show : false } }));
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

function* updateUserDetails(action){
    try {
        let state = yield select();
        let userData = state.testReducer.userInfo;
        let url = Api.apiToUpdateUserInfo;
        url = url.replace('{id}', userData._id);
        userData = {...userData, ...action.userData};
        yield put(setData({ loading : { show : true } }));
        let response = yield call(putApiCall, url, userData);
        yield put(setData({ loading : { show : false } }));
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

function* getUserDetailSaga(action){
    try{
        let url = Api.apiToGetUserInfo;
        url = url.replace('{id}', action.id);
        yield put(setData({ loading : { show : true } }));
        let response = yield call(getApiCall, url);
        yield put(setData({ loading : { show : false } }));
        console.log("RESPONSE", response);
        if(!response.success){
            yield put(setData({ errorModalInfo : { showModal : true, message : "Error in reteriving userInfo", title : "Success" } }));
        }else{
            yield put(setData({ userInfo : response.body }));
            yield call(AsyncStorage.setItem, 'userInfo', JSON.stringify(response.body));
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
    takeLatest( DELETE_POST, deletePostSaga ),
    takeLatest( UPDATE_USER_DETAILS, updateUserDetails ),
    takeLatest( GET_USER_DETAIL, getUserDetailSaga)
];

export default mySaga;