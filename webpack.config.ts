import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type Mode = "production" | "development";

interface EnvVariables {
  mode: Mode;
  port: number;
}

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";
  const isProd = !isDev;
  const config: webpack.Configuration = {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      //slowly
      isDev && new webpack.ProgressPlugin(),
      isProd &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css",
        }),
    ].filter(Boolean),
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        //ts-loader підтримує JSX. Якщо не Typescript то потрібен babel-loader
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devtool: isDev && "inline-source-map",
    devServer: isDev
      ? {
          port: env.port ?? 5000,
          open: true,
        }
      : undefined,
  };
  return config;
};
