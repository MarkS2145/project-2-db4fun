const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;

//BASE URL users/

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
