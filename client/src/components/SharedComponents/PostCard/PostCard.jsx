import React from 'react'
import { ReactComponent as TrashIcon } from '../../../assets/trashicon.svg'
import PostPic from '../../../assets/postPic.png'

import './PostCard.scss'

const PostCard = () =>{
    return (
        <div className="postcard" >
            <div className="postcard--header" >
                <h1 className="postcard--header-username">Bhanu Prakash</h1>
                <TrashIcon />
            </div>
            <div className="postcard--body" >
                <img src={PostPic} alt="postpic" />
                <div className="postcard--body-text" >
                I just read harrypotter book and it was mind blowing !! I just completed reading it if any one wanna give it a try just contact me for rent @100rs...#mustread #rentI just read harrypotter book
                 and it was mind blowing !! I just completed reading it if any one wanna give <br/><br/><br/> it a try just contact me for rent @100rs...#mustread #rentI just read harrypotter book and it was mind blowing !! I just completed reading it if any one wanna give it a try just contact me for rent @100rs...#mustread #rent
                </div>
            </div>
            <div className="postcard--footer" >
                <h1 className="postcard--footer-timestamp" >30 october</h1>
            </div>
        </div>
    )
}


export default PostCard
