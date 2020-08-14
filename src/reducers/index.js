import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import filterReducer from './filterReducer';
import pagingReducer from './pagingReducer';
import dataChangeReducer  from './dataChangeReducer.js';

//import productDetailsReducer from './productDetailsReducer';

//create reducers in separate files and import into index.js file
// and wire up to combinedREducers

// const dataStateReducer = () => {
//     return {dataState: { take: 10, skip: 0 }};
// };

export default combineReducers({
    products: productsReducer,
    filters: filterReducer,
    itemPaging: pagingReducer,
    dataChanging: dataChangeReducer
});