# AUSTOJ2说明文档

标签（空格分隔）： austoj

---

###起源:
一直以来想有一个项目作为基石,并且赶上了毕业设计,所以就有了这个项目.
于是该项目就是自己所学的施展平台,通过一遍一遍的重构从而提升自己的代码水平.

###项目概要:

#### 1.规约

DO:数据库表模型,一张表对应一个DO
PO:表关联查询返回实体包装,只可读,不可写
DTO:数据传输载体
VO:对应接口返回数据包装.简单情况下DTO可以直接作为VO使用
Query:查询实体封装,使用该查询实体的方法要履行查询实体内参数协议,有无法履行的需要备注说明
Convert:对除VO以外的实体提供转换方法
Assembler:对VO进行转换,因为VO的转换大多数不可复用,所以也可以在VO本身里面提供转换方法.



当前主要分为判题端aust-judger项目,后台端aust-front项目,WEB前台端AUSTOJ-WEB项目,整体来说还是很清晰的,

更多细节等毕业设计完成后放出

目前欠缺功能:

1. 前端重构中

2. 文章模块python爬取(初步想法使用python爬取csdn,简书等博文,然后页面链接过去,顺便多学习python)

###使用说明

    等毕业论文过了后放出.


###项目地址:
> 地址: http://oj.mrdear.cn  (个人的渣渣服务器)


![这里写图片描述](http://img.blog.csdn.net/20161125092128864)

