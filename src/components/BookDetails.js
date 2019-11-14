import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import * as actionTypes from '../store/actions';


const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);

    return (
        <li onClick={() => dispatch({ type: actionTypes.REMOVE_BOOK, id: book.id })}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    );
}
 
export default BookDetails;