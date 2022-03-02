
Note: I need to create a new user table, and make the password as a string not integer.


Auth Setup:
1- Create a new project directory (ex: authSecurity)
   cd authApp (then run the following commands)
2-	Run: npx express-generator --git authApp 
3-	Run: npm install  
4-	Run: npx express-generator
5-	Run: npm start //works same nodemon to run the file or the app
6-	npx express-generator –-ejs
7-	npm install bcrypt. //installs a package for hashing the password that entered by the user


DATABASE Setup: (For more info, review canvas or authentication.docs on  localhost)
Link: https://digitalcrafts.instructure.com/courses/172/pages/reading-sequelize-orm?module_item_id=12056

1-	run: npm i sequelize
2-	run: npm i pg
3-	run: npx sequelize-cli init. // this will create the an empty project
        •	config.json, contains config file, which tells CLI how to connect with database
        •	models, contains all models for your project
        •	migrations, contains all migration files
        •	seeders, contains all seed files

4-  run: npx sequelize-cli db:create. //use to create an empty database.
5-	Creating the Model 
    run:
        npx sequelize-cli model:generate --name User --attributes firstName:string,password:string,email:string

6-	Running the migration
    run:
        npx sequelize-cli db:migrate

7-	Seeding the Database
    run: npx sequelize-cli seed:generate --name user
        
9- Running the Seed File
    run: npx sequelize-cli db:seed:all



    https://digitalcrafts.instructure.com/courses/172/pages/reading-sequelize-orm?module_item_id=12056

    




  ---------  March 1 -----

install:
npm install dotenv --save
npm install jsonwebtoken


  How to hide our token keys from users:
  create .env file
   - SALT_ROUNDS=10

   on app.js:
    add:  
- const dotenv = require('dotenv');
- dotenv.config();
- console.log("Salat Rounds Are: ", process.env.SALT_ROUNDS)


on user app:
  add:
   - const saltRounds = process.env.SALT_ROUNDS;

Note, we can add more than key, just simply add in .env 
ex: SALT_ROUNDS=5  ..etc



https://jwt.io/
https://www.npmjs.com/package/jsonwebtoken
https://www.npmjs.com/package/dotenv


to run the app:
 - npm start


 --Web Tokens---
1) install the jwt library
     npm install jsonwebtoken
2) in the app.js:
    const jwt = require(‘jsonwebtoken’);
    const token = jwt.sign({
    data: ‘Free the ducks’
    }, ‘put your custom key here’, { expiresIn: ‘1h’ });
    console.log(“SECRET_KEY secretly held in .env: “, token);
This will generate a token with a 1h parameter from the .env file SECRET_KEY=topSecretKey
These tokens are verification passes to routes/rooms. The database is the gatekeeper for these routes/rooms that will check the token. They  typically have perishable timeout parameters.
3) Tokens are verified once access-restricted routes are called
    jwt.verify(
        token,
        secretKey,
    function (err, decoded) {
        console.log(‘Decoded’, decoded)
  }
)



