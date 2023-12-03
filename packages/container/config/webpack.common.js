module.exports = {
  entry: "./src/index.ts", // Entry point of your application
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // File extensions to support
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Match TypeScript files
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader", // Use ts-loader for TypeScript files
          },
        ],
      },
      {
        test: /\.module\.scss$/, // Match *.module.scss files
        use: [
          "style-loader", // Inject CSS into the DOM
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]", // Class name format
              },
            },
          },
          "sass-loader", // Compile Sass to CSS
        ],
      },
    ],
  },
};
