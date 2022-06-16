import './text-editor.css'
import React,{useState,useEffect,useRef} from "react";

import MDEditor from '@uiw/react-md-editor'

import {Cell} from '../state'
import {useAction} from '../hooks/use-actions'
import { updateCell } from '../state/action-creators';

// interface TextEditorpPros{

// }
interface TextEditorpPros{

    cell: Cell
}


const TextEditor : React.FC <TextEditorpPros>=({cell})=>{

   // const [value, setValue] = useState("Enter the Context")
    const [editing, setEditing] =useState(false)
    const ref = useRef<HTMLDivElement |null>(null)
    const {updateCell} = useAction()


    useEffect(()=>{
        const listener =(event :MouseEvent)=>{
            if(ref.current && event.target && ref.current.contains(event.target as Node) )
                { 
                    //setEditing(true)
                    return                
                }
            setEditing(false)
        }
        document.addEventListener('click',listener,{capture :true})

        return () =>{

            document.removeEventListener('click',listener,{capture : true})
        }
    },[])

   // const onChange ={(cell.content = "")=>{ updateCell(cell.id,cell.content)}}

    if(editing)
    {
        return (      
        <div className='text-editor' ref={ref}>
              <MDEditor 
                value={cell.content} onChange={(v)=>{ updateCell(cell.id, v||"")}}/>
               
                

        </div>)
    }

    return(
        <div  className='text-editor card' onClick={()=>{setEditing(true)}}>
            <div className='card-content'>
                 <MDEditor.Markdown source={cell.content || "Enter the Context"}/>
            </div>   
         
        </div>
        )
   
}

export default TextEditor;