import React, { useState, useContext } from 'react';
import { BookContext } from '../context/BookContext';
import * as actionTypes from '../store/actions';


const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    /**
     * Handle submit form
     */
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: actionTypes.ADD_BOOK,
            title: title,
            author: author
        });
        
        setTitle('');
        setAuthor('');
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title}
                required
                placeholder="Book title"
                onChange={e => setTitle(e.target.value)}
            />
            <input 
                type="text" 
                value={author}
                required
                placeholder="Author"
                onChange={e => setAuthor(e.target.value)}
            />

            <input type="submit" value="Add book" />
        </form>
    );
}
 
export default BookForm;