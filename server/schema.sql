DROP database chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT(10) PRIMARY KEY AUTO_INCREMENT,
  msg  VARCHAR(200),
  roomname VARCHAR(30), 
  users_id VARCHAR(30)
);

-- /* Create other tables and define schemas for them here! */
-- CREATE TABLE rooms(
--   id INT(10) PRIMARY KEY AUTO_INCREMENT,
--   roomname VARCHAR(50)
-- );

CREATE TABLE users(
  userid INT(10) PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
