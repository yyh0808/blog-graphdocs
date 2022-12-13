---
sidebar_position: 5
---
# 查询模板

查询模板功能是一个连接业务人员和开发者的重要桥梁，大部分业务人员不一定会写nGQL查询语句代码，而同类业务需要的查询语句在语法结构上往往相似，我们可以从中找到一个共性。

为了帮助用户更方便和高效的利用nGQL查询语句，在NebulaGraph中，我们使用查询模板来作为给业务人员使用的工具，这能大大的简化业务人员的上手难度，而开发者只需通过查询语句的参数配置即可将功能上架。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/Template-1.png)

## 开发者
对于开发者而言，重点关注的是复杂查询语句的撰写，查询结果的验证，撰写备注信息以让人理解功能含义。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/Template-5.png)

### Console组件
Console组件提供了一个可以把查询语句保存为模板的入口，用来保存成功运行的查询语句（结果验证成功的）
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/console-1.png)

### 创建查询模板
创建查询模板，流程：创建模板名称，选择图空间，添加描述信息（业务人员可以根据描述信息对功能进行理解），查询语句输入框（用来配置参数信息），输入参数化配置项的列表（根据选中的变量参数）
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/Template-8.png)

交互上，输入查询语句之后，选中需要配置为模板参数的字符，点击右上角参数化按钮，即可把参数进行变量配置。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/Template-6.png)

## 业务人员
对于业务人员，则重点在查询模板的使用上，根据模板的信息，正确输入参数，来进行业务的数据查询和分析。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/Template-4.png)

### 选择查询模板
对于业务人员，提供一个查询模板的入口，可以从开发者配置的多个查询模板中选择一个需要的来进行查询，需要展示模板名称和备注信息以让业务人员理解模板的功能含义。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/Template-11.png)![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/Template-10.png)

### 配置查询模板
业务人员只需要配置查询模板给出的参数，这些参数往往是一些比较简单便于理解的变量，比如数值、固定名称，人名等等。当用户配置之后，在查询模板的查询语句展示栏会跟着同步查询语句内容，方便用户进行执行的查询语句的查看预览。
![image](https://github.com/yyh0808/blog-graphdocs/raw/master/img/Template-9.png)