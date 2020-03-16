import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input 
          type="checkbox" 
          value="name" 
          checked={null} 
          onChange={props.changeSort}/>
        Alphabetically
      </label>
      <label>
        <input 
          type="checkbox" 
          value="price" 
          checked={null} 
          onChange={props.changeSort}
        />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.changeFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
