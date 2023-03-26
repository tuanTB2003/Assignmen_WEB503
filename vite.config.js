import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import dotenv from "dotenv";

dotenv.config();
const {PORT} = process.env;

 export default defineConfig({
    server: {
        port: PORT
    },
    plugins: [
        ...VitePluginNode({
            adapter: 'express',
            appPath: './src/app.ts',
            exportName: 'viteNodeApp',
            tsCompiler: 'esbuild',
            swcOptions: {}
        })
    ],
    optimizeDeps: {

    },
});