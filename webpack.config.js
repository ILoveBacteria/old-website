module.exports = {
    mode: 'development',
    entry: './resources/compiled/App.js',
    output: {
        filename: 'app.js',
        path: __dirname + '/resources/dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
};

