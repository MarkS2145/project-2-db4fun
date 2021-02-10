const express = require('express');
const router = express.Router();
const User = require('../models').User;

//BASE ROUTE === app.use("/user"

//RR1: INDEX HTTPVerb: GET Purpose: redirect to welcome page SEQ: n/a
router.get('/', (req, res) => {
    res.render('../views/user/index.ejs')
  } );  //Done

//RR2: NEW HTTPVerb: GET Purpose: Display form for NEW Pokemon SEQ: n/a
// --- NOT IMEPLEMENTED AS NOT NEEDED ---
  
//RR3: CREATE HTTPVerb: POST Purpose: Add NEW Player to db SEQ: CREATE
router.post('/', (req, res) => {
    console.log(req.body)

    User.create(req.body).then((newUser) => {
      //res.redirect('users/profile/' + newPlayer.id);
      res.render('../views/user/index.ejs')
    });

  } );

//RR4: SHOW HTTPVerb: GET Purpose: Show one Player SEQ: FINDBYPK
router.get('/profile/:id', (req, res) => {

    console.log("Get profile by id: " + req.params.id)  ;
    // Sequelize

    User.findByPk(req.params.id, {
      //include: [{model: Teams}, { model: Pokemon}],
    }).then((user) => {
      Teams.findAll().then((teams) => {
          console.log("Found by ID, Obj[] follows:");
          console.log(user.id);
          //console.log(teams);
          //console.log(player.teams);
          res.render('../views/user/profile.ejs', { 
            user, 
            //teams 
          });
        });
    });
});

// Login GET Route - displays page
router.get('/login', (req, res) => {
    res.render('../views/user/login.ejs')
  } );
  
// Login POST Route - determines if login successful from db
router.post('/login', (req, res) => {
  try {

    console.log("Trying login");

    User.findAll({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then((user) => {

      console.log(user);

      console.log(user.id);

      //LOGIN SUCCESSFUL
      if (user != "") {
        console.log("Login success");

        console.log(user[0].id);

        res.redirect('/user/profile/'+ user[0].id);
      }
      else {
        console.log("Log in failed... try again")
        res.render('user/login');
      }

    });
  }
  catch (error) {
    console.error(error);
    res.render('user');
  }
});

//Sign Up GET route
router.get('/signup', (req, res) => {

    console.log('/user GET caught 004, renders Sign Up page');

    res.render('../views/user/signup.ejs')
  } );

//RR7: DESTROY HTTPVerb: DELETE Purpose: Destroy User SEQ: DESTROY
router.delete('/:id', (req, res) => {

    User.destroy({ where: { id: req.params.id } }).then(() => { 
      res.redirect('/user/');  //redirect back to user homepage
    });

  }) ;

//RR5: EDIT HTTPVerb: PUT Purpose: Update Player info SEQ: UPDATE
router.put('/:id', (req, res) => {
    //Sequelize
    User.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((user) => {
      console.group(`changes made`);
      console.log(user);
      res.redirect('/user/profile/' + req.params.id ) // => index page
    });
});
  


  

module.exports = router;