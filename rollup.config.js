import vue from 'rollup-plugin-vue'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import less from 'rollup-plugin-less'

const production = process.env.production, esm = process.env.esm
let plugins = [
  resolve(),
  commonjs(),
  less({
    insert: true,
    output: false
  }),
  vue({
    template: {
      isProduction: true
    }
  })
], file = 'dist/NMPlayer.js', format = 'iife', name = 'NMPlayer'

if (esm) {
  format = 'esm'
  file = 'dist/NMPlayer.esm.js'
  name = undefined
}

if (!production) {
  // plugins.push(serve('demo'))
  plugins.push(livereload({
    watch: 'demo',
    delay: 100
  }))
  file = 'demo/js/NMPlayer.js'
  format = 'iife'
}

export default {
  input: 'src/index.js',
  output: {
    format,
    file,
    name,
    globals: {
      vue: 'Vue'
    },
    preferConst: true,
    exports: 'named'
  },
  external: ['vue'],
  plugins
}

