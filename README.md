
# Journal Journey
![Baby Yoda pondering a journal entry](assets/baby-yoda.jpeg)

## Deere Project 2 - db4fun
### Author: Mark Stuebs


## Project Description
The Journal Journey app allows a suer to sign up, log in and out for the app to view journal posts from Authors.
A subscriber may become an author and post a brief biopic and journal posts.

## Wireframes
I have some sketches when initially starting the thought process behind this app.  Later those ketches became the db layout that can be found in this readme file.  However, wireframes were not used for the design of this application.  User stories dictated the flow, behavior and views.  

## Set Up and Installation

1. BASE URL route:  `localhost:3001/`

![](https://i.imgur.com/uuhrOxQ.png)

<br>

### Setting Environment Variables `.env`
The .env file contains our environment variables that are an intergal part fo this code.  

WARNING:  
1. This file should NOT be hosted with the application when in production.
1. The authentication seed should be changed in production to ensure security of authentication data

### Managing our tables with test data
The following commands run from terminal allow us to set up our database in a known configuration.  These commands were used extensively during development.
1. Drop all tables:  `npx sequelize db:migrate:undo:all`
1. Re-migrate:  `npx sequelize db:migrate`
1. Re-seed our tables:  `npx sequelize db:seed:all`

### Generate Models
The following commands run from terminal allow us to set up our database in a known configuration.  These commands were used extensively during development.

1. To create initial index model, run: `npx sequelize model:generate`

1. To create a model, for example for our Authors, we need to give the desired table name that will be pluralized, and then our key value pairs, comma separated.  It is also IMPORTANT that no space exists between our key:value pairs, and commas  The following should run and create a valid Author model for us to use: `npx sequelize model:generate --name Author --attributes name:string,bio:string,valediction:string,imageURL:string,userID:integer`
1. Two new files are generated.  One in Models called: `author.js`, the second in Migration folder called: `20210210193609-create-author.js`
1.  Go into Migration folder and update the migration file for new date() and any other changes needed to aid in our migration.  E.g. unique values, allow null, foreignKey:true, etc.

```
{
    Sequelize CLI [Node: 15.6.0, CLI: 6.2.0, ORM: 6.5.0]
    New model was created at /Users/Mark/sei/projects/project-2-db4fun/models/author.js .
    New migration was created at /Users/Mark/sei/projects/project-2-db4fun/migrations/20210210193609-create-author.js .
    WDXMS80723VCG:project-2-db4fun Mark$ npx sequelize db:migrate
}
```

### Update db from new Model
In order for our database to create a table for our new model we need to execute the following command from our terminal: `npx sequelize db:migrate`
```
{
    Sequelize CLI [Node: 15.6.0, CLI: 6.2.0, ORM: 6.5.0]

    Loaded configuration file "config/config.json".
    Using environment "development".
    == 20210210193609-create-author: migrating =======
    == 20210210193609-create-author: migrated (0.029s)`
}
```
### Creating seeds for our db 
A seed allows us to work from pre-determined data in our db. For example, to create a new seed file to add Authors into our db we would run the following command from our terminal: `sequelize seed:generate --name demo-authors`

```
{
    Sequelize CLI [Node: 15.6.0, CLI: 6.2.0, ORM: 6.5.0]

    seeders folder at "/Users/Mark/sei/projects/project-2-db4fun/seeders" already exists.
    New seed was created at /Users/Mark/sei/projects/project-2-db4fun/seeders/20210210195801-demo-authors.js .
}
```
This creates a new seed file with a time stamp appended to the front of it as shown above.

We can now edit this file to add our seed Author data for as many authors as we wish to strat out with, or none.  It's our choice.

### Heroku Deployment
We have successfully deployed the Journal Journey app to Heroku.

1. Index/Homepage route: https://journaljourney.herokuapp.com/
1. We should use `git push heroku main`
1. We need to be in `Heroku run bash` to:
Once in bash, 
1. To migrate the db use: `npx sequelize db:migrate`
1. To seed the db with our default values, run: `npx sequelize db:seed:all`

[Addtional Heroku help](https://devcenter.heroku.com/categories/nodejs-support)

## Design

### dB Layout
We have four tables implemented.
![Data Base diagram for Journal Journey](./assets/JournalJourneydBDiagram.png?raw=true)

1. **User Table** - User provides information at sign up.
- If user wants to become an authr and contribute journal entries they sign up for that.

2. **Author table** - User provides information as an Author.  This information is used for the Author Profile page. Authors can contribute Journal Entries to the dB.

3. **Journal** - Authors write Journal entries providing the information.  They can choose a publish date for the Journal to be published on.  This allows them to have saved work in progress prior to it being availablel for all users.

4.  **User Journal Association table** - This provides the join of the users chosing journals to reference later.



## Routes

You have the following routes available.

### Author Routes
Author implements all ___**seven restful routes**___ as shown below in the order they are listed in the authorController.
RR = Restful routes.
- RR1: INDEX HTTPVerb: GET Purpose: redirect to welcome page SEQ: n/a
- RR2: NEW HTTPVerb: GET Purpose: Display form for NEW Author SEQ: n/a
- RR3: CREATE HTTPVerb: POST Purpose: Add NEW Author to db SEQ: CREATE
- RR5: SHOW HTTPVerb: GET Purpose: Show Edit for an Author SEQ: FINDBYPK
- RR4: SHOW HTTPVerb: GET Purpose: Show one Player SEQ: FINDBYPK
- //Login GET Route - displays page
- RR7: DESTROY HTTPVerb: DELETE Purpose: Destroy User SEQ: DESTROY
- RR6: EDIT HTTPVerb: PUT Purpose: Update Player info SEQ: UPDATE


## Controllers

### AuthController
Provides the base Sign/login capability and authentication for our Users/Authors and seeds the cookie with a userid and username that may be referenced throughout the app.
BASEURL is either `localhost:3001` or `https://journaljourney.herokuapp.com/` for deployed version.

