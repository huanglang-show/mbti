CREATE TABLE `ms_user` (
  `role_id` int NOT NULL AUTO_INCREMENT COMMENT '角色ID，主键，自增',
  `role_name` varchar(50) NOT NULL COMMENT '角色名称',
  `role_order` int NOT NULL COMMENT '角色顺序，用于角色排序',
  `status` tinyint NOT NULL COMMENT '状态，0表示禁用，1表示启用',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='角色表，存储系统中的角色信息';
