import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,f as t}from"./app-mFLLirP8.js";const l={},o=t('<p>Java基础</p><h2 id="基础概念与常识" tabindex="-1"><a class="header-anchor" href="#基础概念与常识" aria-hidden="true">#</a> 基础概念与常识</h2><h3 id="java-语言有哪些特点" tabindex="-1"><a class="header-anchor" href="#java-语言有哪些特点" aria-hidden="true">#</a> Java 语言有哪些特点?</h3><ol><li>简单易学；</li><li>面向对象（封装，继承，多态）；</li><li>平台无关性（ Java 虚拟机实现平台无关性）；</li><li>支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）；</li><li>可靠性（具备异常处理和自动内存管理机制）；</li><li>安全性（Java 语言本身的设计就提供了多重安全防护机制如访问权限修饰符、限制程序直接访问操作系统资源）；</li><li>高效性（通过 Just In Time 编译器等技术的优化，Java 语言的运行效率还是非常不错的）；</li><li>支持网络编程并且很方便；</li><li>编译与解释并存</li></ol><h3 id="aot-有什么优点-为什么不全部使用-aot-呢" tabindex="-1"><a class="header-anchor" href="#aot-有什么优点-为什么不全部使用-aot-呢" aria-hidden="true">#</a> AOT 有什么优点？为什么不全部使用 AOT 呢？</h3><p>JDK 9 引入了一种新的编译模式 <strong>AOT(Ahead of Time Compilation)</strong> 。和 JIT 不同的是，这种编译模式会在程序被执行前就将其编译成机器码，属于静态编译（C、 C++，Rust，Go 等语言就是静态编译）。AOT 避免了 JIT 预热等各方面的开销，可以提高 Java 程序的启动速度，避免预热时间长。并且，AOT 还能减少内存占用和增强 Java 程序的安全性（AOT 编译后的代码不容易被反编译和修改），特别适合云原生场景。</p>',6),r=[o];function n(h,s){return i(),e("div",null,r)}const _=a(l,[["render",n],["__file","Java基础部分.html.vue"]]);export{_ as default};
