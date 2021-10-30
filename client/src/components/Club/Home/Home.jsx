import React from 'react'
import PostCard from '../../SharedComponents/PostCard/PostCard'
import {ReactComponent as CameraIcon} from '../../../assets/camera.svg'
import './Home.scss'

const Home = ()=>{
    return (
        <div className="club-newsfeed" >
            <div className="newpostcard" >
                <textarea className="newpostcard--text" placeholder="Wanna post something?" ></textarea>
                <div className="newpostcard--footer" >
                    <h1>
                        Add an image &nbsp; 
                        <CameraIcon style={{verticalAlign:"sub"}} />
                    </h1>
                    {/* FIXME: below btn should be made as a seperate component*/}
                    <button  className="topbar-btns--loginbtn">
                        Post
                    </button>
                </div>
            </div>
            <hr />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    )
}

export default Home
