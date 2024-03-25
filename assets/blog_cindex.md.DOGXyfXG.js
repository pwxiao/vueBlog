import{_ as t,c as i,o as n,a4 as e}from"./chunks/framework.B5RDkS33.js";const k=JSON.parse('{"title":"c++","description":"","frontmatter":{},"headers":[],"relativePath":"blog/cindex.md","filePath":"blog/cindex.md"}'),l={name:"blog/cindex.md"},s=e(`<h1 id="c" tabindex="-1">c++ <a class="header-anchor" href="#c" aria-label="Permalink to &quot;c++&quot;">​</a></h1><h2 id="读入-输出优化" tabindex="-1">读入，输出优化 <a class="header-anchor" href="#读入-输出优化" aria-label="Permalink to &quot;读入，输出优化&quot;">​</a></h2><p>在c++中，我们可以使用 <code>cin</code> 来进行输入，这比scanf()要容易不少，但是cin的缺点是输入效率太低，在算法竞赛中，处理大规模的数据，例如输入字母矩阵，用cin可能会导致<code>TLE</code>错误。 这时候可以使用以下代码进行优化：</p><blockquote><p>在默认的情况下 <code>std::cin</code> 绑定的是 <code>std::cout</code>，每次执行 <code>&lt;&lt;</code> 操作符的时候都要调用 <code>flush()</code> 来清理 <code>stream buffer</code>，这样会增加 IO 负担。可以通过 <code>std::cin.tie(0)</code>（0 表示 NULL）来解除 <code>std::cin</code> 与 <code>std::cout</code> 的绑定，进一步加快执行效率。</p></blockquote><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果编译开启了 C++11 或更高版本，建议使用 std::cin.tie(nullptr);</span></span></code></pre></div><h2 id="char-or-string" tabindex="-1"><code>char</code> or <code>string</code> <a class="header-anchor" href="#char-or-string" aria-label="Permalink to &quot;\`char\` or \`string\`&quot;">​</a></h2><p><code>char</code> 和<code>string</code> 均可以用来存放字符串，但是相比之下，我更喜欢用string，在c中，char的效率通常会高一点，但是具体使用的时候，string更加易于使用与高效。 <code>string</code>拥有不少实用的方法</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //末尾增加</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //获取str的长度</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">empty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //判断字符串是否为空</span></span></code></pre></div><p>与<code>char</code>相比,<code>string</code>更像是一个动态的<code>char</code>数组</p><h2 id="万能头文件" tabindex="-1">万能头文件 <a class="header-anchor" href="#万能头文件" aria-label="Permalink to &quot;万能头文件&quot;">​</a></h2><p>在c++中如果不太记得代码中使用的来源于那个库，可以直接使用下面的头文件。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;bits/stdc++.h&gt;</span></span></code></pre></div><pre><code>\`\`\`cpp   
#ifndef _GLIBCXX_NO_ASSERT
#include &lt;cassert&gt;
#endif
#include &lt;cctype&gt;
#include &lt;cerrno&gt;
#include &lt;cfloat&gt;
#include &lt;ciso646&gt;
#include &lt;climits&gt;
#include &lt;clocale&gt;
#include &lt;cmath&gt;
#include &lt;csetjmp&gt;
#include &lt;csignal&gt;
#include &lt;cstdarg&gt;
#include &lt;cstddef&gt;
#include &lt;cstdio&gt;
#include &lt;cstdlib&gt;
#include &lt;cstring&gt;
#include &lt;ctime&gt;

#if __cplusplus &gt;= 201103L
#include &lt;ccomplex&gt;
#include &lt;cfenv&gt;
#include &lt;cinttypes&gt;
#include &lt;cstdalign&gt;
#include &lt;cstdbool&gt;
#include &lt;cstdint&gt;
#include &lt;ctgmath&gt;
#include &lt;cwchar&gt;
#include &lt;cwctype&gt;
#endif

// C++
#include &lt;algorithm&gt;
#include &lt;bitset&gt;
#include &lt;complex&gt;
#include &lt;deque&gt;
#include &lt;exception&gt;
#include &lt;fstream&gt;
#include &lt;functional&gt;
#include &lt;iomanip&gt;
#include &lt;ios&gt;
#include &lt;iosfwd&gt;
#include &lt;iostream&gt;
#include &lt;istream&gt;
#include &lt;iterator&gt;
#include &lt;limits&gt;
#include &lt;list&gt;
#include &lt;locale&gt;
#include &lt;map&gt;
#include &lt;memory&gt;
#include &lt;new&gt;
#include &lt;numeric&gt;
#include &lt;ostream&gt;
#include &lt;queue&gt;
#include &lt;set&gt;
#include &lt;sstream&gt;
#include &lt;stack&gt;
#include &lt;stdexcept&gt;
#include &lt;streambuf&gt;
#include &lt;string&gt;
#include &lt;typeinfo&gt;
#include &lt;utility&gt;
#include &lt;valarray&gt;
#include &lt;vector&gt;

#if __cplusplus &gt;= 201103L
#include &lt;array&gt;
#include &lt;atomic&gt;
#include &lt;chrono&gt;
#include &lt;condition_variable&gt;
#include &lt;forward_list&gt;
#include &lt;future&gt;
#include &lt;initializer_list&gt;
#include &lt;mutex&gt;
#include &lt;random&gt;
#include &lt;ratio&gt;
#include &lt;regex&gt;
#include &lt;scoped_allocator&gt;
#include &lt;system_error&gt;
#include &lt;thread&gt;
#include &lt;tuple&gt;
#include &lt;typeindex&gt;
#include &lt;type_traits&gt;
#include &lt;unordered_map&gt;
#include &lt;unordered_set&gt;
#endif

\`\`\`
</code></pre>`,13),c=[s];function a(d,p,h,o,r,g){return n(),i("div",null,c)}const E=t(l,[["render",a]]);export{k as __pageData,E as default};
