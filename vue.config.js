// vue.config.js
module.exports = {
    css: {
      loaderOptions: {
        less:{
            additionalData: `@import "@/assets/css/variables.less";`
        }
      }
    }
  }