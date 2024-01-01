import { BUY_Cake } from "./cakeTypes";

// use selector: برای دسترسی به این مقدار

const initialState = {
  numOfCakes: 10,
};

// useDispatch: برای دسترسی به این مقدار

export default function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_Cake: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    }
    default:
      return state;
  }
}
