import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://avotar.ru/avatar/naruto/100/33.jpg'/>
            {props.massage}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}
export default Post;