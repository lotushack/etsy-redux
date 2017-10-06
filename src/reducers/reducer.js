import update from 'immutability-helper';
import {FILTER_PRODUCTS} from "../actions/actions";
import products from '../data/products';

// Define initial state object
// Make sure the state object contains the `products` array imported in this file
// The state will also require a property for the current state of filterable data
const initialState = {
  products: products,
}

// Finish writing the reducer for the `FILTER_PRODUCTS` action
// Provide the reducer function delration with the necessary parameters
// Give the `state` parameter a default value of `initialState`
const reducer = function(state = initialState, action) {
    // When a `FILTER_PRODUCTS` is provided, return a new state
    // Be sure not to mutate state
    // Use the `update` operator provided by `immutability-helper`
    // to update the the state property describing current state of filterable data
    // provided by the `action.payload`
    switch(action.type){
      case FILTER_PRODUCTS:
      let filterSearch = products.filter((productInfo) => {
      // complete the `if else` statement including conditions and `products` value
      if (productInfo.price < 20 && action.payload === "underTwenty") {
        return true
        // console.log("underTwenty");
      } else if (productInfo.price >= 20 && action.payload === "overTwenty") {
        return true
        // console.log("overTwenty");
      } else if  (action.payload === 'all') {
        return true
        // console.log("all");
      } else {
        return false
      }
    })
    // console.log("filteredSearch", filterSearch);
      return {products: filterSearch}
      break;
      default:
      return state
      break;

  }
}

export default reducer;
