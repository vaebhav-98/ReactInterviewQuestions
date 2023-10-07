import React, { useState } from 'react'
import { filters } from '../json/filters';
import { items } from '../json/items';

const TestMyself = () => {
    const [products] = useState(items);
    const [activeFilters, setActiveFilters] = useState([]);

    const changeHandler = (value) => {
        if (activeFilters.includes(value)) {
            setActiveFilters(activeFilters.filter((f) => f !== value))
        }
        else {
            setActiveFilters([...activeFilters, value]);
        }
    }

    const filteredProducts = activeFilters.length === 0 ?
        products : products.filter((product) => activeFilters.some((item) => product.category.includes(item)));

    return (
        <div>
            <h1>Products</h1>
            <div style={{display:'flex', justifyContent:'space-evenly'}}>{filters.map((item, idx) => <div onClick={() => changeHandler(item)}>{item}</div>)}</div>

            <div>{filteredProducts.length > 0 ? <div>{filteredProducts.map((item, idx) => <div>{item.name}</div>)}</div> : <div></div>}</div>
        </div>
    )
}

export default TestMyself