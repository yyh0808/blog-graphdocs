---
sidebar_position: 4
---
# Console

Console控制台组件是给图数据库开发人员使用的终端组件，区别于传统的Terminal，除了可以在Console中运行数据库的操作命令，还可以对可视化查询语句结果等做一些可视化展示，便于开发人员分析和定位问题。



## 命令输入

用于输入 NebulaGraph 数据库中各种 nGQL 语句的命令
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/console-1.png)

----

## 结果展示

将信息分为4类，分别是结果表格、数据可视化、日志提示、Graphviz流程图。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/console-2.png)

### 表格

直接展示代码执行完后返回的结果，包含基础命令，查询语句等等。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/console-3.png)

### 数据可视化

用图可视化的形式，展示查询语句返回的结果，可以对数据进行简单的分析和查看。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/console-4.png)
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/console-7.png)

### 日志

日志用来分类展示，执行nGQL语句命令后返回的日志信息，大部分是报错信息等等提示。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/console-5.png)

### Graphviz

Graphviz流程图，是可视化绘制 DOT 语言脚本描述的图，用来输出 nGQL语句 的执行计划，便于对查询语句进行分析。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/console-6.png)