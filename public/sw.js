if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const f=e=>c(e,i),r={module:{uri:i},exports:t,require:f};s[i]=Promise.all(a.map((e=>r[e]||f(e)))).then((e=>(n(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CV.pdf",revision:"f01bc80fe77fea6effc89e1cee0333ed"},{url:"/PwaUpdater.tsx",revision:"7d31e681347439efa0bccef134aded2a"},{url:"/_next/static/93YB9fcQyCqeG5ZEnLr7j/_buildManifest.js",revision:"a36f80462a83e579221cc17ab74d480d"},{url:"/_next/static/93YB9fcQyCqeG5ZEnLr7j/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-46e711b1b515393e.js",revision:"46e711b1b515393e"},{url:"/_next/static/chunks/1a48c3c1-a7a5f16e0b755421.js",revision:"a7a5f16e0b755421"},{url:"/_next/static/chunks/252f366e-6ef9df5ff7b43cd2.js",revision:"6ef9df5ff7b43cd2"},{url:"/_next/static/chunks/447-83869c6f7b9fef93.js",revision:"83869c6f7b9fef93"},{url:"/_next/static/chunks/691.71a0c00cf08c7032.js",revision:"71a0c00cf08c7032"},{url:"/_next/static/chunks/78e521c3-32cb8abf02e66996.js",revision:"32cb8abf02e66996"},{url:"/_next/static/chunks/d0447323-ce7ad43c766c5674.js",revision:"ce7ad43c766c5674"},{url:"/_next/static/chunks/d7eeaac4-50b30feac7b57e67.js",revision:"50b30feac7b57e67"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-844c7e4850f58638.js",revision:"844c7e4850f58638"},{url:"/_next/static/chunks/pages/_app-73e18b8b5affb1a3.js",revision:"73e18b8b5affb1a3"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/index-f7f1acbc32ae5b09.js",revision:"f7f1acbc32ae5b09"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-a7c5ae41b67ced53.js",revision:"a7c5ae41b67ced53"},{url:"/_next/static/css/6590588a8db91952.css",revision:"6590588a8db91952"},{url:"/_next/static/css/c8483c2c71fd5a5f.css",revision:"c8483c2c71fd5a5f"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/profile_image.920be8d3.png",revision:"0c7fc5e101ba9e3e0ea021a9f7e3b426"},{url:"/favicon.ico",revision:"25b500e4b3e482768e125184134f1817"},{url:"/google3f09ff634e2ebf6c.html",revision:"a5092588de730713c2f6a85b0b539242"},{url:"/icon-192x192.png",revision:"69559b6dc28ef7b1971db2b88236569b"},{url:"/icon-256x256.png",revision:"ba9fd92905e76200c50a0ae9bd3d9a71"},{url:"/icon-384x384.png",revision:"4c8fe8758d532e0f584877af9aa01d1a"},{url:"/icon-512x512.png",revision:"d3e7215e8c556822670e917680625d07"},{url:"/manifest.json",revision:"c0fdca6f4e484839c1fce4f7fa44721e"},{url:"/robots.txt",revision:"2f2cc3d3fa13b5f6114d7c85d707d6fb"},{url:"/sitemap.xml",revision:"1ffe843514205be869bf352adb7562b3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));