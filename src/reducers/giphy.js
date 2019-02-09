const data = (state = {}, action) => {
    switch(action.type){
      case 'GET_CODE':
      return action.data
          default:
          return state;
    }
  
  }
  export default data;