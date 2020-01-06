import packageJson from "./package.json"
import babel from "rollup-plugin-babel"
import { terser as uglify } from "rollup-plugin-terser"

const input = "src/eleet/software/software.js"

module.exports = [
    {
        input,
        output: {
            file: packageJson.main,
            format: "umd",
            name: "@eleetsoftware/redux-electron-middleware",
            sourcemap: true,
        },
        plugins: [
            babel(),
            uglify(),
        ],
    },
    {
        input,
        output: {
            file: packageJson[ "jsnext:main" ],
            format: "es",
            sourcemap: true,
        },
        plugins: [
            babel(),
            uglify(),
        ],
    },
]
