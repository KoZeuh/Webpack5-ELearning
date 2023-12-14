const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/index.js',
        'video': './src/video.js'
    }, 

    output: {
        filename: "assets/js/[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    }, 

    module: {
        rules: [
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[contenthash].[ext]',
                            outputPath: 'medias' 
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [
                    {
                        loader: 'url-loader', 
                        options: {
                            limit: 51200,
                            name: '[contenthash].[ext]',
                            outputPath: 'images'
                        } 
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[contenthash].[ext]',
                            outputPath: 'fonts'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader", // Permet de rendre compatible notre code JS avec d'anciens navigateurs
                        options: { presets: ['@babel/preset-env'] }
                    }
                ]
            }
        ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'src/templates/index.html',
            filename: 'index.html',
            chunks: ['index']
        }),
        
        new htmlWebpackPlugin({
            template: 'src/templates/video.html',
            filename: 'video.html',
            chunks: ['video']
        })
    ],
}