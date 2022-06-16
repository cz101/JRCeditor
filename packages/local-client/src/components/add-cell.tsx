import './add-cell.css'
import {useAction} from '../hooks/use-actions'

interface AddCellProps{
    previousCellid: string | null
    forceVisiable? : boolean
}

const AddCell : React.FC <AddCellProps>=({forceVisiable,previousCellid}) =>{

    const{insertCellAfter}= useAction()
    return( 
        <div  className= {`add-cell && ${forceVisiable && 'force-visiable'} `}>
            <div className="add-buttons">
                <button className ="button is-rounded is-primary is-small"
                    onClick={()=>{insertCellAfter(previousCellid,'code')}}>
                        <span className="incon is-small">
                            <i className = "fas fa-plus"/>
                        </span>
                        <span>Code</span>
                </button>
                <button className ="button is-rounded is-primary is-small"
                    onClick={()=>{insertCellAfter(previousCellid,'text')}}>
                        <span className="incon is-small">
                            <i className = "fas fa-plus"/>
                        </span>
                        <span>Text</span>
                </button>
            </div>
            <div className="divider"></div>
        
        </div>
)}

export default AddCell