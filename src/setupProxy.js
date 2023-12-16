const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "http://175.45.200.71",
      changeOrigin: true,
    })
  );
};
