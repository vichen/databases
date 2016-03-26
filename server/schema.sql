CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
  
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
-- 
-- ---

DROP TABLE IF EXISTS messages;
    
CREATE TABLE messages (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  text MEDIUMTEXT NULL DEFAULT NULL,
  id_User INTEGER NULL DEFAULT NULL,
  id_Room INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Users'
-- 
-- ---

DROP TABLE IF EXISTS users;
    
CREATE TABLE users (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  name MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Rooms'
-- 
-- ---

DROP TABLE IF EXISTS rooms;
    
CREATE TABLE rooms (
  id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  roomname MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Friends'
-- 
-- ---

-- DROP TABLE IF EXISTS friends;
    
-- CREATE TABLE friends (
--   id INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   PRIMARY KEY (id)
-- );

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE messages ADD FOREIGN KEY (id_User) REFERENCES users (id);
ALTER TABLE messages ADD FOREIGN KEY (id_Room) REFERENCES rooms (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE messages ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE users ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE rooms ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE friends ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Messages` (id,text,id_User,id_Room) VALUES
-- ('','','','');
-- INSERT INTO users (id,name) VALUES
-- ('','');
-- INSERT INTO rooms (id,`roomname`) VALUES
-- ('','');
-- INSERT INTO friends (id) VALUES
-- ('');