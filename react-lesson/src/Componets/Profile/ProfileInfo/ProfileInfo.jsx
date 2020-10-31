import React from 'react';
import s from './ProfileInfo.module.css';
import 'bootstrap/dist/css/bootstrap.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://avotar.ru/avatar/multyashki/150/31.jpg"/>
            </div>
            <div className={s.discriptionBlock}>
                ava+discription
            </div>
        </div>
    );
}
export default ProfileInfo;