"use strict"
const ts = require("typescript")
const tsConfig = require('./tsconfig.json');

const jsTransformer = require("react-native/packager/transformer");

function transformTypeScript(src, filename) {
  const compilerOptions = buildTSCompilerOptionsConfig()
  const tsResult = ts.transpileModule(src, { compilerOptions })
  return tsResult.outputText;
}

function buildTSCompilerOptionsConfig() {
  return Object.assign({}, tsConfig.compilerOptions, { inlineSourceMap: true })
}

module.exports.transform = function (sourceCode, filename, options) {
    sourceCode = filename.match(/^.*.tsx?$/)
      ? transformTypeScript(sourceCode, filename, options)
      : sourceCode;

    return jsTransformer.transform(sourceCode, filename, options);
};
