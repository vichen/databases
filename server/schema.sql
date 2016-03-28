DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Table 'Messages'
-- 
-- ---

DROP TABLE IF EXISTS messages;
    
CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(200) NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID)
  -- text MEDIUMTEXT NULL DEFAULT NULL,
  -- id_User INTEGER NULL DEFAULT NULL,
  -- id_Room INTEGER NULL DEFAULT NULL,
);

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS users;
    
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  PRIMARY KEY (ID)
);

-- ---
-- Table 'Rooms'
-- 
-- ---

DROP TABLE IF EXISTS rooms;
    
CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(20) NOT NULL,
  PRIMARY KEY (ID)
);
-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE messages ADD FOREIGN KEY (id_User) REFERENCES users (ID);
-- ALTER TABLE messages ADD FOREIGN KEY (id_Room) REFERENCES rooms (ID);

