import React from 'react'

const ChildComponent = ({ todos, changeHandler }) => {
    console.log('child component')

    return (
        <div>
            {/* <h2>My Todos</h2>
            {todos.map((todo, index) => (
                <p key={index}>{todo}</p>
            ))} */}
        </div>
    )
};

export default React.memo(ChildComponent)
