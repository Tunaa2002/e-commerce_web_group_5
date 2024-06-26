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
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `book_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author_id` int DEFAULT NULL,
  `producer_id` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `price` varchar(65) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`book_id`),
  KEY `author_id` (`author_id`),
  KEY `producer_id` (`producer_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`author_id`),
  CONSTRAINT `book_ibfk_2` FOREIGN KEY (`producer_id`) REFERENCES `producer` (`producer_id`),
  CONSTRAINT `book_ibfk_3` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
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

INSERT INTO `book` (`title`,`author_id`,`producer_id`,`category_id`,`price`,`description`)
VALUES
('Cây Cam Ngọt Của Tôi','1','1','1','75600',''),
('Lén Nhặt Chuyện Đời','2','2','1','42500',''),
('Nhà Giả Kim','3','1','1','55000',''),
('Trường Ca Achilles','4','3','1','113800',''),
('Nhật kí của Đặng Thùy Trâm','5','1','1','78300',''),
('Totto-Chan Bên Cửa Sổ','6','1','1','88200',''),
('Bước chậm Lại Giữa Thế Gian Vội Vã','3','1','1','76500',''),
('Dune - Xứ Cát','7','1','1','174300',''),
('Một Thoáng Ta Rực Rỡ Ở Nhân Gian','8','1','1','121500',''),
('Biến Thể Của Cô Đơn','9','4','1','63000',''),
('Thay Đổi Tí Hon Hiệu Quả Bất Ngờ','10','2','2','132300',''),
('38 Bức Thư Rockefeller Gửi Cho Con Trai','11','10','2','69000',''),
('Con Đường Chẳng Mấy Ai Đi','12','5','2','107250',''),
('Tư Duy Ngược','13','5','2','69500',''),
('Tư Duy Mở','13','5','2','69000',''),
('Một Đời Như Kẻ Tìm Đường','14','4','2','157500',''),
('Manifest - 7 Bước Để Thay Đổi Cuộc Đời Bạn Mãi Mãi','67','2','2','57850',''),
('Một Đời Được Mất','15','2','2','90350',''),
('Đúng Việc - Một Góc Nhìn Về Câu Chuyện Khai Minh','66','6','2','81250',''),
('Hiểu Về Trái Tim','16','7','2','123240',''),
('Gia Đình Thân Yêu','17','8','3','34000',''),
('Truyện Cổ Grimm','18','3','3','144000',''),
('Gia Đình Trái Cây','19','3','3','45000',''),
('Bên Bếp Lửa Nhà Dài','20','3','3','49500',''),
('Gấu Trúc Mứt Cam','21','1','3','60000',''),
('Nhóc Gấu Thích Hù','22','1','3','60000',''),
('12 Khúc Ca Của Sự Sống','23','9','3','61200',''),
('Cháu Là Cổ Tích','24','3','3','54000',''),
('Chú Dế Đêm Trăng','25','3','3','54000',''),
('Hạt Bắt Vỗ Tay','26','3','3','54000',''),
('Sống Cả Đời Không Nể','27','5','4','118000',''),
('Định Luật Murphy - Làm Sao Để Những Việc Bạn Lo Lắng Sẽ Không Xảy Ra','28','10','4','109500',''),
('Làm Gì Khi Con Bạn Nổi Loạn','29','2','4','153000',''),
('Trái Tim Kim Cương','30','2','4','152000',''),
('Bác Hồ Với Thiếu Niên Nhi Đồng','31','4','4','42500',''),
('Đọc Vị Tâm Lý Đàn Ông','32','5','4','126500',''),
('Red Flag Trong Tình Yêu','32','11','4','126500',''),
('Trận Chiến 10 Năm Trước, Cuộc Đời 10 Năm Sau','33','4','4','109500',''),
('Tâm Lý Học Thật Kỳ Diệu','34','9','4','178500',''),
('Vươn Lên Từ Nghịch Cảnh - Rèn Tính Kiên Cường Mỗi Ngày','35','4','4','130500',''),
('Việt Nam Miền Ngon','36','11','5','134850',''),
('Tiệm Cà Phê Tài Nhà','37','2','5','78400',''),
('Nấu Ăn Ngon - Món Ăn Hàng Ngày','38','12','5','22200',''),
('Kombucha - Tuyệt Đỉnh Thức Uống Lên Men','39','9','5','192000',''),
('Nếm Vị An Nhiên: Món An Lành Với Tất Cả Yêu Thương','40','13','5','64500',''),
('80 Công Thức Làm Nước Ép Và Sinh Tố - Bổ Dưỡng Và Thanh Lọc Cơ Thể','41','9','5','45000',''),
('Tự Học Làm Bánh - 100 Món Bánh Ngon','42','9','5','39000',''),
('80 Ngày Ăn Khắp Thế Giới','43','3','5','162000',''),
('4 Mùa Cookies - 100 Công Thức Bánh Quy Siêu Dễ Làm Tại Nhà','44','2','5','215000',''),
('Ẩm Thực Chinh Phục Thế Giới - Món Lên Men','45','3','5','58500',''),
('Cơ Thể Tự Chữa Lành','68','8','6','144000',''),
('Sao Chúng Ta Lại Ngủ - Why We Sleep','69','11','6','181700',''),
('Y Học Sức Khỏe - Tâm Bệnh Học','70','4','6','130500',''),
('Sống Lành Để Trẻ','71','13','6','76500',''),
('Ung Thư: Tin Đồ Và Sự Thật','72','5','6','134100',''),
('Năng Lượng Sống Từ Thảo Dược','73','8','6','292500',''),
('Những Điều Cần Biết Về Cơ Thể Người Và Cách Phòng Tránh Bệnh Tật - Da - Cơ Xương Khớp Và Ngũ Quan','74','9','6','48600',''),
('Những Điều Cần Biết Về Cơ Thể Người Và Cách Phòng Tránh Bệnh Tật - Hệ Hô Hấp, Hệ Tuần Hoàn, Hệ Tiêu Hóa, Hệ Tiết Niệu','74','9','6','36000',''),
('Cẩm Nang Hướng Dẫn Thải Độc & Chế Độ Ăn Uống Lành Mạnh','75','2','6','130500',''),
('Sổ Tay Tìm Huyệt','76','14','6','61200',''),
('Huỳnh Thị Bảo Hòa - Vấn Đề Phụ Nữ Ở Nước Ta','46','9','7','135000',''),
('River Of The Gods - Dòng Sông Của Những Vị Thần','47','8','7','152200',''),
('Hồn Anime - Hợp Tác Cùng Sáng Tạo Và Câu Chuyện Thành Công Của Truyền Thông Nhật Bản','48','9','7','176000',''),
('Chùa Việt Nam - Di Tích Lịch Sử, Văn Hóa Cấp Quốc Gia','49','11','7','448200',''),
('Tìm Hiểu Phong Tục, Nghi Lễ Thờ Cúng Của Người Việt Và Các Bài Văn Khấn Thường Dùng','50','11','7','355500',''),
('Vietnamese Art','51','3','7','180000',''),
('Chuyện Cơm Hội An - Thức Ăn Và Cộng Đồng Ở Một Đô Thị Việt Nam','52','15','7','229500',''),
('Lịch Sử Khẩn Hoang Miền Nam','53','4','7','103500',''),
('Thư Viện Của Những Thần Tượng','54','10','7','95500',''),
('Danh Lam Thắng Cảnh Việt Nam Và Nước Đức','55','2','7','108000',''),
('Tập Viết Chữ Hán','56','16','7','63700',''),
('Chém Tiếng Anh Không Cần Động Não','57','2','7','126750',''),
('Nuance - 50 Sắc Thái Của Từ','58','2','7','103350',''),
('Giải Thích Ngữ Pháp Tiếng Anh','59','15','7','143000',''),
('Tự Học 200 Từ Vựng Tiếng Anh Theo Chủ Đề','60','17','7','42250',''),
('Mindmap English Grammar - Ngữ Pháp Tiếng Anh Bằng Sơ Đồ Tư Duy','61','16','7','123500',''),
('Mindmap English Vocabulary - Từ Vựng Tiếng Anh Qua Sơ Đồ Tư Duy','62','16','7','128700',''),
('Tiếng Anh Cho Người Bắt Đầu','63','16','7','149000',''),
('Tự Học Tiếng Đức Cho Người Mới Bắt Đầu','64','16','7','100050',''),
('Tự Học Tiếng Trung Cho Người Mới Bắt Đầu','65','16','7','61750','');