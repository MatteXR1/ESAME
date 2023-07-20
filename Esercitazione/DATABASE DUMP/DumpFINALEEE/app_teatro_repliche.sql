-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: app_teatro
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `repliche`
--

DROP TABLE IF EXISTS `repliche`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repliche` (
  `cod_replica` varchar(255) NOT NULL,
  `cod_spettacolo` varchar(255) DEFAULT NULL,
  `data_replica` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cod_replica`),
  KEY `repliche_ibfk_1_idx` (`cod_spettacolo`),
  CONSTRAINT `repliche_ibfk_1` FOREIGN KEY (`cod_spettacolo`) REFERENCES `spettacoli` (`cod_spettacolo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repliche`
--

LOCK TABLES `repliche` WRITE;
/*!40000 ALTER TABLE `repliche` DISABLE KEYS */;
INSERT INTO `repliche` VALUES ('R001','S001','2005-10-18'),('R002','S001','2006-10-18'),('R003','S001','2007-10-18'),('R004','S001','2008-10-18'),('R005','S001','2009-10-18'),('R006','S002','2012-11-18'),('R007','S002','2013-11-18'),('R008','S002','2014-11-18'),('R009','S002','2015-11-18'),('R010','S002','2016-11-18'),('R011','S003','2005-01-19'),('R012','S003','2006-01-19'),('R013','S003','2007-01-19'),('R014','S003','2008-01-19'),('R015','S003','2009-01-19'),('R016','S004','2012-01-19'),('R017','S004','2013-01-19'),('R018','S004','2014-01-19'),('R019','S004','2015-01-19'),('R020','S004','2016-01-19'),('R021','S005','2005-11-18'),('R022','S005','2006-11-18'),('R023','S005','2007-11-18'),('R024','S005','2018-11-18'),('R025','S005','2019-11-18'),('R026','S006','2012-12-18'),('R027','S006','2013-12-18'),('R028','S006','2014-12-18'),('R029','S006','2015-12-18'),('R030','S006','2016-12-18');
/*!40000 ALTER TABLE `repliche` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-20 11:22:27
