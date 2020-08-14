let dataState = {
    skip:0,
    take: 10,
  }
  
  export default (state = dataState, action) => {
      if (action.type === 'DATA_CHANGE') {
          let newState = { dataState: action}
          return newState
      } else {
          return state;
      }
  }
  
  //separate the filtering
  //or maybe combine into dataState see how its done in examples and old project
  //
  