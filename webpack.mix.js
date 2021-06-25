let mix = require('laravel-mix');

require('laravel-mix-tailwind');
require('laravel-mix-purgecss');

mix.js('src/js/index.js', 'assets/js/index.js');

mix.sass('src/css/main.scss', 'assets/css/style.css')
    .tailwind()

    
if(mix.inProduction()) {
    mix.purgeCss({
        enabled: true,
        content: ['_site/**/*.html'],
        safelist: { deep: [/hljs/] },
    });
}