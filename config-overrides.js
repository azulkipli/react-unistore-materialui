const rewireReactHotLoader = require("react-app-rewire-hot-loader");
const rewireWebpackBundleAnalyzer = require("react-app-rewire-webpack-bundle-analyzer");
const rewireInlinSource = require("react-app-rewire-inline-source");
module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  if (env === "production") {
    config = injectBabelPlugin("transform-remove-console", config);
    config = rewireInlinSource(config, env);
    config = rewireWebpackBundleAnalyzer(config, env, { analyzerMode: "static", reportFilename: "report.html" });
  }
  return config;
};
