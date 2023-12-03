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
    ],
  },
};
