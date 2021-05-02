import React from 'react';
import GridView from '../assets/statics/grid-view.svg';
import RowView from '../assets/statics/row-view.svg';

import '../assets/styles/components/Distribution.scss';

const Distribution = ({ children, childrenPanel }) => {

  const handleClick = () => {
    const containerPanel = document.getElementById('main-panel');
    const elements = {
      btnGrid: document.getElementById('grid'),
      btnRow: document.getElementById('row'),
    };

    if (containerPanel.className === 'content-panel__container grid') {
      containerPanel.classList.remove('grid');
      containerPanel.classList.add('row');
      elements.btnGrid.classList.remove('disable');
      elements.btnRow.classList.add('disable');
    } else {
      containerPanel.classList.remove('row');
      containerPanel.classList.add('grid');
      elements.btnRow.classList.remove('disable');
      elements.btnGrid.classList.add('disable');
    }
  };

  return (
    <div className="dist">
      <div className="dist__view">
        <img className="dist__view--img disable" id="grid" src={GridView} alt="grid view" onClick={handleClick} />
        <img className="dist__view--img" id="row" src={RowView} alt="row view" onClick={handleClick} />
      </div>

      {children}

      {childrenPanel}
    </div>
  );
};

export default Distribution;
