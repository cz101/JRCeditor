import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { persistentmiddleware } from "./middlewares/persistent-midddleware";
//import { ActionType } from "./action-types";

//export const store = legacy_createStore(reducers,{},applyMiddleware(thunk))
export const store = legacy_createStore(reducers,{},applyMiddleware(persistentmiddleware, thunk))

/* // manuall test the action type 

store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'code'
    }
})
store.dispatch({
    type: ActionType.INSERT_CELL_AFTER,
    payload:{
        id:null,
        type:'text'
    }
})
*/
// store.dispatch({
//     type: ActionType.INSERT_CELL_AFTER,
//     payload:{
//         id:null,
//         type:'code'
//     }
// })
// store.dispatch({
//     type: ActionType.INSERT_CELL_AFTER,
//     payload:{
//         id:null,
//         type:'text'
//     }
// })
//console.log(store.getState())