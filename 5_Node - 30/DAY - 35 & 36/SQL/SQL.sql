CREATE DATABASE DELTA;

CREATE DATABASE IF NOT EXISTS DELTA;

USE DELTA;

DROP DATABASE DELTA;
DROP DATABASE IF EXISTS DELTA;

SELECT * FROM STUDENT;

SHOW DATABASE;

SHOW TABLE;

CREATE TABLE STUDENT (ROLLNO INT , NAME VARCHAR(50), AGE INT);

CREATE DATABASE IF NOT EXISTS instagram;
use instagram;
 create table users (
	id INT PRIMARY KEY,
    age INT,
    name varchar(50) NOT NULL ,
    email varchar(50) UNIQUE,
    followers INT DEFAULT 10,
    following INT,
    CONSTRAINT CHECK (age >= 13)            -- les than 13 value can"t entered
 );
 
 CREATE table post(
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    foreign key (user_id) references users(id)
    ); 

INSERT INTO users VALUES
("101","28","vats","Vats@gmail.com",100,101),
("102","23","adam","adam@gmail.com",10,11);


INSERT INTO post VALUES
("101","Hello world",3),
("102","BYE BYE",2)

SELECT * FROM users;