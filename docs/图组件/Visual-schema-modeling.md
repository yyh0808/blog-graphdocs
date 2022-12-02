---
sidebar_position: 3
---
# 可视化草图建模

在图数据可视化的过程中，往往第一个问题就是，数据已经有了，但是如何建模？这里就需要使用到可视化建模工具，一方面能解决用户直观的把存为table数据结构转化为图数据结构，另一方面因为建模不是立即生效，可以在草图建模的过程中反复修改调整，确定方案后再执行数据库命令创建图空间。通过这种方式把草图建模做了行为隔离，使得用户可以在上生产环境前有一定的讨论空间。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/schema-1.png)

----

## 草图画布

可视化建模交互流程的核心是可以在草图中进行 Tag、Edge Type 的编辑修改，对于有不同图建模需求的用户来说，保存建模的草图，给下次图数据建模节约了大量配置时间。

UI上
* 左侧：为建模草图列表，保存用户所有的草图数据，可以通过搜索进行筛选
* 中间：为草图画布，用户可以通过中间tag栏，拖拽 Tag 到画布中，连接不同 Tag 创建 Edge Type，进行图建模
* 右侧：为参数、属性的配置面板，用户可以配置每个 Tag、Edge Type 的参数、属性
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/schema-1.png)

----

## 工具栏

展示图建模工具的基础功能，包括：草图名称（并提供修改）、保存按钮、导出按钮（png）、应用到图空间按钮
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/schema-4.png)

----

## 草图列表

用来存放用户保存的草图数据，可以创建新的建模草图，查看历史保存过的草图，对列表进行搜索筛选
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/schema-5.png)

----

## 参数列表

用来对画布中选中的tag或者edge type进行参数配置或属性配置，以tag为例，功能依次为：编辑tag名称、添加备注信息、添加属性、编辑属性名称、编辑属性数据格式等等。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/schema-6.png)

----

## 应用到图空间

当草图建模完成后，需要把参数导入到真实图空间中，点击界面右上角的应用到图空间按钮，就可以将我们画好的草图导入到图空间中，这里提供2种方式：创建新的图空间和导入已有的图空间。
我们把导入图空间过程中复杂的参数配置，放在导入图空间行为的时候进行配置，避免用户在草图建模绘制中被干扰。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/schema-7.png)

----

作者：袁艺豪

