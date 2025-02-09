const path = require('path');

module.exports = {
  mode: 'development', // Establecer el modo de desarrollo
  entry: './src/index.js', // El archivo de entrada de la aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se generan los archivos compilados
    filename: 'bundle.js', // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Babel para todos los archivos .js
        exclude: /node_modules/, // Excluir los archivos dentro de node_modules
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        },
      },
      {
        test: /\.css$/, // Todos los archivos .css
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, 'public'), // Directorio que Webpack dev server servirá
    port: 3000, // Puerto donde se ejecutará el servidor
  },
};