All routes that follow should include one of the BASEURLs above.
- GET `/` Welcome page for following routes:
    - GET and POST `/auth/signup`
    - GET and POST `/auth/login`
    - GET `/auth/logout`

### UserController Routes
Provides routes for users to look at their Sign Up information, edit it and delete their account.
BASEURL + ...

- GET `/users/:id`
- GET and PUT `/users/profile/:id` view and edit
- DESTROY `/users/:id` Delete user

### AuthorController Routes
Provides routes for users to sign up as an Author and view their Sign Up information, edit it and delete it.
BASEURL + ...
- GET and POST `/author/` Lists all authors and Posts NEW author info to db
- GET `/author/new` shows Author signup page
- GET `/author/:id/`
- GET `/author/:id/edit` show edit page
- GET `/author/login/`
- DESTROY `/author/:id`
- PUT `/author/:id` udpate

## JournalController Routes
Provides routes for users to view journal entries and for authors to create new, edit and delete journal entries.
BASEURL + ...
- GET and POST `/journal/` Lists all journals and Posts NEW journal entry to db
- GET `/journal/new` shows new journal page by user id 
- POST  `/journal/:id/favorites` Add journal to users favorites.
- GET `/journal/:id/edit` show edit page (Not currently implemented correctly:  Bug, see improvements)

- GET and PUT and DESTROY `/journal/:id` Show, udpate routes

## MVP User Stories
The Journal Journey App may be referenced as JJ app in the user stories below, for brevity.  All the following are considered MVP unless specifcally indcated by the **PostMVP** label.

The persona's that I will be using for this application consist of:
- **User:** A user will sign up for access to the journals and is te basic user who consumes the content, but does NOT contribute to the journal entries. A better name for the user is subscriber which is used below int he user stories. A user can sign up as an Author (See below) but this is not required.

- **Author:** An Author, as the name suggests, provides content to be viewed by users of the Journal Journey App. The content provided is called a Journal entry.

### User/Subscriber User stories
1. As a subscriber I would like to be able to sign up for access to the journal material
1. As a subscriber I would like to be able to delete my profile from the blog
1. As a subscriber would like to sign up for services. I will  provide the following information, loosely termed my profile:
- username: unique, false, no
- password: false, no
- email: string
1. As a subscriber I would like to be able to edit my profile information.
1. As a subscriber I would like to be able to delete myself from the Journal Journey app.
1. As a Subscriber I would like to be able to read an Authors bio.
1. As a subscriber I would like to select my favorite journal entries.
1. As a Subscriber I would like to be able to make a selection giving my permission to receive email updates from the JJ app.
1. As a Subscriber I would like to be able to see a list of Authors.
1. As a Subscriber I would like to be able to read an Authors bio by clicking an author name from the author list
1. As a Subscriber I would like to be able to see a list of journal entries, by title.
1. As a Subscriber I would like to be able to read ajournal entry by clicking the title from the journal list.
1. As a Subscriber I would like to be able to mark a journal entry as a favorite.
1. As a Subscriber I would like to be able to see a list of journal entries I have marked as favorites, by title.
1. As a Subscriber I would like to be able to read a journal entry by clicking the title from the journal list.
1. As a subscriber I would like to be able to log in and Log out of my session.
1. As a Subscriber I would like to be the ONLY subcriber that can edit/delete my profile information.


### Author User stories
1. As an Author I would like to sign up to become an Author providing the following information:
- name: string
- bio: text
valediction: string
- imageURL: string
1. As an Author I would like to be able to write a new journal entry that comprises the following information:
- title: text
- body: text
- imageURL: string, to an image that will be displayed. 
(NOTE:  No image hosting is provided in the JJ app)
- publishDate: date
1. As an Author I would like to be able to edit an existing journal entry.
1. As an Author I would like to be able to delete an existing journal entry.
1. As an Author I would like to be the ONLY author/subcriber that can edit/delete my Author Bio information.
1. As an Author I would like to be the ONLY author/subcriber that can edit/delete my journal entries.


