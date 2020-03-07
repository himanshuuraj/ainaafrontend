import db from "./../repo/firebase-repo";

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
            console.log("Post written with ID: ", post.id);
            return post.id;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
            return error;
        });
}

var getAllPosts = () => {
    console.log("AAAA");
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

export { registerUserInfo, createPost, getAllPosts }