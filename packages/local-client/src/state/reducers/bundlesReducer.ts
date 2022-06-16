import produce  from "immer";
import { Action } from "../actions";
import { ActionType } from "../action-types";


interface BundleState{
    [key:string]:{
        load:boolean;
        data:string;
        error:string;
    }

}
const initialState : BundleState= {}
    // [key:string]:{
    //     load:false;
    //     data:"";
    //     error:"";
    

 const reduce = produce((state: BundleState = initialState,action :Action) : BundleState=>{

    switch (action.type){
        case ActionType.BUNDLE_START:
            state[action.payload.cellId] = {
                load:true,
                data:"",
                error:"",
            }
           return state;
        case ActionType.BUNDLE_COMPLETE:
            state[action.payload.cellId] = {
                load:false,
                data:action.payload.bundle.code,
                error:action.payload.bundle.err,
            }
          return state;
        default:
          return state;
        
        }
},initialState) 

export default reduce;