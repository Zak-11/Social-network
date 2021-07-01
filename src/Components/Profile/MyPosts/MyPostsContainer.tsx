import React from 'react';
import {addPost} from "../../../Redax/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redax/redux-store";
import {MyPostsContainer} from "./MyPosts";




let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}





export default connect(mapStateToProps, {
    addPost})(MyPostsContainer)
