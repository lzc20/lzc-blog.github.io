import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,f as a}from"./app-rbSmiQO-.js";const d="/assets/1704789128112-ibjS2S2l.png",i={},l=a(`<h1 id="搭建博客遇到的问题" tabindex="-1"><a class="header-anchor" href="#搭建博客遇到的问题" aria-hidden="true">#</a> 搭建博客遇到的问题</h1><p>这边是模仿大佬来搭建自己的</p><h2 id="环境-node-js" tabindex="-1"><a class="header-anchor" href="#环境-node-js" aria-hidden="true">#</a> 环境 <code>node.js</code></h2><p>Node.js是一个基于Chrome V8引擎的JavaScript运行时环境，它允许使用JavaScript进行服务器端编程。Node.js采用事件驱动、非阻塞I/O模型，能够处理大量并发连接，使得构建高性能、可伸缩的网络应用变得更加容易。</p><p>Node.js主要用于构建网络应用，例如Web服务器、实时通讯应用、API服务器等。Node.js拥有丰富的模块库，可以轻松地完成各种任务，例如文件操作、网络通讯、加密解密等。Node.js还可以与多种数据库进行交互，例如MySQL、MongoDB等。</p><p>Node.js的特点包括：</p><ul><li>异步I/O：Node.js使用异步I/O模型，能够高效地处理大量并发请求。</li><li>事件驱动：Node.js基于事件驱动的编程模型，能够更好地处理复杂的业务逻辑。</li><li>单线程：Node.js采用单线程模型，避免了多线程编程中的死锁、状态同步等问题。</li><li>轻量级：Node.js代码库体积小，启动速度快，适合用于构建轻量级的网络应用。</li></ul><p>总之，Node.js是一种非常强大的技术，可以帮助开发者构建高性能、可伸缩的网络应用，尤其适用于处理大量并发请求的场景。</p><h2 id="版本管理工具-mvn" tabindex="-1"><a class="header-anchor" href="#版本管理工具-mvn" aria-hidden="true">#</a> 版本管理工具：<code>mvn</code></h2><p>版本可以进行切换，在需要不同得环境不同得node版本得时候，我们可以进行来回切换</p><p><code>nvm</code> 是一个 <strong>Node.js</strong> 版本管理工具，可以帮助你在同一台机器上安装和管理多个 Node.js 版本。以下是 <code>nvm</code> 常用的命令：</p><ul><li><code>nvm install &lt;version&gt;</code>：安装指定版本的 Node.js。</li><li><code>nvm use &lt;version&gt;</code>：切换到指定版本的 Node.js。</li><li><code>nvm ls</code>：列出已安装的所有 Node.js 版本。</li><li><code>nvm ls-remote</code>：列出所有可用的 Node.js 版本。</li><li><code>nvm alias &lt;name&gt; &lt;version&gt;</code>：为指定版本的 Node.js 设置别名。</li><li><code>nvm unalias &lt;name&gt;</code>：删除指定别名。</li><li><code>nvm current</code>：显示当前正在使用的 Node.js 版本。</li><li><code>nvm reinstall-packages &lt;version&gt;</code>：重新安装指定版本的 Node.js 所需的全局 npm 包。</li></ul><p>此外，还有其他一些命令和选项，可以通过 <code>nvm --help</code> 查看帮助文档。</p><h2 id="博客项目得环境设置" tabindex="-1"><a class="header-anchor" href="#博客项目得环境设置" aria-hidden="true">#</a> 博客项目得环境设置</h2><p>这样我从家里得电脑搞得公司得电脑，我得电脑里面存在node.js</p><p>啥得，但是现在，搞了半天这个环境才欧克</p><p>npm install 一定要搞完这个在进行。 并且我现在是在管理员得shell界面搞得一会不在这里搞下试试。</p><p>在这里我总结一下，我得更换电脑锁配置的环境步骤</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> vuepress <span class="token comment"># 全局按爪个vuepress</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token comment"># 在项目所在的目录上执行安装这个</span>
<span class="token function">npm</span> run docs:build <span class="token comment"># 进行构建</span>
<span class="token function">npm</span> run docs:dev <span class="token comment"># 这个是启动相应的服务，还有其他的方法但是我这边没有实验成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题：</h2><p>今天又遇到了个问题，我这边处理遇到了shell管权限不行的问题</p><figure><img src="`+d+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这个问题我在想如何解决？</p><p>1、先查看端口是否被占用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">netstat</span> <span class="token parameter variable">-ano</span> <span class="token operator">|</span> findstr <span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、如果没有占用情况那就把nat服务重启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net stop winnat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net start winnat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、然后我再次运行我的博客项目就启动起来了。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">npm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),o=[l];function c(t,r){return s(),n("div",null,o)}const u=e(i,[["render",c],["__file","2024-01-09问题.html.vue"]]);export{u as default};
