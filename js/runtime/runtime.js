"use strict";!function(){var n,a,o,r,c=new Date("04/01/2021 00:00:00");new Date;setInterval(function(){var t,e;r=new Date,n=Math.floor((r-c)/1e3/60/60/24),e=(r-c)/1e3/60/60-24*n,a=Math.floor(e),1==String(a).length&&(a="0"+a),e=(r-c)/1e3/60-1440*n-60*a,o=Math.floor(e),1==String(o).length&&(o="0"+o),e=(r-c)/1e3-86400*n-3600*a-60*o,r=Math.round(e),1==String(r).length&&(r="0"+r),e="",a<18&&9<=a||((t=document.querySelector("#workboard .workSituationImg")).src="https://npm.elemecdn.com/anzhiyu-blog@2.0.4/img/badge/安知鱼-下班啦.svg",t.title="下班了就该开开心心的玩耍，嘿嘿~",t.alt="下班了就该开开心心的玩耍，嘿嘿~"),e="本站居然运行了 ".concat(n," 天<span id='runtime'> ").concat(a," 小时 ").concat(o," 分 ").concat(r," 秒 </span><i class='fas fa-heartbeat' style='color:red'></i>"),document.getElementById("runtimeTextTip")&&(document.getElementById("runtimeTextTip").innerHTML=e)},1e3)}();