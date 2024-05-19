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
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
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

INSERT INTO author (name)
VALUES
('José Mauro de Vasconcelos'),
('Mộc Trầm'),
('Paulo Coelho'),
('Madeline Miller'),
('Đặng Thùy Trâm'),
('Kuroyanagi Tetsuko'),
('Frank Herbert'),
('Ocean Vuong'),
('Yang Phan'),
('James Clear'),
('Thanh Hương'),
('M. Scott Peck'),
('Nguyễn Anh Dũng'),
('Phan Văn Trường'),
('Vãn Tình'),
('Minh Niệm'),
('Lương Anh'),
('Val Biro'),
('Thiên Tâm'),
('Nguyễn Hồng Chiến'),
('David Wallliams'),
('Tony Ross'),
('Đoàn Lập Hân'),
('Đoàn Vị Thượng'),
('Mai Quyên'),
('Nguyễn Thánh Ngã'),
('Mộ Vân Chí'),
('Lý Thế Cường'),
('Charles Sophy'),
('Cao Thanh'),
('Hà Minh Hồng'),
('Bruce Bryans'),
('Triệu Nhuận'),
('Đặng Hồng Quân'),
('Karen Forshaw'),
('Lê Rin'),
('WOW'),
('Cẩm Tuyết'),
('Hannah Crum'),
('Xuân Phương'),
('Tường Vân'),
('Nguyễn Doãn Cẩm Vân'),
('Phan Anh'),
('Sarah Kieffer'),
('Uyển Nhi'),
('Huỳnh Thị Bảo Hòa'),
('Candice Millard'),
('Ian Condry'),
('Trương Phúc Nguyên'),
('Nguyễn Phương'),
('Nhiều Tác Giả'),
('Nir Avieli'),
('Sơn Nam'),
('Lee Ha-Young'),
('Dương Đình Bá'),
('Kaixin'),
('Bino Chém Tiếng Anh'),
('Kenvin Kang'),
('Mai Lan Hương'),
('The Windy'),
('Đỗ Nhung'),
('Hoàng Ngân'),
('Trang Anh'),
('Nguyễn Hoàng Vĩnh Lộc'),
('The Zhishi');
