import uuid from 'uuid/v1';
import * as actionTypes from '../actions';

export const bookReducer = (state, action) => {
    switch(action.type) {
        case actionTypes.ADD_BOOK: 
            return [
                ...state, 
                { 
                    id: uuid(),
                    title: action.title, 
                    author: action.author 
                }
            ];
        case actionTypes.REMOVE_BOOK:
            return state.filter(book => book.id !== action.id);
        default:
            return state;
    }
}