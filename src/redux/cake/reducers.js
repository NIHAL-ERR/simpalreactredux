import { BUY_A_NEWCAKE } from "./cakeType";
const initialState={
    numOfCakes:10
}
const reducers=(state=initialState,action)=>{
switch(action.type){
    case BUY_A_NEWCAKE:
            return {...state,
            numOfCakes:state.numOfCakes-1
            }
                
    default:
        return state;        
}
}
export default reducers