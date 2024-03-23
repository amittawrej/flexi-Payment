import React from 'react'
import { Link } from 'react-router-dom'

import {  useCount } from './index';
const Page2 = () => {
    const { value } = useCount();

    return (
        <div>
            <h2>Page 2</h2>
            <p>Number: {value}</p>
            <Link to="/">Page 1</Link>
        </div>
    );
}

export default Page2;
