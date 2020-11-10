import React from 'react';
import s from './../Dialogs.module.css';
debugger;
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.dialogText}</div>
    );
}
export default Message;