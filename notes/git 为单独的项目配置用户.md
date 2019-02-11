# git 为单独的项目配置用户

> 参考：[Git多用户，不同项目配置不同Git账号](https://blog.csdn.net/onTheRoadToMine/article/details/79029331)

## 需求背景

需求是用一台电脑可能不同项目需要不同的 git 账号，比如公司的项目需要用公司的项目，而自己的项目需要用自己的账号，这样才能保证提交代码的人是符合预期的；

于是便需要这样一个方法来进行分别设置

## 设置方法

```sh
git config user.name "XXX"
git config user.email "XXXXXXX@XXX.XX"
```

> 注：这里的 git config 命令没有带 --global，表示是一个局部的设置