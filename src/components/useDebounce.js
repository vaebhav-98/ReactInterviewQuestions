import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
    const [debouncedSearch, setDebouncedSearch] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(value)
        }, delay);

        return () => {
            clearTimeout(timer);
        }
    }, [value, delay])

    return debouncedSearch;
}

export default useDebounce
