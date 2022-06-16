import './resizeable.css';
import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import { useState, useEffect } from 'react';


interface ResizableProps {
  direction: 'horizontal' | 'vertical';
   children?: React.ReactNode,
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {

  const[innerHeight, setinnerHight]=useState(window.innerHeight)
  const[innerWidth, setinnerWidth]=useState(window.innerWidth)

  const[width,setWidth]=useState( window.innerWidth * 0.75)

  
  /*change the window/ browser size dynamiccally */
  useEffect(()=>{

    let timer :any

    const listener = () =>{
    
      if (timer){

        clearTimeout(timer)
      }

    timer = setTimeout(()=>{
      setinnerHight(window.innerHeight) 
      setinnerWidth(window.innerWidth)
      if (window.innerWidth*0.75 <width) // to track max size of innterwindow width 
        {setWidth(window.innerWidth*0.75)}
    },100)
      
    }
    window.addEventListener('resize',listener)
    return()=>{
      window.removeEventListener('resize',listener)
    }
  },[])


  let resizableProps: ResizableBoxProps;

  if (direction === 'horizontal') {
    resizableProps = {
      className: 'resize-horizontal',
      minConstraints: [window.innerWidth * 0.2, Infinity],
      maxConstraints: [window.innerWidth * 0.75, Infinity],
      height: Infinity,
      width:width,
      resizeHandles: ['e'],
      onResizeStop:(event,data)=>{
        setWidth(data.size.width)
      },
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, 24],
      maxConstraints: [Infinity, window.innerHeight * 0.9],
      height: window.innerHeight * 0.4,
      width: Infinity,
      resizeHandles: ['s'],
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
