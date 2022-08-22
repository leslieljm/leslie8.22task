const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // webpack的自定义配置：
    //mode模式指定webpack的环境
    mode: 'development',

    // 1. 要求从src/main.js  打包到 lib/index.js
    entry: './src/main.js',

    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        clean: true
    },

    // 3. 能使用开发服务器打开项目, 端口号为30000, 自动打开浏览器
    // 3.1 下载webpack开发服务器：yarn add webpack-dev-server
    // 3.2 配置webpack-dev-server开发服务器
    devServer: {
        // 当你yarn serve以后，自动地打开浏览器(默认浏览器)运行项目
        open: true,
        // 修改webpack-dev-server开发服务器的端口号。默认端口号是8080。可以设置的范围[0, 65535]
        port: 30000
    },

    // 4. 要求能打包css
    // 2. 安装css-loader：yarn add css-loader。用来识别css文件
    // 3. 安装style-loader：yarn add style-loader。将css样式以style标签的形式插入document当中
    // 4. 配置模块解析规则
    // module.rules: []  专门用来配置我们的loader
    module: {
        rules: [
            {
                // test: 正则，来匹配要打包的css文件
                // use: [] 指定匹配上的文件使用什么loader
                // 重点：style-loader一定要写在css-loader的前面，因为use数组的解析，是从后往前解析的，要先识别css文件才能将css样式以style标签的形式插入document当中
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // 5. 要求能打包less
            // 2. 安装less-loader：yarn add less-loader less。用来识别less文件，并把less文件转成css文件。
            // 3. 安装css-loader：yarn add css-loader。用来识别css文件
            // 4. 安装style-loader：yarn add style-loader。将css样式以style标签的形式插入document当中
            // 5. 配置模块解析规则
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 6. 要求在src下新建一个app.vue文件, 并在main.js中引入, 并且打包不报错即可
            // 2. 安装vue-loader和vue-template-compiler插件：npm install vue-loader vue-template-compiler
            // 3. 引入vue-loader插件并在plugins里创建VueLoaderPlugin实例对象
            // 4. 配置模块解析规则
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },

    // 2. 要求打包时生成html文件, 并且html文件自动引入打包后的js文件
    // plugins: [] 配置所有webpack的插件
    // 在使用插件之前要先通过yarn add XXX 命令下载该插件，还要在前面通过require引入插件
    // 在webpack里，所有的插件都是构造函数/类，所以使用的时候要new一下
    plugins: [
        new HtmlWebpackPlugin({
            // 指定webpack打包后生成html文件的html模板，相对路径。
            template: './public/index.html'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],

}