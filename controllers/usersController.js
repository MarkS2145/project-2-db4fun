const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const AuthorModel = require('../models').Author;
const JournalModel = require('../models').Journal;
const UserJournalModel = require('../models').UserJournal;

//BASE URL users/

// SHOW ROUTE - GET ONE User
router.get("/:id", (req, res) => {
  UserModel.findByPk(req.params.id, {
    include: [
      {
        model: UserModel,
        attributes: ["id","username"],
      },
      {
        model: UserJournalModel,
      },
    ],
    //attributes: ["name", "color", "readyToEat"],
  }).then((user) => {
    console.log("SHOW User + journal obj[]" + user);
    res.render("users/show.ejs", {     
      user,
    });
  });
});

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  console.log(req.user);
  UserModel.findByPk(req.params.id).then((userProfile) => {
    userProfile.subscribed = ( userProfile.subscribed == true ? 'checked' : '' );
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});


//RR7: DESTROY HTTPVerb: DELETE Purpose: Destroy User SEQ: DESTROY
router.delete('/:id', (req, res) => {

  //let destroyUser = confirm("Want to delete yourself from Journal Journey?")
    UserModel.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect('/');  //redirect back to user homepage
    });
});
  
  

//RR5: EDIT HTTPVerb: PUT Purpose: Update User info SEQ: UPDATE
router.put('/profile/:id', (req, res) => {
    
  let changeStatus = "changes made";

  req.body.subscribed = ( req.body.subscribed == 'on' ? true : false);
    
    UserModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    }).then((user) => {
      console.group(`changes made`);
      
      console.log(user);
      res.redirect('/users/profile/' + req.params.id)
    });
});

module.exports = router;
