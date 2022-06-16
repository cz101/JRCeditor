import * as esbuild from 'esbuild-wasm';
// import axios from 'axios';
// import localForage from 'localforage';


/*
//test local stortage localdb//
/*


(async()=>{
 await fileCache.setItem('testkey','testvalue')

})()
*/
export const unpkgPathPlugin = () => {
  return { 
    name: 'unpkg-path-plugin',
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
       // console.log('onResole', args);
        if(args.path==='index.js'){
            return { path: args.path, namespace: 'a' };
        }

        if (args.path.includes('./') ||args.path.includes('../')){

            return {
                path : new URL(args.path, 'https://unpkg.com'+args.resolveDir+'/').href,
                namespace :'a',
            }
        }
        return {
            path: `https://unpkg.com/${args.path}`,
             namespace: 'a'


        }
      //  else if(args.path==='tiny-test-pkg') {
     //
     //       return { path: 'https://unpkg.com/tiny-test-pkg@1.0.0/index.js', namespace: 'a' }
     //   }
      });

      
    },
  };
};
