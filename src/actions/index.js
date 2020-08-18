 // import _ from 'lodash';
import advancedSearch from '../apis/AdvancedSearch';
//import filterSet from '../apis/FilterSet';
import { trackPromise } from 'react-promise-tracker';

// export const dataStateChange = (e, getState) => {
//     return {
//         type: 'DATA_STATE_CHANGE',
//         payload: {
//             dataState: e.data
//         }
//     };
// };

export const fetchFilters = () => async dispatch => {
    const fresponse = await advancedSearch.get('IconFilters/Details/gauges');
    //console.log(fresponse.data.Data[0].filter);
    dispatch({type: 'FETCH_FILTERS', payload: fresponse });
};


export const fetchProducts = () => async dispatch => {
    const response = await trackPromise(advancedSearch.get('FilterSet/Details/Gauges'));
    //console.log (response.data.Data[0].filterValue[0].value[0]);
    dispatch({type: 'FETCH_PRODUCTS', payload: response.data.Data });
};

export const itemsPageChange = (paging) => dispatch => {
    dispatch({
        type: 'ITEMS_PAGE_CHANGE',
        ...paging
    });
}

export const dataChange = (products, dataState) => dispatch =>{
    dispatch({
        type: 'DATA_CHANGE',
        payload: products
    });
}

// export const itemsPageChange = (paging) => {
//     return {
//         type: 'ISSUES_PAGE_CHANGE',
//         ...paging
//     }
// }



// export const fetchProducts = () => async dispatch => {
//     const response = await filterFetch.get(catIcon);
//     dispatch({type: 'FETCH_PRODUCTS', payload: response.Data.Data });
// };

// export const fetchProducts = () => async (dispatch, getState) => {
//     const response = await filterFetch.get(getState().catIcon);
//     dispatch({type: 'FETCH_PRODUCTS', payload: response.Data.Data });
// };





//--------------------------------------------------------------------------------------

// export const selectProduct = sku => {
//     return {
//         type: 'PRODUCT_SELECTED',
//         payload: sku
//     };
// };

// export const fetchProductDetail = id => async (dispatch, getState)  => {
//     //getState().selectedProductSKU
//         const response = await jsonPlaceholder.get('/users/' + id);
//         dispatch({type: 'FETCH_USER', payload: response.data });
//     };

