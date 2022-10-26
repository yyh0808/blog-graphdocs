---
sidebar_position: 1
---

# 图组件设计规范-基础样式

作者：袁艺豪

----

## 点（Vertex）
点用来保存实体对象。

#### 样式
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph003.png)

#### 数据
在点上可展示VID、属性、图标、图片等数据
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph011.png)

#### 形状
点可以变换不同形式，以适应不同业务
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph002.png)

#### 状态
在画布中点状态：正常、鼠标悬浮、点击
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph001.png)

#### 特殊状态
无tag点、提示、叠加聚合、收藏、锁定
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph010.png)

#### 点大小
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph013.png)


----

## 边（Edge）
边是用来连接点的，表示两个点之间的关系或行为。

#### 样式
边的样式可以有多种，常规的做法就是，用一条线表示关系，同时边上会包含一个重要信息，通常展示在边中间或边上方，在个别场景下，还需要对边上数据添加背景以加强边类型或者属性的展示效果。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph006.png)

#### 数据
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph012.png)

#### 状态
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph004.png)

#### 箭头样式
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph007.png)

#### 边方向
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph008.png)

#### 曲线和自环边
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph009.png)

#### 边粗细
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/graph014.png)
