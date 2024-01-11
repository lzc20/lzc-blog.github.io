const e=JSON.parse('{"key":"v-b38c6002","path":"/knowledge/%E6%95%B0%E6%8D%AE%E5%BA%93/TiDB%E6%95%B0%E6%8D%AE%E5%BA%93/TiDB.html","title":"TiDB 数据库","lang":"zh-CN","frontmatter":{"title":"TiDB 数据库","icon":"icon-star","description":"01 TiDB 数据库架构概述 水平扩容或者缩容 金融高级可用 实时HTAP 云原生的分布式数据库 兼容MySQL5.7协议 img 1、TiDB Server 处理客户端的连接 Sql语句的解释和编译 关系型数据与KV的转化 SQL语句的执行 执行online DDL 垃圾回收（删除历史版本的数据）","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/lzc-blog.github.io/knowledge/%E6%95%B0%E6%8D%AE%E5%BA%93/TiDB%E6%95%B0%E6%8D%AE%E5%BA%93/TiDB.html"}],["meta",{"property":"og:site_name","content":"lzc的博客"}],["meta",{"property":"og:title","content":"TiDB 数据库"}],["meta",{"property":"og:description","content":"01 TiDB 数据库架构概述 水平扩容或者缩容 金融高级可用 实时HTAP 云原生的分布式数据库 兼容MySQL5.7协议 img 1、TiDB Server 处理客户端的连接 Sql语句的解释和编译 关系型数据与KV的转化 SQL语句的执行 执行online DDL 垃圾回收（删除历史版本的数据）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-11T06:40:23.000Z"}],["meta",{"property":"article:author","content":"Mr.Lzc"}],["meta",{"property":"article:modified_time","content":"2024-01-11T06:40:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TiDB 数据库\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-11T06:40:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Lzc\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1、TiDB Server","slug":"_1、tidb-server","link":"#_1、tidb-server","children":[]},{"level":2,"title":"2、TiKV","slug":"_2、tikv","link":"#_2、tikv","children":[]},{"level":2,"title":"3、Placement Driver","slug":"_3、placement-driver","link":"#_3、placement-driver","children":[]},{"level":2,"title":"4、TIFlash","slug":"_4、tiflash","link":"#_4、tiflash","children":[]},{"level":2,"title":"Summary","slug":"summary","link":"#summary","children":[]},{"level":2,"title":"章节目标","slug":"章节目标","link":"#章节目标","children":[]},{"level":2,"title":"2.2SQL语句的解析和翻译","slug":"_2-2sql语句的解析和翻译","link":"#_2-2sql语句的解析和翻译","children":[]},{"level":2,"title":"在线DDL（数据定义语言）相关模块","slug":"在线ddl-数据定义语言-相关模块","link":"#在线ddl-数据定义语言-相关模块","children":[]}],"git":{"createdTime":1704955223000,"updatedTime":1704955223000,"contributors":[{"name":"‘lwx1095775’","email":"‘lzc525@qq.com’","commits":1}]},"readingTime":{"minutes":3.38,"words":1014},"filePathRelative":"knowledge/数据库/TiDB数据库/TiDB.md","localizedDate":"2024年1月11日","excerpt":"<h1> 01 TiDB 数据库架构概述</h1>\\n<ul>\\n<li>\\n<p>水平扩容或者缩容</p>\\n</li>\\n<li>\\n<p>金融高级可用</p>\\n</li>\\n<li>\\n<p>实时HTAP</p>\\n</li>\\n<li>\\n<p>云原生的分布式数据库</p>\\n</li>\\n<li>\\n<p>兼容MySQL5.7协议</p>\\n</li>\\n</ul>\\n<figure><figcaption>img</figcaption></figure>\\n<h2> 1、TiDB Server</h2>\\n<ul>\\n<li>处理客户端的连接</li>\\n<li>Sql语句的解释和编译</li>\\n<li>关系型数据与KV的转化</li>\\n<li>SQL语句的执行</li>\\n<li>执行online DDL</li>\\n<li>垃圾回收（删除历史版本的数据）</li>\\n</ul>","autoDesc":true}');export{e as data};