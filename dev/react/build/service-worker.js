"use strict";var precacheConfig=[["/index.html","0fdd4cac1d53986a056e25d0878b0fa5"],["/static/css/main.14e0bed5.css","aadce4671fe8de56cb62081b87a22ca5"],["/static/js/main.04cf8f3c.js","e4702bb3a15679398b1b03b728ae2b1b"],["/static/media/Graphik-Light.74ef40a2.woff","74ef40a2107b283b82e5ead7e5705c53"],["/static/media/Graphik-Light.7af2e18e.svg","7af2e18ef063079481b36f0790631324"],["/static/media/Graphik-Light.bb5690d9.ttf","bb5690d988a7813dfda0bf288bfbd409"],["/static/media/Graphik-Light.d5d97ee9.eot","d5d97ee9694e0b041dcb4280539859f8"],["/static/media/Graphik-Medium.077e68d0.svg","077e68d082737ba1a999d9b12bcc75d9"],["/static/media/Graphik-Medium.93340035.ttf","933400354edfd8cb9845d1a399f886c6"],["/static/media/Graphik-Medium.be174f14.eot","be174f145d70625013fce9c4e584247d"],["/static/media/Graphik-Medium.ec0ad826.woff","ec0ad826b68e98059bd04ac60b44c277"],["/static/media/Graphik-Regular.67056760.ttf","67056760fbec8cb336de3b9102a1dd82"],["/static/media/Graphik-Regular.7377f247.eot","7377f24798489a45d91d30041c79163c"],["/static/media/Graphik-Regular.c8db79d7.svg","c8db79d7c9cfaee12195d5b977b576d3"],["/static/media/Graphik-Regular.ea17e8be.woff","ea17e8bef7591b2f7af9115f5704eea2"],["/static/media/Graphik-Semibold.1e606a01.ttf","1e606a01f3bf23b87b88f720e2a2b37e"],["/static/media/Graphik-Semibold.699d8289.eot","699d82890d7ea6f45f60787c1f796250"],["/static/media/Graphik-Semibold.6f24f7dd.svg","6f24f7ddffb112c3d4e8536497db54f5"],["/static/media/Graphik-Semibold.7cd92331.woff","7cd92331393aa73db5593d5ab311ce38"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});