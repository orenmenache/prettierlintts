import { useEffect, useState } from 'react';

// Example 1: TypeScript is happy, ESLint catches the issue
export const BadComponent1 = () => {
    const [count, setCount] = useState(0);
    const userId = '123';

    // ESLint ERROR: Missing dependency 'userId' in useEffect
    useEffect(() => {
        console.log(`User ${userId} has count: ${count}`);
    }, [count]); // Should be [count, userId]

    return <div>{count}</div>;
};

// Example 2: TypeScript is happy, ESLint catches the issue
export const BadComponent2 = () => {
    // ESLint ERROR: Must use arrow function (your config)
    function handleClick() {
        console.log('clicked');
    }

    return <button onClick={handleClick}>Click</button>;
};

// Example 3: TypeScript is happy, ESLint catches the issue
export const BadComponent3 = () => {
    const items = ['a', 'b', 'c'];

    // ESLint ERROR: Missing 'key' prop
    return (
        <div>
            {items.map((item) => (
                <div>{item}</div>
            ))}
        </div>
    );
};

// Example 4: TypeScript is happy, ESLint catches the issue
export const BadComponent4 = () => {
    const fetchData = async () => {
        return 'data';
    };

    const handleClick = () => {
        // ESLint ERROR: Floating promise (not awaited or handled)
        fetchData();
    };

    return <button onClick={handleClick}>Fetch</button>;
};

// Example 5: TypeScript is happy, ESLint catches the issue
export const BadComponent5 = () => {
    const value = 5;

    // ESLint ERROR: Comparing value with itself
    if (value === value) {
        console.log('This is always true!');
    }

    return <div>{value}</div>;
};

