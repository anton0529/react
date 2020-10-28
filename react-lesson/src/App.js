import logo from './logo.svg';
import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://free-images.com/or/8a4e/lion_head_isolated_art.jpg"/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Messagie</a>
                </div>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>

            <div className='content'>
                <div>
                    <img className='content-img' src="http://models-talent.ru/wp-content/uploads/2017/07/1500x500.jpg"/>
                </div>
                <div>
                    ava+dics
                </div>
                <div>
                    Mypost
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post1
                        </div>
                        <div>
                            post2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
