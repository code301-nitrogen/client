# USER STORIES

### AS A USER
As a user, I want an app on which I can easily find images taken by the Mars Rovers.

As a user, I want to be able to save my favorites and have the data persist so taht I can revisit them at another time.

As a user, I would like to see a timeline of milestones from the Rover Program.

As a user, I would like to see which images other users have favorited.

### AS A DEVELOPER
As developers, we want utilize IIFEs so that all our function calls are executed on page load.

As developers, we want to use functional programming so that our code makes sense and follows modern programming practices. We also wish to make our code as DRY as possible.

As developers, we wish to create an educational site that excites and created curiousity in the user to explore more about Mars.

As a developer, we want to use SQL queries to connect our server with our database.

As developers, we wish to utilize a third-party API.

### MVP
– Our app must allow users to retrieve their saved images as well as those of others.
– Our goal is to have at least three interlinked pages with clear navigation.
– We will have at least two pages that accept and process user input.
    – Our app needs to make a query to the NASA API and filter the data based on user inputs.
    – Our app must allow users to save images to a persistent database.
– Our site's state will persist between reboots.
– Our app will be deployed live on the Internet.
– Our website will integrate with a third-party API.

### STRETCH GOALS
– Our Education page will have a timeline that will be interactive; information would pop up upon mouseover or click.
– The ability to randomize the favorite images or turn them into a slideshow of the user and/or the general favorites.
– Add a small grid calendar to our inputs for user to select a date for filtering images.


#### STEPS
To add the tables to another local repo: 
    - Do a sql:dump from the locally created database (create a text file with the data)
    - Then sql:load into the other local repo

Create a Heroku app (this will store the persistent data for our users): 
    – Create a new app
    – Add a databse
    – Do this: heroku pg:push mylocaldb (name) DATABASE_URL --app your-app-name
    – Connect heroku with postgres: heroku pg:psql --app your-app-name
    – Use postgresql commands to check tables and data

