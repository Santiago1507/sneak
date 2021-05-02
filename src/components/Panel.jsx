import React from 'react';
import useImagesApi from '../hooks/useImagesApi';
import useGetImages from '../hooks/useGetImages';
import PanelItem from './PanelItem';

import '../assets/styles/components/Panel.scss';

const Panel = () => {
  const API = useGetImages('random');
  const initialState = useImagesApi(API);

  return initialState.length === 0 ? (
    <div className="loading"></div>
  ) : (
    <section className="content-panel">
      <div className="content-panel__container grid" id="main-panel">
        {initialState.results.map((item) => (
          <PanelItem key={item.id} {...item} />
        ))}
      </div>

      <div className="content__btn">
        {/*  <button className="content-pane__btn-more" type="button">
          Show Me More
        </button> */}
      </div>
    </section>
  );
};

export default Panel;
