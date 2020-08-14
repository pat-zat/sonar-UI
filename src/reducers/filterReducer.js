
export default (state = [], action) => {
    switch (action.type) {

          case 'FETCH_FILTERS':
            return action.payload;

      default:
          return state;
    }
    

  };


 