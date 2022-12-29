---
sidebar_position: 10
---
# 边聚合

边聚合在通常是将一部分边，聚合在一起，是对边数据展示效果的一种优化，或是对边数据特征的一种加强。

----

## 边聚合方式

在 NebulaGraph 中，通常是把同类型边数据进行聚合，比如相同 edge type 的边,这要求点与点之间的边有相同的边类型。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/aggregation-4.png)

----

## 边聚合说明

聚合后的边，会包含更多信息：
* 聚合边类型名称：表示聚合的边的类型
* 聚合边数量：表示聚合在一起的边的数量
* 聚合边加粗：通常聚合边的粗细由聚合在一起的边的数量来决定，越多数量聚合，则聚合边越粗
* 聚合计算：表示对所有聚合的边的属性或者rank进行聚合计算，比如对属性int值进行加减乘除的计算，sum代表公式类型
* 聚合计算属性：表示聚合计算选择的属性
* 聚合计算结果：表示聚合计算后的结果展示
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/aggregation-5.png)

----

## 边编组

通过一定特征，对不同边类型进行编组
在特征方面有几个方向：
* 某个相同的属性或者rank的值相等
* 具有相同属性数量类型
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/aggregation-6.png)

----

作者：袁艺豪
