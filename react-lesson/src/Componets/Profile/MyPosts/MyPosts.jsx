import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post massage={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} cols={50}
                              value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;