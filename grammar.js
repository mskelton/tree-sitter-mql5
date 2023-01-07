const CPP = require("tree-sitter-cpp/grammar")

module.exports = grammar(CPP, {
  name: "mql5",
  rules: {
    storage_class_specifier: ($, original) => choice(original, "input"),
  },
})
