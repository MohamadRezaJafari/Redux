import { BUY_Cake } from "./cakeTypes";

export function buyCake(cake = 1) {
  return {
    type: BUY_Cake,
    payload: cake,
  };
}
