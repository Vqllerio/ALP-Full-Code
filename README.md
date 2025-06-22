# EafTrip

 we chose a website that helps users find a catalogue of destinations in Sulawesi Selatan with features that in part, replaces the basic uses of a tour guide when we're looking for a destination to choose for vacation, the websites helps equip users with the Destinations' History and Culture, all the important things you must know before traveling there. For example, there's an unwritten rule that most foreigners don't know about in Indonesia, and that is the fact that we have point of view that views the right hand as a hand that is courteous, a hand that is respectful, whilst the left hand is viewed as a hand that is disrespectful and dismissive. We want the users to be equipped with these types of knowledges and it be provided to them in a concise manner, solving the problem of knowledge about the destinations being too fragmented in the web.

# DataBase

Uses MariaDB from xampp
There's a table for users, consisting of a few columns that are:
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| iduser   | int(11)      | NO   | PRI | NULL    | auto_increment |
| username | varchar(255) | NO   |     | NULL    |                |
| email    | varchar(255) | NO   |     | NULL    |                |
| password | varchar(255) | NO   |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+

and a table for destinations, consisting of a few columns that are:
+-----------------+---------------+------+-----+---------+-------+
| Field           | Type          | Null | Key | Default | Extra |
+-----------------+---------------+------+-----+---------+-------+
| iddestination   | int(11)       | NO   | PRI | NULL    |       |
| title           | varchar(255)  | NO   |     | NULL    |       |
| location        | varchar(255)  | NO   |     | NULL    |       |
| description     | varchar(255)  | NO   |     | NULL    |       |
| image           | varchar(255)  | NO   |     | NULL    |       |
| rating          | decimal(10,9) | NO   |     | NULL    |       |
| reviews         | int(11)       | NO   |     | NULL    |       |
| category        | varchar(255)  | NO   |     | NULL    |       |
| history_content | text          | YES  |     | NULL    |       |
+-----------------+---------------+------+-----+---------+-------+

and a table for handling favorites, consisting of a few columns that are:
+-----------------+-----------+------+-----+---------------------+-------+
| Field           | Type      | Null | Key | Default             | Extra |
+-----------------+-----------+------+-----+---------------------+-------+
| iduser          | int(11)   | NO   | PRI | NULL                |       |
| iddestination   | int(11)   | NO   | PRI | NULL                |       |
| timefavoritedat | timestamp | NO   |     | current_timestamp() |       |
+-----------------+-----------+------+-----+---------------------+-------+

lastly, a table for reviews feature, consisting of a few columns that are:
MariaDB [eaftrip]> desc reviews;
+---------------+---------------+------+-----+---------+----------------+
| Field         | Type          | Null | Key | Default | Extra          |
+---------------+---------------+------+-----+---------+----------------+
| id            | int(11)       | NO   | PRI | NULL    | auto_increment |
| comment       | varchar(1000) | YES  |     | NULL    |                |
| created_at    | datetime(6)   | YES  |     | NULL    |                |
| iddestination | int(11)       | NO   |     | NULL    |                |
| rating        | int(11)       | NO   |     | NULL    |                |
| iduser        | int(11)       | NO   |     | NULL    |                |
+---------------+---------------+------+-----+---------+----------------+

# Instructions

clone the repository
go to XAMPP Control Panel (Download if you don't have it)
There will be an Apache and Mysql Module, click start on both of them.
open cmd and change the directory to C:/xampp/mysql/bin using this code : "cd C:/xampp/mysql/bin"
then to use mysql, enter this command : "mysql -u root"
then setup your database like the above with this code (just copy and paste it) :
'''CREATE DATABASE eaftrip;
USE eaftrip;
CREATE TABLE users (
    iduser INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (iduser)
);
CREATE TABLE destinations (
    iddestination INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    rating DECIMAL(10,9) NOT NULL,
    reviews INT(11) NOT NULL,
    category VARCHAR(255) NOT NULL,
    history_content TEXT,
    PRIMARY KEY (iddestination)
);
CREATE TABLE favorites (
    iduser INT(11) NOT NULL,
    iddestination INT(11) NOT NULL,
    timefavoritedat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (iduser, iddestination), -- Composite primary key
    FOREIGN KEY (iduser) REFERENCES users(iduser) ON DELETE CASCADE,
    FOREIGN KEY (iddestination) REFERENCES destinations(iddestination) ON DELETE CASCADE
);
CREATE TABLE reviews (
    id INT(11) NOT NULL AUTO_INCREMENT,
    created_at DATETIME(6),
    iddestination INT(11) NOT NULL,
    rating INT(11) NOT NULL,
    iduser INT(11) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (iddestination) REFERENCES destinations(iddestination) ON DELETE CASCADE,
    FOREIGN KEY (iduser) REFERENCES users(iduser) ON DELETE CASCADE
);'''

now the user can start inputting some data to the database, note that the history_content column of the destinations table is filled with innerHTML starting from <h2> then followed up with <p>s and other <h2> to keep the styling consistent.

run the java code, then go to you browser to look up "localhost:8080"
