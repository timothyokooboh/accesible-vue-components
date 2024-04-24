/**
 * Create an object that is compatible with
 * what Tailwind CSS expects in its theme.extend option.
 */

const tokens = require("./tokens/js/tokens");

const flattenValue = (obj) => {
  const result = {};

  Object.keys(obj).forEach((key) => {
    if (!obj[key].value) {
      result[key] = flattenValue(obj[key]);
    } else {
      result[key] = obj[key].value;
    }
  });

  return result;
};

module.exports = {
  colors: flattenValue(tokens.colors),
  fontSize: flattenValue(tokens.fontSize),
  fontFamily: flattenValue(tokens.fontFamily),
};
