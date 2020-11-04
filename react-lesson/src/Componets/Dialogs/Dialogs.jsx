import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Messge";

const Dialogs = (props) => {

    let messagesElement = props.state.messages.map(m => <Message message={m.message}/>);
    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let newMessageElement = React.createRef();
    let addMessege = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                    <textarea ref={newMessageElement} cols={50}></textarea>
                    <button onClick={addMessege}>Add</button>

                </div>
            </div>
        </div>
    );
}
export default Dialogs;