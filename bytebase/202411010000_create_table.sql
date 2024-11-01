CREATE TABLE `ms_role` (
  `role_id` int NOT NULL AUTO_INCREMENT COMMENT '角色ID，主键，自增',
  `role_name` varchar(50) NOT NULL COMMENT '角色名称',
  `role_order` int NOT NULL COMMENT '角色顺序，用于角色排序',
  `status` tinyint NOT NULL COMMENT '状态，0表示禁用，1表示启用',
  `description` varchar(255) DEFAULT NULL COMMENT '备注，角色的附加信息',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `created_by` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '创建人',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `updated_by` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='角色表，存储系统中的角色信息';
