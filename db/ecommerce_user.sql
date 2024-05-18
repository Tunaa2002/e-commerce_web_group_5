-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(78) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` int NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-12 10:59:55

insert into user (name, username, password, phone, email, role) values ('Rosemary Pomroy', 'rpomroy0', 'yR8)!x.k', '438-786-8451', 'rpomroy0@psu.edu', '0');
insert into user (name, username, password, phone, email, role) values ('Daphne Hammerberg', 'dhammerberg1', 'pZ4`+Onn_HeJkb''', '931-690-1526', 'dhammerberg1@ft.com', '0');
insert into user (name, username, password, phone, email, role) values ('Isabel Keel', 'ikeel2', 'pY7}B</1)x}1', '721-369-6307', 'ikeel2@ted.com', '0');
insert into user (name, username, password, phone, email, role) values ('Hunter Honack', 'hhonack3', 'wM5%A3*a\=', '141-395-4386', 'hhonack3@dyndns.org', '0');
insert into user (name, username, password, phone, email, role) values ('Harland Soughton', 'hsoughton4', 'eW0}b<jJ0h\.', '638-716-7457', 'hsoughton4@pinterest.com', '0');
insert into user (name, username, password, phone, email, role) values ('Ulrich Donovin', 'udonovin5', 'hN0+rzwOe|vu6K"', '995-371-4757', 'udonovin5@zdnet.com', '0');
insert into user (name, username, password, phone, email, role) values ('Blanch Kohrt', 'bkohrt6', 'dS1.=`,ni?', '264-585-6733', 'bkohrt6@so-net.ne.jp', '0');
insert into user (name, username, password, phone, email, role) values ('Harmonie Benoiton', 'hbenoiton7', 'pO7)=sFk{}', '416-478-7817', 'hbenoiton7@ed.gov', '0');
insert into user (name, username, password, phone, email, role) values ('Marcela Sultana', 'msultana8', 'nG2#g_LI', '871-214-9172', 'msultana8@flickr.com', '0');
insert into user (name, username, password, phone, email, role) values ('Maiga Gianiello', 'mgianiello9', 'rU8!mw#$0=}.', '529-285-6263', 'mgianiello9@shareasale.com', '0');
insert into user (name, username, password, phone, email, role) values ('Georgia Welling', 'gwellinga', 'aJ3+mq=m', '127-250-4353', 'gwellinga@yellowpages.com', '0');
insert into user (name, username, password, phone, email, role) values ('Jenda Prose', 'jproseb', 'bC4`b''xzf2wv5', '946-184-9831', 'jproseb@t-online.de', '0');
insert into user (name, username, password, phone, email, role) values ('Bart Rapo', 'brapoc', 'jV8{&g\Q}!Z~J', '654-492-7074', 'brapoc@kickstarter.com', '0');
insert into user (name, username, password, phone, email, role) values ('Monah Guiness', 'mguinessd', 'jZ5{?~YT|"="mPe', '780-361-6227', 'mguinessd@mtv.com', '0');
insert into user (name, username, password, phone, email, role) values ('Allin Hands', 'ahandse', 'hN5&*+.RRm$Y3?', '193-769-6192', 'ahandse@yahoo.co.jp', '0');
insert into user (name, username, password, phone, email, role) values ('Brennan Purton', 'bpurtonf', 'cE0&~i@Qx@b', '586-528-5734', 'bpurtonf@economist.com', '0');
insert into user (name, username, password, phone, email, role) values ('Griffith Hebble', 'ghebbleg', 'sX6_e*jJ', '953-610-5111', 'ghebbleg@cbc.ca', '0');
insert into user (name, username, password, phone, email, role) values ('Hayward Berriball', 'hberriballh', 'pY8{ZKC13', '201-249-0544', 'hberriballh@vistaprint.com', '0');
insert into user (name, username, password, phone, email, role) values ('Samaria Elham', 'selhami', 'cO9%?b$*Aj'''')%W', '939-583-6456', 'selhami@google.com', '0');
insert into user (name, username, password, phone, email, role) values ('Alessandro Feaviour', 'afeaviourj', 'aD3>oM2)ghEQC', '547-120-7191', 'afeaviourj@cisco.com', '0');
insert into user (name, username, password, phone, email, role) values ('Denys Flageul', 'dflageulk', 'aN1`OdaL%A1R+''', '517-835-5316', 'dflageulk@webmd.com', '0');
insert into user (name, username, password, phone, email, role) values ('Xenos Manuelli', 'xmanuellil', 'kX1%Xd$vwg', '400-906-9071', 'xmanuellil@4shared.com', '0');
insert into user (name, username, password, phone, email, role) values ('Homere Hould', 'hhouldm', 'dF8@mV3.q/<', '957-701-5004', 'hhouldm@addthis.com', '0');
insert into user (name, username, password, phone, email, role) values ('Alvinia Poppleton', 'apoppletonn', 'dS5\w}L''EG+(=)', '662-643-8697', 'apoppletonn@meetup.com', '0');
insert into user (name, username, password, phone, email, role) values ('Rafaello Gammidge', 'rgammidgeo', 'jE4~p+KE!', '769-532-6774', 'rgammidgeo@w3.org', '0');
insert into user (name, username, password, phone, email, role) values ('Peyter Eicke', 'peickep', 'fW6/4(ZrhT"Pli7u', '812-727-5104', 'peickep@gizmodo.com', '0');
insert into user (name, username, password, phone, email, role) values ('Carolee Imrie', 'cimrieq', 'sU3>`U''16', '650-197-3937', 'cimrieq@mail.ru', '0');
insert into user (name, username, password, phone, email, role) values ('Sarge Barensen', 'sbarensenr', 'yL8}s5<WZ7PLS', '313-274-1158', 'sbarensenr@gravatar.com', '0');
insert into user (name, username, password, phone, email, role) values ('Latia Kingsnoad', 'lkingsnoads', 'bG7''`wT\ls0E1', '450-416-5231', 'lkingsnoads@bloglines.com', '0');
insert into user (name, username, password, phone, email, role) values ('Andie Kubista', 'akubistat', 'oO6)2<dhp@|48>', '364-914-7606', 'akubistat@behance.net', '0');
insert into user (name, username, password, phone, email, role) values ('Etheline Nials', 'enialsu', 'yF7&n''WA', '451-928-1066', 'enialsu@yelp.com', '0');
insert into user (name, username, password, phone, email, role) values ('Dion Yarham', 'dyarhamv', 'uE9@2#!5@zL4L"', '412-926-7787', 'dyarhamv@sakura.ne.jp', '0');
insert into user (name, username, password, phone, email, role) values ('Alexandros Hamper', 'ahamperw', 'uR2.Tqh>', '958-795-2501', 'ahamperw@economist.com', '0');
insert into user (name, username, password, phone, email, role) values ('Minnie Pettersen', 'mpettersenx', 'cB1>)lCE', '106-448-2573', 'mpettersenx@weibo.com', '0');
insert into user (name, username, password, phone, email, role) values ('Laughton Heinsh', 'lheinshy', 'nL5.UW0>6', '706-150-1742', 'lheinshy@mediafire.com', '0');
insert into user (name, username, password, phone, email, role) values ('Claiborn Josilowski', 'cjosilowskiz', 'fL7!S1sXTA9{i01O', '396-445-6230', 'cjosilowskiz@dedecms.com', '0');
insert into user (name, username, password, phone, email, role) values ('Terence Olivelli', 'tolivelli10', 'qE0%X+5Q2T}S.!aR', '591-125-1450', 'tolivelli10@amazon.co.jp', '0');
insert into user (name, username, password, phone, email, role) values ('Cristine Vann', 'cvann11', 'gP0(lg,yS3`#Q\V', '737-576-7614', 'cvann11@cpanel.net', '0');
insert into user (name, username, password, phone, email, role) values ('Roxie Oboy', 'roboy12', 'qJ7_WkMBXhTVl>?', '807-941-7115', 'roboy12@ca.gov', '0');
insert into user (name, username, password, phone, email, role) values ('Merrily Raffels', 'mraffels13', 'bE1>sA?@3`BR', '450-866-0356', 'mraffels13@icq.com', '0');
insert into user (name, username, password, phone, email, role) values ('Arlin Moatt', 'amoatt14', 'uH4\CLYm', '814-370-1846', 'amoatt14@surveymonkey.com', '0');
insert into user (name, username, password, phone, email, role) values ('Jaime Gorusso', 'jgorusso15', 'iZ4<NVT#"', '575-622-0509', 'jgorusso15@bloglovin.com', '0');
insert into user (name, username, password, phone, email, role) values ('Jeromy Mughal', 'jmughal16', 'wH6(i_la(L', '127-496-5300', 'jmughal16@bbc.co.uk', '0');
insert into user (name, username, password, phone, email, role) values ('Consalve Gatheridge', 'cgatheridge17', 'zR5\jk"ofPh(I', '235-546-3155', 'cgatheridge17@sphinn.com', '0');
insert into user (name, username, password, phone, email, role) values ('Crysta Guyan', 'cguyan18', 'fW5_1z?~lz_(t', '905-494-3331', 'cguyan18@admin.ch', '0');
insert into user (name, username, password, phone, email, role) values ('Isador Wiggington', 'iwiggington19', 'vA8"YW3Z@V9', '584-158-5015', 'iwiggington19@thetimes.co.uk', '0');
insert into user (name, username, password, phone, email, role) values ('Lynea Schooling', 'lschooling1a', 'aC1(@6<L!ID+"''', '336-254-0358', 'lschooling1a@go.com', '0');
insert into user (name, username, password, phone, email, role) values ('Joy Dick', 'jdick1b', 'fH6+ZZ}@zh', '226-676-8810', 'jdick1b@blog.com', '0');
insert into user (name, username, password, phone, email, role) values ('Elsy Quinnelly', 'equinnelly1c', 'yX0}|,@!', '587-245-7334', 'equinnelly1c@fda.gov', '0');
insert into user (name, username, password, phone, email, role) values ('Christiana D''Angeli', 'cdangeli1d', 'xI3}/''hOfOut*+hd', '773-764-5540', 'cdangeli1d@unblog.fr', '0');
insert into user (name, username, password, phone, email, role) values ('Nevil Burchett', 'nburchett1e', 'iL5/huR3', '692-780-3071', 'nburchett1e@cdc.gov', '0');
insert into user (name, username, password, phone, email, role) values ('Rhys McConville', 'rmcconville1f', 'iQ5$&L9DQ%wn+7B', '554-139-2859', 'rmcconville1f@devhub.com', '0');
insert into user (name, username, password, phone, email, role) values ('Coretta Menzies', 'cmenzies1g', 'fV1.=u{WQO?', '880-574-8092', 'cmenzies1g@shareasale.com', '0');
insert into user (name, username, password, phone, email, role) values ('Wash Weathers', 'wweathers1h', 'hP9&ROB%ctK', '404-458-8266', 'wweathers1h@360.cn', '0');
insert into user (name, username, password, phone, email, role) values ('Silvano Keeping', 'skeeping1i', 'qD5$B0,B%Ej~''9', '272-836-5027', 'skeeping1i@e-recht24.de', '0');
insert into user (name, username, password, phone, email, role) values ('Adah Penney', 'apenney1j', 'iR7,NO/!N=/E', '894-747-8881', 'apenney1j@1688.com', '0');
insert into user (name, username, password, phone, email, role) values ('Jase Carlaw', 'jcarlaw1k', 'rC5?6/52uU', '850-781-0365', 'jcarlaw1k@ehow.com', '0');
insert into user (name, username, password, phone, email, role) values ('Joaquin Souza', 'jsouza1l', 'gD7{UqlgTvEi', '591-130-6728', 'jsouza1l@dell.com', '0');
insert into user (name, username, password, phone, email, role) values ('Enrique Loxton', 'eloxton1m', 'qE1,0TT9N(8?$', '538-133-7610', 'eloxton1m@dmoz.org', '0');
insert into user (name, username, password, phone, email, role) values ('Bernard Hallut', 'bhallut28', 'sG0*KBTn#}g', '177-611-8739', 'bhallut28@myspace.com', '0');
insert into user (name, username, password, phone, email, role) values ('Cornelius Rogister', 'crogister29', 'eC6#O\YcPG8i', '615-599-3851', 'crogister29@utexas.edu', '0');
insert into user (name, username, password, phone, email, role) values ('Quintin Bootherstone', 'qbootherstone2a', 'lR3''>uJt%Vo', '852-538-7102', 'qbootherstone2a@ameblo.jp', '0');
insert into user (name, username, password, phone, email, role) values ('Henrik Whight', 'hwhight2b', 'lA5_yp0!r0i,', '981-440-2733', 'hwhight2b@sphinn.com', '0');
insert into user (name, username, password, phone, email, role) values ('Francine Toderbrugge', 'ftoderbrugge2c', 'jC4~/6''I0VDt', '953-640-4729', 'ftoderbrugge2c@hao123.com', '0');
insert into user (name, username, password, phone, email, role) values ('Benny Lappin', 'blappin2d', 'lP5@)a+5f', '689-252-7814', 'blappin2d@cpanel.net', '0');
insert into user (name, username, password, phone, email, role) values ('Cobby Lane', 'clane2e', 'eL2#_966', '644-620-4561', 'clane2e@t.co', '0');
insert into user (name, username, password, phone, email, role) values ('Kata Mitten', 'kmitten2f', 'fD7/&ZAXx~', '179-275-6086', 'kmitten2f@boston.com', '0');
insert into user (name, username, password, phone, email, role) values ('Cristian Feltham', 'cfeltham2g', 'wA5~SB,#A2%)O', '193-362-7354', 'cfeltham2g@people.com.cn', '0');
insert into user (name, username, password, phone, email, role) values ('Osgood Ledekker', 'oledekker2h', 'dQ6+G!g<wch#If0', '328-654-5424', 'oledekker2h@newyorker.com', '0');
insert into user (name, username, password, phone, email, role) values ('Colver Fernie', 'cfernie2i', 'pO0<+/77tHG<w&x', '468-889-1484', 'cfernie2i@scribd.com', '0');
insert into user (name, username, password, phone, email, role) values ('Cao Duy Hai', 'haicd', 'Admin@123','035-663-9522', 'caoduyhai008@gmail.com', '1');
insert into user (name, username, password, phone, email, role) values ('Cao Quang Thuc', 'thuccq', 'Admin@123', '123-456-7890', 'caoquangthuc@gmail.com', '1');
insert into user (name, username, password, phone, email, role) values ('Nguyen Thi Uoc','uocnt', 'Admin@123', '123-456-7890','nguyenthiuoc@gmail.com', '1');
insert into user (name, username, password, phone, email, role) values ('Dam Than Tuan Anh', 'tunaa', 'Admin@123', '123-456-7890', 'damthantuananh@gmail.com', '1');
