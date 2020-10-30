import React from 'react';
import s from './Profile.module.css';
import 'bootstrap/dist/css/bootstrap.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>

            </div>
            <div>
                <img src="https://avotar.ru/avatar/multyashki/150/31.jpg"/>
            </div>
            <div>
                    <div className={s.postHeader}>
                        <h1>My Posts</h1>
                    </div>
                <div className={s.content}>
                    New post
                </div>
                <div>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;