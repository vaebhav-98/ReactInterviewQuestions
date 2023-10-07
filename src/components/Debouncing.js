import React, { useState } from 'react'

const Debouncing = () => {
    const [search, setSearch] = useState("");
    let timer;

    const debounce = (fn, delay) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fn, delay)
    }

    const changeHandler = (e) => {
        setSearch(e.target.value)
        debounce(() => {
            console.log("fetching result for - " + e.target.value);
        }, 1000)
    }
    return (
        <div style={{marginTop:'200px'}}>Debouncing

            <div>
                <input
                    value={search}
                    onChange={changeHandler}
                    placeholder='enter here'
                />
            </div>
        </div>
    )
}

export default Debouncing