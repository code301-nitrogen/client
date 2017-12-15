page('/', app.Image.initHomePage);

page('/discover', app.Image.fetchImages, app.imageView.initDiscoverPage);

page('/faves', app.imageView.initFavesPage);

page('/learn', app.imageView.initLearnPage);

page('/about', app.imageView.initAboutPage);

page('*', (ctx, next) => {
    console.log('Nothing to see here!');
});

page.start();