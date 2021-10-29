import React from 'react';

import './clubCard.scss';

const ClubCard = ({
  card,
  title,
  members
}) => {
  return (
    <div className="club-card">
      <img className="club-card--img" src={card} alt="card" />
      <div className="club-card--content">
        <p className="club-card--content_title">{title}</p>
        <p className="club-card--content_members">{members} members</p>
      </div>
    </div>
  )
}

export default ClubCard;
