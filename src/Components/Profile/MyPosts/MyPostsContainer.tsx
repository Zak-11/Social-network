import React from 'react';
import {addPost, updateNewPostText} from "../../../Redax/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redax/redux-store";
import {MyPostsContainer} from "./MyPosts";




let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}





export default connect(mapStateToProps, {
    addPost, updateNewPostText })(MyPostsContainer)
