import React, { useRef, useState } from 'react'

const question = () => {
    const inputRef = useRef(null);
    const [value] = useState('');
    const handleChange = () => { };

    return (
        <div>
            A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".
            A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.
            Most native React form components support both controlled and uncontrolled usage:

            // Controlled:
            <input type="text" value={value} onChange={handleChange} />

            {/* // Uncontrolled: */}
            <input type="text" defaultValue="foo" ref={inputRef} />
            {/* // Use `inputRef.current.value` to read the current value of <input></input> */}
        </div>
    )
}

export default question