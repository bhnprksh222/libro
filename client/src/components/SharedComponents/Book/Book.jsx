import React from 'react'
import BookDP from '../../../assets/book-3-Copy.png'
import './Book.scss'

const Book = () => {
    return (
        <div className="book">
            <div className="book--DP">
                <img src={BookDP} alt="bookDP" />
            </div>
            <div className="book--details">
                <h1 className="book--details--name">Harrypotter Harrypotter Harrypotter</h1>
                <h1 className="book--details--subheadings">Bhanu prakash</h1>
                <h1 className="book--details--subheadings">9182473117</h1>
                <h1 className="book--details--subheadings">150, Dlf City Phase 2, Central Arcade, Gurgaon</h1>
                <h1 className="book--details--subheadings">350 INR</h1>
                
            </div>
        </div>
    )
}

export default Book
