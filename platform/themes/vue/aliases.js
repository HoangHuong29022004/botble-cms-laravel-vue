const path = require("path");

const rootPath = path.resolve(__dirname);
const assetPath = path.join(rootPath, "assets/vue");

module.exports = {
    // Vue application paths
    "@": assetPath,
    "~": assetPath,
    "@components": path.join(assetPath, "components"),
    "@views": path.join(assetPath, "views"),
    "@router": path.join(assetPath, "router"),
    "@store": path.join(assetPath, "store"),
    "@layouts": path.join(assetPath, "layouts"),
    "@utils": path.join(assetPath, "utils"),
    "@assets": path.join(rootPath, "assets"),
    "@sass": path.join(rootPath, "assets/sass"),

    // Vue specific
    vue$: "vue/dist/vue.esm-bundler.js",

    // Add more aliases here
};
