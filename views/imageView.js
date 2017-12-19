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
       app.Image.all.map(image => $('#photos').append(image.toHtml()));
    
       $('.favImage').on('submit', function (event) {
        event.preventDefault();
        const rover = $('#rover option:selected').text();
        const img_id = $(this).find('img').attr('id');
        const img_num = img_id.slice(1);
        const src = $(this).find('img').attr('src');
        console.log(img_num);
        console.log(img_id);
        console.log(src);
        // const image = {
        //     image_id:
        //     rover: rover,
        //     camera: 
        //     url:
        //     user:  
    });
    
    
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

