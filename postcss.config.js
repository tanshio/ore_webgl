
// module.exports = {
//   'use': [
//     'postcss-import',
//     'postcss-nesting',
//     'autoprefixer',
//     'postcss-flexbugs-fixes',
//     'postcss-custom-properties',
//     'postcss-custom-media',
//     'postcss-font-magician',
//     'css-mqpacker',
//     'postcss-reporter',
//     'postcss-browser-reporter',
//     'cssnano'
//   ],
//   'postcss-import': {
//     onImport: function(sources) {
//       global.watchCSS(sources, this.from);
//     }
//   },
//   'postcss-custom-properties': {
//     preserve: false,
//   },
//   'postcss-font-magician': {
//     foundries: ['custom', 'hosted', 'google']
//   }
// };

module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-nesting')(),
    require('postcss-custom-properties')({
      preserve: false
    }),
    require('postcss-custom-media')(),
    require('autoprefixer')()
  ]
}

// module.exports = (ctx) => ({
//   parser: ctx.parser ? 'sugarss' : false,
//   'map': 'inline',
//   plugins: {
//     'autoprefixer': {},
//     'postcss-nesting': {},
//     'postcss-import': { root: ctx.file.dirname },
//     'postcss-custom-properties': {
//       preserve: false
//     },
//     'postcss-nested': {},
//     cssnano: ctx.env === 'production' ? {} : false
//   }
// })
