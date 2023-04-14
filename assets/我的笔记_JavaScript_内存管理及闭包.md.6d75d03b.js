import{_ as s,c as a,o as n,U as l}from"./chunks/framework.900b830a.js";const d=JSON.parse('{"title":"内存管理及闭包","description":"","frontmatter":{},"headers":[],"relativePath":"我的笔记/JavaScript/内存管理及闭包.md","lastUpdated":null}'),p={name:"我的笔记/JavaScript/内存管理及闭包.md"},o=l(`<h1 id="内存管理及闭包" tabindex="-1">内存管理及闭包 <a class="header-anchor" href="#内存管理及闭包" aria-label="Permalink to &quot;内存管理及闭包&quot;">​</a></h1><h2 id="javascript-内存分配" tabindex="-1">JavaScript 内存分配 <a class="header-anchor" href="#javascript-内存分配" aria-label="Permalink to &quot;JavaScript 内存分配&quot;">​</a></h2><ul><li>基本数据类型：存放在栈内存</li><li>引用数据类型：存放在堆内存，提供一个内存地址的引用赋值给变量</li></ul><h2 id="javascript-垃圾回收" tabindex="-1">JavaScript 垃圾回收 <a class="header-anchor" href="#javascript-垃圾回收" aria-label="Permalink to &quot;JavaScript 垃圾回收&quot;">​</a></h2><ul><li>引用计数：当一个对象有一个引用指向它时，该对象引用数+1，当对象的引用为 0 时，该对象会被回收</li><li>标记清除（现代游览器）：定期从根节点开始找所有引用的对象，如果没有引用就会标记为回收对象</li></ul><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><p>在一个函数的内部访问其他函数的私有属性，当函数创建的时候闭包就创建了，JavaScript 每创建一个函数就是一个闭包。</p><blockquote><p>没有被访问的外部函数属性是不会保存在闭包里的，示例如下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">baz</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">baz</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">innoreMessage</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我是被忽略的那个</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> foo </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">baz</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">foo</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p><a href="https://imgse.com/i/ppzfSjx" target="_blank" rel="noreferrer"><img src="https://s1.ax1x.com/2023/04/14/ppzfSjx.png" alt="ppzfSjx.png"></a></p></blockquote><h2 id="内存泄露" tabindex="-1">内存泄露 <a class="header-anchor" href="#内存泄露" aria-label="Permalink to &quot;内存泄露&quot;">​</a></h2><ul><li>意外的全局变量</li><li>遗忘的定时器</li><li>dom 放在对象中使用</li><li>过多的使用闭包</li></ul><h2 id="this" tabindex="-1">this <a class="header-anchor" href="#this" aria-label="Permalink to &quot;this&quot;">​</a></h2><p>this 是动态绑定的，在执行前确定了 this 的绑定规则。</p><h3 id="绑定方式" tabindex="-1">绑定方式 <a class="header-anchor" href="#绑定方式" aria-label="Permalink to &quot;绑定方式&quot;">​</a></h3><table><thead><tr><th>绑定方式</th><th>this 指向</th></tr></thead><tbody><tr><td>默认绑定</td><td>默认为 window，严格模式下 undefined</td></tr><tr><td>显示绑定</td><td>通过 call、apply、bind 方法绑定</td></tr><tr><td>隐式绑定</td><td>作为某个属性的方法使用时，通过对象.方法</td></tr><tr><td>new 绑定</td><td>指向实例对象</td></tr></tbody></table><h3 id="绑定优先级" tabindex="-1">绑定优先级 <a class="header-anchor" href="#绑定优先级" aria-label="Permalink to &quot;绑定优先级&quot;">​</a></h3><p>new 绑定 &gt; 显示绑定 &gt; 隐式绑定 &gt; 默认绑定</p><h3 id="call、bind、apply-的区别" tabindex="-1">call、bind、apply 的区别 <a class="header-anchor" href="#call、bind、apply-的区别" aria-label="Permalink to &quot;call、bind、apply 的区别&quot;">​</a></h3><ul><li>call、apply 都是执行函数并改变 this 指向，bind 只改变 this 指向没有执行</li><li>call、bind 传递参数为一个个传参，apply 传递数组</li><li>call、bind 性能要比 apply 好</li></ul><h3 id="特殊函数的-this" tabindex="-1">特殊函数的 this <a class="header-anchor" href="#特殊函数的-this" aria-label="Permalink to &quot;特殊函数的 this&quot;">​</a></h3><ul><li><p>箭头函数：父级作用域</p></li><li><p>setTimeout：取决于函数调用时的 this</p></li><li><p>dom 点击事件：dom 对象本身</p></li><li><p>内置 Array 方法：map、filter、forEach 等方法如果只传入一个参数默认 this 为 window，否则为参数</p></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#82AAFF;">foo</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">},</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">foo</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">},</span><span style="color:#F78C6C;">1000</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  	</span><span style="color:#82AAFF;">foo</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(foo</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">我是 this</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">输出结果如下，不计执行顺序：</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span></span>
<span class="line"><span style="color:#A6ACCD;">xx</span></span>
<span class="line"><span style="color:#A6ACCD;">body</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span></span>
<span class="line"><span style="color:#A6ACCD;">我是 </span><span style="color:#89DDFF;">this</span></span></code></pre></div>`,21),t=[o];function e(c,r,i,y,F,D){return n(),a("div",null,t)}const C=s(p,[["render",e]]);export{d as __pageData,C as default};
