const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const SRC_DIR = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'public');

let liveReloadOpts = {};
if (process.env.NODE_ENV === 'development') {
    liveReloadOpts = { appendScriptTag: true };
}

const entries = [
    {
        name: 'main',
        filename: `${SRC_DIR}/main.js`,
    },
];

const appDirectory = fs.realpathSync(process.cwd());
process.env.NODE_PATH = (process.env.NODE_PATH || '')
    .split(path.delimiter)
    .filter(folder => folder && !path.isAbsolute(folder))
    .map(folder => path.resolve(appDirectory, folder))
    .join(path.delimiter);

module.exports = {
    entry: {
        ...entries.reduce((acc, entry) => {
            acc[entry.name] = entry.filename;
            return acc;
        }, {}),
    },

    output: {
        path: DIST,
        publicPath: '/',
        filename: 'js/[name].js',
    },

    resolve: {
        modules: ['node_modules', path.resolve(__dirname, 'node_modules')].concat(
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
        ),
        alias: {
            vue$: 'vue/dist/vue.js',
        },
        extensions: ['.js', '.json', '.vue'],
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: require.resolve('vue-loader'),
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: require.resolve('babel-loader'),
                options: { cacheDirectory: true },
            },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        },
                    },
                ],
            },
            {
                test: /\.(bmp|gif|jpe?g|png|svg)$/,
                loader: require.resolve('file-loader'),
                options: {
                    limit: 10000,
                    name: 'assets/[name].[ext]',
                },
            },
        ],
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
        new Dotenv({
            path: path.resolve(__dirname, '.env.vue-app'),
            systemvars: true,
        }),
        new CleanWebpackPlugin(DIST),
        ...entries.map(
            entry => new HtmlWebpackPlugin({
                title: 'SalesforceDX VSCode Doc Site',
                favicon: `${SRC_DIR}/assets/favicon.ico`,
                template: `${SRC_DIR}/template.html`,
                filename: `${entry.name}.html`,
                chunks: ['vendor', entry.name],
            }),
        ),
        new VueLoaderPlugin(),
        new LiveReloadPlugin(liveReloadOpts),
    ],
};