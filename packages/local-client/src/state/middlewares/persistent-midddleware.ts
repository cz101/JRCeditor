import { Dispatch } from "redux"
import { Action } from "../actions"
import { ActionType } from "../action-types"
import { saveCells } from "../action-creators"
import { RootState } from "../reducers"
export const persistentmiddleware = (
    {dispatch,getState} : {dispatch:Dispatch<Action>; getState :()=>RootState})=>
    {
        let timer:any
        return (next:(action:Action)=> void)=>{
            return (action: Action) =>{
                next(action)
                if(
                    [
                        ActionType.MOVE_CELL,
                        ActionType.UPDATE_CELL,
                        ActionType.INSERT_CELL_AFTER,
                        ActionType.DELETE_CELL
                    ].includes(action.type)
                ){
                    if (timer){clearTimeout(timer)}
                    timer =setTimeout(() => {
                          //console.log("save my sale from middleware")
                    saveCells()(dispatch,getState)
                    }, 250);
                  
                }

            }
        }
}