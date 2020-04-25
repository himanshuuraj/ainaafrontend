import {
    TEST_SAGA,
    REGISTER_USER_INFO,
    UPDATE_DATA,
    CREATE_POST,
    VERIFY_EMAIL,
    GET_ALL_POSTS,
    HIDE_JNV_LISTS,
    DELETE_POST
} from "./constants";

export const testAction = payload => {
    return {
        type : TEST_SAGA,
        payload
    }
}

export const setData = data => {
    return {
        type : UPDATE_DATA,
        data
    }
}

export const registerUser = userData => {
    return {
        type : REGISTER_USER_INFO,
        userData
    }
}

export const verifyEmail = (email, password) => {
    return {
        type : VERIFY_EMAIL,
        email,
        password
    }
}

export const createPost = post => {
    return {
        type : CREATE_POST,
        post
    }
}

export const getAllPosts = () => {
    return {
        type : GET_ALL_POSTS
    }
}

export const hideShowPickArea = () => {
    return {
        type : HIDE_JNV_LISTS
    }
}

export const deletePost = id => {
    return {
        type : DELETE_POST,
        id
    }
}