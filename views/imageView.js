'use strict';

var app = app || {};

(function(module){
    const imageView = {};

    imageView.initDiscoverPage = (ctx) => {
        $('main section').hide();
        $('#photos').show();

        $('#dropdowns').on('submit', (e) => {
                e.preventDefault();
                app.Image.fetchImages();
        })
};
    imageView.append = () => {
        $('#gallery-container').empty();
        app.Image.all.map(image => $('#gallery-container').append(image.toHtml()));
        $('.favImage').on('submit', function (event) {
            event.preventDefault();
            
            const rover = $('#rover option:selected').text();
            const img_id = $(this).find('img').attr('id');
            const img_num = img_id.slice(1);
            const src = $(this).find('img').attr('src');
            
            const image = {
                image_id: img_num,
                rover: rover,
                camera: $('#camera option:selected').text(),
                url: src,
                user: $('#user').val()
            }
            app.Image.saveImage(image);
           
        });
    }

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

        $('#getFaves').on('submit', (e) => {
            e.preventDefault();
            app.Image.fetchFaves();
        })
        
      
    }

    imageView.initAboutPage = () => {
        $('main section').hide();
        $('#about').show();
    }
    module.imageView = imageView;
})(app);

