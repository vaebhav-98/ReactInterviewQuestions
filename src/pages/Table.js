import React from 'react'

const Table = () => {
    const repetitiveArray = [
        "Radhesh",
        "Radhesh",
        "Jai",
        "Vaibhav",
        "Divyansh",
        "Divyansh"
    ];

    // Count the occurrences of each name in the array
    const countOccurrence = repetitiveArray.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {})
    

    // console.log(Object.entries(countOccurrence))
    // console.log(countOccurrence['Jai'])
    // console.log(Object.keys(countOccurrence).map((item)=> item))

    return (
        <div>
            <h2>Names Occurrence Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>Occurrences</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(countOccurrence).map((num) => (
                        <tr key={num}>
                            <td>{num}</td>
                            <td>{countOccurrence[num]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table