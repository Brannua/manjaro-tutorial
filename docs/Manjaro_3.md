> 本节介绍好用的应用软件，先科学上网啊喂

<!-- more -->

#### 注意，你有可能遇到程序启动器搜索不到新安装的应用软件的问题，解决办法如下

> 注：最新操作系统已经弥补了这个 BUG

```bash
mkdir ~/.local/share/applications
```

#### 全局文件搜索

> 全功能 krunner 配合 fsearch（krunner 在文件搜索功能上做得不如 fsearch，毕竟前者功能丰富，后者更专于文件搜索）

```bash
yay -S fsearch
```

- 配置 fsearch 的快捷键，方法为依次找到`系统设置>工作区>快捷键>自定义快捷键`，点击`编辑>新建>全局快捷键>命令/URL`，定义一个新的动作名字为`FSearch`,点击右侧`触发器>快捷键`，当框中的字符显示为`输入...`时，直接按键盘上你想要配置的组合键，笔者这里配置为了`meta+f`，再点击`动作`，命令/URL填写为`/usr/bin/fsearch`，最后`应用`该配置即可

#### Chrome 浏览器

```bash
yay -S google-chrome
sudo pacman -S kdialog # chrome 的可选依赖
```

#### 视频播放器

- 本地视频播放器：相比于 vlc，我更喜欢 mpv

```bash
sudo pacman -S mpv
```

|      | mpv 播放器常用快捷键 | 功能                     |
| ---- | -------------------- | ------------------------ |
| 1    | [ ]                  | 调节播放速度，step: 10%  |
| 2    | Q                    | 退出，但保存当前播放位置 |
| 3    | m                    | 静音                     |
| 4    | 9 0                  | 调节音量                 |
| 5    | f，或双击播放区域    | 全屏切换                 |
| 6    | v                    | 控制字幕显隐             |
| 7    | s                    | 截屏                     |
| 8    | S                    | 截屏（不截字幕）         |
| 9    | f8                   | 显示播放列表             |
| 10   | 1 2                  | 对比度调节               |
| 11   | 3 4                  | 亮度调节                 |

#### 截图软件

```bash
sudo pacman -S flameshot
```

- 配置 flameshot 的快捷键，方法为依次找到`系统设置>工作区>快捷键>自定义快捷键`，点击`编辑>新建>全局快捷键>命令/URL`，定义一个新的动作名字为`FlameShot`,点击右侧`触发器>快捷键`，当框中的字符显示为`输入...`时，直接按键盘上你想要配置的组合键，笔者这里配置为了单键`f1`，再点击`动作`，配置命令/URL为`/usr/bin/flameshot gui`，最后`应用`该配置即可
- 将 flameshot 设置为开机自启，方法为依次找到`系统设置>工作区>开机与关机>自动启动>添加>添加应用`，搜索`火焰截图`或`flameshot`，然后选中，`确定`即可

- 运行 flameshot，在系统托盘中右键 flameshot，依次点击`配置>快捷键`，将`复制选择到剪贴板`对应的`键`修改为回车键即可
- 注意：若 flameshot 按下回车进行截图时桌面卡住，则可能是因为没有打开桌面通知，可查看系统托盘

#### office

- 主要有两种选择，onlyoffice（AUR） 和 LibreOffice

- 我更喜欢 onlyoffice

- 注意：WPS 为专有软件，不推荐使用

```bash
yay -S onlyoffice-bin

sudo pacman -S libreoffice-still   # 稳定版
sudo pacman -S libreoffice-fresh   # 尝鲜版
```

#### 相机

```bash
sudo pacman -S kamoso
```

#### 画图，图片编辑工具

```bash
sudo pacman -S kolourpaint    # windows 上 「画板」 的替代品，专为 KDE 而生
sudo pacman -S krita          # 功能更高级，面向对绘画软件有较高要求的专业用户
```

#### 录屏软件

```bash
sudo pacman -S simplescreenrecorder
```

- 华硕vm520u商务笔记本电脑需要卸载核显驱动以解决录屏时屏幕闪烁撕裂的问题

```bash
yay -Rssn xf86-video-intel

# 解释
-R, --remove         删除软件包
-s, --recursive      删除不需要的依赖关系(-ss 包括单独指定安装的依赖关系)
-n, --nosave         删除配置文件
```

- simplescreenrecorder 已经完全满足我的需求，你也可以从 aur 中搜索 OBS（一款录屏，直播串流工具）或 DaVinciResolve（一款剪辑，调色，特效一体的视频产出软件）

#### 资料文件的存储（~~网盘~~）

- 我目前的方案：

  - **放弃使用国内的网盘，所有重要资料文件都直接存储到我的 ssd 固态移动硬盘中**

  - 如果害怕硬盘损坏，可以再向其他硬盘中进行数据备份存储（容灾），多块硬盘同时损坏的几率几乎为零

