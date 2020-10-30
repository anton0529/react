import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Header from "./Componets/Header";
import NavBar from "./Componets/NavBar";
import Profile from "./Componets/Profile";
const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}


export default App;
