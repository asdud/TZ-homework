/* SiteMaster_JS - v0.0.1 - Copyright (c) 2014 Admaster.inc - At: 2014-10-08 14:40:49 */
(function(){var a,b,c=[].slice;a="0.0.1",b={},setTimeout(function(){var a,c,d,e,f,g;for(g=b.cookieInit({}),g=b.toolInit(g),e=b.packerInit(g),c=!1,a=!1,d=null,f=function(a){var b,d,f;return d=a.shift(),g.isFunction(d)?d.apply(null,a):("_setAccount"===d&&(c=!0),c&&(b=e[d])?(f=b.apply(null,a),g.isObject(f)&&f.send===!0?g.request(f):f):void 0)};_smq.length;)f(_smq.shift());return _smq.push=f,g.event.add(window,"unload",function(){return f(["pageClose"])})},0),b.cookieInit=function(a){var b,d,e,f,g,h,i,j,k,l;return null==a&&(a={}),f=encodeURIComponent,d=decodeURIComponent,j=/\+/g,g=function(a){return b.raw?a:f(a)},e=function(a){if(b.raw)return a;try{return d(a)}catch(c){}},l=function(a){return g(String(a))},i=function(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{a=d(a.replace(j," "))}catch(b){}return a},k=function(a,c){var d;return d=b.raw?a:i(a),("function"==typeof c?c(d):void 0)||d},h=function(){var a,b,d,e,f,g,h;for(d=1<=arguments.length?c.call(arguments,0):[],e=d.shift(),g=0,h=d.length;h>g;g++){b=d[g];for(a in b)f=b[a],e[a]=f}return e},b=a.cookie=function(a,c,d){var f,i,j,m,n,o,p,q,r,s;if(void 0!==c)return d=h({},b.defaults,d),"number"==typeof d.expires&&(j=d.expires,q=d.expires=new Date,q.setDate(q.getDate()+j)),document.cookie=[g(a),"=",l(c),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain.split(":")[0]:"",d.secure?"; secure":""].join("");for(p=a?void 0:{},i=document.cookie?document.cookie.split("; "):[],r=0,s=i.length;s>r;r++){if(m=i[r],o=m.split("="),n=e(o.shift()),f=o.join("="),a===n){p=k(f,c);break}a||void 0===(f=k(f))||(p[n]=f)}return p},b.defaults={expires:720,path:"/"},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",h({},c,{expires:-1})),!0)},a},b.toolInit=function(a,b){var c,d,e,f,g,h,i,j,k,l;return null==a&&(a={}),l=window,f=document,h=encodeURIComponent,g=f.documentElement,j=navigator,d=Object.prototype,i=Array.isArray,k=d.toString,c="_smt_uid",e=function(){var b,c;return c=a.time(),b=a.intval(Math.random()*c),1e8>b&&(b+=1e8),[c.toString(16),b.toString(16)].join(".")},a.time=function(){return a.intval((new Date).valueOf()/1e3)},a.uid=function(b){var d;return null==b&&(b=""),(d=a.cookie(c))?d:(d=e(),a.cookie(c,d,{domain:b}),d)},a.isFunction=function(a){return"[object Function]"===k.call(a)},a.isArray=i||function(a){return"[object Array]"===k.call(a)},a.isUndefined=function(a){return a===b},a.isNumber=function(a){return"[object Number]"===k.call(a)},a.isObject=function(a){return a===Object(a)},a.map=a.collect=function(a,b,c){var d,e,f,g,h;if(e=[],!a)return e;for(d=g=0,h=a.length;h>g;d=++g)f=a[d],e[e.length]=b.call(c,f,d,a);return e},a.intval=function(a,b){return null==b&&(b=10),parseInt(a,b)||0},a.parseUrl=function(b){var c,d,e,f,g,h;return b?(c=new RegExp("#.*$").exec(b),d=a.isArray(c)?c[0]:"",h=b.replace(d,"").split("?"),g=h.shift(),f=h.join("?")||"",e=f.length>0?a.map(f.split("&"),function(a){return a.split("=")}):[],{uri:g,params:e,hash:d,qs:f}):{}},a.findUrl=function(b,c){var d,e;return d=a.parseUrl(b).params,e="",a.map(d,function(a){return a[0]===c?e=a[1]:void 0}),e},a.decodeSmtb=function(a){var b,c,d,e,f,g,h,i;for(i=[],g=[],a=a.split("").reverse(),23===a.length&&a.push(0),c=0;c<a.length;)i=[],i.push(a[c+1]),i.push(a[c]),h=i.join(""),e=parseInt(h,16),c/2+1>e&&(e+=256),e-=c/2+1,g.push(e),c+=2;return f=(g[0]<<24)+(g[1]<<16)+(g[2]<<8)+g[3],b=(g[4]<<24)+(g[5]<<16)+(g[6]<<8)+g[7],d=(g[8]<<24)+(g[9]<<16)+(g[10]<<8)+g[11],isNaN(f)||isNaN(b)||isNaN(d)?void 0:[f,b,d]},a.encodeSmtb=function(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p;j=[],f=1,h="";try{for(o=[a,b,c],k=0,m=o.length;m>k;k++)for(g=o[k],p=[24,16,8,0],l=0,n=p.length;n>l;l++)i=p[l],h=(g>>i&255)+f,h=h>=256?h-256:h,h=(h<<4&240)+(h>>4),h=h.toString(16),1===h.length&&(h="0"+h),j.push(h),f+=1;return h=j.join("").split("").reverse().join("").replace(/^0+/,"").toUpperCase(),d?d(null,h):h}catch(q){if(e=q)return d(e)}},a.pageLoadTime=function(){var b,c;return(b=l.performance)&&(c=b.timing)?c.domContentLoadedEventEnd<c.fetchStart?0:a.intval(c.domContentLoadedEventEnd-c.fetchStart):0},a.flashVersion=function(){var a,b,c,d,e,f,g;if(j.plugins&&j.plugins.length)for(g=j.plugins,d=0,f=g.length;f>d;d++)if(b=g[d],-1!==b.name.indexOf("Shockwave Flash"))return b.description.split("Shockwave Flash ")[1]||"";if(l.ActiveXObject)for(c=e=10;e>=2;c=--e)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+c))return""+c+".0"}catch(h){}return""},a.viewHeight=function(){var a;try{return g.clientHeight||f.body.clientHeight}catch(b){return a=b,0}},a.scrollTop=function(){try{return a.intval(l.pageYOffset||g.scrollTop)}catch(b){}return 0},a.scrollLeft=function(){try{return a.intval(l.pageXOffset||g.scrollLeft)}catch(b){}return 0},a.throttle=function(a,b){var c;return c=!1,function(){return c?void 0:(c=!0,setTimeout(function(){return c=!1},b),a.apply(null,arguments))}},a.debounce=function(a,b){var c;return c=null,function(){var d;return d=arguments,c&&clearTimeout(c),c=setTimeout(function(){return a.apply(null,d)},b)}},a.request=function(b){var c,d,e,f,g;for(d=a.urlFormat(b),g=[],e=0,f=d.length;f>e;e++)c=d[e],g.push(a.send(c,new Image(0,0)));return g},a.urlFormat=function(a){var b,c,d,e;return c=function(){var c,d;c=a.params,d=[];for(b in c)e=c[b],d.push(""+b+"="+h(e));return d}().join("&"),d=[""+a.protocol+"//"+a.host+a.path+"?"+c],a.localPath&&d.push(""+a.localPath+a.path+"?"+c),d},a.send=function(b,c){var d;return c.src=b,d=function(){return a.event.remove(c,"error",d),setTimeout(function(){return c.src=""+b+"&retry=yes"},2e3)},a.event.add(c,"error",d)},a.random=function(a){return null==a&&(a=8),Math.random().toString().substr(2,a)},a.event={add:function(a,b,c){var d,e,f;return d="addEventListener",e="attachEvent",f="on"+b,a[d]?a[d](b,c,!1):a[e]?a[e](f,c):a[f]=c},remove:function(a,b,c){var d,e,f;return f="removeEventListener",d="detachEvent",e="on"+b,a[f]?a[f](b,c,!1):a[d]?a[d](e,c):a[e]=null},event:function(a){return a||window.event},target:function(a){return a&&(a.target||a.srcElement||null)}},a.customVars=function(b,c){var d,e,f,g;if(null==c&&(c=!1),!c)return a.map(b,function(a){return"v"+a[0]+"="+a[1]+"&s"+a[0]+"="+a[2]}).join("&");for(d=[],b.sort(function(a,b){return a[0]>b[0]?1:a[0]<b[0]?-1:void 0}),f=0,g=b.length;g>f;f++)e=b[f],1===+e[2]&&d.push(""+e[0]+"="+e[1]);return d.join("&")},a.pageWidth=function(){var a,b,c,d,e,g,h,i,j,k,l;if(e=document,a=e.body,f=e.documentElement,d=a.children,c=0,i=null,b=f.clientWidth||a.clientWidth,k=function(a){var d,e,f,g;for(e=0,f=0,g=a.length;g>f;f++)d=a[f],c=d.offsetWidth,c>600&&(b-10>c||c>b)&&c>e&&(e=c);return e},h=function(a){var b,c,d,e,f,h;for(c=-1,f=0,h=a.length;h>f;f++)d=a[f],b=d.offsetHeight,b>c&&(e=a[g],c=b);return e},j=k(d))return j;for(g=l=0;3>l&&(i=h(d),!(i&&(d=i.children,j=k(d))));g=++l);return j||a.offsetWidth},a},b.packerInit=function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D;return t=window,m=navigator,h=document,l=h.location,i=encodeURIComponent,e="_smtv",d="_smtb",g=[],n={isSSL:"http:"===l.protocol?"no":"yes",allowLinker:!1,referrerSmtEnabled:!1,siteId:"",domain:l.host||l.hostname,heatmapEnabled:"no",clickTimeout:0,host:l.host||l.hostname,smtb:function(){var a;return a=b.findUrl(l.href,"smt_b"),a?b.cookie(d,a):void 0}(),params:{sid:"",uid:function(){var a;return a=null,function(){return a?a:a=b.uid(n.domain)}}(),url:l.href,tl:h.title,cs:(h.charset||h.characterSet||"").toLowerCase(),rl:function(){return h.referrer},fv:b.flashVersion(),sr:[t.screen.width,t.screen.height].join("x"),sc:screen.colorDepth,tz:(new Date).getTimezoneOffset()/-60,je:function(){try{return"javaEnabled"in m&&m.javaEnabled()?1:0}catch(a){}return 0}(),sp:b.scrollTop,vh:b.viewHeight,pw:b.pageWidth,pt:b.pageLoadTime,vars:function(){var a,d,f,h,i,j,k;if(f=b.cookie(e),!f)return c;for(k=f.split("&"),i=0,j=k.length;j>i;i++)h=k[i],d=h.split("="),a=b.intval(d[0]),1>a||a>5||(d.push(1),g.push(d));return b.customVars(g)}()}},q=n.params,p=function(a,b){var c,d;return c="sid,uid,url,tl,cs,rl,fv,sr,sc,tz,je,sp,vh,pt,vars",a&&(q.url=""+l.protocol+"//"+n.host+a),b&&(q.tl=b),d=r("pageview",c.split(","))},f=function(a,b,c,d,e){var f;return null==e&&(e=0),a?(f=r("event",["sid","uid","url"]),f.params.cat=a,b&&(f.params.act=b),c&&(f.params.lab=c),d&&(f.params.val=d),d&&(f.params.val=d),f.params.brf=e?1:0,f):void 0},o=function(){var a,b;return a="sid,uid,url,sp,vh",b=r("close",a.split(","))},r=function(a,c){return{send:!0,protocol:"yes"===n.isSSL?"https:":"http:",localPath:n.localPath,host:k(),path:"/p.gif",params:function(){var d,e,f,g,h,i;for(e={type:a},h=0,i=c.length;i>h;h++)d=c[h],(g=n.params[d])&&(f=b.isFunction(g)?g():g,b.isUndefined(f)||(e[d]=f));return e._=b.random(),e}()}},k=function(){return"smtvip.admaster.com.cn"},s=function(b){return"function"==typeof b&&b(a),a},D=function(a){return n.isSSL="yes"===a?"yes":"no"},w=function(a){return n.siteId=n.params.sid=a.toLowerCase()},z=function(a){return a===n.domain.substr(-a.length)?n.domain=a:void 0},A=function(a){return n.heatmapEnabled="yes"===a},x=function(a){return n.clickTimeout=Math.max(0,b.intval(a))},B=function(a){return n.localPath=a},y=function(a,c,d){var f,h,j,k,l,m;for(m=j=!1,k=0,l=g.length;l>k;k++)h=g[k],+h[0]===+a&&(j=!0,m=h[1]!==i(c)||+h[2]!==+d,h[1]=i(c),h[2]=d);return j===!1&&g.push([a,c,d]),m=j===!1&&1===+d,b.cookie.apply(null,[e,b.customVars(g,f=!0),{domain:n.domain}]),n.params.vars=b.customVars(g)},u=function(a){var c,e;return a?(e=b.cookie(d))?(c=b.decodeSmtb(e),c?a(null,c):a(Error("Smtb is invalid"))):a(Error("Smtb not found")):console.log("decode smtb need cb")},v=b.encodeSmtb,C=function(a){var c;return n.referrerSmtEnabled="yes"===a?!0:!1,n.referrerSmtEnabled&&(c=b.findUrl(l.referrer,"smt_b"))?b.cookie(d,c,n.domain):void 0},j=function(a,b){return b&&b(n[a]),n[a]},{pageview:p,custom:f,pageClose:o,version:s,_setAccount:w,_setCustomVar:y,_setDomainName:z,_setClickTimeOut:x,_setSSL:D,_setHeatmapEnabled:A,_setLocalPath:B,_decodeSmt_b:u,_encodeSmt_b:v,_setReferrerSmtEnabled:C,options:j}}}).call(this);
$.Listeners && $.Listeners.pub('vtm_000003.loaded').success();