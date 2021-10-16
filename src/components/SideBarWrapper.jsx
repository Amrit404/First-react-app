import React, { useState } from 'react';
import Sidebar from './Sidebar';

const SideBarWrapper = () => {
    let [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(++count);
        console.log(count);
    };

    return (
        <div className="parentSidebar">
            <button onClick={handleClick}>Click</button>
            <Sidebar count={count} />
        </div>
    );
};

export default SideBarWrapper;