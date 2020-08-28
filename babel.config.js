module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
        [
            '@babel/plugin-transform-modules-commonjs',
            {
                allowTopLevelThis: true,
            },
        ],
      [
          "component",
          {//此处做了element-ui组件按需加载，原理不懂
              "libraryName": "element-ui",
              "styleLibraryName": "theme-chalk"
          }
      ]
    ],
}
