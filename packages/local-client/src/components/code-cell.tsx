import './code-cell.css'

import React, { useEffect, useState} from "react";
import CodeEditor from '../components/code-editor'
import Preview from '../components/preview';
import bundle from '../bundle';
import Resizeable from "./resizeable";
import {Cell} from '../state'
import {useAction} from '../hooks/use-actions'
import {useTypedSelector} from '../hooks/use-typed-selector'
import {useCumulativeCode} from '../hooks/use-cumulative-code'

interface CodeCellProps{

    cell: Cell
}

const CodeCell :React.FC <CodeCellProps> =({cell})=>{


     const [input, setInput] = useState('') // will remove by passing the cell 
    // const [err, setErr] = useState('')
    // const [code ,setCode] =useState('')

    const {updateCell, createBundel} = useAction()
    const bundle =useTypedSelector((state)=>state.bundlecells[cell.id])
    
    const cumulativeCode = useCumulativeCode (cell.id)
    //console.log(cumulativeCode)
    //console.log(bundle)

    /*auto compilie and output the results with timer setup */
    // useEffect(()=>{
    //     const timer= setTimeout(async ()=>{
    //                         const output =  await bundle(input);
    //                         setCode(output.code)   
    //                     },1500)
    //     return()=>{
    //             clearTimeout(timer)
    //             }                 
    //   },[input])

      const onClick =async() =>{
          console.log(cell.content)
        // const output =  await bundle(cell.content);
        // setCode(output.code)     
        // setErr(output.err)

        // createBundel(cell.id,cell.content)
        createBundel(cell.id,cumulativeCode)


    }              
   

    return (
        <>
      
        <div>
            <Resizeable direction="vertical">
                <div style={{height: 'calc(100% - 10px)', display: 'flex', flexDirection: 'row'}}>    
                    <Resizeable direction="horizontal">
                        {/* <CodeEditor pass={(value) => setInput(value)}/> */} 
                        < CodeEditor pass={(value) => updateCell(cell.id,value)}/>
                        {/* <textarea value={input} onChsange={(e)=>{setInput(e.target.value )}}></textarea> */}        
                        {/* <button onClick={onClick} >submit</button> */}
                    </Resizeable>    
                    <div className="progress-wrapper">
                    {bundle && <Preview code={bundle.data} bundleError={bundle.error}/> }
                    </div>
                </div>      
            </Resizeable>    
        </div>
        <div className='divstyle'>
        <button  onClick={onClick} >submit</button>
        </div>
                   
       </>
        )
         
}



export default CodeCell