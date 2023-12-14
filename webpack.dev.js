const { merge } = require('webpack-merge');

const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development", 
    
    watchOptions: {
        ignored: /node_modules/
    },

    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader', 

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
                ]
            }
        ]
    }
});