import React from 'react'

const Throttling = () => {
    let count = 0;
    let apicalled;
    
    const throttle = (fn, time)=>{
        if(apicalled) return;
        apicalled = true;
        setTimeout(()=> {
            fn();
            apicalled = false;
        },time);
    }

    const sendEmail = () =>{
        throttle(()=> console.log('sending email', count++),600)
    }

  return (
    <div style={{marginTop: "200px"}}>Throttling

        <div>
            <button onClick={sendEmail}>sendEmail</button>
        </div>
    </div>
  )
}

export default Throttling