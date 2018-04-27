import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/urange.js',
    format: 'umd',
    name: 'urange'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
