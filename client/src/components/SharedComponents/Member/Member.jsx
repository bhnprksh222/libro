import React from 'react'
import Avatar from '../../../assets/DP.png'

import './Member.scss'

const Member = () => {
    return (
        <div className="member">
            <div className="member--DP">
                <img src={Avatar} alt="avatar" />
            </div>
            <div className="member--name">
            Daenearys Targareon
            </div>
        </div>
    )
}

export default Member
