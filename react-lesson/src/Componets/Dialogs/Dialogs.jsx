import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialog/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'how is yoo day'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yp'},
        {id: 6, message: 'tr'},
    ]
    
    let messagesElement = messages.map(m => <Message message={m.message}/>);
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);


    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    <div>
                        {dialogsElements}
                    </div>
                </div>
                <div className={s.messages}>
                    {messagesElement}
                </div>
            </div>
        </div>
    );
}
export default Dialogs;