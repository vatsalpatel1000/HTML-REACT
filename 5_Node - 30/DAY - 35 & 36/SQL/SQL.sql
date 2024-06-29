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
    CONSTRAINT CHECK(age >= 13);            -- les than 13 value can"t entered
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


SELECT id,name FROM users WHERE followers >= 200;
SELECT id,name FROM users WHERE followers >= 200 And age>=12;
SELECT id,name FROM users WHERE followers >= 200 OR age>=12;
SELECT id,name FROM users WHERE age BETWEEN 12 and 17;
SELECT id,name FROM users WHERE age IN (14,16);
SELECT id,name,email FROM users WHERE email IN ("Vats@gmail.com","adam@gmail.com","vat@gmail.com");
SELECT id,name FROM users WHERE age NOT IN (14,16);

SELECT name,age FROM users WHERE age> 14  LIMIT 2;
SELECT name,age FROM users WHERE LIMIT 2;

SELECT name,age,followers FROM users ORDER BY followers ASC;

SELECT max(followers) From users;
SELECT count(age) From users;
SELECT avg(age) From users;
SELECT sum(followers) From users;

SELECT count(id) from users GROUP BY age;
SELECT age,max(followers) from users GROUP BY age HAVING max(followers)>200;

-- GENRAL ORDER
SELECT age,max(followers) 
FROM users 
GROUP BY age 
HAVING max(followers)>200
ORDER BY age DESC;

-- UPDATE
UPDATE users SET followers = 600 WHERE age = 16;
SET SQL_SAFE_UPDATES = 0 ;

DELETE FROM users WHERE age = 14;

--ALTER
ALTER table users 
ADD column city VARCHAR(20) 
DEFAULT = 'delhi';

ALTER table users 
DROP column age;

ALTER table users RENAME TO instausers;

ALTER table users CHANGE coloumn followers sub INT DEFAULT 0 ;

ALTER table users MODIFY subs INT DEFAULT 5 ;

TRUNCATE table users;
DROP table users;




-- PRACTICE QUESTION

Create DATABASE college;
USE college;
CREATE TABLE teacher( id INT, name VARCHAR(20),subject VARCHAR(20),salary INT );
Insert INTO teacher VALUES
(23 , "ajay", "math",50000),
(47 , "Bharat", "english",60000),
(18 , "chetan", "chemistry",45000),
(9 , "divya", "physics",75000);

select * from techer where salary > 55000;

alter table teacher CHANGE COLUMN salary ctc INT; 

UPDATE teacher SET ctc = ctc + ctc *0.25;

Alter TABLE teacher ADD column city VARCHAR(50) DEFAULT "GOA";

alter TABLE teacher DROP COLUMN ctc;