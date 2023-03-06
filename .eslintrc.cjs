module.exports = {
  extends: ["eslint:recommended", "plugin:vue/recommended", "prettier"],
  rules: {
    // override/add rules settings here, such as:
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    "no-prototype-builtins": "off",
    "vue/require-prop-types": "off",
  },
};
