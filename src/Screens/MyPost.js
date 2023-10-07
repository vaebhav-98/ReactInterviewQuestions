import React, { useState } from 'react'
import { filters } from '../json/filters';
import { items } from '../json/items';;

const MyPost = () => {
  const [products, setProducts] = useState(items);

  const [activeFilters, setActiveFilters] = useState([]);

  const filterProducts = (filter) => {
    if (activeFilters.includes(filter)) {
      // Remove the filter
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      // Add the filter
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const filteredProducts = activeFilters.length === 0
    ? products
    : products.filter((product) =>
      activeFilters.some((filter) => product.category.includes(filter))
    );

  return (
    <div>
      <div>
        <h2 style={{ textAlign: 'center' }}>MoonshotX Filters</h2>
        <div className="items-container">{filters.map((item) => (
          <div className={activeFilters.includes(item) ? "button active" : "button"} key={item} onClick={() => filterProducts(item)}>{item}</div>
        ))}</div>
        <div>
          <div className='items-container'>
            {
              filteredProducts.length === 0 ? <div className="no-products">No products matching the selected filters.</div> : filteredProducts.map((item) => {
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

export default MyPost