## Code Snippet
The following code snippet is a POST route to support adding a journal entry to a subscribers "favorites list" through a join table.
```js
{
    //RR3.5: CREATE HTTPVerb: POST 
    //Purpose: Add Journal to favorites SEQ: CREATE
    router.post('/:id/favorite', (req, res) => {
    console.log(req.body)

    UserModel.findByPk(req.user.id).then( (user) => {
        JournalModel.findByPk(req.params.id).then((journal) => {
        //addJournal needs to match the models.Journal entry in User associations in model file
        user.addJournal(journal).then( () => {
            res.redirect('/journal/' + req.params.id);
        });
        })
    })
    });
}
```


## Plan for success & Time Frames
The folllowing was my outline to success for this project.

Total Planned: ~26Hrs
Total, Actual: ~34Hrs (+3Hrs over the weekend)
[planned:actual] in hours

### Tuesday: 7hrs
- Creatively think about direction of project [2:3]
- Start to document User Stories [1:1]
- Set up initial project file [2:3]

### Wednesday: 17Hrs
- Author routes completed and db seeder and migration models implemented. [2:3]
- Subscriber routes completed and db seeder and migration models implemented. [2:3]
- Journal entry like [1:1]
- Authentication start [1:1]
- db/Table creation [2:3]
- join tables [2:2]
- Associations [1:4]

### Thursday: 5Hrs
- Learn heroku deployment [3:3]
- Authenticiation [1:2]
- Pretty responsive design [3:0]
- deploy to Heroku [1:0]

### Friday: 5Hrs
- readme documentation [2:3] - more hours after Friday +3
- address deployment and bugs [2:2]
- demo Journal Journey App 


## Plan reflection
Here are some of my reflections on the week working on the Journal Journey App.

### Positives
1. I made a positive plan change to update the readme file in line with the work. 
1. I implemented a lot of views and features successfully.
1. I debugged several challenging problems, e.g. garbage characters in the image URL creates a database error when a subscriber views the journal/bio entry more than once.
1. I used many technologies (node, ejs, html, postgres and heroku) and methodologies (CRUD & RESTful routes) to develop and deploy my app in a very, very short amount of time (<4 calendar days!).
1. I completed alot of work which I really enjoyed.

### Room for Improvement
1. I implemented a lot of views and features.
1. I underestimated the work required for successfully implementing:
- Associations after the db join table was implemented.
- CSS styling.
1. Finalizing documentation to a point where I felt satisfied.


## Journal Journey App Improvements
the following is a list of improvements that could be made to enhance this application in the future.  
### Subscriber User Stories to improve user experience
1. As a subscriber I would like to be to select my favorite authors to filter their journal entries.
1. As a subscriber I would like to be able to select a journal by published date.
1. As a Subscriber I would like to receive email updates from the JJ app.
1. As a subscriber, I would like to be able to add/reply to comments to a journal entry.
1. Squash bug in Journal controller for GET `/journal/:id/edit` show edit page (Not currently implemented correctly) and provide edit page for an Authors journals.


### Author user stories to improve their experience
1. As an Author I only wnat my journal entries published on the date I provide in the publishDate: date (key/Value pair)
1. As an Author I would like to be able to see which of my journal entries has been tagged as a favorite, and by how many people.
1. As an Author, I would like to be able to add/reply to comments to a journal entry.

## Self assessment

### MVP - Minimum Viable Product
- **__[x]__** A working full-stack application, built by you, using Node.js, Postgres, Express and EJS
- **__[x]__** Adhere to the MVC file structure: Models, Views, Controllers
- **__[x]__** At least one model with all 7 RESTful routes and full CRUD.
- **__[x]__** At least 2 models that are associated in some way (e.g. one-to-many, many-to-many, etc)
- **__[x]__** ❗ A git repository not inside the class repo.
- **__[x]__** At least one Github commit per day.
- **__[x]__** At least 10 User Stories
- **__[x]__** Be deployed online and accessible to the public via Heroku
- **__[x]__** A README.md file with explanations of the technologies used, the approach was taken, unsolved problems, user stories, and notes to yourself so you can come back to your project later in the course and be able to pick up your train of thought, etc. Inside Your README.md:
        - **__[x]__** Check this file for a README template
        - **__[x]__** Include at least 10 User Stories
        - **__[]__** Include wireframes that you designed during the planning process
        - **__[x]__** Have a link to your hosted working app in the README.md file in your github repo

### Stretch Goals (Not Mandatory):
Recommended Features

- **__[x]__** Add additional relationships
- **__[x]__** Include sign up/log in functionality, with encrypted passwords & an authorization flow
- **__[x]__** Use EJS Partials
- Include portfolio-quality styling
- Use a CSS framework like Bootstrap
- Incorporate Google Maps

## Additional Resources
- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/)
- [Heroku](http://www.heroku.com/)
- [Writing Good User Stories](http://www.mariaemerson.com/user-stories/)
- [Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)

