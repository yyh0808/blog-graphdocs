---
sidebar_position: 2
---
# 可视化查询

查询在图数据库中，与传统关系型数据库的查询，有非常巨大的差别。传统关系型数据库中，存储的数据以 table 为主，而可视化这个查询过程，基本都是以在输入框输入查询内容为主，而对于图数据来说，我们需要查询的是一种关系，这在交互上就与传统数据库有所区别，我们希望在视觉上体现出这种关系，让用户所见即所得。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/visual-1.png)

----

## 查询画布

可视化查询是通过“以图查图”的方式，来让用户所见即所得，因此可视化查询拥有自己专属的查询画布，让用户拖拽拼出自己想要查询的数据。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/visual-2.png)

通过样式来表达复杂的查询条件：
* 将多跳信息标记在边上，用数字表示步数
* 在 tag 和 edge type 上都可以添加过滤条件，已添加的用漏斗图标表示
* 结果输出用框选的方式来锁定输出范围，只有完全包含在输出框内的结果才会被输出。
* 在 NebulaGraph 中支持多 tag/edge type ，所以可以多选来配置多 tag 或者 edge type，但是这与单 tag 或者 单 edge type 含义不同，需要注意。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/visual-2-1.png)

----

## 工具栏

在可视化查询的工具栏，可以进行基础操作
* 结果输出框：在查询画布中，划定输出结果的范围
* 鼠标模式（默认）：从画输出框模式切换回鼠标模式
* 放大缩小画布
* 保存：保存当前可视化查询的记录
* 历史记录：可以打开历史可视化查询的数据
* nGQL：查看画布输出对应执行的查询语句
* 开始查询：查询结果到图探索的画布中
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/visual-5.png)

----

## Tag栏

展示当前图空间的所有 Tag 类型，可以拖拽到查询画布中
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/visual-4.png)

----

## 配置面板

在配置面板中，可以进行参数配置，比如 tag 类型或者 edge type 类型，或者增加过滤条件等等。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/visual-3.png)

----

作者：袁艺豪

 