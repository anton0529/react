const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            break;
        case ADD_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 6, dialogText: newMessage})
            break;
    }
    return state;
}


export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: text
    }
};
export const addMessageActionCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    }
};
export default dialogsReducer;
