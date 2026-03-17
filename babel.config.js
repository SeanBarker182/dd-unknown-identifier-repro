module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      ["@datadog/mobile-react-native-babel-plugin", {
        components: {
          tracked: [{
            handlers: [{ action: "TAP", event: "onPress" }],
            name: "MyButton",
          }],
        },
      }],
    ],
    presets: ["babel-preset-expo"],
  };
};
