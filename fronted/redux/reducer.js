import { increment, decrementz } from "./action";
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./actionTypes";

const initialState = {
    counter: 0
}
export const reducer = (state=initialState, action) =>{

    switch(action.type){ 
        case INCREMENT_COUNTER :
        return{
            ...state,
            counter: state.counter+1
        }
        case DECREMENT_COUNTER:
            return{
                ...state,
                counter: state.counter-1
            }
        default:
        return state;
    }
    

}