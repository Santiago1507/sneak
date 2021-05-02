import React from 'react';

import '../assets/styles/components/PanelItem.scss';

const PanelItem = ({ user, urls }) => {
  return (
    <div className="container">
      <div className="box-img">
        <img src={urls.thumb} alt={user.name} loading="lazy" />
      </div>
      <div className="overlay">
        <div className="overlay__desc">
          <h2 className="panel-item__title">{user.name}</h2>
          <hr />
          <p className="panel-item__subTitle">{user.location === null ? 'No Location' : user.location}</p>
        </div>
      </div>
    </div>
  );
};

export default PanelItem;
