const path = require('path');
module.exports = {
    publicPath: '/', //配置根目录
    outputDir: 'dist', //构建输出目录
    assetsDir: "assets",//静态资源目录
    lintOnSave: false, //false不开启，有效值：true || false
    productionSourceMap: false,//关闭生产环境下面的source-map
    devServer: {
        open: false, //是否启动打开浏览器
        host: "0.0.0.0",//主机，0.0.0.0支持局域网地址，可以用真机测试
        port: "8080",
        //配置跨域代理
        proxy: {
            "/proxy": {
                target: "http://vueshop.glbuys.com/api",
                changeOrigin: true,//支持跨域
                pathRewrite: {
                    '^/proxy': ""
                }
            }
        }
    },
    // configureWebpack:{
    //     devtool: 'source-map' //打开sourceMap用于断点调试
    // },
    configureWebpack: (config) => {
        // console.log(config)
        config.devtool = "source-map";//配置开发者环境的sourceMap用于断点调试
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
        console.log(process.env.NODE_ENV);
        console.log(process.env.VUE_APP_API);
    },
    chainWebpack: config => {
        config
            .plugin('copy-webpack-plugin')
            .use(require.resolve('webpack/lib/ProvidePlugin'), [
                {
                    _1: [path.resolve(__dirname, 'src', 'common.js'), 'fun'],
                    _url: [path.resolve(__dirname, 'src', 'UrlProxy.js'), 'UrlProxy']
                }
            ])
    },

    //统一导入样式变量文件
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/variables.scss";`
            }
        }
    }
};
