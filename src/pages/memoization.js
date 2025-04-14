import ChildComponent from '@/components/ChildComponent'
import React, { useCallback, useMemo, useState } from 'react'

const memoization = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['Learn React', 'Learn Memoization']);

    const increment = () => {
        setCount(count + 1);
    };

    console.log("Rendering Parent component");

    const changeHandler = useCallback(() => {
        console.log('clickeddd')
    }, []);

    const expensiveCalculation = (num) => {
        console.log('Calculating...');
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };

    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div>
            <ChildComponent todos={todos} changeHandler={changeHandler} />
            <hr />
            <div>
                <h2>Counter: {count}</h2>
                <button onClick={increment}>Increment</button>
            </div>
            {calculation}
        </div>
    )
}

export default memoization