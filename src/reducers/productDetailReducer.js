export default (state = [], action) => {
    switch (action.type) {
        
        case 'FETCH_PRODUCT_DETAIL':
        return [...state, action.payload];

        default:
        return state;
    }
}