import React, { useState, useEffect } from 'react'

const DebouncingReact = () => {
    const [inputValue, setInputValue] = useState('');
    const [timeoutId, setTimeoutId] = useState(null);

    // console.log(first);
    /*  useEffect(() => {
      let timer = setTimeout(()=>{
         console.log(first)
       },[800]);
     
       return () => clearTimeout(timer);
     }, [first]); */

    const handleInputChange = event => {
        const newInputValue = event.target.value;

        // Clear the previous timeout if it exists
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout to update the input value after 500ms
        const newTimeoutId = setTimeout(() => {
            setInputValue(newInputValue);
        }, 500);

        // Update the timeoutId state with the new timeout identifier
        setTimeoutId(newTimeoutId);
    };


   /* // For Debouncing 
    let timeoutId = null;

  const handleInputChange = event => {
    const newInputValue = event.target.value;

    // Clear the previous timeout if it exists
    clearTimeout(timeoutId);

    // Set a new timeout to update the input value after 500ms of inactivity
    timeoutId = setTimeout(() => {
      setInputValue(newInputValue);
    }, 500);
  }; */

    return (
        <div>
            {/*  <input
                type='text'
                placeholder='enter text here'
                // value={first}
                onChange={(e) => { setfirst(e.target.value); setSecond(e.target.value) }}
                style={{ borderRadius: 4, border: '1px solid blue', height: '25px' }}
            /> */}
            {/* <div>Debouncing value=== {first}</div> */}
            <input
                type="text"
                placeholder="Type something..."
                value={inputValue}
                onChange={handleInputChange}
            />
            <p>Throttled Input Value: {inputValue}</p>
        </div>
    )
}

export default DebouncingReact