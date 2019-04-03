import { ADD, REMOVE } from "./actionTypes";
const INITIAL_STATE = { cart: [] };

function cartReducer(state = INITIAL_STATE, action) {

const foundItemIndex = state.cart.findIndex((item)=> item.id === action.payload.id);

console.log("REMOVEEEITEEMMMM", foundItemIndex)
if (action.type === ADD) {
  
    if (foundItemIndex !== -1) {
      let oldItem = state.cart[foundItemIndex]
      let newItem = {...oldItem, count: oldItem.count +1}

      return { 
              ...state, 
              cart: 
                    [...state.cart.slice(0,foundItemIndex), newItem,     ...state.cart.slice(foundItemIndex+1)]
             };
             
    } else if (foundItemIndex === -1) {
      return {
              ...state,
              cart: 
                    [...state.cart, {...action.payload, count:1}]
      }
    }

} else if (action.type === REMOVE) {
      if (foundItemIndex !== -1 && state.cart[foundItemIndex].count > 0) {
        let oldItem = state.cart[foundItemIndex]
        let newItem = {...oldItem, count: oldItem.count -1}

        return { 
                ...state, 
                cart: 
                      [...state.cart.slice(0,foundItemIndex), newItem, ...state.cart.slice(foundItemIndex+1)]
              };
  
        } 
  };
      return state;
}
export default cartReducer;