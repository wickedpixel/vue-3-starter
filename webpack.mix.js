let mix = require('laravel-mix');
//mix.js('src/app.js', 'dist').setPublicPath('dist');

mix.setPublicPath('./../assets')
.sourceMaps(true, 'source-map')
.js('main.js', 'module.js').vue()
.sass('assets/main.scss', 'module.css')
.options({
    processCssUrls: false,
    imgLoaderOptions: { enabled: false }
});

// .sourceMaps(true, 'source-map')
