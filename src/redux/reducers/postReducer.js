import {ADD_POST, DELETE_POST, EDIT_DATA, EDIT_ITEM, GET_POST} from "../actions/postAction";

const initialState = {
    posts: [
        {
            id: 1,
            title: 'Post title 1',
            body: 'Post body 1'
        },
        {
            id: 2,
            title: 'Post title 2',
            body: 'Post body 2'
        },
    ],
    data: ""
}

function postReducer(state = initialState, action) {
    switch (action.type) {
        case "UPDATE_ITEM":
            const updatedItemIndex = state.posts.findIndex(post => post.id === action.payload.id);
            if (updatedItemIndex !== -1) {
                const updatedPosts = [...state.posts];
                updatedPosts[updatedItemIndex] = action.payload;
                return { ...state, posts: updatedPosts };
            }
            return state;
        case GET_POST : state = {...state , posts :action.payload}
        case ADD_POST:
            let post = {
                id: state.posts.length + 1,
                title: action.payload.title,
                body: action.payload.body
            }
            return {...state, posts: [...state.posts, post]};

        case DELETE_POST :
            const updatedPosts = state.posts.filter(item => item.id !== action.payload);
            return {...state, posts: updatedPosts};

        case EDIT_DATA:
            return {...state, data: action.payload};

        case EDIT_ITEM:
            const updatedPostList = state.posts.map(item =>
                item.id === state.data.id
                    ? { ...item, title: action.payload.title, body: action.payload.body }
                    : item
            );
            return {...state, posts: updatedPostList};

        default:
            return state;
    }
}

export default postReducer;
