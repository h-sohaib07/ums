-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: ums
-- ------------------------------------------------------
-- Server version	8.0.26

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
  `Id` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(45) DEFAULT NULL,
  `LastName` varchar(45) DEFAULT NULL,
  `Birthday` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'John','Don','1999-02-07 00:00:00'),(4,'Steven','Hawks','2005-02-17 00:00:00'),(5,'Raffay','Rafique','1999-11-17 00:00:00'),(6,'Peter','Parker','2002-05-01 00:00:00'),(7,'John','Dawson','2016-02-03 00:00:00'),(12,'Zariyat','Umair','1995-02-15 00:00:00'),(14,'Johnny','Castro','2016-02-05 00:00:00'),(15,'Keeve','Lush','2006-02-04 00:00:00'),(16,'Tom','Cruise','1990-10-02 00:00:00'),(17,'Johnny','Dep','1978-10-01 00:00:00'),(18,'Peter','Parker','2002-05-01 00:00:00'),(19,'Jesse','Doe','1992-01-20 00:00:00'),(20,'Jane','Doe','1992-01-20 00:00:00'),(21,'Tim','Doe','1992-01-20 00:00:00'),(22,'Simon','Doe','1992-01-20 00:00:00'),(23,'Marco','Doe','1992-01-20 00:00:00'),(24,'Phillips','Doe','1992-01-20 00:00:00'),(25,'Danish','Sid','1992-01-20 00:00:00'),(27,'Farah','Jacob','1995-07-21 00:00:00'),(29,'Ali','Nawaz','1972-01-20 00:00:00'),(30,'Ali','Nawaz','1972-01-20 00:00:00'),(31,'Sarah','Begum','1982-01-20 00:00:00'),(32,'Nympha','Simon','1982-01-20 00:00:00');
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

-- Dump completed on 2021-10-03 15:37:06
