import{_ as o,r as p,o as c,c as i,a as n,b as t,d as e,e as s}from"./app.592a5c04.js";const l={},r=e('<h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h2><p>Forma simplificada de cypress para realizar acciones como type, clear, click, select, value, wait, read, write, frame.</p><p><strong>Ubicaci\xF3n:</strong> <code>cypress/e2e/actions/Actions.ts</code></p><table><thead><tr><th>Opci\xF3n</th><th>Default</th><th>Descripci\xF3n</th></tr></thead><tbody><tr><td>typeText</td><td>locator: string, value: string, xpath: boolean</td><td>Permite ingresar texto exclusivo a input</td></tr><tr><td>click</td><td>locator: string, xpath: boolean</td><td>Permite realizar click con cualquier elemento que se encuentre en el DOM</td></tr><tr><td>clear</td><td>locator: string, xpath: boolean</td><td>Permite eliminar el texto a inputs</td></tr><tr><td>selectByVisibleText</td><td>locator: string, value: string, xpath: boolean</td><td>Permite captura el valor <code>option value</code> o <code>option text</code></td></tr><tr><td>wait</td><td>time : number</td><td>Permite realizar una pausa en la ejecuci\xF3n de la prueba <code>1000 = 1 seg</code></td></tr><tr><td>getValue</td><td>locator: string, xpath: boolean</td><td>Permite obtener el valor del input <code>experimental</code></td></tr><tr><td>getText</td><td>locator: string, xpath: boolean</td><td>Permite obtener el valor texto de cualquier elemento en el DOM <code>experimental</code></td></tr><tr><td>xframe</td><td>locator: string, position: number</td><td>Permite buscar el frame orden en el DOM valor por defecto 0</td></tr><tr><td>itypeText</td><td>framelocator : string, locator: string, value: string, xpath: boolean</td><td>Permite ingresar texto exclusivo a input del frame</td></tr><tr><td>iclick</td><td>framelocator : string, locator: string, xpath: boolean</td><td>Permite realizar click con cualquier elemento que se encuentre en el frame</td></tr><tr><td>iclear</td><td>framelocator : string, locator: string, xpath: boolean</td><td>Permite eliminar el texto a inputs del frame</td></tr><tr><td>ExcelReader</td><td>file; string, sheet: string, jsonName?:string</td><td>Permite leer archivos excel con formato xlsx</td></tr><tr><td>JSONReader</td><td>file: string</td><td>Permite leer archivos json</td></tr><tr><td>JSONWrite</td><td>filename: string, data: any</td><td>Permite crear archivo json</td></tr></tbody></table>',4),u=s("Todos los commads de cypress tienen una opciones que permiten cambiar el comportamiento predeterminado. Si desea crear una acci\xF3n nueva por favor revise en : "),d={href:"https://docs.cypress.io/api/table-of-contents",target:"_blank",rel:"noopener noreferrer"},k=s("API Commands"),m=e(`<p><em><strong>Ejemplo</strong></em> : Estructura de la funci\xF3n</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//void no retorna nada</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">NAME_OPTION</span> <span class="token operator">=</span> <span class="token punctuation">(</span>key <span class="token operator">:</span> type<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>

<span class="token comment">//string retorna valor texto</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">NAME_OPTION</span> <span class="token operator">=</span> <span class="token punctuation">(</span>key <span class="token operator">:</span> type<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">//number retorna valor numerico</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">NAME_OPTION</span> <span class="token operator">=</span> <span class="token punctuation">(</span>key <span class="token operator">:</span> type<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token comment">//puede crear su tipo de dato a retornar con interfaces</span>
<span class="token comment">//Otros tipo de retornos Interface, Object, Promise, Array</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="typetext" tabindex="-1"><a class="header-anchor" href="#typetext" aria-hidden="true">#</a> typeText</h2><p>Permite ingresar texto exclusivo a input</p><p><strong>Sintaxis</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">typeText</span> <span class="token operator">=</span> <span class="token punctuation">(</span>locator<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> xpath<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>xpath<span class="token punctuation">)</span> <span class="token operator">?</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> cy<span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//Si es solo id, css selector, element html</span>
<span class="token function">typeText</span><span class="token punctuation">(</span><span class="token string">&quot;#input-password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">)</span>
<span class="token function">typeText</span><span class="token punctuation">(</span><span class="token string">&quot;.input-password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">)</span>
<span class="token function">typeText</span><span class="token punctuation">(</span><span class="token string">&quot;input[type=&#39;password&#39;]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//Si es xpath</span>
<span class="token function">typeText</span><span class="token punctuation">(</span><span class="token string">&quot;//input[type=&#39;text&#39;]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v=s("Construido con "),b={href:"https://docs.cypress.io/api/commands/type",target:"_blank",rel:"noopener noreferrer"},g=s(".type(text), .type(text, options)"),h=e(`<h2 id="click" tabindex="-1"><a class="header-anchor" href="#click" aria-hidden="true">#</a> click</h2><p>Permite realizar click con cualquier elemento que se encuentre en el DOM</p><p><strong>Sintaxis</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> click <span class="token operator">=</span> <span class="token punctuation">(</span>locator<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> xpath<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>xpath<span class="token punctuation">)</span> <span class="token operator">?</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> cy<span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//Si es solo id, css selector, element html</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token string">&quot;#grabar&quot;</span><span class="token punctuation">)</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token string">&quot;.btn-submit&quot;</span><span class="token punctuation">)</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token string">&quot;input[type=&#39;submit&#39;]&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//Si es xpath</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token string">&quot;//[@id=&#39;Enviar&#39;]&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token function">click</span><span class="token punctuation">(</span><span class="token string">&quot;//button[text()=&#39;Validate&#39;]&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),y=s("Construido con "),x={href:"https://docs.cypress.io/api/commands/click",target:"_blank",rel:"noopener noreferrer"},f=s(".click(position), .click(position, options)"),_=e(`<h2 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h2><p>Permite eliminar el texto a inputs</p><p><strong>Sintaxis</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> clear <span class="token operator">=</span> <span class="token punctuation">(</span>locator<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> xpath<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>xpath<span class="token punctuation">)</span> <span class="token operator">?</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> cy<span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//Si es solo id, css selector, element html</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token string">&quot;#input-password&quot;</span><span class="token punctuation">)</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token string">&quot;.input-password&quot;</span><span class="token punctuation">)</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token string">&quot;input[type=&#39;password&#39;]&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//Si es xpath</span>
<span class="token function">clear</span><span class="token punctuation">(</span><span class="token string">&quot;//input[type=&#39;text&#39;]&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),q=s("Construido con "),w={href:"https://docs.cypress.io/api/commands/clear",target:"_blank",rel:"noopener noreferrer"},P=s(".clear(), .clear(options)"),T=e(`<h2 id="selectbyvisibletext" tabindex="-1"><a class="header-anchor" href="#selectbyvisibletext" aria-hidden="true">#</a> selectByVisibleText</h2><p>Permite captura el valor <code>option value</code> o <code>option text</code></p><p><strong>Sintaxis</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> selectByVisibleText <span class="token operator">=</span> <span class="token punctuation">(</span>locator<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> xpath<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token operator">!</span>xpath<span class="token punctuation">)</span> <span class="token operator">?</span> cy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">:</span> cy<span class="token punctuation">.</span><span class="token function">xpath</span><span class="token punctuation">(</span>locator<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//Si es solo id, css selector, element html</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span><span class="token string">&quot;#select-paises&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Argentina&quot;</span><span class="token punctuation">)</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span><span class="token string">&quot;.select2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;argentina&quot;</span><span class="token punctuation">)</span>
<span class="token comment">//*[@id=&quot;channel&quot;]</span>
<span class="token comment">//Si es xpath</span>
<span class="token function">selectByVisibleText</span><span class="token punctuation">(</span><span class="token string">&quot;//select[@id=&#39;channel&#39;]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;abc123&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),S=s("Construido con "),O={href:"https://docs.cypress.io/api/commands/select",target:"_blank",rel:"noopener noreferrer"},N=s(".select(values), .select(values,options)"),V=e(`<h2 id="wait" tabindex="-1"><a class="header-anchor" href="#wait" aria-hidden="true">#</a> wait</h2><p>Permite realizar una pausa en la ejecuci\xF3n de la prueba <code>1000 = 1seg</code></p><p><strong>Sintaxis</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> wait <span class="token operator">=</span> <span class="token punctuation">(</span>time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    cy<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Uso</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">wait</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),B=s("Construido con "),E={href:"https://docs.cypress.io/api/commands/wait",target:"_blank",rel:"noopener noreferrer"},A=s(".wait(time), .wait(alias)"),C=e(`<h2 id="xframe" tabindex="-1"><a class="header-anchor" href="#xframe" aria-hidden="true">#</a> xframe</h2><p>Permite buscar el frame orden en el DOM valor por defecto 0</p><p><strong>Sintaxis</strong></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">xframe</span> <span class="token operator">=</span> <span class="token punctuation">(</span>locator <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> position<span class="token operator">:</span><span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> cy
    <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;iframe&#39;</span><span class="token operator">+</span>locator<span class="token punctuation">,</span> <span class="token punctuation">{</span> log<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">its</span><span class="token punctuation">(</span>position <span class="token operator">+</span> <span class="token string">&#39;.contentDocument.body&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> log<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> cy<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token punctuation">{</span> log<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),D=s("Construido con "),M={href:"https://docs.cypress.io/api/commands/its",target:"_blank",rel:"noopener noreferrer"},j=s(".its(time), .its(propertyName)");function I(z,U){const a=p("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[u,n("a",d,[k,t(a)])]),m,n("p",null,[v,n("a",b,[g,t(a)])]),h,n("p",null,[y,n("a",x,[f,t(a)])]),_,n("p",null,[q,n("a",w,[P,t(a)])]),T,n("p",null,[S,n("a",O,[N,t(a)])]),V,n("p",null,[B,n("a",E,[A,t(a)])]),C,n("p",null,[D,n("a",M,[j,t(a)])])])}var L=o(l,[["render",I],["__file","comandos.html.vue"]]);export{L as default};
