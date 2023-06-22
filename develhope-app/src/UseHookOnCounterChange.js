import React, { useEffect } from 'react';

export function CounterChangeHandler({ count }) {
    useEffect(() => {
    console.log(`The counter is: ${count}`);
    }, [count]);
}