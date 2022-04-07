> 本节介绍一些作为一个 linux 用户应该知道的东西，先科学上网啊喂

#### 怎么查一个命令属于哪个软件包呢 ？

```bash
# pacman
sudo pacman -F commandName

# aur
yay -F commandName
```

#### 查看一个命令的使用方式

> 再往下的命令大多只给关键词，具体用法自行按照此处介绍的 3 种方式查阅使用手册

```bash
sudo pacman -S tldr

# 查询高频用法（二八原则）
tldr command

# 查询用法清单
command --help

# 查询详细用法清单
man command
```

#### 查看当前使用的电脑的详细硬件配置信息

```bash
# 法一：以图形化的方式查看 cpu 与 显卡 的详细参数可使用如下两款软件
cpu-x gpu-viewer

# 法二：在终端中输出较完整的硬件参数信息
dmidecode
```

#### 磁盘格式化

```bash
# 法一：以图形化的方式格式化磁盘使用 KDE 自带的软件：KDE分区管理器

# 法二：在终端中对磁盘进行格式化操作
sudo fdisk -l 						# 查看磁盘
sudo umount /dev/sdx 			# 卸载磁盘
sudo mkfs.ext4 /dev/sdx   # 格式化磁盘为 ext4 格式（适用于 linux 操作系统）
```

#### 磁盘操作

```bash
# 列出设备信息
lsblk

# 磁盘挂载方式
mkdir /mnt/mountPoint
mount

# 磁盘分区管理
fdisk
```

#### 查看当前磁盘的使用情况

```bash
# 法一：以图形化的方式查看当前磁盘的使用情况可使用如下一款软件
filelight

# 法二：在终端中输出当前磁盘的使用情况
df
```

#### 查看内存的使用情况

```bash
free
```

| 1    | total      | 系统总的可用物理内存大小                               |
| ---- | ---------- | ------------------------------------------------------ |
| 2    | used       | 已被使用的物理内存大小                                 |
| 3    | free       | 真正尚未被使用的物理内存大小                           |
| 4    | shared     | 被共享使用的物理内存大小                               |
| 5    | buff/cache | 被 buffer 和 cache 使用的物理内存大小                  |
| 6    | available  | 可以被`应用程序`使用的物理内存大小 ≈ free + buff/cache |

> 操作系统为了提升读写性能（缓解 CPU 和磁盘之间的速度差距），会消耗一部分内存资源缓存磁盘数据，对于系统内核而言，buff/cache 属于已经被使用了的内存，但当应用程序申请内存时，如果 free 不够，操作系统内核就会从 buff/cache 回收内存资源提供给应用程序使用

#### 系统服务

> Linux 系统中运行着各种服务，需要我们掌握服务的增删改查方式，这里讲述`systemctl`的用法，以`dhcpcd`为例

```bash
systemctl start dhcpcd            # 启动服务
systemctl stop dhcpcd             # 停止服务
systemctl restart dhcpcd          # 重启服务
systemctl reload dhcpcd           # 重新加载服务以及它的配置文件
systemctl status dhcpcd           # 查看服务状态
systemctl enable dhcpcd           # 设置服务开机自启
systemctl enable --now dhcpcd     # 设置服务开机自启并立即启动这个单元
systemctl disable dhcpcd          # 取消服务的开机自启
systemctl daemon-reload dhcpcd    # 重新载入 systemd 配置 扫描新增或变更的服务单元 不会重新加载变更的配置 加载变更的配置用 reload
```

#### 进程管理

```bash
# 进程输出（静态）
ps

# 进程监控（动态）
top

# 杀死某个 PID 对应的进程
kill PID
```

#### 文件权限管理

```bash
chown
```

#### 系统字体管理

```bash
fc-list
```

#### 系统备份

```bash
sudo pacman -S timeshift
```

> 准备一个被格式化为 ext4 类型的[文件系统](https://liupj.top/2022/02/03/knowledge/os/fileSys/)，使用 RSYNC 模式进行备份
>
> 强调：及时合理地备份是个好习惯，能救命的好习惯！

#### 结语

恭喜，你看到了结语，希望本教程对你有所帮助，作为计算机专业的学生，我是因为 windows 使用体验确实一般，并且十分羡慕同学的苹果电脑，所以才接触到了 linux，但是 linux 却打开了我新世界的大门，和 macos 同属于 unix 操作系统的 linux，尤其是 archlinux 和基于 archlinux 的一众发行版，都具有极高的可自定义程度，linux 是个神奇的东西，你越是好奇花的时间越长，就对它越了解，同时你也越能发现你所不知道的东西越多，你也渐渐学到了很多，收获了很多，就像本教程开头所讲的各种 linux 独有的优点，同时你也在变得与众不同，正是这种与众不同，满足我的虚荣心更带给我成就感和愉悦感，我也相信这种不同会在不经意间给我提供帮助，给我增加可能性。致敬 linux 的缔造者 [Linus](https://baike.baidu.com/item/%E6%9E%97%E7%BA%B3%E6%96%AF%C2%B7%E6%9C%AC%E7%BA%B3%E7%AC%AC%E5%85%8B%E7%89%B9%C2%B7%E6%89%98%E7%93%A6%E5%85%B9/1034429)，感谢 linux 社区和网络上的大佬们，让我这个小白可以如此受益。
