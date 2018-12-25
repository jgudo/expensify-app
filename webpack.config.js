const path = require('path');
const dir = path.join(__dirname, 'public');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

 //console.log(dir);
module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');
    return {
        //entry: './src/app.js',
        entry: './src/app.js',
        output: {
            path: dir,
            filename: 'app.bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use:  [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]    
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: dir,
            historyApiFallback: true
        } 
    }
}
