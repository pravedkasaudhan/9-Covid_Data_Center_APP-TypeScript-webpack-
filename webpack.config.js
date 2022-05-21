const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:"./ts/main.ts",
    mode:"development",
    output:{
        filename:"result.js",
        path:path.resolve(__dirname,'out'),
    },
    module:{
        rules:[{
            test: /\.tsc?$/,
            use: 'ts-loader',
            exclude:/node_modules/
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }
    ]
    },
    resolve:{
        extensions:['.ts','.js']
    },
    devServer:{
        contentBase: path.join(__dirname,'out'),
        port:8080,
        open:true
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html',
        title:'COVID_DATA_CENTER',
        filename: 'index.html',
        inject: 'body'
    })]
}