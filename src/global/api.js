// export const HOST = "http://192.168.31.16:5000";

export const HOST = "https://aqueous-woodland-65692.herokuapp.com";

export const apiToInsertUserInfo = HOST + "/userInfo/create";

export const apiToGetUserInfo = HOST + "/userInfo/{id}";

export const apiToUpdateUserInfo = HOST + "/userInfo/{id}/update";

export const apiToDeleteUserInfo = HOST + "/userInfo/{id}/update";

export const apiToVerifyEmail = HOST + "/userInfo/login";

export const apiToCreatePost = HOST + "/post/create";

export const apiToGetAllPosts = HOST + "/post/start/0/count/100"

export const apiToDeletePost = HOST + "/post/{id}/delete";

export const apiToGetUserData = HOST + "/userInfo/{id}";

export const apiToUploadIntoAWS =  "https://roomfinderbackend.herokuapp.com" + "/upload";