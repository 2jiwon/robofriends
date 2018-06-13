import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
  return (
    <div className="flip-card">
      <div className="tc w250 bg-light-blue dib br3 pa3 ma3 bw2 shadow-5">
        <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt="" />
        <div>
          <h2 className="f4">{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
