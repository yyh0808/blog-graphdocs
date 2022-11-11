---
sidebar_position: 1
---
# 画布

----

本文介绍图组件中的核心组件，画布组件

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-1.png)


## 画布区

画布区是展示图数据最核心的区域，具备以下功能：
* 点边等数据展示
* 双击点可进行数据拓展
* 允许全局样式生效
* 2D和3D模式切换，或选其一
* 浅色和深色模式切换
* 画布的放大缩小

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-2.png)

----

## 画布功能区

画布功能区是控制画布基础操作的功能区，具备以下功能：
* 选择切换当前画布的视图模式
* 画布放大模式
* 放大画布
* 缩小画布
* 展示缩略图和画布显示的百分比
* 隐藏画布的缩略图

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-3.png)

----

## 缩略图

缩略图是对画布的浓缩展示，在海量数据下，缩略图能清晰定位画布展示的数据位置。

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-4.png)

----

## 多画布选择栏

在数据分析中，一个画布往往是无法满足分析需求的，需要多个查询数据的分析对比，多画布功能即是为该目的进行设计，操作方式同浏览器新开网页，以满足对不同图空间数据，或者不同查询数据的分析展示。

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-5.png)

----

## 顶部工具栏

在图可视化产品中往往会有多种工具，在 NebulaGraph 的可视化产品中，我们把专门针对画布的，一次性操作的，不需要复杂配置的便捷功能放在顶部栏，方便用户快捷使用。

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-6.png)

----

## 组件功能栏

图的可视化产品，往往需要多种复杂配置的功能或者算法组件，在 NebulaGraph 中，我们把需要复杂配置的查询或计算功能放在左侧功能栏中，这样有2个好处，一方面满足面板配置，一方面不干扰画布核心区。

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-7.png)

----

## 搜索栏

在对数据的查询中，对内核的数据查询往往是全图的数据查询，对于整个浏览器视窗，左上角是最为核心的位置，因此我们将用户最重要的查询功能，放在左上角的画布位置，该功能应该是针对全图数据的查询，往往耗时较长。

如果是针对画布已有数据的搜索，建议放在工具栏或者其他位置，减弱对全图搜索的误导，在图的可视化中，这是需要做区分的，否则会对用户搜索到的结果有误导。

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-8.png)

----

## 样式修改栏
在画布中，需要针对样式做修改，这是图分析中非常重要的可视化功能，在 NebulaGraph Explorer可视化产品中，我们把样式修改放在右侧面板中，拥有一下功能：
* 选中一个或者几个类型的 Tag/Edge Type
* 修改 Tag / Edge Type 的颜色、图标、图片、点大小、边粗细
* 对多Tag的点做选择和修改样式
* 单独选中和修改单个点的样式
* 展示当前画布中数据的数量信息
* 在列表中做筛选，方便海量数据的搜索

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-9.png)

----

## 选中点边列表
针对画布中已经选中的数据，做清晰的数据信息展示

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-10.png)

----

## 右键
把画布中一些常用操作，或者针对点边的单独操作放在右键菜单中

![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/canvas-11.png)

----

作者：袁艺豪