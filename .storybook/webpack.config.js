const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer")
          ]
        }
      }
    ],
    include: path.resolve(__dirname, "../")
  });
  return config;
};
