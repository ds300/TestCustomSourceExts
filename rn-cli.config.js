module.exports = {
  getSourceExts() {
    return ["ts", "tsx"]
  },

  getTransformModulePath() {
    return require.resolve("./ts-transformer")
  },
}
