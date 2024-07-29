/*!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.4.2-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: ppc
-- ------------------------------------------------------
-- Server version	11.4.2-MariaDB-4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `joueurs`
--

DROP TABLE IF EXISTS `joueurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `joueurs` (
  `joueurId` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `motpasse` varchar(255) NOT NULL,
  PRIMARY KEY (`joueurId`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `joueurs`
--

LOCK TABLES `joueurs` WRITE;
/*!40000 ALTER TABLE `joueurs` DISABLE KEYS */;
INSERT INTO `joueurs` VALUES
(1,'lamothe','maxime','ca5bcec12f716f44d9745d349cc80422f0d14cbab09329caf533bef7c2d952eb'),
(2,'latterrade','romain','d9065d6da185ec28758619fc14b755f740043e1060d342aacef26f459fae8d9d'),
(3,'boniface','ugo','e82bb7ef1e91f0e416a2a2601f1d1acb85abf95cb817150969323fee814afea0'),
(4,'falatea','sipili','1f866d986ecb0367af29aaeab9c870a063f50043ac05ed4b1a8fad9d6fc895cd'),
(5,'perchaud','matis','d0912d12c303501a3270af350d97977628c9b3c698c050a4ec17c1bba471497e'),
(6,'poirot','jefferson','6a26e2b7a5361812d59abe94ccb471f9f3a8877c730f10a8e8d49df28d27a43e'),
(7,'sadie','carlü','37700ceb09a92d98b757374f55a364f5bd2277c14e8c085a8c13b3553b8e30ca'),
(8,'tameifuna','ben','fefb345272e90c0daf246ef35c505477a52a07869be25cdb7ca14f8f4c7eacc5'),
(9,'cazeaux','cyril','cac45e02fb1575b4b88a562fccf020c3b76acf8363d61ea749877259ff9983d4'),
(10,'coleman','adam','985a12e0f618c3f663290b9ed599b7a1f505a22e821d06c2f235f47cd781d31c'),
(11,'gray','jonny','c724d76d62bd97b085ae7f094c031ca79156c10190521d152f627e5a638925e1'),
(12,'petti','guido','47c98e0d833f9641f08804e95a26c1228b75d60af6309b984dc149057b3342ff'),
(13,'ricard','alexandre','d07495b057ce3af5702b61b9d99e217d00ed7b014e7c07e03059c2a5b34fe81b'),
(14,'bochaton','pierre','76d9dc41e5176e67a90e51ba200faadf7e280892585d6dd1e1b1a4ed51a5ad99'),
(15,'diaby','mahamadou','284711f2f224a1ec0861148d9b4507f214eb03d9d6e800c68af4f0259cc76238'),
(16,'gazzotti','marko','f249859b102d5fbe4972c4823e6c3d2a41c7f760bd6619298b87b9af3727c957'),
(17,'samu','pete','5f409478db93440625c8e0d7629a33fb3efee1bdbdddbfc7c1d15992a435b846'),
(18,'swinton','lachlan','8a6d3d77fe82232d61c458e42caa600bfd19da4f71c99324aa8bb863352e1d1a'),
(19,'tatafu','tevita','04b12bb10f09a9bd8b10c9ae53c24c6501e7ecfc6f1381667604360a283adf1e'),
(20,'vergnes-taillefer','bastien','f814c28fd91b161c22d221921abae605b8698d96ffb00d6fae11e5a008d47e19'),
(21,'abadie','paul','58f9704940f8a35e706aafd1c20b07431dedae5f84b302c7557a3d62ab9e916e'),
(22,'lesgourgues','yann','ff880c39932d4335bca045fe133343a310aec865f1e984d7d45f516c70f5a531'),
(23,'lucu','maxime','79b0ec8d9735b81efba32a71035772d9946932d4dcc35d249ad62f87df4da14a'),
(24,'carbery','joey','dad6c2fda0e56c2ff4fb9ebb3331465aee7b938e4a59baec95d4995b6cae5ecc'),
(25,'garcia','mateo','98d169d524999bbf6a1c2ea568af0751fc79c38d459220c258725ba43d940e4d'),
(26,'jalibert','matthieu','18ae1dcb17d0429906070a9325aa3c5595c2fe1034fb29d7ac43166c7a1406aa'),
(27,'depoortère','nicolas','dfba3a4d08b1beae5fb0a2c93e840846559ea51839752c040e441e5868527a31'),
(28,'janse van rensburg','rohan','6be3b469c0e81d9a7d25b872ecfccba79759f4412caa4f5f0a529c963eea3fe9'),
(29,'moefana','yoram','ae71f5652b6a80c0439f34d274681cd421e7428599e517792d6a547d09cffd2a'),
(30,'tapuai','ben','04e33d70e2d75d1e6772bff49108b0315c99c2b7eac8078848ec2205b3be6408'),
(31,'uberti','pablo','2302af443f62375069b7bbf4dbd94fecffbcb0daaccd7e739c27a6af7bfc3425'),
(32,'vili','tani','e7aa66867d75b2670f38bec2d9bbc8a7de7dad0657bc447964b28e009f021572'),
(33,'bielle-biarrey','louis','96719485ec26278e3fe697cff019ed5f0b30bbf847994c397774f011c8a2e940'),
(34,'ducuing','nans','e49dc475e56b8c120332e812906d65d4ea85c5f343d6901cc3a0199d38813c49'),
(35,'penaud','damian','fdffb67e137965a4d3340aeff3c3c0b50a39276c18d3d6ee56bab9405d76a25c'),
(36,'reybier','enzo','1433d19a29cd69c697aab502fcdded4d9720f690bc1435453ee52e7a71cab84d'),
(37,'buros','romain','2dff7414311484f42f507dc59fc5a5d5e6d619fd112f7158b6332815ce92d0e7'),
(38,'balt','hazar','3c79dee2e3aebb204f3757b640440f02900023aaa02b363725e496df0ed9b009');
/*!40000 ALTER TABLE `joueurs` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`claude`@`localhost`*/ /*!50003 TRIGGER ajout_joueur
AFTER INSERT ON joueurs
FOR EACH row
BEGIN
INSERT INTO scores (joueur, points) VALUES (NEW.joueurId, 0);
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `scores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `joueur` int(11) DEFAULT NULL,
  `points` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `joueur` (`joueur`),
  CONSTRAINT `scores_ibfk_1` FOREIGN KEY (`joueur`) REFERENCES `joueurs` (`joueurId`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scores`
--

LOCK TABLES `scores` WRITE;
/*!40000 ALTER TABLE `scores` DISABLE KEYS */;
INSERT INTO `scores` VALUES
(1,1,1),
(2,2,-8),
(3,3,-4),
(4,4,0),
(5,5,10),
(6,6,8),
(7,7,1),
(8,8,6),
(9,9,9),
(10,10,3),
(11,11,-8),
(12,12,-8),
(13,13,-9),
(14,14,9),
(15,15,9),
(16,16,-10),
(17,17,6),
(18,18,-8),
(19,19,4),
(20,20,9),
(21,21,-5),
(22,22,-3),
(23,23,-6),
(24,24,5),
(25,25,4),
(26,26,2),
(27,27,9),
(28,28,-8),
(29,29,-6),
(30,30,-7),
(31,31,-2),
(32,32,-1),
(33,33,10),
(34,34,8),
(35,35,-5),
(36,36,-3),
(37,37,9),
(38,38,23);
/*!40000 ALTER TABLE `scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ppc'
--
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP FUNCTION IF EXISTS `chifoumiJson` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
DELIMITER ;;
CREATE DEFINER=`claude`@`localhost` FUNCTION `chifoumiJson`(IN joueur INT, IN ordinateur INT) RETURNS longtext CHARSET utf8mb4 COLLATE utf8mb4_bin
    DETERMINISTIC
BEGIN

DECLARE retour JSON;
DECLARE retour1 TINYINT(1) DEFAULT 0;
DECLARE retour2 TINYINT(1) DEFAULT 0;

IF joueur = ordinateur THEN
SET retour1 = 1;
SET retour2 = 1;

ELSEIF joueur = 0 AND ordinateur = 1 THEN
SET retour1 = 0;
SET retour2 = 1;

ELSEIF joueur = 1 AND ordinateur = 0 THEN
SET retour1 = 1;
SET retour2 = 0;

ELSEIF joueur = 0 AND ordinateur = 2 THEN
SET retour1 = 1;
SET retour2 = 0;

ELSEIF joueur = 2 AND ordinateur = 0 THEN
SET retour1 = 0;
SET retour2 = 1;

ELSEIF joueur = 1 AND ordinateur = 2 THEN
SET retour1 = 0;
SET retour2 = 1;

ELSEIF joueur = 2 AND ordinateur = 1 THEN
SET retour1 = 1;
SET retour2 = 0;

ELSE
SET retour1 = 1;
SET retour2 = 2;

END IF;

SET retour = (SELECT JSON_ARRAYAGG(JSON_OBJECT('joueur',retour1,'ordinateur',retour2)));

RETURN retour;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP PROCEDURE IF EXISTS `authentification_joueur` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
DELIMITER ;;
CREATE DEFINER=`claude`@`localhost` PROCEDURE `authentification_joueur`(IN _nom varchar(255), IN _prenom varchar(255), IN _motpasse varchar(255))
BEGIN
DECLARE retour TINYINT(1) DEFAULT 0;
DECLARE nombre INT;
DECLARE hash VARCHAR(255);

SELECT motpasse INTO hash FROM joueurs WHERE nom = _nom AND prenom = _prenom LIMIT 1;

IF hash = SHA2(_motpasse, 256) THEN
SET retour = 1;
END IF;

SELECT retour;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP PROCEDURE IF EXISTS `chifoumi` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
DELIMITER ;;
CREATE DEFINER=`claude`@`localhost` PROCEDURE `chifoumi`(IN joueur INT, IN ordinateur INT)
BEGIN

DECLARE retour1 TINYINT(1) DEFAULT 0;
DECLARE retour2 TINYINT(1) DEFAULT 0;

IF joueur = ordinateur THEN
SET retour1 = 1;
SET retour2 = 1;

ELSEIF joueur = 0 AND ordinateur = 1 THEN
SET retour1 = 0;
SET retour2 = 1;

ELSEIF joueur = 1 AND ordinateur = 0 THEN
SET retour1 = 1;
SET retour2 = 0;

ELSEIF joueur = 0 AND ordinateur = 2 THEN
SET retour1 = 1;
SET retour2 = 0;

ELSEIF joueur = 2 AND ordinateur = 0 THEN
SET retour1 = 0;
SET retour2 = 1;

ELSEIF joueur = 1 AND ordinateur = 2 THEN
SET retour1 = 0;
SET retour2 = 1;

ELSEIF joueur = 2 AND ordinateur = 1 THEN
SET retour1 = 1;
SET retour2 = 0;

ELSE
SET retour1 = 1;
SET retour2 = 1;

END IF;

select retour1, retour2;    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP PROCEDURE IF EXISTS `classement` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
DELIMITER ;;
CREATE DEFINER=`claude`@`localhost` PROCEDURE `classement`(IN nombre INT)
BEGIN

IF nombre > 0 THEN
SELECT rank() over (order by points desc)  as 'classement', s.points as 'score', j.nom as 'nom', j.prenom as 'prenom' from scores s inner join joueurs j on s.joueur = j.joueurId order by s.points desc, j.nom asc limit nombre;
ELSEIF nombre < 1 THEN
SELECT RANK() OVER (ORDER BY points DESC)  AS 'classement', s.points AS 'score', j.nom AS 'nom', j.prenom AS 'prenom' FROM scores s INNER JOIN joueurs j ON s.joueur = j.joueurId ORDER BY s.points DESC, j.nom ASC LIMIT 10;
END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP PROCEDURE IF EXISTS `liste_joueurs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
DELIMITER ;;
CREATE DEFINER=`claude`@`localhost` PROCEDURE `liste_joueurs`()
BEGIN
SELECT joueurId, nom, prenom FROM joueurs ORDER BY nom DESC;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP PROCEDURE IF EXISTS `mise_a_jour_points` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
DELIMITER ;;
CREATE DEFINER=`claude`@`localhost` PROCEDURE `mise_a_jour_points`(_joueur INT, _score INT)
BEGIN
DECLARE retour TINYINT(1) DEFAULT 0;
DECLARE nombre INT;

UPDATE scores SET points = _score WHERE joueur = _joueur;
SELECT COUNT(*) INTO nombre FROM scores WHERE joueur = _joueur AND points = _score;

IF (nombre = 1) THEN SET retour = 1;
END IF;

SELECT retour;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
/*!50003 DROP PROCEDURE IF EXISTS `nouveau_joueur` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
DELIMITER ;;
CREATE DEFINER=`claude`@`localhost` PROCEDURE `nouveau_joueur`(IN _nom varchar(255), IN _prenom varchar(255), IN _motpasse varchar(255))
BEGIN
DECLARE retour TINYINT(1) DEFAULT 0;
DECLARE nombre INT;
INSERT INTO joueurs (nom, prenom, motpasse) values (_nom, _prenom, SHA2(_motpasse, 256));
SET retour = 1;

SELECT retour;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-07-29  8:34:27
