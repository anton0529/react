import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Header from "./Componets/Header/Header";
import NavBar from "./Componets/NavBar/NavBar";
import Profile from "./Componets/Profile/Profile";
import Dialogs from "./Componets/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Componets/Music/Music";
import Settings from "./Componets/Settings/Settings";
import News from "./Componets/News/News";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>

                </div>

            </div>
        </BrowserRouter>);
}
export default App;
