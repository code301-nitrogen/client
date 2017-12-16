'use strict';

var app = app || {};

(function(module){
    const imageView = {};

    imageView.initDiscoverPage = (ctx) => {
        $('main section').hide();
        $('#photos').show();

        $('#dropDowns').on('submit', (e) => {
                e.preventDefault();
                const object = {
                    rover: $('#dropDowns select[value="rover"]').value(),
                    // camera: $('#dropDowns select[name="camera"]').value(),
                    // date: $('#dropDowns input[name = "dateInput"]').val()
                };
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

