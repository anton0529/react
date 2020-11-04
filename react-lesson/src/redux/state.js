import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {

        posts: [
            {id: 1, message: 'Hi, How are you?', likesCount: 12},
            {id: 2, message: 'Its my first post', likesCount: 2},
        ],
        newPostText: 'It-kakmamfasd'
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'how is yoo day'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yp'},
            {id: 6, message: 'tr'}
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ]
    }
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.newPostText = '';
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);

};
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;