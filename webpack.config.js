const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index :'./src/index.js'
},
  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
        // title: 'Output Management',
        template: './src/index.html',
    }),
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
        // the code below must be activate when we have more than one js file
//   optimization: {
//     runtimeChunk: 'single',
//   },
  
  module: {
    rules:[
        {
            test: /\.css$/i,
            use:['style-loader', 'css-loader'],
        },
    ],
  },
};