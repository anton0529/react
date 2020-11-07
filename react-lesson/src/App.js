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


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>

                </div>

            </div>
        </BrowserRouter>);
}
export default App;
