---
title: Gitlaub的CICD
date: 2024-01-13
category:
  - 运维
---
## 介绍



GitLab CI/CD 是一个内置在GitLab中的工具，用于通过持续方法进行软件开发：

- Continuous Integration (CI) 持续集成
- Continuous Delivery (CD) 持续交付
- Continuous Deployment (CD) 持续部署

使用GitLab CI/CD，还可以：

- 通过Auto DevOps轻松设置应用的整个生命周期
- 将应用程序部署到不同的环境
- 安装你自己的GitLab Runner
- Schedule pipelines
- 使用安全测试报告（Security Test reports）检查应用程序漏洞 



## 使用CICD管理自动化部署。

### 一、安装gatlub

1、安装依赖：
在安装 GitLab 之前，确保系统上已经安装了必要的依赖，如 curl、openssh-server 和 postfix（用于发送邮件通知）。
2、添加 GitLab 仓库并安装：
使用 curl 命令添加 GitLab 仓库：

```shell
curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

安装 GitLab 社区版（CE）或企业版（EE）：

```sehll
sudo EXTERNAL_URL="http://gitlab.example.com" apt-get install gitlab-ee 替换 http://gitlab.example.com
```

为你的域名或 IP 地址。
3、配置和启动 GitLab：
安装完成后，
运行配置命令：

```
sudo gitlab-ctl reconfigure
```

启动 GitLab 服务：

```
sudo gitlab-ctl start
```

置管理员密码：

访问 GitLab：在浏览器中输入 http://gitlab.example.com（替换为你的域名或 IP 地址）访问 GitLab 页面。
首次访问时，需要设置管理员密码以及登录信息。
在安装 GitLab CE 后，您需要设置一个管理员账号和密码，以便登录 GitLab CE 的 Web 界面。一般情况下，初始登录密码是随机生成的，并在安装过程中向您显示了该密码。如果您没有记录该密码，那么可以通过以下步骤来重置管理员密码：

- 打开 GitLab CE 的服务器终端，并以 root 用户身份登录。

- 运行以下命令以打开 GitLab Rails 控制台：
  gitlab-rails console

- 运行以下命令以获取管理员账号的 user_id：

```shell
user = User.where(id: 1).first
puts user.id
```

- 运行以下命令以重置管理员密码：

```shell
user.password='R#2sT8@pW!d3Md'
user.password_confirmation='R#2sT8@pW!d3Md'
user.save!
```

其中，new_password 是您要设置的新密码。

- 关闭 GitLab Rails 控制台并重新启动 GitLab CE：

```
exitg
gitlab-ctl restart
```

然后使用新密码登录 GitLab CE 的 Web 界面。

### 二、配置 GitLab 的 CI/CD    	

GitLab 项目的 CI/CD 配置中使用该 Runner 来运行**持续集成和持续交付任务**。

注意：
centos7，与 Ubuntu（乌班图系统）存在差异，命令方式存在不同，以下是乌班图的

添加 GitLab Runner 的官方存储库并安装它：

2.1、添加存储库密钥：

```
curl -L https://packages.gitlab.com/gpg.key | sudo apt-key add -
```


2.2、添加存储库：

```
echo "deb https://packages.gitlab.com/runner/gitlab-runner/ubuntu/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/gitlab-runner.list
```

2.3、更新包列表：

```shell
sudo apt update
```

2.4、安装 GitLab Runner：

```
sudo apt install gitlab-runner
```

2.5.重启相关的服务：

```
sudo systemctl daemon-reload
sudo systemctl restart gitlab-runner.service
```


2.6.确认GitLab Runner是否已经成功安装

```
gitlab-runner --version
```

这些步骤将从官方存储库中安装最新版本的 GitLab Runner。

### 三、配置gitlaub的.gitlab-ci.yml文件

在根目录中的.gitlab-ci.yml文件中指定构建、测试和部署的脚本。

在这里我只是将军一个简单的Java项目如何进行配置。















以上有部分内容来源博客园：[狂乱的贵公子](https://www.cnblogs.com/cjsblog)    [GitLab CI/CD](https://www.cnblogs.com/cjsblog/p/12256843.html)