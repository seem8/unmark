/*! Unmark Internal - http://unmark.it - 2015-08-18 - http://plainmade.com */ 
var Hogan={};(function(t,e){function n(t){return(null===t||void 0===t?"":t)+""}function r(t){return t=n(t),u.test(t)?t.replace(i,"&amp;").replace(o,"&lt;").replace(a,"&gt;").replace(s,"&#39;").replace(c,"&quot;"):t}t.Template=function(t,n,r,i){this.r=t||this.r,this.c=r,this.options=i,this.text=n||"",this.buf=e?[]:""},t.Template.prototype={r:function(){return""},v:r,t:n,render:function(t,e,n){return this.ri([t],e||{},n)},ri:function(t,e,n){return this.r(t,e,n)},rp:function(t,e,n,r){var i=n[t];return i?(this.c&&"string"==typeof i&&(i=this.c.compile(i,this.options)),i.ri(e,n,r)):""},rs:function(t,e,n){var r=t[t.length-1];if(!l(r))return n(t,e,this),void 0;for(var i=0;r.length>i;i++)t.push(r[i]),n(t,e,this),t.pop()},s:function(t,e,n,r,i,o,a){var s;return l(t)&&0===t.length?!1:("function"==typeof t&&(t=this.ls(t,e,n,r,i,o,a)),s=""===t||!!t,!r&&s&&e&&e.push("object"==typeof t?t:e[e.length-1]),s)},d:function(t,e,n,r){var i=t.split("."),o=this.f(i[0],e,n,r),a=null;if("."===t&&l(e[e.length-2]))return e[e.length-1];for(var s=1;i.length>s;s++)o&&"object"==typeof o&&i[s]in o?(a=o,o=o[i[s]]):o="";return r&&!o?!1:(r||"function"!=typeof o||(e.push(a),o=this.lv(o,e,n),e.pop()),o)},f:function(t,e,n,r){for(var i=!1,o=null,a=!1,s=e.length-1;s>=0;s--)if(o=e[s],o&&"object"==typeof o&&t in o){i=o[t],a=!0;break}return a?(r||"function"!=typeof i||(i=this.lv(i,e,n)),i):r?!1:""},ho:function(t,e,n,r,i){var o=this.c,a=this.options;a.delimiters=i;var r=t.call(e,r);return r=null==r?r+"":""+r,this.b(o.compile(r,a).render(e,n)),!1},b:e?function(t){this.buf.push(t)}:function(t){this.buf+=t},fl:e?function(){var t=this.buf.join("");return this.buf=[],t}:function(){var t=this.buf;return this.buf="",t},ls:function(t,e,n,r,i,o,a){var s=e[e.length-1],c=null;if(!r&&this.c&&t.length>0)return this.ho(t,s,n,this.text.substring(i,o),a);if(c=t.call(s),"function"==typeof c){if(r)return!0;if(this.c)return this.ho(c,s,n,this.text.substring(i,o),a)}return c},lv:function(t,e,r){var i=e[e.length-1],o=t.call(i);return"function"==typeof o&&(o=n(o.call(i)),this.c&&~o.indexOf("{{"))?this.c.compile(o,this.options).render(i,r):n(o)}};var i=/&/g,o=/</g,a=/>/g,s=/\'/g,c=/\"/g,u=/[&<>\"\']/,l=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}})("undefined"!=typeof exports?exports:Hogan),function(t){function e(t){"}"===t.n.substr(t.n.length-1)&&(t.n=t.n.substring(0,t.n.length-1))}function n(t){return t.trim?t.trim():t.replace(/^\s*|\s*$/g,"")}function r(t,e,n){if(e.charAt(n)!=t.charAt(0))return!1;for(var r=1,i=t.length;i>r;r++)if(e.charAt(n+r)!=t.charAt(r))return!1;return!0}function i(t,e,n,r){for(var s=[],c=null,u=null;t.length>0;)if(u=t.shift(),"#"==u.tag||"^"==u.tag||o(u,r))n.push(u),u.nodes=i(t,u.tag,n,r),s.push(u);else{if("/"==u.tag){if(0===n.length)throw Error("Closing tag without opener: /"+u.n);if(c=n.pop(),u.n!=c.n&&!a(u.n,c.n,r))throw Error("Nesting error: "+c.n+" vs. "+u.n);return c.end=u.i,s}s.push(u)}if(n.length>0)throw Error("missing closing tag: "+n.pop().n);return s}function o(t,e){for(var n=0,r=e.length;r>n;n++)if(e[n].o==t.n)return t.tag="#",!0}function a(t,e,n){for(var r=0,i=n.length;i>r;r++)if(n[r].c==t&&n[r].o==e)return!0}function s(t){return t.replace(x,"\\\\").replace(m,'\\"').replace(w,"\\n").replace(y,"\\r")}function c(t){return~t.indexOf(".")?"d":"f"}function u(t){for(var e="",n=0,r=t.length;r>n;n++){var i=t[n].tag;"#"==i?e+=l(t[n].nodes,t[n].n,c(t[n].n),t[n].i,t[n].end,t[n].otag+" "+t[n].ctag):"^"==i?e+=p(t[n].nodes,t[n].n,c(t[n].n)):"<"==i||">"==i?e+=f(t[n]):"{"==i||"&"==i?e+=h(t[n].n,c(t[n].n)):"\n"==i?e+=g('"\\n"'+(t.length-1==n?"":" + i")):"_v"==i?e+=d(t[n].n,c(t[n].n)):void 0===i&&(e+=g('"'+s(t[n])+'"'))}return e}function l(t,e,n,r,i,o){return"if(_.s(_."+n+'("'+s(e)+'",c,p,1),'+"c,p,0,"+r+","+i+',"'+o+'")){'+"_.rs(c,p,"+"function(c,p,_){"+u(t)+"});c.pop();}"}function p(t,e,n){return"if(!_.s(_."+n+'("'+s(e)+'",c,p,1),c,p,1,0,0,"")){'+u(t)+"};"}function f(t){return'_.b(_.rp("'+s(t.n)+'",c,p,"'+(t.indent||"")+'"));'}function h(t,e){return"_.b(_.t(_."+e+'("'+s(t)+'",c,p,0)));'}function d(t,e){return"_.b(_.v(_."+e+'("'+s(t)+'",c,p,0)));'}function g(t){return"_.b("+t+");"}var v=/\S/,m=/\"/g,w=/\n/g,y=/\r/g,x=/\\/g,j={"#":1,"^":2,"/":3,"!":4,">":5,"<":6,"=":7,_v:8,"{":9,"&":10};t.scan=function(t,i){function o(){m.length>0&&(w.push(new String(m)),m="")}function a(){for(var t=!0,e=b;w.length>e;e++)if(t=w[e].tag&&j[w[e].tag]<j._v||!w[e].tag&&null===w[e].match(v),!t)return!1;return t}function s(t,e){if(o(),t&&a())for(var n,r=b;w.length>r;r++)w[r].tag||((n=w[r+1])&&">"==n.tag&&(n.indent=""+w[r]),w.splice(r,1));else e||w.push({tag:"\n"});y=!1,b=w.length}function c(t,e){var r="="+S,i=t.indexOf(r,e),o=n(t.substring(t.indexOf("=",e)+1,i)).split(" ");return T=o[0],S=o[1],i+r.length-1}var u=t.length,l=0,p=1,f=2,h=l,d=null,g=null,m="",w=[],y=!1,x=0,b=0,T="{{",S="}}";for(i&&(i=i.split(" "),T=i[0],S=i[1]),x=0;u>x;x++)h==l?r(T,t,x)?(--x,o(),h=p):"\n"==t.charAt(x)?s(y):m+=t.charAt(x):h==p?(x+=T.length-1,g=j[t.charAt(x+1)],d=g?t.charAt(x+1):"_v","="==d?(x=c(t,x),h=l):(g&&x++,h=f),y=x):r(S,t,x)?(w.push({tag:d,n:n(m),otag:T,ctag:S,i:"/"==d?y-S.length:x+T.length}),m="",x+=S.length-1,h=l,"{"==d&&("}}"==S?x++:e(w[w.length-1]))):m+=t.charAt(x);return s(y,!0),w},t.generate=function(e,n,r){var i='var _=this;_.b(i=i||"");'+u(e)+"return _.fl();";return r.asString?"function(c,p,i){"+i+";}":new t.Template(Function("c","p","i",i),n,t,r)},t.parse=function(t,e,n){return n=n||{},i(t,"",[],n.sectionTags||[])},t.cache={},t.compile=function(t,e){e=e||{};var n=t+"||"+!!e.asString,r=this.cache[n];return r?r:(r=this.generate(this.parse(this.scan(t,e.delimiters),t,e),t,e),this.cache[n]=r)}}("undefined"!=typeof exports?exports:Hogan),function(t){function e(e,r,i){var o=this;return this.on("click.pjax",e,function(e){var a=t.extend({},f(r,i));a.container||(a.container=t(this).attr("data-pjax")||o),n(e,a)})}function n(e,n,r){r=f(n,r);var o=e.currentTarget;if("A"!==o.tagName.toUpperCase())throw"$.fn.pjax or $.pjax.click requires an anchor element";if(!(e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||location.protocol!==o.protocol||location.hostname!==o.hostname||o.hash&&o.href.replace(o.hash,"")===location.href.replace(location.hash,"")||o.href===location.href+"#")){var a={url:o.href,container:t(o).attr("data-pjax"),target:o},s=t.extend({},a,r),c=t.Event("pjax:click");t(o).trigger(c,[s]),c.isDefaultPrevented()||(i(s),e.preventDefault(),t(o).trigger("pjax:clicked",[s]))}}function r(e,n,r){r=f(n,r);var o=e.currentTarget;if("FORM"!==o.tagName.toUpperCase())throw"$.pjax.submit requires a form element";var a={type:o.method.toUpperCase(),url:o.action,data:t(o).serializeArray(),container:t(o).attr("data-pjax"),target:o};i(t.extend({},a,r)),e.preventDefault()}function i(e){function n(e,n){var i=t.Event(e,{relatedTarget:r});return s.trigger(i,n),!i.isDefaultPrevented()}e=t.extend(!0,{},t.ajaxSettings,i.defaults,e),t.isFunction(e.url)&&(e.url=e.url());var r=e.target,o=p(e.url).hash,s=e.context=h(e.container);e.data||(e.data={}),e.data._pjax=s.selector;var c;e.beforeSend=function(t,r){return"GET"!==r.type&&(r.timeout=0),t.setRequestHeader("X-PJAX","true"),t.setRequestHeader("X-PJAX-Container",s.selector),n("pjax:beforeSend",[t,r])?(r.timeout>0&&(c=setTimeout(function(){n("pjax:timeout",[t,e])&&t.abort("timeout")},r.timeout),r.timeout=0),e.requestUrl=p(r.url).href,void 0):!1},e.complete=function(t,r){c&&clearTimeout(c),n("pjax:complete",[t,r,e]),n("pjax:end",[t,e])},e.error=function(t,r,i){var o=v("",t,e),s=n("pjax:error",[t,r,i,e]);"GET"==e.type&&"abort"!==r&&s&&a(o.url)},e.success=function(r,c,l){var f="function"==typeof t.pjax.defaults.version?t.pjax.defaults.version():t.pjax.defaults.version,h=l.getResponseHeader("X-PJAX-Version"),d=v(r,l,e);if(f&&h&&f!==h)return a(d.url),void 0;if(!d.contents)return a(d.url),void 0;i.state={id:e.id||u(),url:d.url,title:d.title,container:s.selector,fragment:e.fragment,timeout:e.timeout},(e.push||e.replace)&&window.history.replaceState(i.state,d.title,d.url),document.activeElement.blur(),d.title&&(document.title=d.title),s.html(d.contents);var g=s.find("input[autofocus], textarea[autofocus]").last()[0];if(g&&document.activeElement!==g&&g.focus(),m(d.scripts),"number"==typeof e.scrollTo&&t(window).scrollTop(e.scrollTo),""!==o){var w=p(d.url);w.hash=o,i.state.url=w.href,window.history.replaceState(i.state,d.title,w.href);var y=t(w.hash);y.length&&t(window).scrollTop(y.offset().top)}n("pjax:success",[r,c,l,e])},i.state||(i.state={id:u(),url:window.location.href,title:document.title,container:s.selector,fragment:e.fragment,timeout:e.timeout},window.history.replaceState(i.state,document.title));var f=i.xhr;f&&4>f.readyState&&(f.onreadystatechange=t.noop,f.abort()),i.options=e;var f=i.xhr=t.ajax(e);return f.readyState>0&&(e.push&&!e.replace&&(w(i.state.id,s.clone().contents()),window.history.pushState(null,"",l(e.requestUrl))),n("pjax:start",[f,e]),n("pjax:send",[f,e])),i.xhr}function o(e,n){var r={url:window.location.href,push:!1,replace:!0,scrollTo:!1};return i(t.extend(r,f(e,n)))}function a(t){window.history.replaceState(null,"","#"),window.location.replace(t)}function s(e){var n=e.state;if(n&&n.container){if(T&&S==n.url)return;if(i.state.id===n.id)return;var r=t(n.container);if(r.length){var o,s=A[n.id];i.state&&(o=i.state.id<n.id?"forward":"back",y(o,i.state.id,r.clone().contents()));var c=t.Event("pjax:popstate",{state:n,direction:o});r.trigger(c);var u={id:n.id,url:n.url,container:r,push:!1,fragment:n.fragment,timeout:n.timeout,scrollTo:!1};s?(r.trigger("pjax:start",[null,u]),n.title&&(document.title=n.title),r.html(s),i.state=n,r.trigger("pjax:end",[null,u])):i(u),r[0].offsetHeight}else a(location.href)}T=!1}function c(e){var n=t.isFunction(e.url)?e.url():e.url,r=e.type?e.type.toUpperCase():"GET",i=t("<form>",{method:"GET"===r?"GET":"POST",action:n,style:"display:none"});"GET"!==r&&"POST"!==r&&i.append(t("<input>",{type:"hidden",name:"_method",value:r.toLowerCase()}));var o=e.data;if("string"==typeof o)t.each(o.split("&"),function(e,n){var r=n.split("=");i.append(t("<input>",{type:"hidden",name:r[0],value:r[1]}))});else if("object"==typeof o)for(key in o)i.append(t("<input>",{type:"hidden",name:key,value:o[key]}));t(document.body).append(i),i.submit()}function u(){return(new Date).getTime()}function l(t){return t.replace(/\?_pjax=[^&]+&?/,"?").replace(/_pjax=[^&]+&?/,"").replace(/[\?&]$/,"")}function p(t){var e=document.createElement("a");return e.href=t,e}function f(e,n){return e&&n?n.container=e:n=t.isPlainObject(e)?e:{container:e},n.container&&(n.container=h(n.container)),n}function h(e){if(e=t(e),e.length){if(""!==e.selector&&e.context===document)return e;if(e.attr("id"))return t("#"+e.attr("id"));throw"cant get selector for pjax container!"}throw"no pjax container for "+e.selector}function d(t,e){return t.filter(e).add(t.find(e))}function g(e){return t.parseHTML(e,document,!0)}function v(e,n,r){var i={};if(i.url=l(n.getResponseHeader("X-PJAX-URL")||r.requestUrl),/<html/i.test(e))var o=t(g(e.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),a=t(g(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));else var o=a=t(g(e));if(0===a.length)return i;if(i.title=d(o,"title").last().text(),r.fragment){if("body"===r.fragment)var s=a;else var s=d(a,r.fragment).first();s.length&&(i.contents=s.contents(),i.title||(i.title=s.attr("title")||s.data("title")))}else/<html/i.test(e)||(i.contents=a);return i.contents&&(i.contents=i.contents.not(function(){return t(this).is("title")}),i.contents.find("title").remove(),i.scripts=d(i.contents,"script[src]").remove(),i.contents=i.contents.not(i.scripts)),i.title&&(i.title=t.trim(i.title)),i}function m(e){if(e){var n=t("script[src]");e.each(function(){var e=this.src,r=n.filter(function(){return this.src===e});if(!r.length){var i=document.createElement("script");i.type=t(this).attr("type"),i.src=t(this).attr("src"),document.head.appendChild(i)}})}}function w(t,e){for(A[t]=e,k.push(t);E.length;)delete A[E.shift()];for(;k.length>i.defaults.maxCacheLength;)delete A[k.shift()]}function y(t,e,n){var r,i;A[e]=n,"forward"===t?(r=k,i=E):(r=E,i=k),r.push(e),(e=i.pop())&&delete A[e]}function x(){return t("meta").filter(function(){var e=t(this).attr("http-equiv");return e&&"X-PJAX-VERSION"===e.toUpperCase()}).attr("content")}function j(){t.fn.pjax=e,t.pjax=i,t.pjax.enable=t.noop,t.pjax.disable=b,t.pjax.click=n,t.pjax.submit=r,t.pjax.reload=o,t.pjax.defaults={timeout:650,push:!0,replace:!1,type:"GET",dataType:"html",scrollTo:0,maxCacheLength:20,version:x},t(window).on("popstate.pjax",s)}function b(){t.fn.pjax=function(){return this},t.pjax=c,t.pjax.enable=j,t.pjax.disable=t.noop,t.pjax.click=t.noop,t.pjax.submit=t.noop,t.pjax.reload=function(){window.location.reload()},t(window).off("popstate.pjax",s)}var T=!0,S=window.location.href,_=window.history.state;_&&_.container&&(i.state=_),"state"in window.history&&(T=!1);var A={},E=[],k=[];0>t.inArray("state",t.event.props)&&t.event.props.push("state"),t.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/),t.support.pjax?j():b()}(jQuery),function(t){"use strict";t.fn.fitVids=function(e){var n={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],o="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";r.className="fit-vids-style",r.id="fit-vids-style",r.style.display="none",r.innerHTML=o,i.parentNode.insertBefore(r,i)}return e&&t.extend(n,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];n.customSelector&&e.push(n.customSelector);var r=t(this).find(e.join(","));r=r.not("object object"),r.each(function(){var e=t(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var n="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),r=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),i=n/r;if(!e.attr("id")){var o="fitvid"+Math.floor(999999*Math.random());e.attr("id",o)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*i+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);