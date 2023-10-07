import React, { useState } from 'react'
import { filters } from '../json/filters';
import { items } from '../json/items';

const NewPost = () => {
    const [products] = useState(items);
    const [activeFilters, setActiveFilters] = useState([]);

    const filterHandler = (val) => {
        if (activeFilters.includes(val)) {
            setActiveFilters(activeFilters.filter((item) => item !== val))
        }
        else {
            setActiveFilters([...activeFilters, val]);
        }
    }

    const filteredItems = products.filter((productItem) => activeFilters.some((item) => productItem.category.includes(item)));


    return (
        <div>NewPost
            <div className="items-container">{filters.map((item, idx) =>
                <div onClick={() => filterHandler(item)} className={activeFilters.includes(item) ? "button active" : "button"}>{item}
                </div>
            )}
            </div>
            <div>
                {filteredItems.map((item, idx) => <div className="item" key={item.name + item.category}>
                    <div className="">{item.name}</div>
                    <div className="category">{item.category}</div>
                </div>)}
            </div>
        </div>
    )
}

export default NewPost