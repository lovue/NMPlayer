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
    option: {
      strictMath: 'on'
    }
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
  plugins.push(serve('public'))
  plugins.push(livereload({
    watch: 'public',
    delay: 100
  }))
  file = 'public/js/NMPlayer.js'
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

