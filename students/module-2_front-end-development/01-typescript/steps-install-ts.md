# Steps to Use TypeScript LV.1

1. Install TypeScript globally using 'npm install -g typescript'
2. Make a '.ts' file
3. Define the annotations. E.g 'let score: number = 100'
4. Compile the TypeScript using TypeScript Compiler. E.g 'tsc file_name.ts'
5. Use your code just as you are using regular Js code.
6. Install '@type/node' to remove CommonJS error. 'npm i --save-dev @types/node'

# Steps To Use TypeScript Lv. 2

1. Create `tsconfig.json` using `tsc --init` command
2. If we don't have `package.json` file, create it using `npm init -y`
3. Edit `tsconfig.json`
   ```js
    {
   "compilerOptions": {
    "noEmitOnError": true,
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
    "module": "ESNext" /* Specify what module code is generated. */,
    "rootDir": "./src" /* Specify the root folder within your source files. */,
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
    "removeComments": true /* Disable emitting comments. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
    "strict": true /* Enable all strict type-checking options. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
   }
   }
   ```
4. Put all of our code in `src` folder
5. Compile the code using `tsc` command in terminal
