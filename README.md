
# Journal Journey

## Deere Project 2 - db4fun
### Author: Mark Stuebs

## Set Up

1. BASE URL route:  `localhost:3001/`

![](https://i.imgur.com/uuhrOxQ.png)

<br>

## Setting Environment Variables `.env`
The .env file contains our environment variables that are an intergal part fo this code.  

WARNING:  
1. This file should NOT be hosted with the application when in production.
1. The authentication seed should be changed in production to ensure security of authentication data

## Managing our tables with test data
The following commands run from terminal allow us to set up our database in a known configuration.  These commands were used extensively during development.
1. Drop all tables:  `npx sequelize db:migrate:undo:all`
1. Re-migrate:  `npx sequelize db:migrate`
1. Re-seed our tables:  `npx sequelize db:seed:all`

## Generate Models
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

## Update db from new Model
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
## Creating seeds for our db 
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



## Routes

You have the following routes available.

#### controllers/authController.js

- GET and POST `localhost:3000/auth/signup`
- GET and POST `localhost:3000/auth/login`
- GET `localhost:3000/auth/logout`

#### controllers/usersController.js

- GET `localhost:3000/profile/:id`


#### Author Routes
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


## Heroku Deployment
we ahve successfully deployed the Journal Journey app to Heroku.

1. Index/Homepage route: https://journaljourney.herokuapp.com/
1. We should use `git push heroku main`
1. We need to be in `Heroku run bash` to:
Once in bash, 
1. To migrate the db use: `npx sequelize db:migrate`
1. To seed the db with our default values, run: `npx sequelize db:migrate`


## Improvements
the following is a list of improvements that could be made to enhance this application in the future.  


## Additional Resources

- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/)
