import React from 'react';
import IconSearch from '../assets/statics/search.svg';

import '../assets/styles/components/Search.scss';

const Search = () => (
  <div className="header__search">
    {/* <input type="text" className="input" required /> */}
    <img className="header__search--iconSearch" src={IconSearch} alt="icon-search" />
  </div>
);

export default Search;
