const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: {//"./src/ts/app.ts",
      'dist/app': './src/ts/app.ts',
      'dist/bg': './src/ts/bg/background.ts',
      'dist/contents': './src/ts/contents/content.ts',
      'dist/writers': './src/ts/contents/writers.ts'
    },// ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/src`,
      // 出力ファイル名
      filename: "[name].bundle.js"
    },
    module: {
      rules: [
        // 拡張子 .ts の場合
        {
          test: /\.ts$/,
          // TypeScript をコンパイルする
          exclude: /node_modules/,
          use: ["ts-loader"] // TODO: error in _typeOf func "babel-loader",
          // loader:"ts-loader",
          // use: [
          //   {
          //     loader: "babel-loader",
          //     options: {
          //       // presets: ['@babel/preset-env']
          //       presets: ['@babel/preset-env']
          //     }
          //   }
          // ]
        },
        // 拡張子 .vue の場合
        {
          test: /\.vue$/, // If target file ends with .vue,
          exclude: /node_modules/,
          loader: 'vue-loader' // use vue-loader
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: ['style-loader', 'css-loader'],
        },
      ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
      extensions: [".ts",".vue",".js", ".css", ".less"],
      // Webpackで利用するときの設定
      alias: {
        vue: "vue/dist/vue.js",
        vuex: 'vuex/dist/vuex.js',
      }
    },
    plugins: [
      new VueLoaderPlugin()
    ],
  };