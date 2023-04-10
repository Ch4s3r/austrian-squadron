module.exports = {
  lintOnSave: true,
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true
    }
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/austrian-squadron/" : "/"
};
