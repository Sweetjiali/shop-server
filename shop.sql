/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : shop

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 31/12/2021 10:54:14
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `category_id` int NULL DEFAULT NULL,
  `sale_price` decimal(10, 2) NULL DEFAULT NULL,
  `market_price` decimal(10, 2) NULL DEFAULT NULL,
  `sales` int NULL DEFAULT 0,
  `status` int NULL DEFAULT 1,
  `pic` int NULL DEFAULT NULL,
  `tags` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '法式连衣裙2021秋季新款纯色不规则连衣裙法式收腰显瘦性感', '', NULL, 11, 189.00, 499.00, 2345, 1, NULL, NULL, NULL, NULL);
INSERT INTO `goods` VALUES (4, '男式T恤', NULL, NULL, NULL, 99.00, 189.00, 1000, 1, NULL, NULL, '2021-12-23 09:38:29', '2021-12-23 09:38:29');
INSERT INTO `goods` VALUES (5, '男式T恤tttt', NULL, NULL, NULL, 99.00, 189.00, 1000, 1, NULL, NULL, '2021-12-24 09:54:15', '2021-12-24 09:54:15');

-- ----------------------------
-- Table structure for goods_spec
-- ----------------------------
DROP TABLE IF EXISTS `goods_spec`;
CREATE TABLE `goods_spec`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `good_id` int NULL DEFAULT NULL,
  `description` tinytext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `pic` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sale_price` decimal(10, 2) NULL DEFAULT NULL,
  `market_price` decimal(10, 2) NULL DEFAULT NULL,
  `stock` int NULL DEFAULT NULL,
  `sales` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0',
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_spec
-- ----------------------------
INSERT INTO `goods_spec` VALUES (1, '白色', 1, NULL, NULL, 189.00, 499.00, NULL, '12222', NULL, NULL);
INSERT INTO `goods_spec` VALUES (3, 'test', 5, NULL, NULL, 99.00, 189.00, 99, '0', '2021-12-24 09:54:15', '2021-12-24 09:54:15');
INSERT INTO `goods_spec` VALUES (4, 'test11', 5, NULL, NULL, 99.00, 189.00, 99, '0', '2021-12-24 09:54:15', '2021-12-24 09:54:15');

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `user_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `good_id` int NULL DEFAULT NULL,
  `good_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `good_market_price` decimal(10, 2) NULL DEFAULT NULL,
  `good_sale_price` decimal(10, 2) NULL DEFAULT NULL,
  `good_spec_id` int NULL DEFAULT NULL,
  `good_spec_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address_id` int NULL DEFAULT NULL,
  `link_man` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `link_phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `link_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `goods_total_qty` decimal(10, 0) NULL DEFAULT NULL,
  `total_amount` decimal(10, 0) NULL DEFAULT NULL,
  `status` int NULL DEFAULT 1,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (1, 1, 'tt', 1, '法式连衣裙2021秋季新款纯色不规则连衣裙法式收腰显瘦性感', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2021-12-21 09:51:49', '2021-12-22 09:21:03');
INSERT INTO `order` VALUES (2, 1, 'admin', 1, '法式连衣裙2021秋季新款纯色不规则连衣裙法式收腰显瘦性感', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2021-12-22 09:15:28', '2021-12-22 09:15:28');
INSERT INTO `order` VALUES (3, 1, 'admin', 1, '法式连衣裙2021秋季新款纯色不规则连衣裙法式收腰显瘦性感', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2021-12-24 03:09:59', '2021-12-24 03:09:59');
INSERT INTO `order` VALUES (4, 2, 'admin', 2, '女士小脚牛仔裤显瘦', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2021-12-27 09:49:12', '2021-12-27 09:49:12');
INSERT INTO `order` VALUES (5, 1, 'tt', 1, '法式连衣裙2021秋季新款纯色不规则连衣裙法式收腰显瘦性感', 499.00, 189.00, 1, '法式连衣裙2021秋季新款纯色不规则连衣裙法式收腰显瘦性感', 2, '小田', '13245674567', '湖南省湘西nullnullnull', 2, NULL, 1, '2021-12-28 06:40:52', '2021-12-28 06:40:52');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` int NULL DEFAULT 1,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `avatar_id` int NULL DEFAULT NULL,
  `is_admin` tinyint(1) UNSIGNED ZEROFILL NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'tt', '123456', '12345@qq.com', 1, '13277773333', NULL, 0, NULL, '2021-10-26 17:54:41');
INSERT INTO `user` VALUES (2, 'admin', '111111', '11111@sina.cn', 1, '15234567891', NULL, 1, NULL, NULL);

-- ----------------------------
-- Table structure for user_address
-- ----------------------------
DROP TABLE IF EXISTS `user_address`;
CREATE TABLE `user_address`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `province` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `city` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `county` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `township` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `address_detail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `is_default` int NULL DEFAULT NULL,
  `area_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `postal_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_address
-- ----------------------------
INSERT INTO `user_address` VALUES (2, '湖南省', '湘西', NULL, NULL, NULL, '小田', '13245674567', 1, NULL, NULL, NULL, '2021-12-22 02:03:30', '2021-12-22 02:03:30');

SET FOREIGN_KEY_CHECKS = 1;
