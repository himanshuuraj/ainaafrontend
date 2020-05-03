import db from "./../repo/firebase-repo";
import { AsyncStorage } from "react-native";

var signIn = userData => {
    var userInfoRef = db.collection("userInfo");
    return userInfoRef.where("email", "==", userData.email)
        .where("password", "==", userData.password)
        .get()
        .then(function(userInfo) {
            console.log(userInfo)
            return userInfo;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            return error;
        });
}

var registerUserInfo = function(userData){
    return db.collection("userInfo").add(userData)
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            return docRef.id;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            return error;
        });
}

var createPost = post => {
    return db.collection("post").add(post)
        .then(function(post) {
            return post.id;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            return error;
        });
}

var getAllPosts = () => {
    var postRef = db.collection("post");
    return postRef.orderBy("createdAt", "desc").get()
        .then(function(posts) {
            var arr = [];
            posts.forEach(function (post) {
                arr.push(post.data());
                console.log(post.id, ' => ', post.data());
            });
            return arr;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            return error;
        });
}

var getAllUser = () => {
    var userInfoRef = db.collection("userInfo");
    return userInfoRef.get()
        .then(function(users) {
            console.log(users)
            var arr = [];
            users.forEach(user => {
                arr.push(user.data());
            });
            return arr;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            return error;
        });
}

var sendNotification = (users, userInfo) => {
    userTokens = users.filter(user => user.token != userInfo.token).map(user => user.token);
    // userTokens = users.map(user => user.token);
    let url = "https://exp.host/--/api/v2/push/send";
        let bodyObj = {
          "to": userTokens,
          "title": userInfo.firstName + " has posted something on Ainaa app",
          "body": "NotificationBody"
        };

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyObj),
            }).then((response) => response.json(), 
            err => {
                console.log("ERR", err);
                return err;
            })
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error("ERROR",error);
                return error;
            });
}

var getJnvList = () => {
    
}

export { registerUserInfo, createPost, getAllPosts, sendNotification, getAllUser, signIn }