---
sidebar_position: 1
---
# 简介


## 图可视化设计规范的背景

图可视化设计规范，主要是解决针对图数据的可视化展示的交互规范指南，业界现在大部分图可视化仅做前端的规范定制，没有深度绑定内核的功能说明，在可用性上深度不够，缺乏针对内核功能特性的可视化规范指导建议。

因此本设计规范在进行前端的可视化交互描述的同时，深度绑定 NebulaGraph 内核的一些特性，在功能、交互、使用效果以及设计目的上，都进行了描述，有产品+开发同学的整体思考，欢迎大家一起为开源图规范贡献自己的力量！

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/explorer-intro.png)



----


## NebulaGraph 产品架构生态


如果把 NebulaGraph 图数据库比做一辆车，所有周边工具，都是围绕着这辆“车”运行的。而在可视化层面，可视化产品是：NebulaGraph Explorer、NebulaGraph Studio、NebulaGraph Dashboard，图组件主要应用与NebulaGraph Explorer和NebulaGraph Studio中。

欢迎进行30天试用版申请：
[申请入口](https://wj.qq.com/s2/10158890/69a8)

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/intro-架构图.png)


----


## 什么是图


图是计算机科学研究的主要领域之一,图能够高效地解决目前存在的诸多问题。

维基百科这么解释：

在离散数学中，图（Graph）是用于表示物体与物体之间存在某种关系的结构。数学抽象后的“物体”称作节点或顶点（英语：Vertex，node或point），节点间的相关关系则称作边。[1]在描绘一张图的时候，通常用一组点或小圆圈表示节点，其间的边则使用直线或曲线。

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/6n-graf.svg.png)

对图的更多清晰定义，请参考下面地址

参考链接：

[NebulaGraph对图的定义](https://docs.nebula-graph.com.cn/3.2.1/1.introduction/0-0-graph/)

[G6对于图的解释](https://g6.antv.vision/zh/docs/design/overview)

[维基百科对图的解释](https://zh.wikipedia.org/wiki/图_(数学))

[维基百科对图数据库的解释](https://zh.wikipedia.org/wiki/图数据库)