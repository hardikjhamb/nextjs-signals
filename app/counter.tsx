"use client";

import { useSignal, useComputed, useSignalEffect } from '@preact/signals-react';

function Counter() {
    // Define a signal `count` initialized with value 0
    const count = useSignal(0);

    const double = useComputed(() => count.value * 2);


    useSignalEffect(() => {
        // This effect will run whenever `count` changes
        console.log(`Count: ${count}, Double: ${double}`);
    });


    const incrementCount = () => {
        count.value++; // Increment the value of `count`
    };

    return (
        <div className="counter-container">
            <div className="counter">
                <p className="count-label">Count:</p>
                <p className="count-value">{count}</p> {/* Display the current value of `count` */}
                <p className="double-label">Double:</p>
                <p className="double-value">{double}</p> {/* Display the current value of `double` */}
                <button className="increment-button" onClick={incrementCount}>
                    Increment
                </button>
            </div>
        </div>
    );
}

export default Counter;
