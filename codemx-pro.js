var msRelatedPosts,msRandomIndex;function fullwidthImg(){var e=document.querySelector(".post-body"),t=e.querySelector("img"),n=e.querySelector(".tr-caption-container");t&&t.classList.add("fullwidth"),n&&n.classList.add("fullwidth")}!function(){"use strict";var b={postUrl:"https://linkmagz.sugeng.id",homePageUrl:"https://linkmagz.sugeng.id",relatedTitleOuterOpen:'<div class="related-title"><p class="ms-title ">',relatedTitleOuterClose:"</p></div>",relatedTitleText:"Artikel Terkait",thumbWidth:192,thumbHeight:108,relatedOuter:"ms-related-post"};for(var e in relatedConfig)"undefined"!=relatedConfig[e]&&(b[e]=relatedConfig[e]);var o,T={relatedPosts:!0,jumlahRelatedPosts:4,relatedPostsThumb:!0,judulRelatedPosts:b.relatedTitleText,relatedPostsNoThumbImg:"https://1.bp.blogspot.com/-sLMytth04W8/XtoBMx9lUjI/AAAAAAAAHmM/zK-toM5XTacePvBHnpIO_tfzjg63BD3ZgCK4BGAsYHg/w192-h108-n-k-no-nu/nomage%2B%25281%2529.png"};for(var t in linkMagzSetting)"undefined"!=linkMagzSetting[t]&&(T[t]=linkMagzSetting[t]);function a(e){var t=document.createElement("script");t.src=e,document.getElementsByTagName("head")[0].appendChild(t)}function M(e){var t,n,l=e.length;if(0===l)return!1;for(;--l;)t=Math.floor(Math.random()*(l+1)),n=e[l],e[l]=e[t],e[t]=n;return e}o="object"==typeof postLabels&&0<postLabels.length?"/-/"+M(postLabels)[0]:"",msRelatedPosts=function(e){var t,n,l,r,o,a,i,d,s,c=b.relatedTitleOuterOpen+T.judulRelatedPosts+b.relatedTitleOuterClose,u=document.getElementById(b.relatedOuter),h=M(e.feed.entry);1==T.relatedPostsThumb?c+='<ul class="ms-related-hasthumb">':c+='<ul class="ms-related-nothumb">';for(var m=0;m<h.length;m++)for(var f=0,g=h[m].link.length;f<g;f++)h[m].link[f].href==b.postUrl&&h.splice(m,1);if(0<h.length){for(var p=0;p<T.jumlahRelatedPosts&&p<h.length;p++){n=h[p].title.$t,void 0!==h[p].content&&(o=(r=h[p].content.$t).indexOf("<img",0));var v=function(e){l=e.replace(/.*?:\/\//g,"//").replace(/(\/s[0-9]+(\-c)?|\/w[0-9]+(\-h)[0-9]+()?|\/d)+(\/)/,"/w"+b.thumbWidth+"-h"+b.thumbHeight+"-c/")};"media$thumbnail"in h[p]?v(h[p].media$thumbnail.url):void 0!==o&&-1!==o?(a=r.indexOf("/>",o),d=(i=r.slice(o,a)).indexOf("src=",0)+5,s=i.indexOf('"',d),v(i.slice(d,s))):l=T.relatedPostsNoThumbImg;for(var y=0,g=h[p].link.length;y<g;y++)t="alternate"==h[p].link[y].rel?h[p].link[y].href:"#";c+='<li><a title="'+n+'" href="'+t+'">'+(1==T.relatedPostsThumb?'<div class="related-thumb-outer"><img alt="'+n+'" class="related-thumb" src="'+l+'" width="'+b.thumbWidth+'" height="'+b.thumbHeight+'"></div>':"")+'<div class="related-title-outer">'+n+"</div></a></li>"}1==T.relatedPosts&&(u.innerHTML=c+="</ul>")}},msRandomIndex=function(e){var t,n=T.jumlahRelatedPosts+1,l=e.feed.openSearch$totalResults.$t-n,r=(t=0<l?l:1,Math.floor(Math.random()*(t-1+1))+1);a(b.homePageUrl.replace(/\/$/,"")+"/feeds/posts/default"+o+"?alt=json-in-script&orderby=updated&start-index="+r+"&max-results="+n+"&callback=msRelatedPosts")},a(b.homePageUrl.replace(/\/$/,"")+"/feeds/posts/summary"+o+"?alt=json-in-script&orderby=updated&max-results=0&callback=msRandomIndex")}(),function(){var e={fullwidthImage:!0};for(var t in linkMagzSetting)"undefined"!=linkMagzSetting[t]&&(e[t]=linkMagzSetting[t]);1==e.fullwidthImage&&fullwidthImg()}(),function(e){"use strict";function f(e){if("string"!=typeof e)return 0;var t=e.match(/\d/g);return t?Math.min.apply(null,t):1}function t(e){var t=(e=function(e,t){for(var n in t)t.hasOwnProperty(n)&&t[n]&&(e[n]=t[n]);return e}({selector:"h1, h2, h3, h4, h5, h6",scope:"body",overwrite:!1,prefix:"toc"},e)).selector;if("string"!=typeof t)throw new TypeError("selector must be a string");if(!t.match(/^(?:h[1-6],?\s*)*$/g))throw new TypeError("selector must contains only h1-6");var n,o,a,l,r,i,d,s,c,u,h,m=location.hash;return m&&setTimeout(function(){location.hash="",location.hash=m},0),l=(n=e).selector,r=n.scope,i=document.createElement("ol"),d=i,o=n.overwrite,a=n.prefix,s=function(e,t,n){e.textContent;var l=a+"-"+n;t.textContent=e.textContent;var r=!o&&e.id||l,r=encodeURIComponent(r);e.id=r,t.href="#"+r},c=l,u=[],h=document.querySelectorAll(r),Array.prototype.forEach.call(h,function(e){var t=e.querySelectorAll(c);u=u.concat(Array.prototype.slice.call(t))}),u.reduce(function(e,t,n){var l=f(t.tagName),r=g(d,l-e)||i,o=document.createElement("li"),a=document.createElement("a");return s(t,a,n),r.appendChild(o).appendChild(a),d=o,l},f(l)),i}var g=function(e,t){return t<0?g(e.parentElement,t+1):0<t?function(e,t){for(;t--;){var n=document.createElement("ol");e.appendChild(n),e=n}return e}(e,t):e.parentElement};"function"==typeof define&&define.amd?define("toc",[],function(){return t}):e.initTOC=t}(window);var aside=document.getElementById("toc"),toc=initTOC({selector:"h2, h3",scope:".post-body"});function tocShowHide(){var e={tocHide:!0};for(var t in linkMagzSetting)"undefined"!=linkMagzSetting[t]&&(e[t]=linkMagzSetting[t]);var n=document.querySelector(".toc"),l=document.createElement("button"),r=document.querySelector("#toc ol");n.appendChild(l),1==e.tocHide?(l.innerHTML="(show)",r.style.display="none"):(l.innerHTML="(hide)",r.style.display=""),l.addEventListener("click",function(e){"none"==r.style.display?(r.style.display="",l.innerHTML="(hide)"):(r.style.display="none",l.innerHTML="(show)")})}function tocOption(){var e=document.querySelector(".toc"),t={judulTOC:"Daftar Isi",showHideTOC:!0};for(var n in linkMagzSetting)"undefined"!=linkMagzSetting[n]&&(t[n]=linkMagzSetting[n]);e.innerHTML=t.judulTOC,1==t.showHideTOC&&tocShowHide()}null!=aside&&(aside.appendChild(toc),tocOption());