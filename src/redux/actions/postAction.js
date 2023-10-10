import axios from 'axios';
export const ADD_POST = 'addPost';
export const DELETE_POST = 'deletePost';
export const EDIT_DATA = 'editItem';
export const EDIT_ITEM = 'editItem';
export const GET_POST = 'GET_POST';

export const addPost = (dispatch, value) => dispatch({ type: ADD_POST, payload: value });
export const deletePost = (dispatch ,id ) => dispatch({type: DELETE_POST,payload :id })
export const editData = (dispatch, item) => dispatch({ type: EDIT_DATA, payload: item });
export const editItem = (dispatch, value) => dispatch({ type: EDIT_ITEM, payload: value });

export const getPost = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:5000/posts');
        dispatch({ type: GET_POST, payload: res.data });
    } catch (error) {
        console.error('Error getting posts:', error);
    }
};
