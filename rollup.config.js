import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import packageJson from "./package.json";
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';
import scss from 'rollup-plugin-scss';
import sassPostcss from 'postcss';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss'
import cssimport from 'postcss-import';
import autoprefixer from 'autoprefixer';

const path = require('path');
const root = path.resolve(__dirname);

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'scss'],
    }),
    terser(),
    commonjs(),
    typescript(),
    alias({
      entries: [
        { find: '@src', replacement: `${root}/src` },
        { find: '@assets', replacement: `${root}/assets` },
      ],
    }),
    url(),
    svgr(),
    scss({
      processor: (css) =>
          sassPostcss([autoprefixer])
              .process(css)
              .then((result) => result.css),
    }),
    postcss({
      plugins : [ cssimport(), autoprefixer() ]
    }),
  ],
};
