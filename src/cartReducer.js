const INITIAL_STATE = { cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
 switch (action.type) {
   case "ADD":
     return { ...state, 
              cart: [ ...state.cart ]
        };

   case "REMOVE":
     return { ...state, count: state.count - 1 };

   default:
     return state;
 }
}

export default rootReducer;