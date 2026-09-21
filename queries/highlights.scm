; MQL-specific highlight queries for tree-sitter-mql5.
; The generic C/C++ highlighting comes from
; node_modules/tree-sitter-cpp/queries/highlights.scm (chained in package.json);
; this file only adds MQL-native nodes.

; MQL storage classes (`input` / `sinput` parameters)
(storage_class_specifier) @keyword.modifier

; the `input` keyword in storage-class position
"input" @keyword
