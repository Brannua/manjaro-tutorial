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

~~出于学习的目的，我决定使用更常见更通用兼容性更好的 [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell))~~

目前使用 [Zsh](https://en.wikipedia.org/wiki/Z_shell)

#### add gitstatus to shell_prompt

| 名称          | 官方网址                             |
|:--------------|:-------------------------------------|
| ~~gitstatus~~ | https://github.com/romkatv/gitstatus |

目前是自己自定义的 zsh 的 prompt，使用了 zsh 内置的 vsc_info，参考了[这篇博客](https://arjanvandergaag.nl/blog/customize-zsh-prompt-with-vcs-info.html)

#### Shell Debugger

| 名称       | 官方网址                               |
|:-----------|:---------------------------------------|
| shellcheck | https://github.com/koalaman/shellcheck |

#### 压缩/解压缩

| 名称  | 官方网址 |
|:------|:---------|
| zip   | <++>     |
| unzip | <++>     |

#### 编辑器

> 如下三款编辑器均为一个完整的编程语言

| 名称 | 官方网址             |
|:-----|:---------------------|
| vim  | https://www.vim.org/ |
| sed  | 流编辑器，专注行编辑 |
| awk  | 流编辑器，专注列编辑 |

#### 流编辑

| 名称  | 官方网址 |
|:------|:---------|
| sort  | <++>     |
| uniq  | <++>     |
| paste | <++>     |

#### 参数处理

| 名称  | 官方网址                                   |
|:------|:-------------------------------------------|
| xargs | execute a command using STDIN as arguments |

#### 统计工具

| 名称 | 官方网址               |
|:-----|:-----------------------|
| wc   | word count             |
| du   | file/folder size count |

#### 计算器

| 名称 | 官方网址                   |
|:-----|:---------------------------|
| bc   | berkely caculator ? may be |

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

#### Copying files over SSH

refer to: https://missing.csail.mit.edu/2020/command-line/

| 名称    | 官方网址 |
|:--------|:---------|
| ssh+tee |          |
| scp     |          |
| rsync   |          |

#### 视频下载工具

| 名称            | 官方网址                                   |
|:----------------|:-------------------------------------------|
| lux-dl          | https://github.com/iawia002/lux            |
| you-get         | https://github.com/soimort/you-get         |
| Mooc_Downloader | https://github.com/Brannua/Mooc_Downloader |

#### 文件资源管理工具

| 名称   | 官方网址                     |
|:-------|:-----------------------------|
| exa    | https://github.com/ogham/exa |
| ranger | https://ranger.github.io     |

将默认配置文件拷贝到`~/.config/ranger`、让各种文件可以预览、集成 icon 和 git 等等一系列功能，都可参考官方文档

对于 manjaroKDE with x11，亲测 ueberzug 对于图片预览比较好用

#### 搜索工具

| 名称    | 官方网址                                                |
|:--------|:--------------------------------------------------------|
| fd      | https://github.com/sharkdp/fd                           |
| locate  | https://www.man7.org/linux/man-pages/man1/locate.1.html |
| fzf     | https://github.com/junegunn/fzf                         |
| ripgrep | https://github.com/BurntSushi/ripgrep                   |
| ag      | https://github.com/ggreer/the_silver_searcher           |

#### 增强 Git 能力的工具

| 名称          | 官方网址                                                  |
|:--------------|:----------------------------------------------------------|
| diff-so-fancy | https://github.com/so-fancy/diff-so-fancy                 |
| git-sizer     | https://archlinux.org/packages/community/x86_64/git-sizer |

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
| convert     | <++>                                       |

#### image viewer

| 名称 | 官方网址                                            |
|:-----|:----------------------------------------------------|
| imv  | https://archlinux.org/packages/community/x86_64/imv |

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

