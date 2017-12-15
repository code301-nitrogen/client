'use strict';

var app = app || {};

(function(module){
    const imageView = {};

    imageView.initDiscoverPage = (ctx) => {
        $('main section').hide();
        $('#photos').empty().show();
        app.Image.all.map(image => $('#photos').append(image.toHtml()));

    };
    module.imageView = imageView;
})(app);

