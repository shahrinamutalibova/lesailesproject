
const initialState = {
    albums: [
        {
            id: 1,
            title: 'Album    title 1',
            body: 'Album     body 1'
        },
        {
            id: 2,
            title: 'Album    title 2',
            body: 'Album     body 2'
        },
    ],
    data: ""
}


function albumReducer(state = initialState, action) {
    switch (action.type) {
        case "addPost" :
            let album = {
                id: state.albums.length + 1,
                title: action.payload.title,
                body: action.payload.body
            }
            state.albums.push(album)
            state = {...state, albums: state.albums}
            break
        case "deletePost" :
            state.albums.map((item,index)=>{
                if (item.id === action.payload){
                    state.albums.splice(index,1)
                }
            })
            state={...state,albums: state.albums}
            break
        case "editData" : state = {...state, data: action.payload}
            break
        case "editItem" :
            const updatePost = state.albums.map((item)=>{
                const data = state.data
                if (item.id === data.id){
                    item = {
                        ...item,
                        title: action.payload.title,
                        body:action.payload.body
                    }
                }
                return item
            })
            state = {...state, albums: updatePost }
            break
    }
    return state
}

export default albumReducer