
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