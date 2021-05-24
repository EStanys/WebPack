// cia gules visa webpack konfiguracija
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//norim pajungt webpacui html plugina:
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// is src paima failus(jei nekursime, pagal nutylejima index.html ima) ir sudeda i dist
module.exports = {
  mode: "production",
  // devtool: "source-map",

  // is cia viskas bus paimta
  // nurodom musu programos pagrindini js faila. is jo webpackas padarys optimalia versija
  entry: { main: path.resolve(__dirname, "./src/app.js") },
  output: {
    // i cia viskas bus sudeta, failo pavadinimas bus sukrtas main.bundle.js
    filename: "final.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // istrins dist failus, pries irasant naujus
    assetModuleFilename: "images/[name][ext]", // nurodome kur bus padeti musu paveiksleliai
  },
  module: {
    // module - objektas. rules - masyvas.taisykle-objektas
    rules: [
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
      {
        test: /\.css$/i, // pritaikom tayskle tik  failams, kurie baigiasi *.css
        // todo: production env noresime tureti MiniCssExtractPlugin
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"], //perdarom .css failus i dist folderi. taosykle pritaiko failams nuo galo, tai pirmam pritaikys css-loader // postcss for webkit
      },
      {
        test: /\.m?js$/, // ? reiksia ,kad bus priimti ir mjs ir js failai
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // kokio senumo js norim paversti veikiancius senesnese narsyklese
          },
        },
      },
    ],
  },
  plugins: [
    new ImageMinimizerPlugin({
      //filename: "images/[name].webp",
      //deleteOriginalAssets: true,
      minimizerOptions: {
        plugins: [["imagemin-svgo"], ["gifsicle"], ["pngquant", { quality: [0.3, 0.6] }], ["mozjpeg", { quality: 70 }]],
      },
    }),
    new MiniCssExtractPlugin({ filename: "style.css" }),
    new HtmlWebpackPlugin({ template: "src/index.html", title: "This is dynamic Webpac Title" }),
  ], // const HtmlWebpackPlugin - klase -  sukursime html faila
  // sukuriam dinamiskai title. kaip objekta. ir bus html faile : <title>This is dynamic Webpac Title</title>
};
