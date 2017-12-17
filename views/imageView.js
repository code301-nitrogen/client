'use strict';

var app = app || {};

(function(module){
    const imageView = {};

    imageView.initDiscoverPage = (ctx) => {
        $('main section').hide();
        $('#photos').show();

        $('#dropdowns').on('submit', (e) => {
                e.preventDefault();
                const object = {
                    rover: $('#rover option:selected').text(),
                    camera: $('#camera option:selected').text(),
                    date: $('#date').val()
                }
            console.log(object);
        })
    //    app.Image.all.map(image => $('#photos').append(image.toHtml()));
    };

    imageView.initHomePage = () => {
        $('main section').hide();
        $('#home').show();
    }

    imageView.initLearnPage = () => {
        $('main section').hide();
        $('#learn').show();
    }

    imageView.initFavesPage = () => {
        $('main section').hide();
        $('#favePhotos').show();
    }

    imageView.initAboutPage = () => {
        $('main section').hide();
        $('#about').show();
    }
    module.imageView = imageView;
})(app);

