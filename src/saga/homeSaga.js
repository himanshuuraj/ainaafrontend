import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { REGISTER_USER_INFO, SEND_OTP, VERIFY_OTP, VERIFY_EMAIL } from "./../redux/constants";
import { getApiCall, postApiCall } from "./../global/request";
import * as Api from "./../global/api";
import {AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
    setData, verifyEmail
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

const mySaga = [
    takeLatest( REGISTER_USER_INFO, registerUserInfoSaga ),
    takeLatest( VERIFY_EMAIL, verifyEmailSaga)
];

export default mySaga;