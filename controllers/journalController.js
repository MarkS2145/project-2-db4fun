const express = require('express');
const router = express.Router();


const UserModel = require("../models").User;
const AuthorModel = require('../models').Author;
const JournalModel = require('../models').Journal;
const UserJournalModel = require('../models').UserJournal;

//BASE ROUTE === app.use("/journal"

//RR1: INDEX HTTPVerb: GET Purpose: redirect to Journals page SEQ: n/a
router.get('/', (req, res) => {
  let userId = req.user.id;
  JournalModel.findAll().then( (journal) => {
    res.render('../views/journals/index.ejs', { journal, userId });
  });
});  //Done

// SHOW ROUTE - GET ONE FRUIT
router.get("/favorites", (req, res) => {
  
  let userId = req.user.id;

  console.log("Journal Favorites called by userId: "  + userId);



  UserModel.findByPk(userId, {
    include: [
      { model: UserJournalModel },
      { model: JournalModel  },
    ]
  }).then( (favoritejournals) => {
    console.log(favoritejournals);
  });

  //UserJournalModel.findByPk(userId).then((favoritejournals) => {

    
    // UserJournalModel.findAll( {
    //   where: { userId: userId }, 
      // include: [
      //   { 
      //     where {
      //       id: userId
      //     }
      //     model: JournalModel,
      //     attributes: [ "title" ]
      //    },
      // ]
    // }).then( (favoritejournalids) => {
    //   console.log(favoritejournalids);

    //   JournalModel.findByPk( favoritejournalids.journalId 
    //     ).then( (favoritejournals) => {
    //     console.log(favoritejournals);
    // res.render("journals/favorites.ejs", {
    //     favoritejournals
      // });
  // });
});


//RR2: NEW HTTPVerb: GET Purpose: Display form for NEW Journal SEQ: n/a
router.get('/new', (req, res) => {
  console.log('/new GET caught 003 renders(new.ejs)');
  let userId = req.user.id; // Comes from token when user logged in.
  res.render('../views/journals/new.ejs', { userId });
});

//RR2.5: NEW HTTPVerb: GET Purpose: Display form for NEW Journal SEQ: n/a
router.get('/new/user/:id', (req, res) => {
  console.log('/new/user/:id GET caught RR2.5 renders(new.ejs)');
  let userId = req.params.id;
  res.render('../views/journals/new.ejs', { userId });
});
  
//RR3: CREATE HTTPVerb: POST Purpose: Add NEW Journal to db SEQ: CREATE
router.post('/', (req, res) => {
  console.log(req.body)

  req.body.publish = ( req.body.publish == 'checked' ? true : false);

  JournalModel.create(req.body).then((journals) => {
    res.redirect('/journal/')
  })
});



//RR3.5: CREATE HTTPVerb: POST Purpose: Add Journal to favorites SEQ: CREATE
router.post('/:id/favorite', (req, res) => {

  // I could add this pseudo code into this one function to ONLY use verify token here for adding to favorites by a logged in user
  //const token = require('verifytoken.file');
  // token();

  console.log(req.body)

  UserModel.findByPk(req.user.id).then( (user) => {
    JournalModel.findByPk(req.params.id).then((journal) => {
      //addJournal needs to match the models.Journal entry in  User associations in model file
      user.addJournal(journal).then( () => {
        res.redirect('/journal/' + req.params.id);
      });
    })
  })
});

//RR5: SHOW HTTPVerb: GET Purpose: Show Edit for an Journal SEQ: FINDBYPK
router.get('/:id/edit', (req, res) => {

  console.log("Edit journal by id: " + req.params.id)  ;

  // Sequelize

  JournalModel.findByPk(req.params.id, {
    //include: [{model: Teams}, { model: Pokemon}],
  }).then((journal) => {
    // Teams.findAll().then((teams) => {
    //     console.log("Found by ID, Obj[] follows:");
    //     console.log(user.id);
    //     //console.log(teams);
        //console.log(player.teams);
        console.log("/journal/edit/:id/ before ternary: " + journal.publish);
        journal.publish = ( journal.publish == true ? 'checked' : '' );
        console.log("/journal/edit/:id/ after ternary: " + journal.publish);

        res.render('../views/journals/edit.ejs', { 
          journal, 
          //teams 
        // });
      });
  });
});

//RR4: SHOW HTTPVerb: GET Purpose: Show one Journal SEQ: FINDBYPK
router.get('/:id', (req, res) => {

    console.log("Get journal by id: " + req.params.id)  ;
    // Sequelize

    JournalModel.findByPk(req.params.id, {
      //include: [{model: Teams}, { model: Pokemon}],
    }).then((journal) => {
      // Teams.findAll().then((teams) => {
      //     console.log("Found by ID, Obj[] follows:");
      //     console.log(user.id);
      //     //console.log(teams);
          //console.log(player.teams);
          journal.publish = ( journal.publish == true ? 'checked' : '' );

          res.render('../views/journals/show.ejs', { 
            journal, 
            //teams 
          // });
        });
    });
});

//Login GET Route - displays page
router.get('/login', (req, res) => {
    res.render('../views/journals/login.ejs')
  } );

//RR7: DESTROY HTTPVerb: DELETE Purpose: Destroy Journal SEQ: DESTROY
router.delete('/:id', (req, res) => {

  console.log("Destroy journal by id: " + req.params.id);

  JournalModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect('/journal/');  
  });

});

//RR6: EDIT HTTPVerb: PUT Purpose: Update Journal info SEQ: UPDATE
router.put('/:id', (req, res) => {

  req.body.publish = ( req.body.publish == 'checked' ? true : false);

  JournalModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((journal) => {
      console.group(`changes made`);
      console.log(journal);
      res.redirect(`/journal/${req.params.id}/edit` ) 
    });
});
  


  

module.exports = router;