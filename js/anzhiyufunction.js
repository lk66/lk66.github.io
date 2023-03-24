"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function owoBig(){var t=1,n="",r=document.createElement("div"),c=(r.id="owo-big",document.querySelector("body"));c.appendChild(r),document.getElementById("post-comment").addEventListener("DOMNodeInserted",function(e){e.target.classList&&"OwO-body"==e.target.classList.value&&((e=e.target).addEventListener("contextmenu",function(e){return e.preventDefault()}),e.addEventListener("mouseover",function(i){"IMG"==i.target.tagName&&t&&(t=0,n=setTimeout(function(){var e=3*i.target.clientHeight,t=3*i.target.clientWidth,n=i.x-i.offsetX-(t-i.target.clientWidth)/2,o=(n+t>c.clientWidth&&(n-=n+t-c.clientWidth+10),n<0&&(n=10),i.y-i.offsetY);r.style.height=e+"px",r.style.width=t+"px",r.style.left=n+"px",r.style.top=o+"px",r.style.display="flex",r.innerHTML='<img src="'.concat(i.target.src,'">')},300))}),e.addEventListener("mouseout",function(e){r.style.display="none",t=1,clearTimeout(n)}))})}function isInViewPortOfOne(e){var t;if(e)return t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,e.offsetTop-document.documentElement.scrollTop<=t}function anzhiyuScrollFn(){var n=!1,o=document.getElementById("nav-music"),i=document.getElementById("footer"),r=document.getElementById("waterfall"),c=document.getElementById("percent"),a=document.getElementById("post-comment")||document.getElementById("footer");window.anzhiyuScrollFnToDo=btf.throttle(function(){i&&o&&768<document.body.clientWidth&&(o.style.bottom=isInViewPortOfOne(i)?"-10px":"20px",o.style.opacity=isInViewPortOfOne(i)?"0":"1");var e=document.documentElement.scrollTop||window.pageYOffset,t=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-document.documentElement.clientHeight,t=Math.round(e/t*100),t=Math.min(99,Math.max(0,t));isInViewPortOfOne(a)||90<t?(document.getElementById("nav-totop").classList.add("long"),c.textContent="返回顶部",n=!0):(document.getElementById("nav-totop").classList.remove("long"),c.textContent=t),r&&(t=e%document.documentElement.clientHeight,!n&&100+t>=document.documentElement.clientHeight?(console.info(t,document.documentElement.clientHeight),setTimeout(function(){waterfall("#waterfall")},500)):setTimeout(function(){r&&waterfall("#waterfall")},500))},48),window.addEventListener("scroll",anzhiyuScrollFnToDo)}function totraveling(){btf.snackbarShow("即将跳转到「开往」项目的成员博客，不保证跳转网站的安全性和可用性",!1,5e3),setTimeout(function(){window.open("https://www.travellings.cn/go.html")},"5000")}function replaceAll(e,t,n){return e.split(t).join(n)}document.getElementById("post-comment")&&owoBig(),window.onkeydown=function(e){123===e.keyCode&&btf.snackbarShow("开发者模式已打开，请遵循GPL协议",!1)};var navFn={switchDarkMode:function(){"light"==("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"function"==typeof changeGiscusTheme&&changeGiscusTheme(),"object"===("undefined"==typeof FB?"undefined":_typeof(FB))&&window.loadFBComment&&window.loadFBComment(),"function"==typeof runMermaid&&window.runMermaid()}};function musicBindEvent(){document.querySelector("#nav-music .aplayer-music").addEventListener("click",function(){anzhiyu.musicTelescopic()}),document.querySelector("#nav-music .aplayer-button").addEventListener("click",function(){anzhiyu.musicToggle(!1)})}function dogePlayerInit(e){new DogePlayer({container:document.getElementById(e.container),userId:e.userId||4945,vcode:e.vcode,autoPlay:!1})}function hasMobile(){var e=!1;return e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||document.body.clientWidth<800?!0:e}function coverColor(){var n,e=null==(e=document.getElementById("post-top-bg"))?void 0:e.src,o=document.querySelector(":root");void 0!==e?((n=new XMLHttpRequest).open("GET",e+"?imageAve",!0),n.send(),n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=n.responseText;try{var t=JSON.parse(e,function(e,t){return t}).RGB;"light"==getContrastYIQ(t="#"+t.slice(2))&&(t=LightenDarkenColor(colorHex(t),-40)),o.style.setProperty("--anzhiyu-bar-background",t),anzhiyu.initThemeColor()}catch(e){o.style.setProperty("--anzhiyu-bar-background","var(--anzhiyu-main)"),anzhiyu.initThemeColor()}}}):o.style.setProperty("--anzhiyu-bar-background","var(--anzhiyu-meta-theme-color)"),anzhiyu.initThemeColor()}function colorHex(e){if(/^(rgb|RGB)/.test(e)){for(var t=e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),n="#",o=0;o<t.length;o++){var i=Number(t[o]).toString(16);"0"===i&&(i+=i),n+=i}return n=7!==n.length?e:n}if(!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e))return e;var r=e.replace(/#/,"").split("");if(6===r.length)return e;if(3===r.length){for(var c="#",o=0;o<r.length;o+=1)c+=r[o]+r[o];return c}}function colorRgb(e){var t=e.toLowerCase();if(t&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){for(var n="#",o=1;o<4;o+=1)n+=t.slice(o,o+1).concat(t.slice(o,o+1));t=n}for(var i=[],o=1;o<7;o+=2)i.push(parseInt("0x"+t.slice(o,o+2)));return"rgb("+i.join(",")+")"}return t}function LightenDarkenColor(e,t){var n=!1,e=("#"==e[0]&&(e=e.slice(1),n=!0),parseInt(e,16)),o=(e>>16)+t,i=(255<o?o=255:o<0&&(o=0),(e>>8&255)+t),e=(255<i?i=255:i<0&&(i=0),(255&e)+t);return 255<e?e=255:e<0&&(e=0),(n?"#":"")+String("000000"+(e|i<<8|o<<16).toString(16)).slice(-6)}function getContrastYIQ(e){e=colorRgb(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),e=299*e[1]+587*e[2]+114*e[3];return.5<=(e/=255e3)?"light":"dark"}function listenToPageInputPress(){var e=document.getElementById("toPageText");e&&e.addEventListener("keydown",function(e){13===e.keyCode&&(anzhiyu.toPage(),e=document.getElementById("toPageButton").href,pjax.loadUrl(e))})}