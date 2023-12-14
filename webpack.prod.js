const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "production",

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,

                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 },
                    }, 

                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer", // Permet d'ajouter les préfixes CSS
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    
                    'sass-loader'
                ],
            }
        ]
    },

    optimization: {
        minimizer: [
           `...`,
        ],

        splitChunks: {
            chunks: 'all'
        }
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/css/[contenthash].css', // Spécifie le nom du fichier extrait
        }),
    ],
});