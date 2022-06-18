# nifty-shell-tools-collection

> 此处收录我认为好用的终端中使用的工具，安装和使用方法请自行查阅工具的官方网址
>
> 若使用 ArchLinux 以及其衍生 Linux 发行版，也可查阅 [ArchWiki](https://wiki.archlinux.org/)
>
> 通常，较好的安装方式是使用发行版的官方包管理工具，比如 pacman

#### manual page
 
| 名称 | 官方网址                           |
|:-----|:-----------------------------------|
| tldr | https://github.com/tldr-pages/tldr |
| man  |                                    |

#### Shell Scripting Language

出于学习的目的，我决定使用更常见更通用兼容性更好的 [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))

#### Shell Debugger

| 名称       | 官方网址                               |
|:-----------|:---------------------------------------|
| shellcheck | https://github.com/koalaman/shellcheck |

#### 系统服务管理

| 名称      | 官方网址 |
|:----------|:---------|
| systemctl |          |

#### 系统时间设置工具

| 名称        | 官方网址 |
|:------------|:---------|
| timedatectl |          |

#### 网络工具

| 名称       | 官方网址                                   |
|:-----------|:-------------------------------------------|
| iputils    | https://github.com/iputils/iputils         |
| speed-test | https://github.com/sindresorhus/speed-test |

#### 视频下载工具

| 名称    | 官方网址                           |
|:--------|:-----------------------------------|
| lux-dl  | https://github.com/iawia002/lux    |
| you-get | https://github.com/soimort/you-get |


#### 文件资源管理工具

| 名称   | 官方网址                     |
|:-------|:-----------------------------|
| exa    | https://github.com/ogham/exa |
| ranger | https://ranger.github.io     |

#### 搜索工具

| 名称    | 官方网址                              |
|:--------|:--------------------------------------|
| fd      | https://github.com/sharkdp/fd         |
| fzf     | https://github.com/junegunn/fzf       |
| ripgrep | https://github.com/BurntSushi/ripgrep |

#### 增强 Git 能力的工具

| 名称          | 官方网址                                  |
|:--------------|:------------------------------------------|
| diff-so-fancy | https://github.com/so-fancy/diff-so-fancy |

#### 与剪贴板交互的工具

| 名称  | 官方网址                         |
|:------|:---------------------------------|
| xclip | https://github.com/astrand/xclip |

#### 分页器

| 名称 | 官方网址                       |
|:-----|:-------------------------------|
| bat  | https://github.com/sharkdp/bat |

#### 进程管理工具

| 名称  | 官方网址                         |
|:------|:---------------------------------|
| htop  | https://github.com/htop-dev/htop |
| procs | https://github.com/dalance/procs |

#### 图像处理工具

| 名称        | 官方网址                                   |
|:------------|:-------------------------------------------|
| ffmpeg      | https://github.com/FFmpeg/FFmpeg           |
| imagemagick | https://github.com/ImageMagick/ImageMagick |

#### 一些好玩儿的工具

| 名称      | 官方网址                                          |
|:----------|:--------------------------------------------------|
| screenkey | https://www.thregr.org/~wavexx/software/screenkey |
| figlet    | https://github.com/cmatsuoka/figlet               |

#### EFI 相关

| 名称       | 官方网址                             |
|:-----------|:-------------------------------------|
| efibootmgr | https://github.com/rhboot/efibootmgr |

#### 内存监控

使用 `free` 程序

以下为其输出内容的解释

| 序号 | 名称       | 释义                                               |
|:-----|:-----------|:---------------------------------------------------|
| 1    | total      | 系统总的可用物理内存大小                           |
| 2    | used       | 已被使用的物理内存大小                             |
| 3    | free       | 真正尚未被使用的物理内存大小                       |
| 4    | shared     | 被共享使用的物理内存大小                           |
| 5    | buff/cache | 被 buffer 和 cache 使用的物理内存大小              |
| 6    | available  | 可被应用程序使用的物理内存大小 ≈ free + buff/cache |

对于操作系统而言，buff/cache 属于已经被使用了的内存

但当应用程序申请内存，而 free 的内存不够时，操作系统就会从 buff/cache 回收内存，以提供给应用程序使用

#### 计算机系统信息查询

| 名称        | 官方网址                                              |
|:------------|:------------------------------------------------------|
| dmidecode   | https://archlinux.org/packages/extra/x86_64/dmidecode |
| screenfetch | https://github.com/KittyKatt/screenFetch              |
| neofetch    | https://github.com/dylanaraps/neofetch                |

#### 磁盘相关工具

| 名称  | 官方网址 |
|:------|:---------|
| fdisk |          |
| lsblk |          |

#### 翻译工具

| 名称  | 官方网址                                     |
|:------|:---------------------------------------------|
| fy    | https://github.com/tsq/youdao-cli-translator |
| fanyi | https://github.com/afc163/fanyi              |

