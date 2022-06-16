// export default () =>{
//     console.log("sever is listenining ")
        
// }

import express  from "express"
import path from 'path'
import { createProxyMiddleware } from "http-proxy-middleware"
import { createCellsRouter } from "./routes/cell"

export const serve =(   port: number, 
                        filename:string,
                        dir :string, 
                        useProxy:boolean) =>{

    // console.log('server port number :', port)
    // console.log('fetching / saving filename :', filename)
    // console.log('file is in dir:', dir)

    const app= express()
    app.use(createCellsRouter(filename,dir))

    if (useProxy){
            console.log("---------------using proxy server-------------------")
            app.use(createProxyMiddleware({
                    target: 'http://localhost:3000',
                    ws:true,
                    logLevel:'silent',
                }))

    }
    else{
        console.log("-------------using static built ---------------- ")
        const packagePath = require.resolve('@chaoslab/local-client/build/index.html')
        app.use(express.static(path.dirname(packagePath)))
    }

    // express to handle async action 
    return  new Promise<void>((resolve,reject)=>{
        app.listen(port,resolve).on('error',reject)
    })
   
}