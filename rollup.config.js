import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'urange'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
