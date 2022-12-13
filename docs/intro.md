---
sidebar_position: 1
---
# 简介

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/intro.png)

## 设计背景

图可视化设计规范，主要是解决针对图数据的可视化展示的交互规范指南，业界现在大部分图可视化仅做前端的规范定制，没有深度绑定内核的功能说明，在可用性上深度不够，缺乏针对内核功能特性的可视化规范指导建议。

因此本设计规范在进行前端的可视化交互描述的同时，深度绑定 NebulaGraph 内核的一些特性，在功能、交互、使用效果以及设计目的上，都进行了描述，有产品+开发同学的整体思考，欢迎大家一起为开源图规范贡献自己的力量！

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/explorer-intro.png)

## 设计目标

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/intro-2.png)

* 易用：所有的图可视化组件的最终目标就是帮助用户脱离代码，可视化的分析图数据，操作界面，交互的易用性摆在第一的位置，所有的功能组件要简单易用，易于理解。

* 高效：在图领域，往往整个功能的流程长且复杂，大量功能需要配合查询语言来作为输出，这就要求组件在设计的时候，需要考虑效率问题，不仅能帮助用户高效的完成交互任务，还要能高效的执行用户的功能

* 美观：图可视化组件，作为数据可视化的一种，需要对数据进行可视化转化，数据的展示要保持美观性，让用户感受到数据之美。

* 扩展性：扩展性包含2方面，一方面作为组件本身，需要拥有扩展性，图还算是一个新领域，会持续的诞生新的功能，需要保持组件的可扩展性；另一方面，用户的数据量往往非常巨大，在设计组件的时候，要考虑更多的极端数据量展示扩展情况，不能简单的做省略，而是要符合用户习惯，帮助用户完成数据预览。

* 定制化：图可视化组件，应该能适配各种业务系统的风格，方便用户样式定制化，不仅是组件，包括数据展现的样式也需要能支持定制化，以满足用户的需要。


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