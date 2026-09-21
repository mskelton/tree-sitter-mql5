const CPP = require("tree-sitter-cpp/grammar")

// MQL5 `input group "Name"` directive (compiler build >= 1861, also accepted
// by the unified MQL4 compiler). The stock grammar has no rule for it: every
// following top-level declaration degrades into ERROR nodes. In an audit of
// 111 real-world MQL4/MQL5 files from the mql5.com codebase, 24 files used
// the directive and all 24 failed to parse — a single occurrence swallowed
// up to 742 subsequent lines. Modeled as a top-level item holding one
// string literal, which is exactly the construct's shape in the MQL5 docs.
module.exports = grammar(CPP, {
  name: "mql5",
  rules: {
    storage_class_specifier: ($, original) => choice(original, "input"),

    _top_level_item: ($, original) => choice(original, $.input_group),

    input_group: $ =>
      seq("input", "group", field("name", $.string_literal)),
  },
})
