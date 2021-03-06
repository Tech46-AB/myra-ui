module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.md",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
