import Html from 'html-webpack-plugin';
import path from 'path';

const mode = process.env.NODE_ENV || 'development';

export default {
  mode,
  entry: path.resolve('src/main.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: path.resolve('src'),
        test: /\.[tj]sx?$/i,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [new Html()],
};
