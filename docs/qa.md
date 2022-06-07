#### KDE 动态壁纸

> 任意 .mp4 视频均可作为动态壁纸

1. 安装并使用插件：[Smart Video Wallpaper](https://store.kde.org/p/1316299/), by Adhe.

2. 若在设置动态壁纸时发现桌面黑屏，则说明系统中缺少该插件所需的必要软件套件 [GStreamer](https://wiki.archlinux.org/title/GStreamer#Installation)，安装后重启系统

3. 若 alt + D 返回桌面视频仍然暂停，则注释掉视频的 pause 功能，如下图所示

![solve1](https://aliyun-oss-lpj.oss-cn-qingdao.aliyuncs.com/images/mass/solve1.png)

![solve2](https://aliyun-oss-lpj.oss-cn-qingdao.aliyuncs.com/images/mass/solve2.png)

#### 终端美化

<img src="https://aliyun-oss-lpj.oss-cn-qingdao.aliyuncs.com/images/by-picgo/image-20220316203229602.png" alt="image-20220316203229602" style="zoom:50%;" />

- 下载[配置文件](https://github.com/Brannua/cfg-files/tree/master/konsole-yakuake-cfg/)

- 打开 konsole 进行配置

```bash
cd ~/.local/share/konsole
ls -al

# 若有文件输出，则删除所有文件
# 将下载好的配置文件 Breeze.colorscheme 和 lpj-theme.profile 移动到当前目录下
# 鼠标右键 konsole 窗口，切换编辑方案，选择 lpj-theme
# 鼠标右键 konsole 窗口，编辑当前方案，勾选「默认配置方案」，应用，确定
```

- konsole 配置完成，关闭

- 打开 yakuake 进行配置

```bash
cd ~/.config

ls | grep konsolerc
# 若输出 konsolerc，则
rm konsolerc

ls | grep yakuakerc
# 若输出 yakuakerc，则
rm yakuakerc

# 将下载好的配置文件 yakuakerc 和 konsolerc 移动到当前目录下

reboot
```
#### 开机后被要求输入钱包密码 ？

- 依次打开：系统设置 => 个性化 => kde钱包

- 确保 kde 钱包子系统已启用（否则将无法正常使用记录的账号密码信息）

- 打开右下角的调用钱包管理器，更改密码，设置为空密码

- 重启系统，密码认证就已经跳过

#### 蓝牙耳机已连接但是没有声音 ？

参考：https://wiki.archlinux.org/title/Bluetooth/

```bash
sudo pacman -S bluez
sudo pacman -S bluez-utils
sudo pacman -S pulseaudio-bluetooth

systemctl enable bluetooth
systemctl restart bluetooth
killall pulseaudio

# 最后点开蓝牙的设备管理器，将蓝牙耳机移除，然后重新连接
```

#### 无法更改系统用户名密码 ？

[![image-20220302102118703](https://aliyun-oss-lpj.oss-cn-qingdao.aliyuncs.com/images/by-picgo/image-20220302102118703.png)](https://forum.manjaro.org/t/unable-to-change-avatar-and-password/103548)

#### ~程序启动器搜索不到新安装的应用软件 ？~

> 本 BUG 已被官方 handle by `mkdir ~/.local/share/applications` ！

#### 清空回收站提示权限错误/无法清空回收站 ？

```sh
cd ~/.local/share/Trash/files
rm -rf ./*
```

#### 开机挂载失败，进不去系统 ？

磁盘的各个分区都有唯一的 UUID 标识，Linux 会将 UUID 与 文件系统挂载点的对应关系保存在 `/etc/fatab` 文件中

开机时，Linux 会根据 `/etc/fatab` 文件中的信息，进行文件系统的挂载

如果磁盘的 UUID 改变，比如你对磁盘的分区情况做了修改

那显然，`/etc/fatab` 文件中的信息就已经是旧的了

就像是你搬家了，快递小哥手里保存的还是你家原来的地址，那肯定送货失败

同理，文件系统肯定挂载失败，提示信息就像：`hibernation device 'UUID=xxx..' not found`

如何拯救呢 ？

首先，系统在尝试几次挂载发现都失败了的时候，就会提示你输入用户密码进入 tty 终端，进入之后，做如下操作

```bash
# 查询磁盘各分区当前的 UUID，并用手机拍照记录（用 blkid 命令也行）
sudo lsblk -f

# 将 UUID 改对
sudo cp /etc/fstab /etc/fstab.bak
sudo vi /etc/fstab
```

如果你的 Linux 系统拥有 Swap 分区，那么你还需要修改 grub.cfg 文件，因为其中记录着 Swap 分区的 UUID

![disk2](https://aliyun-oss-lpj.oss-cn-qingdao.aliyuncs.com/images/mass/disk2.png)
