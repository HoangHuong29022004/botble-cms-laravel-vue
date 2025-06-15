const mix = require("laravel-mix");
const path = require("path");

let directory = path.basename(path.resolve(__dirname));

const source = "platform/themes/" + directory;
const dist = "public/themes/" + directory;

mix.setPublicPath(dist)
    .ts(source + "/assets/vue/app.ts", "js/app.js")
    .vue({
        version: 3,
        options: {
            optimizeSSR: false,
        },
    })
    .sass(source + "/assets/sass/style.scss", "css")
    .options({
        processCssUrls: false,
        terser: {
            extractComments: false,
            terserOptions: {
                compress: {
                    drop_console: true,
                },
            },
        },
    })
    .webpackConfig({
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "assets/vue"),
                "@components": path.resolve(__dirname, "assets/vue/components"),
                "@views": path.resolve(__dirname, "assets/vue/views"),
                "@router": path.resolve(__dirname, "assets/vue/router"),
                "@store": path.resolve(__dirname, "assets/vue/store"),
                "@layouts": path.resolve(__dirname, "assets/vue/layouts"),
                "@utils": path.resolve(__dirname, "assets/vue/utils"),
                "@assets": path.resolve(__dirname, "assets"),
                vue: "vue/dist/vue.esm-bundler.js",
            },
            modules: ["node_modules", path.join(__dirname, "assets/vue")],
            extensions: [
                ".wasm",
                ".mjs",
                ".js",
                ".jsx",
                ".json",
                ".ts",
                ".tsx",
                ".vue",
            ],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: { appendTsSuffixTo: [/\.vue$/] },
                    exclude: /node_modules/,
                },
            ],
        },
        output: {
            publicPath: "/themes/" + directory + "/",
            filename: "[name].js",
            chunkFilename: "js/[name].js",
        },
        optimization: {
            splitChunks: {
                chunks: "async",
                minSize: 20000,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                        reuseExistingChunk: true,
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true,
                    },
                },
            },
        },
    });

if (mix.inProduction()) {
    mix.version();
}
