import { useState } from 'react';

const App = (): JSX.Element => {
    const [count, setCount] = useState(0);

    const handleIncrement = (): void => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = (): void => {
        setCount((prev) => prev - 1);
    };

    return (
        <div className="app">
            <h1>React Frontend Test Environment</h1>
            <div className="counter">
                <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
};

export default App;
