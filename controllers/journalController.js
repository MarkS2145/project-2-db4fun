const express = require('express');
const router = express.Router();

const JournalModel = require('../models').Journal;

//BASE ROUTE === app.use("/journal"

//RR1: INDEX HTTPVerb: GET Purpose: redirect to Journals page SEQ: n/a
router.get('/', (req, res) => {
  JournalModel.findAll().then( (journal) => {
    res.render('../views/journals/index.ejs', { journal });
  });
});  //Done

//RR2: NEW HTTPVerb: GET Purpose: Display form for NEW Journal SEQ: n/a
router.get('/new', (req, res) => {
  console.log('/new GET caught 003 renders(new.ejs)');
  res.render('../views/journals/new.ejs');
});
  
//RR3: CREATE HTTPVerb: POST Purpose: Add NEW Journal to db SEQ: CREATE
router.post('/', (req, res) => {
  console.log(req.body)

  JournalModel.create(req.body).then((journals) => {
    res.redirect('/journal/')
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
    }).then((author) => {
      // Teams.findAll().then((teams) => {
      //     console.log("Found by ID, Obj[] follows:");
      //     console.log(user.id);
      //     //console.log(teams);
          //console.log(player.teams);
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
  
// Login POST Route - determines if login successful from db
// router.post('/login', (req, res) => {
//   try {

//     console.log("Trying login");

//     User.findAll({
//       where: {
//         username: req.body.username,
//         password: req.body.password
//       }
//     }).then((user) => {

//       console.log(user);

//       console.log(user.id);

//       //LOGIN SUCCESSFUL
//       if (user != "") {
//         console.log("Login success");

//         console.log(user[0].id);

//         res.redirect('/user/profile/'+ user[0].id);
//       }
//       else {
//         console.log("Log in failed... try again")
//         res.render('user/login');
//       }

//     });
//   }
//   catch (error) {
//     console.error(error);
//     res.render('user');
//   }
// });

//Sign Up GET route
// router.get('/signup', (req, res) => {

//     console.log('/user GET caught 004, renders Sign Up page');

//     res.render('../views/user/signup.ejs')
//   } );

//RR7: DESTROY HTTPVerb: DELETE Purpose: Destroy Journal SEQ: DESTROY
router.delete('/:id', (req, res) => {

  console.log("Destroy journal by id: " + req.params.id);

  JournalModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect('/');  
  });

});

//RR6: EDIT HTTPVerb: PUT Purpose: Update Journal info SEQ: UPDATE
router.put('/:id', (req, res) => {
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