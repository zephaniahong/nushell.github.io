import{_ as n,o as t,c as r,a,t as e,d as o,e as p}from"./app.2fc09647.js";const c={},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(),u={style:{"white-space":"pre-wrap"}},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; is-in (other)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>other</code>: right series</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Checks if elements from a series are contained in right series</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">3</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span> <span class="token number">6</span> <span class="token number">6</span> <span class="token number">8</span> <span class="token number">8</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> to-df <span class="token operator">|</span> is-in <span class="token variable">$other</span>
</code></pre></div>`,7);function m(s,k){return t(),r("div",null,[a("h1",i,[l,d,a("code",null,e(s.$frontmatter.title),1)]),a("div",u,e(s.$frontmatter.usage),1),h])}var f=n(c,[["render",m],["__file","_is-in.html.vue"]]);export{f as default};