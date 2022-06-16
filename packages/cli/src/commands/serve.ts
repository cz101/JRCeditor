import { Command  } from "commander";
import { serve } from "@chaoslab/local-api";
import path from "path";

const isProduction = process.env.NODE_ENV ==='production'

export const serveCommand = new Command ()
    .command('serve [filename]')
    .description('open a file for editing')
    .option('-p --port <number>', 'port to run the server on','4005')
    .action(async(filename='test.js',options :{port:string}) =>{ 
    //    console.log(filename,option)
        try{
        const dir = path.join(process.cwd(),path.dirname(filename))
        await serve(parseInt(options.port),filename,dir,!isProduction)
        console.log(`to open ${filename} ,please go to http://localhost:${options.port} to edit the file`)
    
    }
        catch(err:any){
            console.log("here is soming went wrong"+err.message)
            process.exit(1)
        }
    })