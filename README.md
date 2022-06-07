#### 前言

> 本教程旨在：

1. 整理笔者工作流的搭建过程，以防不时之需

2. 为想要尝试 linux 尤其是 arch 系发行版的新手小伙伴提供帮助

3. 传递开源精神，给 linux 的社区贡献一点点力量

> 相比于 windows，linux 带给我的好处有：

1. linux 对电脑本身的硬件配置要求相对较低，一颗 1Ghz 的 CPU，4GB 内存，128GB 的 SSD 固态硬盘已经满足大多数人的要求（本教程实践结束磁盘占用 13GB 左右）

2. linux 开源免费，这意味着你可以轻松获取其正版系统并查看甚至修改它的所有源代码

3. linux 拥有十分完善的文档和活跃的社区，你可以轻松查询并处理你所遇到的所有问题

4. linux 上安装软件极其方便，往往一两行命令就能很好地将软件下载并安装，且没有任何捆绑软件

5. linux 安全稳定，你对你的 linux 系统拥有着绝对掌控权

6. 什么软件弹窗、系统蓝屏、软件病毒、系统强制更新等各种辣鸡流氓行为在 linux 中我是没见过

7. 你能学到很多酷酷的知识

8. ……

> 虽然 QQ、微信、TIM、office 等专有软件有很多方法在 linux 上运行，但本教程不介绍，原因如下：

1. 专有软件不会开放其源代码，这些软件到底会不会在背后动手脚我们不得而知

2. 这些专有软件在 linux 上都有很好的自由软件替代品，比如即时通讯软件 Telegram 以及做得相当棒的社区版 libre-office

3. 如果必须使用专有软件，国内其实不用专有软件还是有点难受的毕竟大家都在用。。但建议在一台没有个人隐私的设备上使用

> 原则：如果没有特别省心省事的成熟解决方案，那么一个软件在哪种操作系统上的官方支持最好，就让它在哪种操作系统上运行，有经济条件的可以购买多台电脑，无则 see [there](https://liupj.top/2022/02/04/multi-os/)

- 还在纠结使用哪种 linux 发行版吗？适合自己的才是最好的：[Distrochooser](https://distrochooser.de/)
- 本教程选用的 Linux 发行版：[ManjaroLinux](https://manjaro.org/)
- 本教程选用的桌面环境：[KDE](https://kde.org/)
- 当然，你也可以尝试使用窗口管理器来替代桌面环境，如：[dwm](http://dwm.suckless.org/)
- 无论你遇到任何关于 ManjaroLinux 的问题，都可以通过以下途径寻找解决方案
  - [ManjaroWiki](https://wiki.manjaro.org/index.php/Main_Page)
  - [ManjaroForum](https://forum.manjaro.org/)
  - [ArchWiki](https://wiki.archlinux.org/)
  - [ArchForum](https://bbs.archlinux.org/)
  - [KdeForum](https://forum.kde.org/)
  - [Github](https://github.com/)
  - [Google](https://www.google.com/)
  - [必应](https://www.bing.com/)
  - [stackoverflow](https://stackoverflow.com/)
  - 阅读[Stop-Ask-Questions-The-Stupid-Ways](https://github.com/Brannua/Stop-Ask-Questions-The-Stupid-Ways)之后问我
  - 拒绝~~[Baidu](https://www.baidu.com/)~~

> 哦天，你是在想如何安装 ManjaroLinux 吗？这是考验你的第一个问题
>
> 不过别担心，[Google](https://www.google.com/) can proably help you.

#### 注意

> 本教程不提供科学上网教程，但你必须设置系统代理，确保能够以较好的网络速度访问墙外资源，才能顺利实践本教程 ！

#### LICENSE

- [MIT](https://github.com/Brannua/manjaro-tutorial/blob/master/LICENSE)
