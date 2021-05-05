import React from 'react'

export default function Parallel() {
    return (
        <div style={{perspective: "300px", transformStyle: "preserve-3d"}}>
            <div className="mybackground">This is Back</div>
            <div className="front">THis Is Front</div>
        </div>
    )
}
