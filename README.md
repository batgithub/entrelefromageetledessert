Starter config with grunt. The dev dependencies are all in their last version.

The production folder is named '/docs' to be recognize as the source folder for the gh-pages.

## tasks
    * Sass
    * autoprefixer
    * uglify
    * watch for livereload
    * laund grunt tasks

## task launcher
    * default ( for dev - sass with sourceMap and watch)
    * deploy (sass without sourceMap and compressed, autoprefixer, uglify, copy)

## install
`npm install`
