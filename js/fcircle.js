"use strict";var fdatalist=JSON.parse(localStorage.getItem("fdatalist")),fcdata={jsonurl:"",apiurl:"",apipublicurl:fdatalist.apiurl,initnumber:fdatalist.initnumber,stepnumber:fdatalist.stepnumber,article_sort:"created",error_img:"https://sdn.geekzu.org/avatar/57d8260dfb55501c37dde588e7c3852c"};if("undefined"!=typeof fdataUser)for(var key in fdataUser)fdataUser[key]&&(fdata[key]=fdataUser[key]);var article_num="",sortNow="",UrlNow="",friends_num="",container=document.getElementById("fcircleContainer")||document.getElementById("cf-container"),localSortNow=localStorage.getItem("sortNow"),localUrlNow=localStorage.getItem("urlNow");function loadStatistical(a){article_num=a.article_num,friends_num=a.friends_num;'\n  <div id="cf-state" class="cf-new-add">\n    <div class="cf-state-data">\n      <div class="cf-data-friends" onclick="openToShow()">\n        <span class="cf-label">订阅</span>\n        <span class="cf-message">'.concat(a.friends_num,'</span>\n      </div>\n      <div class="cf-data-active" onclick="changeEgg()">\n        <span class="cf-label">活跃</span>\n        <span class="cf-message">').concat(a.active_num,'</span>\n      </div>\n      <div class="cf-data-article" onclick="clearLocal()">\n        <span class="cf-label">日志</span>\n        <span class="cf-message">').concat(a.article_num,'</span>\n      </div>\n    </div>\n    <div id="cf-change">\n        <span id="cf-change-created" data-sort="created" onclick="changeSort(event)" class="').concat("created"==sortNow?"cf-change-now":"",'">Created</span> | <span id="cf-change-updated" data-sort="updated" onclick="changeSort(event)" class="').concat("updated"==sortNow?"cf-change-now":"",'" >Updated</span>\n    </div>\n  </div>\n  ');a='\n    <div id="cf-more" class="cf-new-add" onclick="loadNextArticle()"><i class="fas fa-angle-double-down"></i></div>\n    <div id="cf-footer" class="cf-new-add">\n     <span id="cf-version-up" onclick="checkVersion()"></span>\n     <span class="cf-data-lastupdated">更新于：'.concat(a.last_updated_time,'</span>\n     <span class="cf-data-lastupdated">订阅:').concat(a.friends_num," 活跃:").concat(a.active_num," 日志:").concat(a.article_num,'</span>\n    </div>\n    <div id="cf-overlay" class="cf-new-add" onclick="closeShow()"></div>\n    <div id="cf-overshow" class="cf-new-add"></div>\n  ');container&&container.insertAdjacentHTML("afterend",a)}function loadArticleItem(a,t,e){var c="",n=article_num<e?article_num:e;if(t<article_num){for(var o=t;o<n;o++){var l=a[o];c+='\n      <div class="cf-article">\n        <a class="cf-article-title" href="'.concat(l.link,'" target="_blank" rel="noopener nofollow" data-title="').concat(l.title,'">').concat(l.title,'</a>\n        <span class="cf-article-floor">').concat(l.floor,'</span>\n        <div class="cf-article-avatar no-lightbox flink-item-icon">\n          <a onclick="openMeShow(event)" data-link="').concat(l.link,'" class="" target="_blank" rel="noopener nofollow" href="javascript:;"><img class="cf-img-avatar avatar" src="').concat(l.avatar,'" alt="avatar" onerror="this.src=\'').concat(fcdata.error_img,'\'; this.onerror = null;"><span class="cf-article-author">').concat(l.author,'</span></a>\n          <span class="cf-article-time">\n            <span class="cf-time-created" style="').concat("created"==sortNow?"":"display:none",'">').concat(l.created,'</span>\n            <span class="cf-time-updated" style="').concat("updated"==sortNow?"":"display:none",'"><i class="fas fa-history">更新于</i>').concat(l.updated,"</span>\n          </span>\n        </div>\n      </div>\n      ")}container.insertAdjacentHTML("beforeend",c),fetchNextArticle()}else document.getElementById("cf-more").outerHTML='<div id="cf-more" class="cf-new-add" onclick="loadNoArticle()"><small>一切皆有尽头！</small></div>'}function loadFcircleShow(a,t){if(a){for(var e='\n      <div class="cf-overshow">\n        <div class="cf-overshow-head">\n          <img class="cf-img-avatar avatar" src="'.concat(a.avatar,'" alt="avatar" onerror="this.src=\'').concat(fcdata.error_img,'\'; this.onerror = null;">\n          <a class="" target="_blank" rel="noopener nofollow" href="').concat(a.link,'">').concat(a.name,'</a>\n        </div>\n        <div class="cf-overshow-content">\n  '),c=0;c<a.article_num;c++){var n=t[c];e+='\n      <p><a class="cf-article-title"  href="'.concat(n.link,'" target="_blank" rel="noopener nofollow" data-title="').concat(n.title,'">').concat(n.title,"</a><span>").concat(n.created,"</span></p>\n    ")}e+="</div></div>",document.getElementById("cf-overshow").insertAdjacentHTML("beforeend",e),document.getElementById("cf-overshow").className="cf-show-now"}}function fetchNextArticle(){var start=document.getElementsByClassName("cf-article").length,end=start+fcdata.stepnumber,articleNum=article_num,fetchUrl;articleNum<end&&(end=articleNum),start<articleNum?(UrlNow=localStorage.getItem("urlNow"),fetchUrl=UrlNow+"rule="+sortNow+"&start="+start+"&end="+end,fetch(fetchUrl).then(function(a){return a.json()}).then(function(json){var nextArticle=eval(json.article_data);console.log("已预载?rule="+sortNow+"&start="+start+"&end="+end),localStorage.setItem("nextArticle",JSON.stringify(nextArticle))})):(start=articleNum)&&(document.getElementById("cf-more").outerHTML='<div id="cf-more" class="cf-new-add" onclick="loadNoArticle()"><small>一切皆有尽头！</small></div>')}function loadNextArticle(){for(var a=JSON.parse(localStorage.getItem("nextArticle")),t="",e=0;e<a.length;e++){var c=a[e];t+='\n      <div class="cf-article">\n        <a class="cf-article-title" href="'.concat(c.link,'" target="_blank" rel="noopener nofollow" data-title="').concat(c.title,'">').concat(c.title,'</a>\n        <span class="cf-article-floor">').concat(c.floor,'</span>\n        <div class="cf-article-avatar no-lightbox flink-item-icon">\n          <a onclick="openMeShow(event)" data-link="').concat(c.link,'" class="" target="_blank" rel="noopener nofollow" href="javascript:;"><img class="cf-img-avatar avatar" src="').concat(c.avatar,'" alt="avatar" onerror="this.src=\'').concat(fcdata.error_img,'\'; this.onerror = null;"><span class="cf-article-author">').concat(c.author,'</span></a>\n          <span class="cf-article-time">\n            <span class="cf-time-created" style="').concat("created"==sortNow?"":"display:none",'">').concat(c.created,'</span>\n            <span class="cf-time-updated" style="').concat("updated"==sortNow?"":"display:none",'"><i class="fas fa-history">更新于</i>').concat(c.updated,"</span>\n          </span>\n        </div>\n      </div>\n      ")}container.insertAdjacentHTML("beforeend",t),lazyLoadInstance.update(),fetchNextArticle()}function loadNoArticle(){var a=sortNow+"ArticleData";localStorage.removeItem(a),localStorage.removeItem("statisticalData"),document.getElementById("cf-more").remove(),window.scrollTo(0,document.getElementsByClassName("cf-state").offsetTop)}function clearLocal(){localStorage.removeItem("updatedArticleData"),localStorage.removeItem("createdArticleData"),localStorage.removeItem("nextArticle"),localStorage.removeItem("statisticalData"),localStorage.removeItem("sortNow"),localStorage.removeItem("urlNow"),location.reload()}function checkVersion(){var a=fcdata.apiurl+"version";fetch(a).then(function(a){return a.json()}).then(function(a){console.log(a);var t=a.status,e=a.current_version,a=a.latest_version,c=document.getElementById("cf-version-up");c.innerHTML=0==t?"当前版本：v"+e:1==t?"发现新版本：v"+e+" ↦ "+a:"网络错误，检测失败！"})}function changeEgg(){var a;fcdata.jsonurl||fcdata.apiurl?(document.querySelectorAll(".cf-new-add").forEach(function(a){return a.remove()}),localStorage.removeItem("updatedArticleData"),localStorage.removeItem("createdArticleData"),localStorage.removeItem("nextArticle"),localStorage.removeItem("statisticalData"),container.innerHTML="",UrlNow=localStorage.getItem("urlNow"),a=fcdata.apipublicurl+"all?",UrlNow!==a?changeUrl=fcdata.apipublicurl+"all?":fcdata.jsonurl?changeUrl=fcdata.apipublicurl+"postjson?jsonlink="+fcdata.jsonurl+"&":fcdata.apiurl&&(changeUrl=fcdata.apiurl+"all?"),localStorage.setItem("urlNow",changeUrl),FetchFriendCircle(sortNow,changeUrl)):clearLocal()}function FetchFriendCircle(sortNow,changeUrl){var end=fcdata.initnumber,fetchUrl=changeUrl?changeUrl+"rule="+sortNow+"&start=0&end="+end:UrlNow+"rule="+sortNow+"&start=0&end="+end;fetch(fetchUrl).then(function(a){return a.json()}).then(function(json){console.info(json);var statisticalData=json.statistical_data,articleData=eval(json.article_data),articleSortData=sortNow+"ArticleData";loadStatistical(statisticalData),loadArticleItem(articleData,0,end),localStorage.setItem("statisticalData",JSON.stringify(statisticalData)),localStorage.setItem(articleSortData,JSON.stringify(articleData))})}function changeSort(a){sortNow=a.currentTarget.dataset.sort,localStorage.setItem("sortNow",sortNow),document.querySelectorAll(".cf-new-add").forEach(function(a){return a.remove()}),container.innerHTML="",changeUrl=localStorage.getItem("urlNow"),initFriendCircle(sortNow,changeUrl),fcdata.apiurl&&checkVersion()}function openMeShow(a){a.preventDefault();var a=a.currentTarget.dataset.link.replace(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,"$1:$2$3"),t=(console.log(a),""),t=fcdata.apiurl?fcdata.apiurl+"post?link="+a:fcdata.apipublicurl+"post?link="+a;"ok"==noClick&&(noClick="no",fetchShow(t))}function closeShow(){document.getElementById("cf-overlay").className-="cf-show-now",document.getElementById("cf-overshow").className-="cf-show-now",document.getElementById("cf-overshow").innerHTML=""}localSortNow&&localUrlNow?(sortNow=localSortNow,UrlNow=localUrlNow):(sortNow=fcdata.article_sort,UrlNow=fcdata.jsonurl?fcdata.apipublicurl+"postjson?jsonlink="+fcdata.jsonurl+"&":fcdata.apiurl?fcdata.apiurl+"all?":fcdata.apipublicurl+"all?",console.log("当前模式："+UrlNow),localStorage.setItem("urlNow",UrlNow),localStorage.setItem("sortNow",sortNow));var noClick="ok";function openToShow(){var a="",a=fcdata.apiurl?fcdata.apiurl+"post":fcdata.apipublicurl+"post";"ok"==noClick&&(noClick="no",fetchShow(a))}function fetchShow(url){var closeHtml='\n  <div class="cf-overshow-close" onclick="closeShow()"></div>\n';fetch(url).then(function(a){return a.json()}).then(function(json){console.info(json),"not found"===json.message?(btf.snackbarShow("抱歉, 没有找到他的列表呜呜呜。"),noClick="ok"):(document.getElementById("cf-overlay").className="cf-show-now",document.getElementById("cf-overshow").insertAdjacentHTML("afterbegin",closeHtml)),noClick="ok";var statisticalData=json.statistical_data,articleData=eval(json.article_data);loadFcircleShow(statisticalData,articleData)})}function initFriendCircle(a,t){var e=a+"ArticleData";JSON.parse(localStorage.getItem("statisticalData")),JSON.parse(localStorage.getItem(e));container.innerHTML="",FetchFriendCircle(a,t)}initFriendCircle(sortNow);