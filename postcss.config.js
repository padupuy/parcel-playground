// module.exports = {
//   plugins: {
//     'postcss-normalize': {},
//     'postcss-preset-env': {
//       stage: 0,
//       browsers: '> 1%'
//     },
//     'postcss-import': {}
//   }
// };

module.exports = {
  plugins: [
    require('postcss-normalize'),
    require('postcss-preset-env')({
      stage: 0
    }),
    require('postcss-import')
  ]
};
