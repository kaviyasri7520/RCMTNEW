import React from "react";
import './FilterComponent.css'


const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <div className="filterComponent">
    <input className="searchfilter"
      id="search"
      type="text"
      size={5}
      placeholder="search..."
      value={filterText}
      onChange={onFilter}
      autoComplete='off'
    />
    <button className="clearbutton" onClick={onClear}>X</button>
  </div>
);

export default FilterComponent;
