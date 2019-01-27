import pkg from "./package.json";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import flow from "rollup-plugin-flow";

export default {
    input: pkg.source,
    output: [
        {
            file: pkg.main,
            sourcemap: true,
            format: "cjs"
        },
        {
            file: pkg.module,
            sourcemap: true,
            format: "es"
        }
    ],
    plugins: [babel(), terser(), flow()]
};
