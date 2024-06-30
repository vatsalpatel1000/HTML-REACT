SHOW TABLES;
CREATE TABLE user(
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);


--  cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"        go to mysql world
--  .\mysql -u root -p
--  Password 1234
--  source C:/Users/Vatsal/Desktop/HTML-REACT/5_Node - 30/DAY - 37/SQLCLASS/schema.sql;     -- to run schema.sql file