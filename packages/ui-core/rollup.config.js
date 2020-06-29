import path from 'path';
import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.es', '.esm'];

module.exports = (async () => ({
    input: 'src/index.ts',
    output: {
        file: pkg.main,
        format: 'esm'
    },
    plugins: [
        // enable module resolution from index
        resolve({
            extensions,
            rootDir: path.join(process.cwd(), '..')
        }),
        babel({
            extensions,
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            rootMode: 'upward',
        }),
        process.env.NODE_ENV === 'production' && (await import('rollup-plugin-terser')).terser()
    ],
    external: [
        'react',
        /@material-ui/
    ]
}))();
