#### 调整外设的默认参数

> 这是我自己的使用习惯

- 系统设置-->硬件-->输入设备

  - 触摸板-->勾选反向滚动-->指针加速0.4-->应用

  - 鼠标-->指针速度增加两格-->应用

#### 终端

> 俗称命令行，是传说中黑客们使用的黑窗口，我们可以通过终端与操作系统进行交互，这也是类 unix 操作系统们最强大的工具

- 在 ManjaroKDE 中，有如下 3 种方式打开终端（系统中的快捷键均可自定义修改）
  - Konsole => ctrl+alt+t
  - Yakuake => f12
  - 文件资源管理器 Dolphin 的内嵌终端 => f4

> 如果你有接触软件开发，尤其是 web 开发，那么你肯定会经常和 chrome 的 console 打交道，而一般打开 console 的快捷方式是 f12，这就和 yakuake 的默认快捷键冲突，所以我们需要修改 yakuake 的默认快捷键

- 目前来看，当一个崭新的 manjaro-kde 第一次运行 yakuake，按下 f12 打开其终端面板时，会自动弹出修改快捷键的弹窗，我们将其修改为 meta+space 即可

> linux 的终端默认以 bash 作为命令处理器，为了获得更好的使用体验，我们可以将 bash 更换为 zsh，只需在终端执行一条命令

```bash
chsh -s /bin/zsh
```

#### 配置一下 konsole 和 yakuake 的外观

> 笔者自用

<img src="https://aliyun-oss-lpj.oss-cn-qingdao.aliyuncs.com/images/old-from-gitee-2022-03-25/by-picgo/image-20220316203229602.png" alt="image-20220316203229602" style="zoom:50%;" />

