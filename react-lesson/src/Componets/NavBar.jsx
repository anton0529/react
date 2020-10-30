import React from 'react';
import cls from './NavBar.module.css';
import 'bootstrap/dist/css/bootstrap.css';
const NavBar = () => {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>
                <a>Messagie</a>
            </div>
            <div className={cls.item}>
                <a>Profile</a>
            </div>
            <div className={cls.item}>
                <a>News</a>
            </div>
            <div className={cls.item}>
                <a>Music</a>
            </div>
            <div className={cls.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}
export default NavBar;

