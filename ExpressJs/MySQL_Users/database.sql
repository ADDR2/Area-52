DROP DATABASE ExpressTest;
DROP USER max@localhost;

/*Database creation*/
CREATE DATABASE IF NOT EXISTS ExpressTest;

/*Users creation. Plase change the password */
CREATE USER max@localhost IDENTIFIED BY "root";

/*Tables creation*/
USE ExpressTest;

CREATE TABLE IF NOT EXISTS User (
	Id MEDIUMINT NOT NULL AUTO_INCREMENT,
	Name VARCHAR(255),
  Last_Name VARCHAR(255),
	CONSTRAINT User_PK PRIMARY KEY (Id)
);

GRANT ALL ON ExpressTest.* TO max;

INSERT INTO User (Name, Last_Name) values('Max','Harrigan');
