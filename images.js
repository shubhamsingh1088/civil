const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminJpegtran = require('imagemin-jpegtran');

(async () => {
  const files = await imagemin(['src/assets/**/*.{jpg,png,gif,svg}'], {
    destination: 'src/assets',
    plugins: [
      imageminPngquant({
        quality: [0.7, 0.8]
      }),
      imageminJpegtran({
        progressive: true
      })
    ]
  });

  console.log('Images optimized:', files.map(file => file.path));
})();