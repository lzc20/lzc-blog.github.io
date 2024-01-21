const e=JSON.parse('{"key":"v-0c081288","path":"/knowledge/01-Java/02-Java%E5%9F%BA%E7%A1%80%E9%83%A8%E5%88%86(%E4%B8%8B).html","title":"java基础(中)","lang":"zh-CN","frontmatter":{"order":3,"title":"java基础(中)"},"headers":[{"level":2,"title":"异常","slug":"异常","link":"#异常","children":[{"level":3,"title":"Exception 和 Error 有什么区别？","slug":"exception-和-error-有什么区别","link":"#exception-和-error-有什么区别","children":[]},{"level":3,"title":"Checked Exception 和 Unchecked Exception 有什么区别？","slug":"checked-exception-和-unchecked-exception-有什么区别","link":"#checked-exception-和-unchecked-exception-有什么区别","children":[]}]}],"git":{"createdTime":1705849339000,"updatedTime":1705849339000,"contributors":[{"name":"lwx1095775","email":"lzc525@qq.com","commits":1}]},"readingTime":{"minutes":1.57,"words":472},"filePathRelative":"knowledge/01-Java/02-Java基础部分(下).md","localizedDate":"2024年1月21日","excerpt":"<h1> 01-02Java基础（下）</h1>\\n<h2> 异常</h2>\\n<p><strong>Java 异常类层次结构图概览</strong>：</p>\\n<figure><figcaption></figcaption></figure>\\n<h3> Exception 和 Error 有什么区别？</h3>\\n<p>在 Java 中，所有的异常都有一个共同的祖先 <code>java.lang</code> 包中的 <code>Throwable</code> 类。<code>Throwable</code> 类有两个重要的子类:</p>\\n<ul>\\n<li><strong>Exception</strong> :程序本身可以处理的异常，可以通过 <code>catch</code> 来进行捕获。<code>Exception</code> 又可以分为 Checked Exception (受检查异常，必须处理) 和 Unchecked Exception (不受检查异常，可以不处理)。</li>\\n<li><strong>Error</strong>：<code>Error</code> 属于程序无法处理的错误 ，我们没办法通过 <code>catch</code> 来进行捕获不建议通过<code>catch</code>捕获 。例如 Java 虚拟机运行错误（<code>Virtual MachineError</code>）、虚拟机内存不够错误(<code>OutOfMemoryError</code>)、类定义错误（<code>NoClassDefFoundError</code>）等 。这些异常发生时，Java 虚拟机（JVM）一般会选择线程终止。</li>\\n</ul>"}');export{e as data};
