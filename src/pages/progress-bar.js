
import ProgressBar from '../components/ProgressBar'
import React, { useEffect, useState } from 'react'

const index = () => {
    const [value, setValue] = useState(0);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setValue((prev) => prev + 0.1);
        }, 20);
    }, []);

    return (
        <>
            {/* <p>Progress Bar</p> */}
            <ProgressBar value={value} onComplete={() => setSuccess(true)} />
            <p>{success ? "Complete!" : "Loading..."}</p>
        </>
    )
}

export default index
