(self.webpackChunkTJ_APPS_name_=self.webpackChunkTJ_APPS_name_||[]).push([[526],{16355:(t,e,r)=>{r.r(e),r.d(e,{default:()=>g});var n=r(80080),o=r.n(n),C=r(6054);const c=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","type":"object","allOf":[{"properties":{"category":{"const":"share"},"action":{"enum":["user-clicked-vk-share-button-on-article-footer","user-clicked-fb-share-button-on-article-footer","user-clicked-tw-share-button-on-article-footer","user-clicked-tg-share-button-on-article-footer","user-clicked-ok-share-button-on-article-footer","user-clicked-pn-share-button-on-article-footer"]}},"required":["category","action"]}]}');const i="NPHVp";function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,C=[],c=!0,i=!1;try{for(r=r.call(t);!(c=(n=r.next()).done)&&(C.push(n.value),!e||C.length!==e);c=!0);}catch(t){i=!0,o=t}finally{try{c||null==r.return||r.return()}finally{if(i)throw o}}return C}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const f={vk:r(61627),tw:r(704),tg:r(60697),ok:r(50214),pn:r(12758)},p={vk:"https://vk.com/share.php",tw:"https://twitter.com/intent/tweet",tg:"https://telegram.me/share/url",ok:"https://connect.ok.ru/offer",pn:"http://pinterest.com/pin/create/link/"},w=window.location.href,d=Object.keys(p).reduce(((t,e)=>h(h({},t),{},{[e]:w})),{});const g=function(t){const e=t.image,r=t.color,n=void 0===r?"black":r;let a=t.urls,s=void 0===a?d:a;s=h(h({},d),s),void 0===e&&delete s.pn;const u=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{vk:{url:"".concat(p.vk,"?url=").concat(t.vk),width:550,height:330},tw:{url:"".concat(p.tw,"?url=").concat(t.tw),width:600,height:450},tg:{url:"".concat(p.tg,"?url=").concat(t.tg),width:600,height:500},ok:{url:"".concat(p.ok,"?url=").concat(t.ok),width:600,height:500},pn:{url:"".concat(p.pn,"?url=").concat(t.pn,"&media=").concat(e),width:750,height:703}}}(s,e);function w(t){!function(t,e){const r=t.url,n=t.width,o=t.height,C=Math.round(screen.width/2-n/2),c=screen.height>o?Math.round(screen.height/3-o/2):0,i="".concat(e," sharer"),a=Object.entries({left:C,top:c,width:n,height:o,personalbar:0,toolbar:0,scrollbars:1,resizable:1}).map((t=>{let e=l(t,2),r=e[0],n=e[1];return"".concat(r,"=").concat(n)})).join(","),s=window.open(r,i,a);if(s)return s.focus(),s;location.href=r}(u[t],t),function(t){let e=t.networkId;const r={category:"share",action:"user-clicked-".concat(e,"-share-button-on-article-footer")};(0,C.j)(r,c)}({networkId:t})}return o().createElement("div",null,Object.keys(s).map((t=>o().createElement("button",{"data-color":n,key:t,style:{color:n},className:i,onClick:()=>w(t),dangerouslySetInnerHTML:{__html:f[t]}}))))}},50214:t=>{t.exports='<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.08727 0C3.13927 0 0.749512 2.32042 0.749512 5.18271C0.749512 8.04507 3.13927 10.3656 6.08727 10.3656C9.03526 10.3656 11.425 8.04507 11.425 5.18271C11.425 2.32042 9.03526 0 6.08727 0ZM6.08727 7.32527C4.86867 7.32527 3.88076 6.36598 3.88076 5.18278C3.88076 3.99958 4.86867 3.04037 6.08727 3.04037C7.30587 3.04037 8.29378 3.99958 8.29378 5.18278C8.29378 6.36598 7.30587 7.32527 6.08727 7.32527Z" fill="white"/>\n<path d="M7.97135 14.4896C10.1083 14.0669 11.3888 13.0844 11.4566 13.0316C12.0819 12.5447 12.1823 11.6578 11.6808 11.0506C11.1794 10.4435 10.2661 10.3459 9.64063 10.8328C9.62742 10.8432 8.26162 11.8604 6.0144 11.8619C3.76725 11.8604 2.37258 10.8432 2.35937 10.8328C1.73391 10.3459 0.820554 10.4435 0.319152 11.0506C-0.182328 11.6578 -0.0818787 12.5447 0.543424 13.0316C0.612095 13.0851 1.9455 14.0933 4.14231 14.506L1.08065 17.6128C0.524251 18.173 0.540979 19.0651 1.11801 19.6054C1.39964 19.869 1.76263 20.0001 2.12532 20.0001C2.50557 20.0001 2.88544 19.8558 3.17021 19.569L6.01448 16.6271L9.14603 19.5881C9.71343 20.1381 10.6322 20.1372 11.1985 19.5865C11.7649 19.0357 11.7642 18.1435 11.1969 17.5936L7.97135 14.4896Z" fill="white"/>\n<path d="M6.01469 11.8618C6.0112 11.8618 6.0181 11.8619 6.01469 11.862C6.01127 11.8619 6.01817 11.8618 6.01469 11.8618Z" fill="white"/>\n</svg>\n'},12758:t=>{t.exports='<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10 0C4.47718 0 0 4.47718 0 10C0 14.2365 2.63583 17.8581 6.35574 19.3152C6.26836 18.524 6.18934 17.3072 6.39042 16.4435C6.57215 15.663 7.56304 11.4728 7.56304 11.4728C7.56304 11.4728 7.26392 10.8737 7.26392 9.98811C7.26392 8.59761 8.06987 7.55951 9.07338 7.55951C9.92655 7.55951 10.3386 8.20005 10.3386 8.96813C10.3386 9.82614 9.79236 11.1089 9.51046 12.2977C9.27487 13.293 10.0096 14.1047 10.9913 14.1047C12.7686 14.1047 14.1349 12.2306 14.1349 9.52546C14.1349 7.13112 12.4144 5.45708 9.95778 5.45708C7.11243 5.45708 5.44232 7.59124 5.44232 9.79679C5.44232 10.6563 5.77341 11.5779 6.18655 12.0789C6.26828 12.1779 6.28025 12.2647 6.2559 12.3657C6.18 12.6816 6.0113 13.3608 5.97818 13.4998C5.93457 13.6829 5.83325 13.7217 5.64373 13.6335C4.3948 13.0522 3.61393 11.2261 3.61393 9.75949C3.61393 6.60502 5.90588 3.70803 10.2213 3.70803C13.6903 3.70803 16.3862 6.18 16.3862 9.48357C16.3862 12.9299 14.2131 15.7036 11.197 15.7036C10.1837 15.7036 9.2311 15.1771 8.90501 14.5553C8.90501 14.5553 8.40358 16.4646 8.28202 16.9325C8.05627 17.8011 7.4468 18.8898 7.03915 19.5541C7.97478 19.8438 8.96911 20 10 20C15.5229 20 20.0001 15.5228 20.0001 10C20.0001 4.47718 15.5229 0 10 0Z" fill="white"/>\n</svg>\n'},60697:t=>{t.exports='<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0.317933 9.15144L4.4655 10.8306L6.07086 16.4309C6.17358 16.7896 6.57792 16.9222 6.8463 16.6842L9.15823 14.6397C9.40057 14.4255 9.74575 14.4149 9.99901 14.6143L14.1689 17.8982C14.456 18.1246 14.8627 17.9539 14.9347 17.5776L17.9894 1.63909C18.068 1.22802 17.6956 0.885091 17.3348 1.03648L0.313073 8.15936C-0.106987 8.33509 -0.103327 8.9802 0.317933 9.15144Z" fill="white"/>\n</svg>\n'},704:t=>{t.exports='<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M20 3.01137C19.2639 3.35269 18.4741 3.58417 17.6442 3.68751C18.4915 3.15653 19.1402 2.31433 19.4476 1.31386C18.6527 1.80558 17.7754 2.16263 16.8405 2.35619C16.092 1.52051 15.0271 1 13.8461 1C11.5803 1 9.74312 2.92246 9.74312 5.29217C9.74312 5.62826 9.77936 5.95652 9.84936 6.27041C6.44001 6.09122 3.41684 4.38195 1.39347 1.78465C1.03977 2.41764 0.838563 3.1552 0.838563 3.94252C0.838563 5.43211 1.56343 6.74644 2.66324 7.51539C1.99085 7.49186 1.35847 7.29831 0.804838 6.97658V7.0302C0.804838 9.10959 2.21958 10.845 4.09546 11.24C3.75177 11.3368 3.38935 11.3904 3.01442 11.3904C2.74948 11.3904 2.49327 11.3629 2.24206 11.3106C2.76445 13.0173 4.27919 14.2584 6.07387 14.2924C4.67037 15.4433 2.90069 16.1272 0.978564 16.1272C0.647387 16.1272 0.321177 16.1063 0 16.0684C1.81592 17.2886 3.97177 18 6.28883 18C13.8362 18 17.9617 11.4584 17.9617 5.78523L17.9479 5.22942C18.754 4.62779 19.4513 3.8719 20 3.01137Z" fill="white"/>\n</svg>\n'},61627:t=>{t.exports='<svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M25.8621 15.6435C25.8306 15.5795 25.8013 15.5264 25.774 15.4838C25.3229 14.7171 24.4609 13.7759 23.1884 12.6601L23.1615 12.6346L23.1481 12.6221L23.1345 12.6092H23.1208C22.5433 12.0896 22.1776 11.7403 22.0245 11.5614C21.7442 11.2207 21.6815 10.8759 21.8346 10.5264C21.9428 10.2624 22.3492 9.70485 23.053 8.85298C23.4231 8.40152 23.7163 8.03968 23.9328 7.76708C25.4942 5.80801 26.1711 4.55614 25.9634 4.01098L25.8828 3.88358C25.8286 3.80688 25.6887 3.73671 25.4634 3.67272C25.2375 3.60887 24.9488 3.59831 24.5967 3.64086L20.6981 3.66628C20.635 3.64516 20.5448 3.64713 20.4273 3.67272C20.31 3.69832 20.2513 3.71116 20.2513 3.71116L20.1834 3.74316L20.1295 3.7816C20.0844 3.80701 20.0348 3.85172 19.9806 3.91562C19.9267 3.97929 19.8816 4.05402 19.8455 4.13918C19.4211 5.16977 18.9385 6.12796 18.3969 7.0137C18.063 7.54186 17.7563 7.99959 17.4762 8.38715C17.1965 8.77458 16.9619 9.06003 16.7725 9.243C16.5828 9.42616 16.4117 9.57289 16.2579 9.68373C16.1045 9.79461 15.9873 9.84146 15.9062 9.82433C15.8249 9.80719 15.7483 9.79018 15.6758 9.77318C15.5495 9.69648 15.448 9.59217 15.3714 9.46017C15.2945 9.32816 15.2427 9.16201 15.2156 8.96185C15.1887 8.76156 15.1728 8.58928 15.1682 8.44443C15.164 8.29976 15.1659 8.09513 15.1751 7.83111C15.1845 7.56697 15.1887 7.38824 15.1887 7.29454C15.1887 6.97083 15.1954 6.61952 15.2088 6.2405C15.2225 5.86149 15.2335 5.56118 15.2428 5.33995C15.252 5.11849 15.2562 4.88419 15.2562 4.63718C15.2562 4.39017 15.2403 4.19646 15.2088 4.05586C15.1777 3.91544 15.13 3.77914 15.067 3.64699C15.0037 3.51499 14.9111 3.41287 14.7895 3.34038C14.6677 3.26798 14.5163 3.21052 14.3361 3.16783C13.8577 3.06567 13.2486 3.01041 12.5084 3.00182C10.8299 2.98481 9.75134 3.08711 9.27303 3.30857C9.08351 3.40213 8.91202 3.52998 8.75868 3.6917C8.59619 3.87915 8.57353 3.98144 8.69083 3.99827C9.23239 4.07483 9.61578 4.25798 9.84143 4.54755L9.92274 4.70099C9.98599 4.8117 10.0492 5.00769 10.1124 5.28871C10.1755 5.56973 10.2162 5.88059 10.2341 6.22112C10.2792 6.84299 10.2792 7.37531 10.2341 7.81814C10.1889 8.26114 10.1463 8.60602 10.1055 8.85302C10.0648 9.10003 10.0039 9.30019 9.92274 9.45345C9.84143 9.60676 9.78733 9.70046 9.76021 9.73447C9.73313 9.76848 9.71057 9.78991 9.69264 9.79833C9.57534 9.84075 9.45334 9.86236 9.32708 9.86236C9.20063 9.86236 9.04729 9.80267 8.86683 9.68337C8.68642 9.56407 8.49918 9.4002 8.30511 9.1915C8.11105 8.98275 7.89218 8.69104 7.64843 8.31632C7.40486 7.9416 7.15214 7.49873 6.89042 6.9877L6.67388 6.6171C6.53851 6.37868 6.35359 6.03153 6.11894 5.57595C5.88415 5.12019 5.67661 4.67933 5.4962 4.25346C5.42409 4.07461 5.31575 3.93844 5.17137 3.84474L5.10361 3.8063C5.05857 3.77229 4.98626 3.73618 4.88707 3.69769C4.78774 3.65926 4.68409 3.63169 4.57571 3.61473L0.866542 3.64015C0.487513 3.64015 0.230338 3.72119 0.0949232 3.88304L0.0407288 3.9596C0.0136553 4.00225 0 4.07036 0 4.1641C0 4.25781 0.0270735 4.37281 0.0812679 4.50898C0.622738 5.71001 1.21157 6.86832 1.84778 7.98406C2.48398 9.09981 3.03683 9.99857 3.50599 10.6795C3.97525 11.361 4.45357 12.0042 4.94094 12.6087C5.42831 13.2135 5.75091 13.6011 5.90875 13.7713C6.06679 13.9419 6.19092 14.0694 6.28115 14.1546L6.61964 14.4612C6.83622 14.6656 7.15428 14.9105 7.57394 15.1957C7.9937 15.4812 8.4584 15.7622 8.9683 16.0392C9.47828 16.3158 10.0716 16.5415 10.7485 16.7161C11.4253 16.8908 12.0841 16.961 12.7249 16.9271H14.2817C14.5975 16.9014 14.8367 16.8077 14.9992 16.646L15.0531 16.5819C15.0893 16.5311 15.1232 16.4521 15.1545 16.3459C15.1862 16.2394 15.2019 16.1221 15.2019 15.9945C15.1927 15.6284 15.2222 15.2984 15.2897 15.0045C15.3572 14.7108 15.4341 14.4894 15.5201 14.3402C15.6061 14.1912 15.7031 14.0655 15.8111 13.9635C15.9193 13.8614 15.9964 13.7995 16.0416 13.7782C16.0865 13.7567 16.1224 13.7422 16.1495 13.7335C16.3661 13.6654 16.621 13.7313 16.9146 13.9317C17.2079 14.1318 17.4831 14.379 17.7404 14.6727C17.9977 14.9667 18.3067 15.2965 18.6676 15.6627C19.0288 16.029 19.3446 16.3013 19.6152 16.4804L19.8858 16.6337C20.0666 16.736 20.3012 16.8297 20.5901 16.9149C20.8784 17 21.131 17.0213 21.3479 16.9787L24.8133 16.9277C25.1561 16.9277 25.4228 16.8742 25.612 16.7679C25.8015 16.6614 25.9141 16.5441 25.9504 16.4166C25.9867 16.2888 25.9886 16.144 25.9573 15.982C25.9252 15.8204 25.8936 15.7074 25.8621 15.6435Z" fill="white"/>\n</svg>\n'}}]);
//# sourceMappingURL=common-ui-article-social-links-article-social-links.mjs.map