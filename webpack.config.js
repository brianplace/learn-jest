const path = require('path');

try {

const commonConfig = {
    mode: 'production',
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    module: {
        rules: [{
            test:  /\.tsx?$/,
            exclude: /node_modules/,
            use: 'ts-loader'
        }, {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader'
        }]
    }
};

module.exports = [
    Object.assign({
        target: 'electron-main',
        entry: { main: './src/main.ts'}
    }, commonConfig),
    Object.assign({
        target: 'electron-renderer',
        entry: { renderer: './src/renderer.tsx'}
    }, commonConfig)
]
}
catch(e)
{
    console.log(e);
}