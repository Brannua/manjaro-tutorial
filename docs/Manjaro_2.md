> 默认你已经设置好并开启了系统代理，能够以可用的网速科学上网

<!-- more -->

#### Git，迄今最好用的版本控制工具

> 无论你是文字工作者，程序员或其他行业的从业者，Git 都能成为你的好帮手，官方文档[戳此](https://git-scm.com/)，本教程不讲解 Git，但它仍然值得你尝试

- manjaro 自带 Git，在终端中执行如下一条命令即可验证（会输出 Git 的版本号）

```bash
git --version
```

- 要使用 Git，至少需要做以下的配置才能用得舒服

```bash
# 告诉 git 你是谁
git config --global user.name "your_name"

# 告诉 git 你的邮箱，git 会将重要的消息发送到你的邮箱
git config --global user.email "your_email@domain.com"

# 将 git 默认使用的 nano 编辑器更换为 vim
git config --global core.editor vim

# 防止 git 输出的中文乱码
git config --global core.quotepath false

# 指定 git 使用的分页器，可设置为 more 或任何你喜欢的分页器（默认用的是 less），当然你也可以什么都不用，比如像下面这样设置为空字符串
git config --global core.pager ''

# 将新仓库的初始分支名设置为 master
git config --global init.defaultBranch master

# （可选，我就先不设置了～）限制 git 的单次提交最大数据量，1MB==1048576Byte
git config --global http.postBuffer 1048576
```

- 额外解释一点内容

```bash
# config 的 3 个作用域
git config --local  # local 只对某个仓库有效，缺省等同于 local
git config --global # global 对当前用户的所有仓库有效
git config --system # system 对系统的所有登陆用户有效

# 输出查看 config 的配置，就加 --list
git config --list --local
git config --list --global
git config --list --system
```

#### diff-so-fancy（可选，我暂时不安装了）

> git diff 的替代品

```sh
# 安装
sudo pacman -S diff-so-fancy
```

安装后，参考[官方文档](https://github.com/so-fancy/diff-so-fancy)，将它配置为 Git 的默认 diff 工具就可以了

#### Github，全球最大的代码托管平台

> 这也是我们获取资源的重要途径

- 为了更方便地托管我们的各种文件和各种代码而不需次次都询问我们 github 的账号密码，所以采用配置公私钥非对称加解密的方式让我们本地和 github 通信，这里只记录最简步骤，可参考我的[这篇博文](https://liupj.top/2021/09/28/practise/git-ssh/)

- 从今往后，我们使用 ssh 的方式与 github 通信就不需要密码，因为本地有私钥，云端有公钥，公私钥加解密的方式就已经确保了通信的安全性

#### 自定义触摸板手势操作

> 就像 macos 的触摸板那样方便 ！

- 第一步，see [FAQ](https://github.com/JoseExposito/touchegg#faq)

- 第二步，安装核心程序包 [touchegg](https://github.com/JoseExposito/touchegg)

- 第三步，安装图形化客户端，更方便地配置手势

```bash
yay -S community/touche
```

> 接下来重启电脑，然后运行应用程序 touche，自由设置手势操作吧～

#### 配置你的 vim，让它更好用

- 只需将我的[配置文件](https://github.com/Brannua/dot_files/blob/master/.vimrc)拷贝到你的家目录下，然后重启 vim 即可

#### AUR

> manjaro 基于 arch，而 arch 有一个软件托管平台叫 aur（arch-user-repository），其中几乎包含了你所有想要的软件包，既有官方维护的也有社区维护的
> 
> 我们可以使用 yay + pacman 的方式安装软件包 => [为什么不推荐使用 yay 安装非 AUR 软件包？](https://www.bilibili.com/read/cv11518630/) & [yay 作者的回复](https://github.com/Jguer/yay/issues/1601)
>
> yay 在底层上很多做法是能用 pacman 就用 pacman 的，yay 的作者主要是在 pacman 的基础上增加了 aur helper 的能力，并尽力做到接口上的统一
>
> 让 yay 能够替代 pacman 的确是 yay 作者的目标，但至少目前来看，直接用 yay 替代 pacman 仍稍显激进
>
> `因此：比较推荐的做法是，能用 pacman 就用 pacman，把 yay 作为备选手段`

```bash
# 安装 yay
sudo pacman -S yay
```

#### node.js & npm

```bash
sudo pacman -S nodejs npm
node -v
npm -v

# 如果你的工作场景需要使用到多个版本的 node.js，则使用 [nvm](https://github.com/nvm-sh/nvm) 管理 node.js 的版本
sudo pacman -S nvm

-----------以下均为没有配置科学上网时的下载加速手段-----------

# 配置淘宝 mirrors
npm config get registry
npm config set registry https://registry.npm.taobao.org/

# cnpm
sudo npm i -g cnpm
```

#### 配置你的 zsh，让它更好用

- 首先安装[ohmyzsh](https://ohmyz.sh/)，用过的都说好

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

#### 完善解压缩工具 ark

```bash
sudo pacman -S unzip unrar lzop lrzip
```

#### 好用的第三方软件包

```bash
sudo pacman -S tree
```
```bash
sudo pacman -S exa # 替代 ls
```
```bash
sudo pacman -S htop # 管理进程
```
```bash
sudo pacman -S bat # 分页器
```
```bash
sudo pacman -S procs # 替代 ps
```
```bash
sudo pacman -S ripgrep # 替代 grep
```

#### ranger（可选）

> 装B神器，我就暂时不安装了

- rangerWiki：https://github.com/ranger/ranger/wiki/

```bash
sudo pacman -S ranger
```

- 让 ranger 可以预览图片：https://github.com/ranger/ranger/wiki/Image-Previews#with-ueberzug

```bash
sudo pacman -S ueberzug

mkdir -p ~/.config/ranger

vim ~/.config/ranger/rc.conf

# 写入以下配置保存退出即可
set preview_images true
set preview_images_method ueberzug
```

---

- 按照官方文档下载下面两个软件包
  - [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions/blob/master/INSTALL.md#oh-my-zsh)
  - [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting/blob/master/INSTALL.md#oh-my-zsh)
- 然后按照[这个](https://github.com/Brannua/cowsay_words/blob/master/README.md)进行配置（终端老牛讲单词）

- 配置终端翻译工具，参考：[youdao-cli-translator](https://github.com/tsq/youdao-cli-translator#%E5%AE%89%E8%A3%85)

```bash
sudo npm i -g youdao-cli-translator
```

- YOUDAO_APP_ID 和 YOUDAO_APP_KEY 获取方法参考[这里](https://github.com/tsq/youdao-cli-translator#%E5%9C%A8%E6%9C%89%E9%81%93%E6%99%BA%E4%BA%91%E4%B8%8A%E6%96%B0%E5%BB%BA%E4%B8%80%E4%B8%AA%E5%BA%94%E7%94%A8)

- 最后将我的[配置文件](https://github.com/Brannua/dot_files/blob/master/.zshrc)拷贝到你的家目录下，配置好 YOUDAO_APP_ID 和 YOUDAO_APP_KEY 然后重启 vim 即可

#### 开启多线程下载以提高下载软件的速率（可选，我要 ！）

```bash
sudo pacman -S axel

sudo vim /etc/pacman.conf

# 将 XferCommand = /usr/bin/wget --passive-ftp -c -O %o %u 替换为如下，然后保存退出
XferCommand = /usr/bin/axel -o %o %u
```

- 从此以后，你的下载就使用了多线程！