- 首先将相关配置文件下载到本地，See [here](https://github.com/Brannua/dot-files/tree/master/konsole-yakuake-cfg)

- 然后打开 konsole 进行配置

```bash
cd ~/.local/share/konsole

ls -al

# 若有文件输出，则删除所有文件
# 然后将我的配置文件 Breeze.colorscheme & lpj-theme.profile 放到当前目录下
# 鼠标右键 konsole 窗口，切换编辑方案，选择 lpj-theme
# 鼠标右键 konsole 窗口，编辑当前方案，勾选「默认配置方案」，应用，确定
# 关闭 konsole 窗口 
```

- 然后打开 yakuake 进行配置

```bash
cd ~/.config

ls | grep konsolerc
# 若输出 konsolerc，则执行
rm konsolerc

ls | grep yakuakerc
# 若输出 yakuakerc，则执行
rm yakuakerc

# 最后：将我自用的配置文件 yakuakerc 和 konsolerc 放到当前目录下
# 重启 yakuake 应用进程 或者 注销电脑 或者重启电脑
```

#### 软件包管理器 pacman

> 顾名思义，你可以使用软件包管理器来下载，安装，卸载软件
>
> 但由于国内众所周知的 GFW，若不经合理的设置，我们无法下载到境外的一些软件包，这会给我们的日常使用造成困扰
>
> 因此我们第一步就需要修改软件包管理器背后依靠的软件源，只需连接互联网后，在终端执行一条命令

```bash
sudo pacman-mirrors -m rank -c China
```

> 由于 ManjaroLinux 官方采用滚动更新的方式更新系统，即官方每隔很短的时间比如几天就会发布一定量的系统更新，但官方还会在某个时间节点将该时间节点最新的系统以 .iso 镜像的方式发布到其官网，以避免用户在安装系统后仍需安装大量更新，所以我们刚安装好的“最新”系统其实往往不是最新的，因为有可能官方发布了一些系统更新，但还没有更新官网上的系统镜像，因此，我们在调整好软件包管理器的软件源后，就需要手动更新系统
>
> 同时，推荐所有 Arch 系用户养成时不时尝试接收系统更新并合理备份的习惯，防止由于一次性接收大量更新而可能造成的混乱
>
> 更新系统只需在终端中执行下面一条命令

```bash
sudo pacman -Syyu
```

> 系统更新完毕之后，手动重启电脑（强烈不建议强制关机或直接拔掉电源）

> 若开机之后按组合键 meta+space 无法调出 yakuake 的命令行界面，则很有可能是因为你没有将 yakuake 设置为开机自启

设置方式为：依次点击：系统设置->工作区->开机与关机->自动启动->添加->添加应用程序->搜索yakuake然后点击确定即可

下次开机 yakuake 就自动启动了，当然现在你不用重启，手动运行 yakuake 即可

#### 开机后

- 有一定的几率会遇到要求你输入钱包密码的问题，第一次遇到该问题我也很蒙，后来查阅资料知可以按照如下方式解决
  - 依次打开：系统设置-->个性化-->kde钱包
  - 首先，需要确保启用了 kde 钱包子系统，否则无法正常使用记录的账号密码信息
  - 然后，打开右下角的调用钱包管理器，更改密码，设置为空密码即可
  - 重启系统，可以看到密码认证已经跳过

- 你的系统应该已经安装了 neofetch 这个软件包，你只需在终端中执行`neofetch`命令，即可打印出你的电脑的相关信息

- 接下来我们尝试使用 pacman 来安装第一个软件，cmatrix，该软件可以在终端中展示黑客帝国代码雨的效果

```bash
sudo pacman -S cmatrix
```

- 解释：
  - sudo，可理解为 super user do，在一行命令的开头写上 sudo 就意味着本行命令会以系统管理员的身份执行（会被要求输入密码）
  - -S，安装

- 安装完毕后，要运行 cmatrix 软件，只需在终端执行`cmatrix`命令

- 然后我们下载安装两个必要的工具包

```bash
sudo pacman -S base base-devel
```

#### KRunner

> KDE 自带的 KRunner 是一个非常实用的小软件，通过默认快捷键 alt+space 可以在屏幕顶部很方便地将其打开，它拥有（启动软件，计算器，单位转换，文件搜索）等实用的功能

#### 关于语言的调整

> 默认情况下，用户家目录 ~/ 下会存在一些中文名称的目录，比如“桌面”，“文档”，“下载”，“音乐”，“图片”，“视频”等
>
> 由于系统默认没有中文输入法，为了方便我们在终端中进行操作，因此需要将这些中文目录名统一改为英语，一个好的习惯是任何文件（包括目录）的命名都使用英文半角，这在大多数操作系统中都能规避很多莫名其妙的软件报错
>
> 当然，将中文目录名修改为英文，我们可以借助软件包 xdg-user-dirs-gtk

```bash
sudo pacman -S xdg-user-dirs-gtk
```
```bash
export LANG=en_US
```
```bash
xdg-user-dirs-gtk-update
```

- 此时会弹出窗口，提示将要把目录名称改为英文，点击确定即可，然后我们再执行如下命令

```bash
export LANG=zh_CN.UTF-8
```

- 然后，系统自带的文件资源管理器 Dolphin 侧栏的子节点的映射路径有可能不正确，需逐个右键编辑校对一下

- 最后，我们删除用户主目录（家目录）下的“桌面”目录，因为和“Desktop”目录重复

#### vim，终端下的文件编辑器

> linux 中一切皆文件，为了方便我们在终端中对文件进行编辑，我们需要选用一款在终端中使用的编辑器，比如 nano，vim；本教程均使用 vim

```bash
sudo pacman -S vim
```

#### 配置中文输入法

> 五十六个民族五十六朵花，咱们大家都用中文输入法

```bash
# 安装输入法框架和输入法引擎
sudo pacman -S fcitx5-im fcitx5-chinese-addons

# 安装依赖和配置工具
sudo pacman -S fcitx5-qt fcitx5-gtk fcitx5-configtool

# 安装中文维基百科词库（可选，我要！）
sudo pacman -S fcitx5-pinyin-zhwiki

# 安装皮肤（可选，我就不要了～）
sudo pacman -S  fcitx5-material-color

# 使用 vim 打开配置文件（无则会自动新建）
vim ~/.pam_environment

# 写入以下配置后保存退出
GTK_IM_MODULE DEFAULT=fcitx5
QT_IM_MODULE  DEFAULT=fcitx5
XMODIFIERS    DEFAULT=\@im=fcitx5
SDL_IM_MODULE DEFAULT=fcitx5
```

- 重启系统，就会被提示是否启用云拼音，为了获得更好的输入体验，点击确定

- 切换中英文输入法的快捷键有两种：ctrl+space 或 ctrl+shift

- 然后鼠标右键系统托盘键盘指示器，依次点击 “配置”，“拼音”，“配置”

```bash
# 我的习惯
1. 勾选启用云拼音（若没有勾选）
2. 勾选在程序中显示预编辑文本（若没有勾选）
3. 勾选在预编辑中显示完整拼音
4. 点击“应用”！
```
