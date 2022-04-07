> 本节介绍好用的应用软件，先科学上网啊喂

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

- 终端文件搜索（可选）

```bash
sudo pacman -S fzf
```

#### Chrome 浏览器

```bash
yay -S google-chrome
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

- 注意：WPS 为专有软件，不推荐使用

```bash
sudo pacman -S libreoffice-still
```

#### 腾讯会议

```bash
yay -S wemeet-bin
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

#### 直播软件

```bash
sudo pacman -S obs-studio
```

#### 视频产出软件（剪辑、调色、特效）

```bash
yay -S davinci-resolve
```

#### 资料文件的存储（~~网盘~~）

- [唠一唠国内的网盘服务，数据存储方案的探索](https://liupj.top/2022/02/26/practise/data-storage/)

#### 音乐播放器

> yesplaymusic 是一款开源免费曲库齐全的高颜值第三方音乐播放器，本软件具有网页在线版[预览戳此](https://music.qier222.com/)

- 推荐使用 .AppImage file

- 若无法登录网易云音乐账号，可尝试使用网易邮箱进行登陆

#### appimagelauncher

```bash
sudo pacman -S appimagelauncher
```

#### 使用 markdown 语法的图形化文本编辑器 Typora

```bash
yay -S typora
```

- 我使用的主题配置：将[这个文件](https://github.com/Brannua/dot_files/tree/master/typora_themes)移动到`～/.config/Typora/themes/`下，重启 typora 选择该主题即可

#### 阿里云对象存储浏览器 oss-browser

```bash
yay -S oss-browser-bin
```

#### 图形化代码编辑器

```bash
yay -S visual-studio-code-bin
```

- [我的配置](https://github.com/Brannua/dot_files/tree/master/vscode)

#### 实用的小部件

> KDE 拥有一套非常好用的小部件，同过鼠标右键桌面，点击添加部件就可以看到系统自带了好多小部件，你也可以将网络上其他开发者开发的小部件下载安装到你的系统上，这里推荐两个我觉得很好用的小部件（小部件商城的网速有时不稳定，如果一直转圈，可尝试在确保自身网络环境较好的情况下，关闭或开启 VPN 再尝试搜索安装小部件）

- Event Calendar（一款集时钟，计时器，日历，天气预报于一体的小部件），下载安装好后右键部件拖到桌面或桌面底部的面板上，并给该部件配置你所在城市的 Id
- Netspeed Widget（实时监控当前的网络速度）
- 蕃茄钟：https://gitlab.com/divinae/focus-plasmoid/

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

#### 投屏工具

- [scrcpy，跨平台的多屏协同解决方案](https://liupj.top/2022/02/26/practise/display-android-screen-to-manjaro-pc/)

#### 微信开发者工具

- See [there](https://github.com/cytle/wechat_web_devtools)

```bash
yay -S wechat-devtools
```

#### 桌面特效

- 自行配置
