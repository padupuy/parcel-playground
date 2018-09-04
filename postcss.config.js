// module.exports = {
//   plugins: {
//     'postcss-normalize': {},
//     'postcss-import': {},
//     'postcss-preset-env': {
//       stage: 0
//     }
//   }
// };

module.exports = {
  plugins: [
    require('postcss-normalize'),
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0
    })
  ]
};
