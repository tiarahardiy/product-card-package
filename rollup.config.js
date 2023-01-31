import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
      },
    ],
    plugins: [
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: ["@babel/preset-env", "@babel/preset-react"],
      }),
      resolve(),
      postcss({
        plugins: [],
        minimize: true,
      }),

      external(),
      commonjs(),
    ],
    external: [],
  },
];
