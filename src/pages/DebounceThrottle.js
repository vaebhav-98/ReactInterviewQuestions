import React from 'react'
import Debouncing from '../components/Debouncing'
import Throttling from '../components/Throttling'

const DebounceThrottle = () => {
    return (
        <div>DebounceThrottle
            <div>
                <Debouncing />
                <Throttling/>
            </div>
        </div>
    )
}

export default DebounceThrottle