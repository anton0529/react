import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {

            posts: [
                {id: 1, message: 'Hi, How are you?', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 2},
            ],
            newPostText: 'It-kakmamfasd'
        },
        dialogsPage: {
            messages: [
                {id: 1, dialogText: 'Hi'},
                {id: 2, dialogText: 'how is yoo day'},
                {id: 3, dialogText: 'yo'},
                {id: 4, dialogText: 'yo'},
                {id: 5, dialogText: 'yp'},
                {id: 6, dialogText: 'tr'}
            ],

            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            newMessageText: 'dsdsdsdsdsd'
        },
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    }

};


export default store;
window.store = store;