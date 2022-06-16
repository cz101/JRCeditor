import './code-editor.css'
import prettier from 'prettier'
import parser from 'prettier/parser-babel'

import {useRef} from "react"
import MonacoEditor ,{OnMount,OnChange}from "@monaco-editor/react"

interface CodeEditorProps {
  pass(value: string): void;
}


const CodeEditor: React.FC<CodeEditorProps>=({pass}) => {

  const editorRef = useRef<any>() 
  const handleEditorDidMount:OnMount=(editor,monaco)=>
    { 
      editorRef.current=editor;
    }

  const handleEditorChange:OnChange=(value,event)=>{ 
          //console.log (value);
          if(value)
          pass(value)
      }
    const onFormatClick = () => {
    // get current value from editor
    const unformatted = editorRef.current.getModel().getValue()

    // format that value
    const formatted = prettier
        .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        semi: true,
        singleQuote: true,
        })
        .replace(/\n$/, '')

    // set the formatted value back in the editor
    editorRef.current.setValue(formatted);
    }
      

    return (     
      <div className="editor-wrapper">
              {<button
                    className="button button-format is-primary is-small"
                    onClick={onFormatClick}
                >
                    Format
                </button> }
            <MonacoEditor
                theme="vs-dark"
                height="100%"
                defaultLanguage="javascript"
                defaultValue="// type your code "
                onMount={handleEditorDidMount}
                onChange={handleEditorChange}

                options={{
                    wordWrap:'on',
                    showUnused:false,
                    minimap: { enabled: false },
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }}
            />
      </div>
      )
  };
  

export default CodeEditor;