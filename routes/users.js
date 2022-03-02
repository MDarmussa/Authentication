const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const saltRounds = process.env.SALT_ROUNDS;

const { User } = require('../models');
const Sequelize = require('sequelize');
// const saltRounds = bcrypt.genSaltSync(10);

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
     // const saltRounds = bcrypt.genSaltSync(5)
     const hashPassword = bcrypt.hashSync(password, saltRounds)
     const newUser = await User.create({
       username: username,
       password: hashPassword,
       email: email
     });
     res.send(newUser)
   });


router.post('/login', async (req, res, next) => {
     const { username, password } = req.body;
     const hash = bcrypt.hashSync(password, saltRounds);

     const users = await User.findOne({
          where: {
               username: username
          }
     });

     // res.json(users)

     const dbPassword = users.password + ""
     console.log(req.body)
     console.log("db password is: ", dbPassword)
     console.log("Password is: ", password)
     // console.log("hash is: ", hash)
     const comparePass = bcrypt.compareSync(password, dbPassword);
     const saltRounds = bcrypt.genSaltSync(10);

     console.log("compare is: ", comparePass)

     if (comparePass) {
          // res.render("NEXT EJS/HTML", {
          //      USER DATA
          // })  
          res.json(users)
          console.log("Authorized")
     } else {
          console.log("No user found")
          res.send("NOT AUTHORIZED")
     }
   });

module.exports = router;