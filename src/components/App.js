import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '@progress/kendo-theme-material/dist/all.css';

//import SearchBar from './SearchBar';
//import Icons from './Icons';
import ProductGrid from './ProductGrid';

const App = () => {
    return <div>
        <BrowserRouter>
        {/* <SearchBar /> */}
         {/* <icons /> */}
            <div>
                <Route path="/" component={ProductGrid} />
            </div>       
        </BrowserRouter>
    </div>;
};

export default App; 