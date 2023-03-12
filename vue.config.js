const publicPath = process.env.NODE_ENV === 'production' ? '/noosphere/' : '/'
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: publicPath,
  pwa: {
    name: 'Noosphere',
    // themeColor: '#4dbab5',
    // msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      share_target: {
        action: publicPath+'share',
        method: "GET",
        enctype: "application/x-www-form-urlencoded",
        params: {
          title: "title",
          text: "text",
          url: "url"
        }
      },
    },


    // configure the workbox plugin
    /*  workboxPluginMode: 'InjectManifest',
    workboxOptions: {
    // swSrc is required in InjectManifest mode.
    swSrc: 'src/registerServiceWorker.js',
    // ...other Workbox options...
  }*/
},
configureWebpack: {
  module:{
    rules:[{
      loader: 'ts-loader',
      test: /\.ts$/,
      exclude: /node_modules/
    }]
  }
},
transpileDependencies: true
})


