const path = require("path");

module.exports = {
    mode: "production",
    target: "web",
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    },
    entry: path.resolve(__dirname, "src", "index.js"),
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: [__dirname],
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-typescript",
                        [
                            "@babel/env",
                            {
                                "useBuiltIns": "usage",
                                "corejs": "3.6.5"
                            }
                        ]
                    ],
                    sourceMaps: false,
                    cacheDirectory: true,
                    cacheCompression: true,
                    compact: true,
                }
            },
            {
                test: /\.css$/,
                include: [__dirname],
                exclude: /node_modules/,
                use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "output"),
        filename: "bundle.js"
    }
};
