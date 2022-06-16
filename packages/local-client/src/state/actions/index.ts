import { ActionType } from "../action-types"
import {Cell,   CellTypes} from "../cell"

export type Direction = 'up'|'down';
export interface MoveCellAction{
    type:ActionType.MOVE_CELL;
    payload:{
        id:string;
        direction: Direction
    };
}
export interface UpdateCellAction{
    type: ActionType.UPDATE_CELL;
    payload :{
        id:string;
        content :string
    };
   
}

export interface DeletCellAction{
    type: ActionType.DELETE_CELL;
    payload: string;
}

export interface InsetCellBeforeAction{
    type:ActionType.INSERT_CELL_BEFORE;
    payload:{
        id:string | null;
        type: 'code' | 'text';
    };
}

export interface InsetCellAfterAction{
    type:ActionType.INSERT_CELL_AFTER;
    payload:{
        id:string | null;
        type: 'code' | 'text';
    };
}


export interface BundleStartAction{
    type: ActionType.BUNDLE_START;
    payload:{
            cellId: string;
    }
    
}

/*payload is depends on the object from bnundle process */
export interface BundleCompleteAction{

    type: ActionType.BUNDLE_COMPLETE;
    payload :{
        cellId: string;  
        bundle : {
            code: string;
            err: string;
        }
    }

}

export interface FetchCellsAction{
    type: ActionType.FETCH_CELLS
}
export interface FetchCellsCompelteAction{
    type: ActionType.FETCH_CELLS_COMPLETE,
    payload:Cell[]
}

export interface FetchCellsErrorAction{
    type: ActionType.FETCH_CELLS_ERROR,
    payload:string
}
export interface SAVE_CELLS_ERROR{
    type:ActionType.SAVE_CELLS_ERROR
    payload:string
}


export type Action= MoveCellAction 
                    | DeletCellAction 
                    | UpdateCellAction 
                    | InsetCellBeforeAction
                    | InsetCellAfterAction 
                    | BundleStartAction
                    | BundleCompleteAction
                    | FetchCellsAction
                    | FetchCellsCompelteAction
                    | FetchCellsErrorAction
                    | SAVE_CELLS_ERROR

