import React, { useCallback, useMemo, useState } from 'react'
import ChildA from '../components/ChildA';

const Optimization = () => {
    const [count, setCount] = useState(0);

    const changeHandler = useCallback(() =>{
        // console.log('first')
    },[])


    const expensiveCalculation = useMemo(() => {
        // Perform a computationally expensive operation
        console.log('Calculating...');
        console.log(count * 2)
        return count * 2;
      }, [count]);

    return (
        <div>

            <h1>Optimization</h1>
            <div>
                <div>{count}</div>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>

            <div>
                <ChildA changeHandler={changeHandler}/>
            </div>

            {expensiveCalculation}
        </div>
    )
}

export default Optimization