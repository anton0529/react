import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 1, message: 'Hi, How are you?', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 2},
    ]

    let postsElement = posts.map(p => <Post massage={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
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