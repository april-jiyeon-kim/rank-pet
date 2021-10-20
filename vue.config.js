const path = require('path');

module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'frontend/src/main.js',
      title: 'Index Page',
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'frontend/src/')
      },
    },
  },
  
  devServer: { //① api 요청이 있을때 어디에서 처리할지를 설정
    proxy: { 
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: './backend/public',  //② 배포 파일의 위치를 지정
}