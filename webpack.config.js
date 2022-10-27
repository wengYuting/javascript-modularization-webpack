const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")


module.exports={
  entry: "./src/index.js",
  output:{
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
     ".js": [".js", ".ts"],
     ".cjs": [".cjs", ".cts"],
     ".mjs": [".mjs", ".mts"]
    }
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use:['file-loader']
      },
      { 
        test: /\.([cm]?ts|tsx)$/, 
        loader: "ts-loader" 
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: ImageMinimizerPlugin.loader,
            options: {
              minimizer: {
                implementation: ImageMinimizerPlugin.squooshMinify,
                options: {
                  encodeOptions: {
                    mozjpeg: { 
                      quality: 80,
                    },
                  },
                },
              },
            },
          },
        ]
      }
    ]
  },
  devServer: {
    port: 9999
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'Owl',
      template: './src/index.html'
    })
  ],
  optimization:{
    splitChunks:{
      cacheGroups:{
        common: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name:'vendor'
        }
      }
    },
  }
}