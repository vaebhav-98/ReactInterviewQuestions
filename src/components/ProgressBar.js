import { useEffect, useState } from "react";
import React from "react";
export const MIN = 0;
export const MAX = 100;

export default function ProgressBar({ value = 0, onComplete = () => { } }) {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(Math.max(value, MIN), MAX));

        if (value >= MAX) {
            onComplete();
        }
    }, [value]);

    return (
        <div className="progress">
            <span
                style={{
                    color: percent > 49 ? "white" : "black"
                }}
            >
                {percent.toFixed()}%
            </span>
            <div
                style={{
                    transform: `scaleX(${percent / MAX})`,
                    transformOrigin: "left"
                }}
                aria-valuemin={MIN}
                aria-valuemax={MAX}
                aria-valuenow={percent}
                role="progressbar"
            />
        </div>
    );
}




{/* <div style={{ width: '100%', backgroundColor: '#eee', height: '30px', borderRadius: '4px', position: 'relative' }}>
      <div
        style={{
          width: `${percent}%`,
          backgroundColor: 'green',
          height: '100%',
          borderRadius: '4px',
          transition: 'width 0.1s linear',
        }}
      ></div>
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: percent >= 50 ? 'white' : 'black',
        }}
      >
        {percent.toFixed(0)}%
      </span>
    </div> */}