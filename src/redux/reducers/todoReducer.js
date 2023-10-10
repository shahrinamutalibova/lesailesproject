const initialState = {
    todos: [
        {
            id: 1,
            title: 'Todo title 1',
            body: 'Todo body 1'
        },
        {
            id: 2,
            title: 'Todo title 2',
            body: 'Todo body 2'
        },
    ],
    data: ""
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case "addPost":
            let todo = {
                id: state.todos.length + 1,
                title: action.payload.title,
                body: action.payload.body
            }
            return {
                ...state,
                todos: [...state.todos, todo]
            };
        case "deletePost":
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload)
            };
        case "editData":
            return {
                ...state,
                data: action.payload
            };
        case "editItem":
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (item.id === state.data.id) {
                        return {
                            ...item,
                            title: action.payload.title,
                            body: action.payload.body
                        };
                    }
                    return item;
                }),
                data: initialState.data
            };
        default:
            return state;
    }
}

export default todoReducer;
