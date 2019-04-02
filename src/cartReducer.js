const INITIAL_STATE = { cart: [] };

function rootReducer(state = INITIAL_STATE, action) {
 switch (action.type) {
   case "ADD":
     return { ...state, 
              cart: [ ...state.cart, action.payload ]
        };

   case "REMOVE":
     return { ...state,
              cart: state.cart.filter( i => i.id !== action.payload.id ) 
        };

   default:
     return state;
 }
}

export default rootReducer;