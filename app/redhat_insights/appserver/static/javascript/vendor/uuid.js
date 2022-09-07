!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.uuid=e():t.uuid=e()}(self,(()=>(()=>{"use strict";var t={d:(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};let n;t.r(e),t.d(e,{NIL:()=>E,parse:()=>h,stringify:()=>a,v1:()=>y,v3:()=>D,v4:()=>j,v5:()=>R,validate:()=>i,version:()=>T});const r=new Uint8Array(16);function o(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}const c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=function(t){return"string"==typeof t&&c.test(t)},s=[];for(let t=0;t<256;++t)s.push((t+256).toString(16).slice(1));function u(t,e=0){return(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase()}const a=function(t,e=0){const n=u(t,e);if(!i(n))throw TypeError("Stringified UUID is invalid");return n};let f,l,d=0,p=0;const y=function(t,e,n){let r=e&&n||0;const c=e||new Array(16);let i=(t=t||{}).node||f,s=void 0!==t.clockseq?t.clockseq:l;if(null==i||null==s){const e=t.random||(t.rng||o)();null==i&&(i=f=[1|e[0],e[1],e[2],e[3],e[4],e[5]]),null==s&&(s=l=16383&(e[6]<<8|e[7]))}let a=void 0!==t.msecs?t.msecs:Date.now(),y=void 0!==t.nsecs?t.nsecs:p+1;const h=a-d+(y-p)/1e4;if(h<0&&void 0===t.clockseq&&(s=s+1&16383),(h<0||a>d)&&void 0===t.nsecs&&(y=0),y>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=a,p=y,l=s,a+=122192928e5;const g=(1e4*(268435455&a)+y)%4294967296;c[r++]=g>>>24&255,c[r++]=g>>>16&255,c[r++]=g>>>8&255,c[r++]=255&g;const m=a/4294967296*1e4&268435455;c[r++]=m>>>8&255,c[r++]=255&m,c[r++]=m>>>24&15|16,c[r++]=m>>>16&255,c[r++]=s>>>8|128,c[r++]=255&s;for(let t=0;t<6;++t)c[r+t]=i[t];return e||u(c)},h=function(t){if(!i(t))throw TypeError("Invalid UUID");let e;const n=new Uint8Array(16);return n[0]=(e=parseInt(t.slice(0,8),16))>>>24,n[1]=e>>>16&255,n[2]=e>>>8&255,n[3]=255&e,n[4]=(e=parseInt(t.slice(9,13),16))>>>8,n[5]=255&e,n[6]=(e=parseInt(t.slice(14,18),16))>>>8,n[7]=255&e,n[8]=(e=parseInt(t.slice(19,23),16))>>>8,n[9]=255&e,n[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,n[11]=e/4294967296&255,n[12]=e>>>24&255,n[13]=e>>>16&255,n[14]=e>>>8&255,n[15]=255&e,n};function g(t,e,n){function r(t,r,o,c){var i;if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));const e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n));return e}(t)),"string"==typeof r&&(r=h(r)),16!==(null===(i=r)||void 0===i?void 0:i.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let s=new Uint8Array(16+t.length);if(s.set(r),s.set(t,r.length),s=n(s),s[6]=15&s[6]|e,s[8]=63&s[8]|128,o){c=c||0;for(let t=0;t<16;++t)o[c+t]=s[t];return o}return u(s)}try{r.name=t}catch(t){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r}function m(t){return 14+(t+64>>>9<<4)+1}function v(t,e){const n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function U(t,e,n,r,o,c){return v((i=v(v(e,t),v(r,c)))<<(s=o)|i>>>32-s,n);var i,s}function b(t,e,n,r,o,c,i){return U(e&n|~e&r,t,e,o,c,i)}function w(t,e,n,r,o,c,i){return U(e&r|n&~r,t,e,o,c,i)}function I(t,e,n,r,o,c,i){return U(e^n^r,t,e,o,c,i)}function A(t,e,n,r,o,c,i){return U(n^(e|~r),t,e,o,c,i)}const D=g("v3",48,(function(t){if("string"==typeof t){const e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(let n=0;n<e.length;++n)t[n]=e.charCodeAt(n)}return function(t){const e=[],n=32*t.length,r="0123456789abcdef";for(let o=0;o<n;o+=8){const n=t[o>>5]>>>o%32&255,c=parseInt(r.charAt(n>>>4&15)+r.charAt(15&n),16);e.push(c)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[m(e)-1]=e;let n=1732584193,r=-271733879,o=-1732584194,c=271733878;for(let e=0;e<t.length;e+=16){const i=n,s=r,u=o,a=c;n=b(n,r,o,c,t[e],7,-680876936),c=b(c,n,r,o,t[e+1],12,-389564586),o=b(o,c,n,r,t[e+2],17,606105819),r=b(r,o,c,n,t[e+3],22,-1044525330),n=b(n,r,o,c,t[e+4],7,-176418897),c=b(c,n,r,o,t[e+5],12,1200080426),o=b(o,c,n,r,t[e+6],17,-1473231341),r=b(r,o,c,n,t[e+7],22,-45705983),n=b(n,r,o,c,t[e+8],7,1770035416),c=b(c,n,r,o,t[e+9],12,-1958414417),o=b(o,c,n,r,t[e+10],17,-42063),r=b(r,o,c,n,t[e+11],22,-1990404162),n=b(n,r,o,c,t[e+12],7,1804603682),c=b(c,n,r,o,t[e+13],12,-40341101),o=b(o,c,n,r,t[e+14],17,-1502002290),r=b(r,o,c,n,t[e+15],22,1236535329),n=w(n,r,o,c,t[e+1],5,-165796510),c=w(c,n,r,o,t[e+6],9,-1069501632),o=w(o,c,n,r,t[e+11],14,643717713),r=w(r,o,c,n,t[e],20,-373897302),n=w(n,r,o,c,t[e+5],5,-701558691),c=w(c,n,r,o,t[e+10],9,38016083),o=w(o,c,n,r,t[e+15],14,-660478335),r=w(r,o,c,n,t[e+4],20,-405537848),n=w(n,r,o,c,t[e+9],5,568446438),c=w(c,n,r,o,t[e+14],9,-1019803690),o=w(o,c,n,r,t[e+3],14,-187363961),r=w(r,o,c,n,t[e+8],20,1163531501),n=w(n,r,o,c,t[e+13],5,-1444681467),c=w(c,n,r,o,t[e+2],9,-51403784),o=w(o,c,n,r,t[e+7],14,1735328473),r=w(r,o,c,n,t[e+12],20,-1926607734),n=I(n,r,o,c,t[e+5],4,-378558),c=I(c,n,r,o,t[e+8],11,-2022574463),o=I(o,c,n,r,t[e+11],16,1839030562),r=I(r,o,c,n,t[e+14],23,-35309556),n=I(n,r,o,c,t[e+1],4,-1530992060),c=I(c,n,r,o,t[e+4],11,1272893353),o=I(o,c,n,r,t[e+7],16,-155497632),r=I(r,o,c,n,t[e+10],23,-1094730640),n=I(n,r,o,c,t[e+13],4,681279174),c=I(c,n,r,o,t[e],11,-358537222),o=I(o,c,n,r,t[e+3],16,-722521979),r=I(r,o,c,n,t[e+6],23,76029189),n=I(n,r,o,c,t[e+9],4,-640364487),c=I(c,n,r,o,t[e+12],11,-421815835),o=I(o,c,n,r,t[e+15],16,530742520),r=I(r,o,c,n,t[e+2],23,-995338651),n=A(n,r,o,c,t[e],6,-198630844),c=A(c,n,r,o,t[e+7],10,1126891415),o=A(o,c,n,r,t[e+14],15,-1416354905),r=A(r,o,c,n,t[e+5],21,-57434055),n=A(n,r,o,c,t[e+12],6,1700485571),c=A(c,n,r,o,t[e+3],10,-1894986606),o=A(o,c,n,r,t[e+10],15,-1051523),r=A(r,o,c,n,t[e+1],21,-2054922799),n=A(n,r,o,c,t[e+8],6,1873313359),c=A(c,n,r,o,t[e+15],10,-30611744),o=A(o,c,n,r,t[e+6],15,-1560198380),r=A(r,o,c,n,t[e+13],21,1309151649),n=A(n,r,o,c,t[e+4],6,-145523070),c=A(c,n,r,o,t[e+11],10,-1120210379),o=A(o,c,n,r,t[e+2],15,718787259),r=A(r,o,c,n,t[e+9],21,-343485551),n=v(n,i),r=v(r,s),o=v(o,u),c=v(c,a)}return[n,r,o,c]}(function(t){if(0===t.length)return[];const e=8*t.length,n=new Uint32Array(m(e));for(let r=0;r<e;r+=8)n[r>>5]|=(255&t[r/8])<<r%32;return n}(t),8*t.length))})),S={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},j=function(t,e,n){if(S.randomUUID&&!e&&!t)return S.randomUUID();const r=(t=t||{}).random||(t.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return u(r)};function C(t,e,n,r){switch(t){case 0:return e&n^~e&r;case 1:case 3:return e^n^r;case 2:return e&n^e&r^n&r}}function M(t,e){return t<<e|t>>>32-e}const R=g("v5",80,(function(t){const e=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){const e=unescape(encodeURIComponent(t));t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const r=t.length/4+2,o=Math.ceil(r/16),c=new Array(o);for(let e=0;e<o;++e){const n=new Uint32Array(16);for(let r=0;r<16;++r)n[r]=t[64*e+4*r]<<24|t[64*e+4*r+1]<<16|t[64*e+4*r+2]<<8|t[64*e+4*r+3];c[e]=n}c[o-1][14]=8*(t.length-1)/Math.pow(2,32),c[o-1][14]=Math.floor(c[o-1][14]),c[o-1][15]=8*(t.length-1)&4294967295;for(let t=0;t<o;++t){const r=new Uint32Array(80);for(let e=0;e<16;++e)r[e]=c[t][e];for(let t=16;t<80;++t)r[t]=M(r[t-3]^r[t-8]^r[t-14]^r[t-16],1);let o=n[0],i=n[1],s=n[2],u=n[3],a=n[4];for(let t=0;t<80;++t){const n=Math.floor(t/20),c=M(o,5)+C(n,i,s,u)+a+e[n]+r[t]>>>0;a=u,u=s,s=M(i,30)>>>0,i=o,o=c}n[0]=n[0]+o>>>0,n[1]=n[1]+i>>>0,n[2]=n[2]+s>>>0,n[3]=n[3]+u>>>0,n[4]=n[4]+a>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]})),E="00000000-0000-0000-0000-000000000000",T=function(t){if(!i(t))throw TypeError("Invalid UUID");return parseInt(t.slice(14,15),16)};return e})()));