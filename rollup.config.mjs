import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'server/api/users.ts', // Adjust to your actual entry file
  output: {
    file: 'dist/bundle.js', // Output bundle file path
    format: 'esm', // Output format (ES Module)
  },
  plugins: [
    nodeResolve(), // Resolve modules from node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({ tsconfig: './tsconfig.json' }) // Handle TypeScript files
  ],
};