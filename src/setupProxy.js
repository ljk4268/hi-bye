const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    "/testapp",
    createProxyMiddleware({
      target: "https://clovastudio.stream.ntruss.com",
      changeOrigin: true,
    })
  );
};
