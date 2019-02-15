/* users password for bye username = bye*/
INSERT INTO `felicitydb`.`users`
(`firstname`,
`lastname`,
`username`,
`email`,
`password`,
`lastlogin`,
`status`,
`preferredlocation`,
`preferredtopic`,
`preferredday`,
`preferredtime`,
`createdAt`,
`updatedAt`)
VALUES

('bye', 'world', 'bye', 'bye@gmail.com', '$2a$08$S57hDwpcrDQYOs1xpXEOde2hDhlFJhzDbpiAaemZ8CzZLghOoA8IW', NULL, 'active', 'South Seattle', 'Front End Technologies', 'Monday', 'Morning (8am - 12pm)', '2019-02-14 12:28:08', '2019-02-14 23:49:35');


/* groups */
INSERT INTO `felicitydb`.`groups`(`groupname`,`grouptopic`,`grouplocation`,`status`,`createdAt`,`updatedAt`) values('Javascript for beginners','Javascript','Bellevue','active',NOW(),NOW());
INSERT INTO `felicitydb`.`groups`(`groupname`,`grouptopic`,`grouplocation`,`status`,`createdAt`,`updatedAt`) values('FE Frameworks','Front End Technologies','Bellevue','active',NOW(),NOW());
INSERT INTO `felicitydb`.`groups`(`groupname`,`grouptopic`,`grouplocation`,`status`,`createdAt`,`updatedAt`) values('FE Coders','Front End Technologies','South Seattle','active',NOW(),NOW());
INSERT INTO `felicitydb`.`groups`(`groupname`,`grouptopic`,`grouplocation`,`status`,`createdAt`,`updatedAt`) values('BE Server Side Coding','Back End Technologies','North Seattle','active',NOW(),NOW());
INSERT INTO `felicitydb`.`groups`(`groupname`,`grouptopic`,`grouplocation`,`status`,`createdAt`,`updatedAt`) values('Nodejs & Expressjs','Back End Technologies','Bellevue','active',NOW(),NOW());
INSERT INTO `felicitydb`.`groups`(`groupname`,`grouptopic`,`grouplocation`,`status`,`createdAt`,`updatedAt`) values('Algos','DataStructure and Algorithms','Bellevue','active',NOW(),NOW());

/* somedefault groups user has joined*/
INSERT INTO `felicitydb`.`groupusers`
(`createdAt`,
`updatedAt`,
`groupId`,
`userId`)
VALUES
(NOW(),NOW(),1,1);

INSERT INTO `felicitydb`.`groupusers`
(`createdAt`,
`updatedAt`,
`groupId`,
`userId`)
VALUES
(NOW(),NOW(),2,1);