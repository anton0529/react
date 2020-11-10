import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Messge";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
const Dialogs = (props) => {
    let messagesElement = props.dialogsPage.messages.map(m => <Message dialogText={m.dialogText}/>);
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessagesChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

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
                <div>
                    <textarea ref={newMessageElement} cols={50}
                              value={props.newMessageText}
                              onChange={onMessagesChange}/>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Dialogs;