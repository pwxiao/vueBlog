import{_ as i,c as a,a2 as t,o as e}from"./chunks/framework.BQmytedh.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/fixed_mixed_conetnt.md","filePath":"blog/fixed_mixed_conetnt.md"}'),p={name:"blog/fixed_mixed_conetnt.md"};function n(h,s,l,k,d,r){return e(),a("div",null,s[0]||(s[0]=[t(`<p>在前后端开发中，我们经常需要在前端页面像服务器请求数据，有时会出现<code>blocked:mixed-content</code>报错</p><p>打开控制台console可能看到以下内容</p><p><img src="https://picx.zhimg.com/80/v2-f3a90e6a30f511e5507cb66d2d0fb848_1440w.png?source=d16d100b" alt="img"></p><p>添加图片注释，不超过 140 字（可选）</p><h3 id="这是由于我们在https页面请求服务器的http内容-许多浏览器会阻止这种不安全的请求-经测试chrome-edge-safari均会阻止-国产浏览器如qq-夸克等则选择允许" tabindex="-1">这是由于我们在https页面请求服务器的http内容，许多浏览器会阻止这种不安全的请求（经测试chrome，edge，safari均会阻止，国产浏览器如QQ，夸克等则选择允许） <a class="header-anchor" href="#这是由于我们在https页面请求服务器的http内容-许多浏览器会阻止这种不安全的请求-经测试chrome-edge-safari均会阻止-国产浏览器如qq-夸克等则选择允许" aria-label="Permalink to &quot;这是由于我们在https页面请求服务器的http内容，许多浏览器会阻止这种不安全的请求（经测试chrome，edge，safari均会阻止，国产浏览器如QQ，夸克等则选择允许）&quot;">​</a></h3><h3 id="什么是混合内容-mixed-content" tabindex="-1">什么是混合内容（Mixed Content）？ <a class="header-anchor" href="#什么是混合内容-mixed-content" aria-label="Permalink to &quot;什么是混合内容（Mixed Content）？&quot;">​</a></h3><p>混合内容是指在同一页面中同时包含安全（HTTPS）和非安全（HTTP）资源的情况。当浏览器试图加载非安全资源时，它会发出“混合内容”警告，阻止加载不安全的请求</p><h3 id="为什么会出现-blocked-mixed-content-错误" tabindex="-1">为什么会出现“blocked:mixed-content”错误？ <a class="header-anchor" href="#为什么会出现-blocked-mixed-content-错误" aria-label="Permalink to &quot;为什么会出现“blocked:mixed-content”错误？&quot;">​</a></h3><p>出现这个错误的原因是，您的前端应用可能正在尝试加载一个HTTP资源，而该资源应该通过HTTPS协议进行传输。由于HTTP协议是不安全的，它可能会被中间人攻击（Man-in-the-Middle Attack）拦截，导致数据泄露或恶意修改。因此，浏览器默认阻止了这种不安全的请求。</p><p>在我最近的一个课程表项目中就遇到这种问题，网上的解决办法有如下</p><ol><li>服务器升级https，</li><li>在前端服务器中设置nginx反向代理</li><li>在前端html中添加</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> http-equiv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Content-Security-Policy&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;upgrade-insecure-requests&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>但是上述解决方案并不适用于我这个项目，</p><p>1.我只有服务器并没有绑定域名，如果是对ip升级https的话，购买ssl证书相对域名来说会很贵</p><p>2.我的前端使用Vercel部署，无法配置nginx反向代理（或许是我暂时未发现解决办法）</p><p>3.我的服务端数据仅能使用http访问，强制转为http则无法获得内容</p><p>在一番思考之后，我想到了另一种解决方案</p><h3 id="用重新用vercel部署一个api-首先通过get请求服务器内容-再通过api返回。" tabindex="-1">用重新用Vercel部署一个API,首先通过get请求服务器内容，再通过API返回。 <a class="header-anchor" href="#用重新用vercel部署一个api-首先通过get请求服务器内容-再通过api返回。" aria-label="Permalink to &quot;用重新用Vercel部署一个API,首先通过get请求服务器内容，再通过API返回。&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@app.route</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/base&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">methods</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;GET&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> hello_world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    username </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> request.args.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;username&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    password </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> request.args.get(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requests.get(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://xxxxxx:5000/api/base?username=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">username</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&amp;password=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).text</span></span></code></pre></div><p>这里使用的是Flask框架部署的api，当然也可以Fastapi等框架。</p><p>有一点需要注意，在http站点直接请求这个api时，也会引发CORS跨域问题，但这个在Flask中的解决比较简单</p><p>我们需要添加以下代码</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flask_cors </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> CORS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flask(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__name__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CORS(app)</span></span></code></pre></div><p>这样我们在前端直接请求Vercel api的内容，因为Vercel部署api默认强制https访问，因此便不会出现Mixed Content错误</p>`,24)]))}const g=i(p,[["render",n]]);export{E as __pageData,g as default};