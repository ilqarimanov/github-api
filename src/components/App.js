import React from 'react';
import Home from './Home';

import {BrowserRouter, Route} from 'react-router-dom'


const App = () => {
    return (
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    )
}

export default App
