import React, { useState } from 'react';
import './Counter.css';

const Counter: React.FC = () => {

    const [count, setCount] = useState(0);

    return (
        <div className={'counter-root'}>
            <div data-testid="counter" className={'counter-display'}>{count}</div>
            <button role="button" className={'button'}>Change</button>
        </div>
    );
};

export default Counter;
