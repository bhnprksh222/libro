import React from 'react'
import AddBtn from '../../SharedComponents/AddBtn/AddBtn'
import Book from '../../SharedComponents/Book/Book'
import SearchBar from '../../SharedComponents/SearchBar/SearchBar'

import './Books.scss'

const Books = () =>{
    return (
        <div className="books" >
            <div className="books--header">
                <div className="books--header-search">
                    <SearchBar placeholder="search books by name" />
                    <AddBtn />
                </div>
            </div>
            <div className="books--body">
                <Book />
                <Book />
                <Book />
                <Book />
            </div>
        </div>
    )
}

export default Books
