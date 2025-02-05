const path = require('path')
module.exports = {
    configureWebpack:{
        resolve: {
            alias: {
                'src': path.resolve(__dirname, './src'),
                'assets': path.resolve(__dirname, './src/assets'),
                'components': path.resolve(__dirname, './src/components')
            }
        }
    }
}