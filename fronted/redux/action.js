import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionTypes"
export const increment = () => {
    type: INCREMENT_COUNTER;

}
export const decrement = () => {
    type: DECREMENT_COUNTER;
}