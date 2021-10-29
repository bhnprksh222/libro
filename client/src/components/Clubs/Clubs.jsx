import React from 'react';

import ClubCard from './ClubCard';
import './clubs.scss';

import novels from '../../assets/novels.png';
import h10 from '../../assets/h10.png';
import nit from '../../assets/nit.png';
import haryana from '../../assets/haryana.png';
import AddBtn from '../AddBtn/AddBtn';

const Clubs = () => {
  const clubCardContent = [
    { pic: novels, members: 12, title: "Stephen King" },
    { pic: nit, members: 250, title: "NIT Kurukshetra" },
    { pic: h10, members: 57, title: "H-10" },
    { pic: haryana, members: 2603, title: "Haryana" },
  ];

  return (
    <div className="clubs">
      <div className="clubs-top">
        <p className="clubs-top--title">Clubs nearby</p>
        <AddBtn />
      </div>
      <div className="clubs-cards">
        {
          clubCardContent.map(({pic, members, title}) => {
            return <ClubCard card={pic} members={members} title={title} />
          })
        }
        <button className="clubs-cards--morebtn">see more...</button>
      </div>
    </div>
  )
};

export default Clubs;
