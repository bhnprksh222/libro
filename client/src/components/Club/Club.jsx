import React from 'react';
import ClubDP from '../../assets/DP.png'
import Home from './Home/Home'
import Books from './Books/Books'
import Members from './Members/Members'
import './Club.scss';


const Club = () => {
    return (
        <>
            <div className="clubHeader">
                <div className="clubHead" >
                    <div className="clubHead-DP" >
                        <img src={ClubDP} alt="display pic" />
                    </div>
                    <div className="clubHead-details" >
                        <h1 className="clubHead-details--name" >NIT Kurukshetra</h1>
                        <h1 className="clubHead-details--subHeading" >100 Members</h1>
                    </div>
                </div>
                <div className="club-navbar" >
                    <h1 className="navitem active" >Home</h1>
                    <h1 className="navitem" >Books</h1>
                    <h1 className="navitem" >Members</h1>
                </div>
            </div>
            <div className="clubBody" >
                {/* <Home /> */}
                {/* <Books /> */}
                <Members />
            </div>
        </>
    )
}

export default Club;