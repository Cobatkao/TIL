# 本节目的

做一个简单的用户注册、登录接口

## 接口

- /user?act=register&user=isaac&password=12345678

注册接口，给到user，password，并且返回给前端json数据

```
{'ok': true | false, [msg...]}
```

- /user?act=login&user=isaac&password=12345678

登录接口，

```
{'ok': true | false, [msg...]}
```

下面就开始做吧！
