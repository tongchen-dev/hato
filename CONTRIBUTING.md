# 白夜小鸠应援站仓库

你好，十分感谢你愿意为本仓库做出贡献。在你贡献之前，请花些时间阅读以下指南

## 快速上手

本仓库是`lerna`初始化的`monorepo`仓库。

如果你想参与贡献或测试，可以遵循一下流程

1. 点击 GitHub 右上角的 Fork 按钮，将仓库 Fork 仓库到个人空间
2. 克隆个人空间到本地 `git clone https://github.com/tongchen-dev/hato.git`
3. 选择你要贡献的package文件夹下执行pnpm install.
4. 在项目根目录下执行`pnpm start:site`或`pnpm start:back`

## 参与贡献

Hato是一个由社区驱动的应援项目，您可以在issues下评论认领任务，如果没有您想要认领的任务也应当发布一个issues并且评论认领它。

由于是社区驱动，这意味着我们需要有一套标准来规范化贡献。

> 在提交commit之前应当进行GPG签名，用来认证本次提交为本人提交。

1. 确保可以正常访问要修改的模块
2. 开发前新建分支，例如`fix-xxx`或`feat-xxx`
3. 本地开发
4. 遵循commit规范，大致应当遵循[Angular Commit Message Format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)规范
5. 提交到远程仓库，也就是 Fork 后的仓库
6. 同步上游仓库 `git pull upstream main`
7. 打开上游仓库提交[PR](https://github.com/tongchen-dev/hato/pulls)
8. 等待监视
9. 修改监视意见
10. 若检查通过则PR合并入库，否则不予入库
11. 贡献结束，感谢您的贡献