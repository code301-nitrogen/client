'use strict';
var app = app || {};

// const API_URL = 'heroku route';
const API_URL = 'http://localhost:3000/api/v1';

(function (module) {
    function Image (obj) {
        this.id = obj.id;
        this.rover = obj.rover;
        this.camera = obj.camera;
        this.url = obj.url;
}
    Image.all = [];

    Image.fetchImages = (cb) => {
        $.get(`${API_URL}/nasa`)
        .then(Image.loadAll)
        .then(cb)
        .fail(console.error);
    }

    Image.loadAll = (data) => {
        Image.all = data.map(obj => new Image(obj));
        console.log(Image.all);
        //app.imageView.initDiscoverPage();
    }

    Image.prototype.toHtml = function () {
        $('#gallery').append();
        const template = Handlebars.compile($('#image-template').text());
        return template(this);
    }
    module.Image = Image;
})(app);
