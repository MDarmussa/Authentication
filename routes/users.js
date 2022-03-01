const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require('../models');
const Sequelize = require('sequelize');
// const {authApp} = require('../models'); //
const saltRounds = (10);

router.get('/', async function (req, res, next) {
     res.render('index')
     // const users = await User.findAll();
     // res.json(users);
   
   });

router.post('/', async function (req, res, next) {
     const {username, password, email} = req.body;
const user = await User.create({
     username,
     password,
     email
});
res.json(user);

});

router.post('/register', async (req, res, next) => {
     let {username, password, email} = req.body;
     const hashPassword = bcrypt.hashSync(password, saltRounds)
     const saltRounds = bcrypt.genSaltSync(3)
     const newUser = await User.create({
       username: username,
       password: hashPassword,
       email: email
     });
     res.send(newUser)
   });


router.post('/login', async (req, res, next) => {
     const {username, password} = req.body;

     const saltRounds = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(password, saltRounds);
     const comparePass = bcrypt.compareSync(password, hash);

     const users = await User.findOne({
          where: {
               username: username
          }
     });
     res.json(users)
     console.log(users)


     // res.send("registered User")
   });



module.exports = router;