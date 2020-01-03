const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const vueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
entry:path.join(__dirname,'src/main.js'),
output:{
    path:path.join(__dirname,'dist'),
    filename:'bundle.js'},
mode:"development",
devServer:{
    open:true,
    port:3000,
    /* contentBase:'src', */
    /* 装了html-webpack-plugin之后直接会跳转至虚拟页面,托管到根目录下 */
    hot:true
},
plugins:[
    new htmlWebpackPlugin({
        template:path.join(__dirname,'./src/index.html'),
        filename:'index.html'
    }),
    new vueLoaderPlugin()
],
module:{
    rules:[
        {test:/\.css$/,use:['style-loader','css-loader']},
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
        {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=200000&name=[hash:8]-[name].[ext]'},
        {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
        {test:/\.vue$/,use:'vue-loader'}
    ]},
resolve:{
    alias:{/* 修改Vue被导入的包的路径,import的的时候以vue结尾的（下面的vue$为正则表达式） */
       /*  "vue$":"node_modules/vue/dist/vue.js" */
    }
}
}