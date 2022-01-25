
- [manjaro-tutorial](https://liupj.top/manjaro-tutorial/#/)

#### 前言

> 本教程旨在：

1. 整理笔者工作流的搭建过程，以防不时之需

2. 为想要尝试 linux 尤其是 arch 系发行版的新手小伙伴提供帮助

3. 传递开源精神，参与自由软件运动，给 linux 的社区贡献一点点力量

> 相比于 windows，linux 带给我的好处有：

1. linux 对电脑本身的硬件配置要求相对较低，一颗 1Ghz 的 CPU，4GB 内存，128GB 的 SSD 固态硬盘已经满足大多数人的要求（本教程实践结束磁盘占用 13GB 左右）

2. linux 开源免费，这意味着你可以轻松获取其正版系统并查看甚至修改它的所有源代码

3. linux 拥有十分完善的文档和活跃的社区，你可以轻松查询并处理你所遇到的所有问题（非大佬，能遇到的问题早就有人遇到过了）

4. linux 上安装软件极其方便，往往一两行命令就能很好地将软件下载并安装，且没有任何捆绑软件

5. linux 安全稳定，且你对你的 linux 系统拥有着绝对掌控权

6. linux 想碰见软件病毒实在是太难了。。

7. 你能学到很多酷酷的知识

8. ……

> 虽然 QQ、微信、TIM、office 等专有软件有很多方法在 linux 上运行，但本教程不介绍，原因如下：

1. 专有软件不会开放其源代码，这些软件到底在背后做了什么我们不得而知

2. 这些专有软件在 linux 都有很好的自由软件替代品，比如即时通讯软件 Telegram 以及做得相当棒的社区版 libre-office

3. 如果必须使用专有软件，国内其实不用专有软件则寸步难行毕竟大家都在用。。但笔者建议在一台没有个人隐私的设备上使用

> 原则：如果没有特别省心省事的成熟解决方案，那么一个软件在哪种操作系统上的官方支持最好，则让它在哪种操作系统上运行，有经济条件的可以购买多台电脑，无则虚拟机、云主机、wine兼容层、docker...

- 还在纠结使用哪种 linux 发行版吗？适合自己的才是最好的：[Distrochooser](https://distrochooser.de/)
- 本教程选用的 Linux 发行版：[ManjaroLinux](https://manjaro.org/)
- 本教程选择的桌面环境：[KDE](https://kde.org/)
- 当然，你也可以尝试使用窗口管理器来代替桌面环境，如：[dwm](http://dwm.suckless.org/)
- 无论你遇到任何关于 ManjaroLinux 的问题，都可以通过以下途径寻找解决方案
  - [ManjaroWiki](https://wiki.manjaro.org/index.php/Main_Page)
  - [ManjaroForum](https://forum.manjaro.org/)
  - [ArchWiki](https://wiki.archlinux.org/)
  - [ArchForum](https://bbs.archlinux.org/)
  - [Github](https://github.com/)
  - [Google](https://www.google.com)
  - ~~[Baidu](https://www.baidu.com/)~~
  - ~~问我~~
  - 使用 linux 需要一定的问题处理能力，不适合伸手党使用

> 哦天，你是在想如何安装 ManjaroLinux 吗？这是考验你解决问题的第一个尝试
>
> 不过别担心，这位大神=>[百度](https:///www.baidu.com/)已经提供了各种各样详细而成熟的安装教程，相信天赋异禀的你一定可以轻松搞定

#### 注意

> 本教程不提供科学上网教程，但为了能够下载到必须的代码包，**必须解决科学上网这个问题**，才能继续阅读并顺利实践本教程！

#### Development

- [docsify](https://docsify.js.org/#/)

```bash
docsify serve /path/of/your/docsify-site
```

```bash
./
├── ...
├── index.html  # 入口文件
├── ...
├── _sidebar.md # 侧边栏目录（维护它，然后继续编写 .md 文件即可）
└── ...
```

#### LICENSE

- [MIT](https://github.com/Brannua/manjaro-tutorial/blob/master/LICENSE)
