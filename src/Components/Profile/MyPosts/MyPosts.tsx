import React from 'react';
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageProps} from "../../../Redax/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../urils/validator/validator";
import {Textarea} from "../../Components/common/FormContols/FormConttols";

const maxLength10 = maxLengthCreator(10);
export function MyPostsContainer(props: ProfilePageProps) {
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    let addPost = (values: AddPostFormType) => {
        props.addPost(values.newPostText)
    }


    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <  NewPostReduxForm onSubmit={addPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>

        </div>
    );

}

type AddPostFormType = {
    newPostText: string,

}


let AddNewPostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText"
                       placeholder={"Post message"}
                       component={Textarea}
                       validate={[required, maxLength10]}/>
            </div>

            <div>
                <button>Add post</button>
            </div>

        </form>
    )
}
const NewPostReduxForm = reduxForm<AddPostFormType>({form: 'ProfileAddPostForm'})(AddNewPostForm)
