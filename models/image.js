'use strict';
var app = app || {};

const API_URL = 'https://code-301-mars.herokuapp.com/api/v1';
// const API_URL = 'http://localhost:3000/api/v1';

(function (module) {
    function Image (obj) {
        this.id = obj.id;
        this.rover = obj.rover;
        this.camera = obj.camera;
        this.url = obj.url; 
}
    Image.all = [];
    Image.faves = [];

    Image.fetchImages = (cb) => {
        let camShort = '';
        if($('#camera option:selected').text() == 'Navigation') {
            camShort = "NAVCAM";
        }else if($('#camera option:selected').text() == 'Front Hazard') {
            camShort = "FHAZ";
        }else{
            camShort = "RHAZ";
        }
    
        const options = {
            rover: $('#rover option:selected').text(),
            camera: camShort,
            date: $('#date').val()
        }
        $.get(`${API_URL}/nasa`, options)
        .then(Image.loadAll)
        .then(cb)
        .fail(console.error);
    }

    Image.fetchFaves = () =>{
        
        Image.all = [];
        const user = {
            user: $('#userInput').val()
        }
        $.get(`${API_URL}/favorites`, user)
        .then(Image.loadFaves)
        .fail(console.error);
        
        console.log("this is in fetchFaves", Image.all);
        

        $('#favorites-wrapper').show();
        
    }
    Image.loadFaves = (data) => {
        Image.all = data.map(obj => new Image(obj));
        console.log('this is in loadFaves', data);
        console.log('this is image.all in loadFaves', Image.all)
        $('#favorites-wrapper').empty();
        app.Image.all.map(image => $('.imageBlock').append(image.toHtml()));
 
    }

    Image.loadAll = (data) => {
        Image.all = data.map(obj => new Image(obj));
        console.log('this is in loadAll', Image.all);
        app.imageView.append();
        Image.all = [];
    }

    Image.saveImage = (image) =>{
        $.post(`${API_URL}/favorites`, image) 
    }

    Image.prototype.toHtml = function () {
        $('#gallery').append();
        const template = Handlebars.compile($('#image-template').text());
        return template(this);
    }
    module.Image = Image;
})(app);
