# NodejsFreshCodeSetup
NodeJs With MySQL Fresh Code Setup

# node express mysql crud app api

### Install

    $ git clone 
    $ cd PROJECT_TITLE
    $ npm install

### Configure app

#### Step 1 working with localhost

        1. install mysql
        2. you can also download mysql GUI `mysql workbench`.
        3. paste host, user, password, database to `database/mysqlDB.js`
        4. CREATE DATABASE crud;
        5. CREATE TABLE users(
                _id INT NOT NULL AUTO_INCREMENT,
                firstName VARCHAR(45) NOT NULL,
                lastName VARCHAR(45) NOT NULL,
                email VARCHAR(45) NOT NULL,
                createdAt DATETIME NULL,
                updatedAt DATETIME NULL,
                PRIMARY KEY (_id),
                UNIQUE INDEX _id_UNIQUE (_id ASC),
                UNIQUE INDEX email_UNIQUE (email ASC));

### Start app

    $ npm start

### Start app using Nodemon

    $ npm run dev

API URL : http://localhost:3000/api/user#   N o d e J S - F r e s h - P r o j e c t - S e t u p  
 