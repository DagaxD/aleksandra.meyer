// Upewnij się, że masz to na początku pliku
console.log('\n--- ŁADUJE webpack.config.js ---\n');

const path = require('path');  // Import modułu path
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('Webpack config is loaded');

module.exports = {
  mode: 'development', // Tryb 'development'
  entry: './src/index.tsx', // Ścieżka do pliku wejściowego
  output: {
    filename: 'bundle.js',  // Nazwa pliku wynikowego
    path: path.resolve(__dirname, 'dist'),  // Ścieżka do folderu, gdzie plik wynikowy będzie zapisany
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Obsługuje pliki .ts i .tsx
        exclude: /node_modules/,  // Wyklucza pliki w folderze node_modules
        use: 'ts-loader',  // Używa ts-loader do kompilacji TypeScriptu
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],  // Rozszerzenia, które Webpack będzie rozpoznawał
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),  // Folder z plikami statycznymi
    },
    port: 8080,  // Port, na którym będzie działał serwer
    open: true,  // Otworzy stronę po uruchomieniu serwera
    hot: true,  // Włącza hot-reloading
    historyApiFallback: true,
    client: {
        logging: 'info',  // pokaże info w konsoli devServera
      },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
    }),
  ],
};
console.log('\n>> typeof devServer:', typeof module.exports.devServer);
