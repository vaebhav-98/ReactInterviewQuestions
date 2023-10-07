import React, { useState } from 'react'
import {items} from "../json/items";
import {filters} from "../json/filters";


const Posts = () => {
  const [state, setState] = useState({
    filteredItems: items,
    activeFilters: []
  });
  const { filteredItems, activeFilters } = state;

  const addRemoveFilter = (filterName) => {
    const index = activeFilters.indexOf(filterName)
    if (index === -1) {
      state.activeFilters.push(filterName)
      console.log(index, "index at -1")
    }
    else {
      state.activeFilters.splice(index, 1);
      console.log(index, "splice index at 1")
    }
    if (state.activeFilters.length !== 0) {
      state.filteredItems = items.filter((item) => {
        return state.activeFilters.includes(item.category)
      })
    }
    else
    state.filteredItems = items
    setState({ ...state })
  };  

  return (
    <div>
      <div>
        <h2 style={{ textAlign: 'center' }}>MoonshotX Filters</h2>
        <div className="items-container">{filters.map((item, idx) => (
          <div className={state.activeFilters.includes(item) ? "button active" : "button"} key={item} onClick={() => addRemoveFilter(item)}>{item}</div>
        ))}</div>
        <div>
          <div className='items-container'>
            {
              filteredItems.map((item) => {
                return <div className="item" key={item.name + item.category}>
                  <div className="">{item.name}</div>
                  <div className="category">{item.category}</div>
                </div>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts