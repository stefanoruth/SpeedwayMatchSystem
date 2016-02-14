var elixir = require('laravel-elixir');

elixir.config.assetsPath = '';
elixir.config.css.sass.folder = '';
elixir.config.css.outputFolder = '';
elixir.config.js.folder = '';
elixir.config.js.outputFolder = '';
elixir.config.sourcemaps = false;

elixir(function(mix){
	mix.sass('app.scss').browserify('main.js');
});