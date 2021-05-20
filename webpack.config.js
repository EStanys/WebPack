// cia gules visa webpack konfiguracija

//norim pajungt webpacui html plugina:
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// is src paima failus(jei nekursime, pagal nutylejima index.html ima) ir sudeda i dist
module.exports = {
  // is cia viskas bus paimta
  // nurodom musu programos pagrindini js faila. is jo webpackas padarys optimalia versija
  entry: { main: path.resolve(__dirname, "./src/app.js") },
  output: {
    // i cia viskas bus sudeta, failo pavadinimas bus sukrtas main.bundle.js
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [],
};
