import React from 'react'

const Promises = () => {
    const promiseOne = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('success');
            resolve();
        }, 1000)
    });

    promiseOne.then(() => {
        console.log('promise resolved finally!')
    })
    return (
        <div>Promises</div>
    )
}

export default Promises