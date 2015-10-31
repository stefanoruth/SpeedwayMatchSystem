var elixir = require('laravel-elixir');

elixir.config.srcDir = '';

elixir(function(mix) {
	mix.phpSpec();
});