- 以下两款国外网盘用于数据存储相对靠谱（但需要付费，且国内使用这两款应用的网速是堪忧的，所以你得会正确配置网络代理，也就是狭义上的VPN）

  - macOS 和 Windows 用户可以使用美国微软的 [one-drive](https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage) 网盘服务，可以 6 个人一起购买一份家庭版套餐，这样每个人都能得到 1T 的空间，且价格不算贵

  - linux 用户可以使用新西兰的一款注重隐私的老牌网盘[Mega](https://mega.io/)

> 中国国内的网盘服务本质上只是一种文件分享平台，而不是数据存储工具，**中国国内的网盘只适合上传一些不包含个人隐私、不重要、丢了也无所谓的垃圾文件**

> 如果一定要用国内的网盘，强烈建议将文件「**打包，压缩，加密，改名**」然后再上传，但安全性仍然难以保证。。

原因如下

目前来看，中国国内大部分的网盘服务提供商（比如百度网盘，阿里云盘，md 删我数据我就直接点名了 ！）都有弊端（限速、和谐、隐私泄漏...）

你上传的东西已经不是你的了，或者说你上传的东西已经默认同意和这些网盘服务提供商共享了，所以你上传的东西的安全性难以保证

> 我辛辛苦苦攒的壁纸都能被删我就真的无语。。

![image-20220226161620399](https://gitee.com/pj-l/imgs-1/raw/master/image-20220226161620399.png)

而像[阿里云盘小白羊版](https://github.com/liupan1890/aliyunpan)这种第三方软件虽然下载速度和多线程能力都不错，但本质也只是背靠阿里云盘的一个 UI 客户端罢了，不做推荐

#### 音乐播放器

> yesplaymusic 是一款开源免费曲库齐全的高颜值第三方音乐播放器，本软件具有网页在线版[预览戳此](https://music.qier222.com/)

```bash
yay -S yesplaymusic
```

- 若无法登录网易云音乐账号，则可尝试使用网易邮箱进行登陆

#### 使用 markdown 语法的图形化文本编辑器 Typora

```bash
yay -S typora
```

- 我使用的主题配置：将[这个文件](https://github.com/Brannua/dot_files/tree/master/typora_themes)移动到`～/.config/Typora/themes/`下，重启 typora 选择该主题即可

#### 图形化代码编辑器

```bash
yay -S visual-studio-code-bin
```

- [我的配置](https://github.com/Brannua/dot_files/tree/master/vscode)

#### 实用的小部件

> KDE 拥有一套非常好用的小部件，同过鼠标右键桌面，点击添加部件就可以看到系统自带了好多小部件，你也可以将网络上其他开发者开发的小部件下载安装到你的系统上，这里推荐两个我觉得很好用的小部件（小部件商城的网速有时不稳定，如果一直转圈，可尝试在确保自身网络环境较好的情况下，关闭或开启 VPN 再尝试搜索安装小部件）

- Event Calendar（一款集时钟，计时器，日历，天气预报于一体的小部件），下载安装好后右键部件拖到桌面或桌面底部的面板上，并给该部件配置你所在城市的 Id
- Netspeed Widget（实时监控当前的网络速度）

#### 手机和电脑沟通的利器 kde-connect

- [官方文档](https://userbase.kde.org/KDEConnect/zh-hans#.E5.AE.89.E8.A3.85)

> 为了解决 Android 和 KDE 之间的文件互传，我接触了 kde-connect，但文件互传只是它众多实用功能的其中之一
>
> 这款软件是 KDE 自带的，电脑端无需安装

- 我们需要在安卓手机上安装客户端 kde-connect
  - 首先在手机上下载并安装开源应用商店[F-Droid](https://f-droid.org/)
  - 然后从该应用商店中搜索并下载安装 kde-connect

- 手机端和电脑端的 kde-connect 进行配对连接，两端即可正常通信
  - 比如，配对后，进入手机相册，长按图片分享，即可发送给电脑
- 注意
  - Android 9 以后不让后台应用直接访问剪贴板了，必须用户手动从通知栏主动发送剪贴板内容到电脑
  - 插件设置列表的某些插件可以通过点击其名称跳转到该插件的设置页面
  - 一旦切换系统网络代理，就需要重新配对

#### 投屏工具（android -> 电脑端）

> screen-copy -> [scrcpy](https://github.com/Genymobile/scrcpy/blob/master/README.zh-Hans.md)

> 注意：不要使用鸿蒙，生态以及兼容性远不及发展多年的安卓

> 其实 scrcpy 远不止投屏一个功能，查看其官网说明自行探索按需使用即可

```bash
sudo pacman -S scrcpy
```

安卓设备最低需要支持 API 21 (Android 5.0)。

确保安卓设备已[开启 adb 调试](https://developer.android.com/studio/command-line/adb.html#Enabling)。 - usb 调试

在某些设备上，还需要开启[额外的选项](https://github.com/Genymobile/scrcpy/issues/70#issuecomment-373286323)以使用鼠标和键盘进行控制。

使用 usb 线将 android 设备和电脑连接

#### 一些有意思的小程序

```bash
# 终端小火车，终端彩色打印
sudo pacman -S sl lolcat

# 跟随鼠标的小猫咪
yay -S oneko
```

#### 桌面特效

- 自行配置，和 KWin 交互

- 如果桌面特效失效

  - 可以尝试降级混成器的渲染后端（success）
  
  - 可以尝试升级显卡驱动到稳定版（未尝试）
