"use strict"
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path")

module.exports = {
  dev: {
    // 开发环境下面的配置
    assetsSubDirectory: "static",//子目录，一般存放css,js,image等文件
    assetsPublicPath: "/",//根目录
    proxyTable: {},//可利用该属性解决跨域的问题
    host: "localhost",// 地址
    port: 8080,//端口号设置，端口号占用出现问题可在此处修改
    autoOpenBrowser: false,//是否在编译（输入命令行npm run dev）后打开http://localhost:8080/页面，以前配置为true，近些版本改为false
    errorOverlay: true,//浏览器错误提示
    notifyOnErrors: true,//跨平台错误提示
    poll: false,//使用文件系统(file system)获取文件改动的通知devServer.watchOptions
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: "cheap-module-eval-source-map",//增加调试，该属性为原始源代码（仅限行）不可在生产环境中使用
    cacheBusting: true,//使缓存失效
    cssSourceMap: true//代码压缩后进行调bug定位将非常困难，于是引入sourcemap记录压缩前后的位置信息记录，当产生错误时直接定位到未压缩前的位置，将大大的方便我们调试
  },

  build: {
    // 生产环境下面的配置
    index: path.resolve(__dirname, "../dist/index.html"),//index编译后生成的位置和名字，根据需要改变后缀，比如index.php,必须是本地的绝对路径
    assetsRoot: path.resolve(__dirname, "../dist"),//编译输出的静态资源根路径
    assetsSubDirectory: "static",//编译输出的二级目录,js,css,images存放文件夹名
    assetsPublicPath: "/",//编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
    productionSourceMap: true,//生成用于生产构建的源映射
    devtool: "#source-map",
    productionGzip: false, // 是否开启 gzip
    productionGzipExtensions: ["js", "css"],// 需要使用 gzip 压缩的文件扩展名
    bundleAnalyzerReport: process.env.npm_config_report//一个实用工具,用于分析项目的依赖关系https://www.npmjs.com/package/webpack-bundle-analyzer
  }
}
