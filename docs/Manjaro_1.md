#### 调整外设的默认参数

- 系统设置 => 硬件 => 输入设备

  - 触摸板 => 勾选反向滚动 => 指针加速0.4 => 应用

  - 鼠标 => 指针速度增加两格 => 应用

#### 终端

- 打开终端的 3 种方式

  - 注意：当你第一次打开 yakuake 的下拉面板，会自动弹窗，询问你是否需要修改打开 yakuake 下拉面板的快捷键

  - 推荐将默认的 f12 修改为 meta + space

1. ctrl + alt + t => konsole

2. f12 => yakuake

3. meta + e => open dolphin => f4 => terminal

#### KRunner

- 一款自带的实用小软件，默认快捷键 alt + space

- 拥有（启动软件、计算器、文件搜索、单位转换、...）等实用功能

#### 设置软件源 & 更新系统

```bash
# pacman => manjaro 的软件包管理器
sudo pacman-mirrors -m rank -c China

# manjaro 为滚动更新，每隔几天就会有少量系统更新发布，官方 ISO 未必是最新系统
sudo pacman -Syyu

# 下载安装必要工具集
sudo pacman -S base base-devel

reboot

# 重启进入桌面后，若发现 meta + space 无法调出 yakuake 的命令行界面，则很大概率是你没有将 yakuake 设置为开机自启
系统设置 => 工作区 => 开机与关机 => 自动启动 => 添加 => 添加应用程序 => 搜索 yakuake 并点击确定

reboot
```

> 建议养成每周尝试接收系统更新的习惯，并合理备份，防止由于一次性接收大量更新而可能造成的系统混乱

#### 终端美化

<img src="https://aliyun-oss-lpj.oss-cn-qingdao.aliyuncs.com/images/old-from-gitee-2022-03-25/by-picgo/image-20220316203229602.png" alt="image-20220316203229602" style="zoom:50%;" />

- 将相关配置文件下载到本地，See [here](https://github.com/Brannua/dot-files/tree/master/konsole-yakuake-cfg)

- 打开 konsole 进行配置

```bash
cd ~/.local/share/konsole

ls -al

# 若有文件输出，则删除所有文件
# 然下载好的配置文件 Breeze.colorscheme 和 lpj-theme.profile 放到当前目录下
# 鼠标右键 konsole 窗口，切换编辑方案，选择 lpj-theme
# 鼠标右键 konsole 窗口，编辑当前方案，勾选「默认配置方案」，应用，确定
# 关闭 konsole
```

- 打开 yakuake 进行配置

```bash
cd ~/.config

ls | grep konsolerc

# 若输出 konsolerc，则执行
rm konsolerc

ls | grep yakuakerc

# 若输出 yakuakerc，则执行
rm yakuakerc

# 最后：将下载好的配置文件 yakuakerc 和 konsolerc 放到当前目录下

reboot
```

#### 现代化你的终端

```bash
# ZShell
chsh -s /bin/zsh

# editor
sudo pacman -S vim

# 终端复用器
sudo pacman -S tmux
cd ~
vim .tmux.conf

# 将如下内容加入并保存退出（这样新 pane 就能记住旧 pane 的工作目录啦）
bind-key c new-window -c "#{pane_current_path}"
bind-key % split-window -h -c "#{pane_current_path}"
bind-key '"' split-window -c "#{pane_current_path}"

# oh-my-tmux（可选）
https://github.com/gpakosz/.tmux/
```

#### 系统语言 & 中文输入法

- 如果在安装系统时，你选择的是中文系统，那么此时你家目录下的目录名应该都是中文

- 但很抱歉，中文不便于我们在终端中进行操作，而且系统并不自带中文输入法

- 故需要将家目录下的目录名由中文改为英文

> 一个好的习惯是任何文件的命名都使用英文半角，这在大多数操作系统中都能规避很多莫名其妙的软件报错

```bash
sudo pacman -S xdg-user-dirs-gtk
export LANG=en_US
xdg-user-dirs-gtk-update

# 此时会弹窗询问是否需要将目录名由中文改为英文，点击确定

export LANG=zh_CN.UTF-8

# 文件资源管理器 dolphin 侧栏的子节点的映射路径有可能不正确，需逐个右键编辑校对一下
# 最后，删除用户家目录下的“桌面”目录，因为和“Desktop”目录重复
```

- 安装配置中文输入法

```bash
# 输入法框架 & 输入法引擎
sudo pacman -S fcitx5-im fcitx5-chinese-addons

# 依赖和配置工具
sudo pacman -S fcitx5-qt fcitx5-gtk fcitx5-configtool

# 中文维基百科词库
sudo pacman -S fcitx5-pinyin-zhwiki
```

```bash
vim ~/.pam_environment

# 写入以下配置，保存退出
GTK_IM_MODULE DEFAULT=fcitx5
QT_IM_MODULE  DEFAULT=fcitx5
XMODIFIERS    DEFAULT=\@im=fcitx5
SDL_IM_MODULE DEFAULT=fcitx5
```

```bash
reboot

# 进入桌面后，会被提示是否启用云拼音，点击确定
# 中英文输入法的切换快捷键默认有 2 种：ctrl + space 或 ctrl + shift
```

- 鼠标右键系统托盘键盘指示器，依次点击“配置”，“拼音”，“配置”，确保以下选项被勾选

`启用云拼音`、`在程序中显示预编辑文本`、`在预编辑中显示完整拼音`

- 点击“应用” ！

#### 常见问题

- 如果你在开机后被要求输入钱包密码，则

  - 依次打开：系统设置 => 个性化 => kde钱包

  - 确保 kde 钱包子系统已启用（否则将无法正常使用记录的账号密码信息）

  - 打开右下角的调用钱包管理器，更改密码，设置为空密码

  - 重启系统，密码认证就已经跳过

#### 查看电脑概要信息

```bash
neofetch
```
