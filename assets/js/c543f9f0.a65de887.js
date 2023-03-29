"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6825],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>f});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},o=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return t?i.createElement(f,r(r({ref:n},o),{},{components:t})):i.createElement(f,r({ref:n},o))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:a,r[1]=p;for(var d=2;d<l;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},15321:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=t(87462),a=(t(67294),t(3905));const l={},r="Lab1: Unix utilities \u6df1\u5165\u89e3\u6790",p={unversionedId:"system/MIT6S081/Lab1-Unix_utilities",id:"system/MIT6S081/Lab1-Unix_utilities",title:"Lab1: Unix utilities \u6df1\u5165\u89e3\u6790",description:"\u5b9e\u9a8c\u6982\u89c8",source:"@site/docs/system/MIT6S081/Lab1-Unix_utilities.md",sourceDirName:"system/MIT6S081",slug:"/system/MIT6S081/Lab1-Unix_utilities",permalink:"/system/MIT6S081/Lab1-Unix_utilities",draft:!1,editUrl:"https://github.com/kcxain/kcxain.github.io/tree/master/docs/system/MIT6S081/Lab1-Unix_utilities.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MIT-6.s081 \u5b9e\u9a8c\u89e3\u6790",permalink:"/system/MIT6S081/"},next:{title:"Lab2: System calls \u6df1\u5165\u89e3\u6790",permalink:"/system/MIT6S081/Lab2-System_calls"}},s={},d=[{value:"\u5b9e\u9a8c\u6982\u89c8",id:"\u5b9e\u9a8c\u6982\u89c8",level:2},{value:"sleep",id:"sleep",level:2},{value:"pingpong",id:"pingpong",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:6},{value:"\u8fdb\u7a0b\u95f4\u901a\u4fe1",id:"\u8fdb\u7a0b\u95f4\u901a\u4fe1",level:6},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:6},{value:"primes",id:"primes",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42-1",level:6},{value:"\u57c3\u6c0f\u7b5b\u53ca\u5176\u5e76\u53d1\u5b9e\u73b0",id:"\u57c3\u6c0f\u7b5b\u53ca\u5176\u5e76\u53d1\u5b9e\u73b0",level:6},{value:"\u4ee3\u7801",id:"\u4ee3\u7801-1",level:6},{value:"find",id:"find",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42-2",level:6},{value:"\u4ee3\u7801",id:"\u4ee3\u7801-2",level:6},{value:"xargs",id:"xargs",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42-3",level:6},{value:"Shell \u4e2d\u7684 PIPE \u539f\u7406",id:"shell-\u4e2d\u7684-pipe-\u539f\u7406",level:6},{value:"xargs \u4e3e\u4f8b",id:"xargs-\u4e3e\u4f8b",level:6},{value:"\u4ee3\u7801",id:"\u4ee3\u7801-3",level:6},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],o={toc:d},u="wrapper";function m(e){let{components:n,...l}=e;return(0,a.kt)(u,(0,i.Z)({},o,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab1-unix-utilities-\u6df1\u5165\u89e3\u6790"},"Lab1: Unix utilities \u6df1\u5165\u89e3\u6790"),(0,a.kt)("h2",{id:"\u5b9e\u9a8c\u6982\u89c8"},"\u5b9e\u9a8c\u6982\u89c8"),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u5b9e\u9a8c\u53eb Unix utilities\u3002\u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u5b9e\u73b0\u4e00\u4e9b\u57fa\u7840\u7684\u7528\u6237\u7a0b\u5e8f\uff0c\u5e2e\u52a9\u719f\u6089 xv6 \u64cd\u4f5c\u7cfb\u7edf\u4ee5\u53ca\u5b83\u7684\u7cfb\u7edf\u63a5\u53e3\uff0c\u7cfb\u7edf\u6709\u5982\u4e0b\u63a5\u53e3\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220425223127079",src:t(15876).Z,width:"1346",height:"869"})),(0,a.kt)("p",null,"\u5728\u672c\u5b9e\u9a8c\u4e2d\uff0c\u6211\u4eec\u8981\u5b9e\u73b0 5 \u4e2a\u7a0b\u5e8f\uff0c\u8fd9\u4e9b\u7a0b\u5e8f\u90fd\u662f\u5728 Linux Shell \u7ecf\u5e38\u4f7f\u7528\u5230\u7684\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"sleep"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"pingpong"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"primes"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"find"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"xargs")),(0,a.kt)("h2",{id:"sleep"},"sleep"),(0,a.kt)("p",null,"\u5f88\u7b80\u5355\uff0c\u76f4\u63a5\u4e0a\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'int\nmain(int argc, char *argv[])\n{\n  if(argc != 2){\n    fprintf(2, "sleep: missing operand\\n");\n    exit(1);\n  }\n  int time = atoi(argv[1]);\n  sleep(time);\n  exit(0);\n}\n')),(0,a.kt)("h2",{id:"pingpong"},"pingpong"),(0,a.kt)("h6",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,a.kt)("p",null,'\u7f16\u5199\u4e00\u4e2a\u7a0b\u5e8f\uff0c\u4f7f\u4e24\u4e2a\u8fdb\u7a0b\u901a\u8fc7\u7ba1\u9053\u8fdb\u884c\u4e00\u6b21 "ping-pong"\uff0c\u5373\u7236\u8fdb\u7a0b\u5411\u5b50\u8fdb\u7a0b\u53d1\u9001\u4e00\u4e2a\u5b57\u8282\uff0c\u5b50\u8fdb\u7a0b\u8bfb\u51fa\u540e\u6253\u5370',(0,a.kt)("inlineCode",{parentName:"p"},"<pid>\uff1areceived ping"),"\uff0c\u968f\u540e\u518d\u5411\u7236\u8fdb\u7a0b\u53d1\u9001\u4e00\u4e2a\u5b57\u8282\uff0c\u7236\u8fdb\u7a0b\u8bfb\u5165\u540e\u6253\u5370",(0,a.kt)("inlineCode",{parentName:"p"},"<pid>\uff1areceived pong"),"\uff0c\u6700\u540e\u9000\u51fa"),(0,a.kt)("h6",{id:"\u8fdb\u7a0b\u95f4\u901a\u4fe1"},"\u8fdb\u7a0b\u95f4\u901a\u4fe1"),(0,a.kt)("p",null,"\u8fd9\u9053\u9898\u8003\u5bdf\u5229\u7528\u7ba1\u9053\u6765\u5b9e\u73b0\u8fdb\u7a0b\u95f4\u901a\u4fe1"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ba1\u9053"),"\u5c31\u662f\u4e00\u4e2a\u5185\u6838\u91cc\u7684\u4e00\u4e2a\u5c0f buffer\uff0c\u5b83\u6709\u4e00\u4e2a\u8bfb\u7aef\u548c\u4e00\u4e2a\u5199\u7aef\uff0c\u901a\u8fc7\u4f20\u7ed9\u7528\u6237\u4e24\u4e2a\u6307\u5411\u7aef\u53e3\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6765\u4f7f\u7528"),(0,a.kt)("p",null,"\u8fdb\u7a0b",(0,a.kt)("inlineCode",{parentName:"p"},"fork")," \u65f6\uff0c\u5b50\u8fdb\u7a0b\u4f1a\u590d\u5236\u7236\u8fdb\u7a0b\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u8fd9\u6837\uff0c\u4e24\u4e2a\u8fdb\u7a0b\u5c31\u53ef\u4ee5\u5bf9\u540c\u4e00\u4e2a\u7ba1\u9053\u8fdb\u884c\u5199\u5165\u548c\u8bfb\u51fa\u3002\u7ba1\u9053\u672c\u6765\u662f\u53ea\u652f\u6301\u5355\u5411\u901a\u4fe1\u7684\uff0c\u5982\u679c\u8981\u76f8\u4e92\u8bfb\u5199\uff0c\u5e94\u8be5\u7528\u4e24\u4e2a\u7ba1\u9053\u6765\u5b9e\u73b0\uff0c\u4f46\u662f\u8fd9\u91cc\u8981\u5b9e\u73b0\u7684\u6548\u679c\u5f88\u7b80\u5355\uff0c\u53ea\u4f7f\u7528\u4e00\u4e2a\u7ba1\u9053\u5e76\u5728\u6070\u5f53\u7684\u65f6\u673a\u5173\u95ed\u76f8\u5e94\u7684\u7aef\u53e3\u4e5f\u80fd\u8fbe\u5230\u76ee\u7684\uff0c\u5982\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220426142906558",src:t(12984).Z,width:"845",height:"602"})),(0,a.kt)("h6",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'int\nmain(int argc, char *argv[])\n{\n  int p[2];\n  int pid;\n  pipe(p);\n\n  char buf[2];\n  if(fork() == 0) {\n      pid = getpid();\n      if(read(p[0], buf, 1) == -1)\n      {\n        fprintf(2, "READ ERROR!\\n");\n        exit(1);\n      }\n      close(p[0]);\n      \n      printf("%d: received ping\\n", pid);\n\n      if(write(p[1], buf, 1) == -1){\n        fprintf(2, "WRITE ERROR!\\n");\n        exit(1);\n      }\n      close(p[1]);\n      exit(0);   \n  } \n  else {\n      pid = getpid();\n      if(write(p[1], buf + 1, 1) == -1){\n        fprintf(2, "WRITE ERROR!\\n");\n        exit(1);\n      }\n      close(p[1]);\n      wait(0);\n      if(read(p[0], buf + 1, 1) == -1)\n      { \n        fprintf(2, "READ ERROR!\\n");\n        exit(1);\n      }\n      printf("%d: received pong\\n", pid);\n      close(p[0]);\n      exit(0);\n  }\n}\n')),(0,a.kt)("h2",{id:"primes"},"primes"),(0,a.kt)("h6",{id:"\u8981\u6c42-1"},"\u8981\u6c42"),(0,a.kt)("p",null,"\u4f7f\u7528\u7ba1\u9053\u7f16\u5199\u4e00\u4e2a\u5e76\u53d1\u7248\u672c\u7684\u7d20\u6570\u7b5b\uff0c\u5b9e\u73b0 35 \u4ee5\u5185\u7684\u5373\u53ef\u3002\u8fd9\u91cc\u4f7f\u7528\u7684\u65b9\u6cd5\u662f",(0,a.kt)("strong",{parentName:"p"},"\u57c3\u62c9\u6258\u8272\u5c3c\u7b5b")),(0,a.kt)("h6",{id:"\u57c3\u6c0f\u7b5b\u53ca\u5176\u5e76\u53d1\u5b9e\u73b0"},"\u57c3\u6c0f\u7b5b\u53ca\u5176\u5e76\u53d1\u5b9e\u73b0"),(0,a.kt)("p",null,"\u57c3\u6c0f\u7b5b\u7b80\u5355\u6765\u8bf4\u5c31\u662f\u5148\u5c06 2 ~ 35 \u7684\u6574\u6570\u4e00\u6b21\u6027\u5199\u51fa\u6765\uff0c\u4ece\u524d\u5f80\u540e\u904d\u5386\uff0c\u904d\u5386\u5230\u7684\u7b2c\u4e00\u4e2a\u6570\u5c31\u662f\u4e00\u4e2a\u7d20\u6570\uff0c\u7136\u540e\u5c06\u5f80\u540e\u904d\u5386\u5230\u7684\u8be5\u7d20\u6570\u7684\u500d\u6570\u5168\u90e8\u5220\u6389\uff0c\u4e0d\u65ad\u5faa\u73af\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u5e76\u53d1\u7248\u672c\u7684\u5b9e\u73b0\u5c31\u662f\u5f00\u8fdb\u7a0b\u6765\u5206\u522b\u7b5b\u6389\u4e0d\u540c\u7c7b\u7684\u7d20\u6570\uff0c\u7b97\u6cd5\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"p = get a number from left neighbor\nprint p\nloop:\n    n = get a number from left neighbor\n    if (p does not divide n)\n        send n to right neighbor\n")),(0,a.kt)("p",null,"\u7236\u8fdb\u7a0b\u5c06\u6570\u5b57 2 ~ 35 \u8f93\u5165\u5230\u7ba1\u9053\u7684\u5de6\u7aef\uff0c\u7b2c\u4e00\u4e2a\u8fdb\u7a0b\u4ece\u7ba1\u9053\u4e2d\u8bfb\u51fa\u6570\uff0c\u6253\u5370 2\uff0c\u5e76\u5c06 2 \u500d\u6570\u4ee5\u5916\u7684\u6570\u8f93\u5165\u5230\u7ba1\u9053\uff0c\u7b2c\u4e8c\u4e2a\u8fdb\u7a0b\u8f93\u51fa\u4ece\u7ba1\u9053\u8bfb\u5165\u7684\u7b2c\u4e00\u4e2a\u6570\uff0c\u518d\u5c06 3 \u7684\u500d\u6570\u4ee5\u5916\u7684\u6570\u8f93\u5165\u5230\u7ba1\u9053...\u4ee5\u6b64\u7c7b\u63a8\uff0c\u4e0b\u56fe\u53ef\u4ee5\u76f4\u89c2\u7406\u89e3\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220426145241685",src:t(22270).Z,width:"1002",height:"352"})),(0,a.kt)("h6",{id:"\u4ee3\u7801-1"},"\u4ee3\u7801"),(0,a.kt)("p",null,"\u5f88\u5bb9\u6613\u60f3\u5230\u9012\u5f52\u5b9e\u73b0\uff0c\u6bcf\u6b21\u4f20\u5165\u7ba1\u9053\u7684\u8bfb\u7aef\u53e3\uff0c\u4ece\u7ba1\u9053\u4e2d\u8bfb\u51fa\u6570\u5b57\uff0c\u7b5b\u9009\u5b8c\u540e\uff0c\u518d\u5728\u5b50\u8fdb\u7a0b\u4e2d\u7528\u65b0\u7684\u7ba1\u9053\u8bfb\u7aef\u53e3\u4f5c\u4e3a\u53c2\u6570\u8c03\u7528\u4e0b\u4e00\u8f6e\u9012\u5f52\uff0c\u76f4\u5230\u65e0\u6570\u53ef\u8bfb\u65f6\u7ec8\u6b62\u9012\u5f52\u3002\u9012\u5f52\u90e8\u5206\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220426150750274",src:t(16981).Z,width:"788",height:"837"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8981\u8003\u8651\u5f88\u591a\u7ec6\u8282\uff01")),(0,a.kt)("p",null,"\u6ce8\u610f\u6211\u5708\u51fa\u7684\u4e24\u884c\u4ee3\u7801\uff0c\u5b83\u4eec\u90fd\u662f\u5173\u95ed\u5199\u7aef\u53e3\uff0c\u4f46\u662f\u610f\u4e49\u5374\u4e0d\u5b8c\u5168\u76f8\u540c"),(0,a.kt)("p",null,"\u5982\u679c\u6ce8\u91ca\u6389\u7b2c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"close(p[1])"),"\u3002\u4e0a\u4e00\u4e2a\u8fdb\u7a0b\u6ca1\u6709\u5173\u95ed\u5199\u7aef\u53e3\uff0c\u5b83\u7684\u5b50\u8fdb\u7a0b\u4ece\u7ba1\u9053\u4e2d\u8bfb\u5b8c\u6240\u6709\u6570\u5b57\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"read"),"\u51fd\u6570\u4f1a\u56e0\u4e3a\u6709\u4e00\u4e2a\u6307\u5411\u7ba1\u9053\u5199\u7aef\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u800c\u963b\u585e\u3002\u9664\u4e86\u4e3b\u51fd\u6570\u521b\u5efa\u7684\u7b2c\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u540e\u9762\u7684\u6bcf\u4e00\u4e2a\u8fdb\u7a0b\u90fd\u4f1a\u963b\u585e\u5728\u7b2c 20 \u884c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"read"),"\u4e2d\uff0c\u7a0b\u5e8f\u80fd\u6b63\u5e38\u8f93\u51fa\u6240\u6709\u7684\u7d20\u6570\uff0c\u4f46\u662f\u5374\u6c38\u4e0d\u4f1a\u7ec8\u6b62\uff0c\u7ed3\u679c\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220426161527040",src:t(18189).Z,width:"985",height:"569"})),(0,a.kt)("p",null,"\u6211\u4eec\u6253\u5370\u4e00\u4e0b\u6bcf\u6b21\u9012\u5f52",(0,a.kt)("inlineCode",{parentName:"p"},"p[0]"),"\u7684\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"$ primes\np[0]=4-prime 2\np[0]=5-prime 3\np[0]=6-prime 5\np[0]=7-prime 7\np[0]=8-prime 11\np[0]=9-prime 13\np[0]=10-prime 17\np[0]=11-prime 19\np[0]=12-prime 23\np[0]=13-prime 29\np[0]=14-prime 31\n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"p[0]"),"\u6bcf\u6b21\u52a0 1\uff0c\u8fd9\u662f\u56e0\u4e3a\u6587\u4ef6\u63cf\u8ff0\u7b26\u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u53ef\u7528\u8303\u56f4\u5185\u7684\u6700\u5c0f\u503c\uff0c\u800c\u7b2c 29 \u884c\u5728\u5f00\u59cb\u4e0b\u4e00\u8f6e\u9012\u5f52\u524d\u5173\u95ed\u4e86\u5199\u7aef\u53e3\uff0c\u4e8e\u662f\u4e0b\u4e00\u8f6e\u9012\u5f52\u4f7f\u7528\u7684\u8bfb\u7aef\u53e3\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u5c31\u662f\u4e0a\u4e00\u8f6e\u5199\u7aef\u53e3\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6ce8\u91ca\u6389\u7b2c\u4e8c\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"close(p[1])"),"\uff0c\u4e0d\u4ec5\u4f1a\u6709\u4e0a\u8ff0",(0,a.kt)("inlineCode",{parentName:"p"},"read"),"\u963b\u585e\u7684\u95ee\u9898\uff0c\u8fd8\u7531\u4e8e\u9012\u5f52\u524d\u7684\u5199\u7aef\u53e3\u6ca1\u6709\u5173\u95ed\uff0c\u4e0b\u6b21\u521b\u5efa\u7684\u8bfb\u7aef\u53e3\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u603b\u4f1a\u662f\u4e0a\u4e00\u4e2a\u52a0 2\uff0c\u8d85\u51fa xv6 \u7cfb\u7edf\u6bcf\u4e00\u4e2a\u8fdb\u7a0b\u80fd\u6253\u5f00\u7684\u6587\u4ef6\u6570\u7684\u9650\u5236\u3002\u8fd0\u884c\u4e00\u4e0b\u8bd5\u8bd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"$ primes\np[0]=4-prime 2\np[0]=6-prime 3\np[0]=8-prime 5\np[0]=10-prime 7\np[0]=12-prime 11\np[0]=14-prime 13\np[0]=4-prime 17\n\x13\x17\x1d\x1f\n")),(0,a.kt)("p",null,"\u53ea\u6253\u5370\u5230 17 \u5c31\u5361\u4f4f\u4e86"),(0,a.kt)("p",null,"\u5b8c\u6574\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'##include "kernel/types.h"\n##include "kernel/stat.h"\n##include "user/user.h"\n\nvoid \nfunc(int r)\n{\n  int num;\n  //\u9012\u5f52\u7ec8\u6b62\n  if(read(r, &num, sizeof(int)) == 0){\n    exit(0);\n  }\n  int p[2];\n  pipe(p);\n  int pid;\n  if((pid = fork()) != 0){\n    close(p[0]);\n    printf("prime %d\\n", num);\n    int n = num;\n    while(read(r, &num, sizeof(int)) != 0){\n      if(num % n){\n        write(p[1], &num, sizeof(int));\n      }\n    }\n    close(p[1]);\n    //wait(0);\n    exit(0);\n  } else{\n    close(p[1]);\n    func(p[0]);\n    close(p[0]);\n  }\n}\nint\nmain(int argc, char *argv[])\n{\n  //p[0]\u8bfb\n  //p[1]\u5199\n  int p[2];\n  pipe(p);\n  int pid;\n  if((pid = fork()) != 0){\n    close(p[0]);\n    //\u7b2c\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u628a\u6240\u6709\u6570\u9001\u8fdb\u7b2c\u4e00\u4e2apipe\n    for(int i = 2; i <= 35; i++){\n        write(p[1], &i, 4);\n    }\n    close(p[1]);\n    wait(0);\n  }\n  else{\n    close(p[1]);\n    //\u53c2\u6570\u4f20\u5165\u524d\u4e00\u4e2apipe\u7684\u8bfb\u7aef\u53e3\n    func(p[0]);\n    close(p[0]);\n  }\n  exit(0);\n}\n')),(0,a.kt)("h2",{id:"find"},"find"),(0,a.kt)("h6",{id:"\u8981\u6c42-2"},"\u8981\u6c42"),(0,a.kt)("p",null,"\u7f16\u5199\u4e00\u4e2a\u7b80\u5355\u7248\u672c\u7684 UNIX \u67e5\u627e\u7a0b\u5e8f\uff1a\u67e5\u627e\u76ee\u5f55\u6811\u4e2d\u7279\u5b9a\u540d\u79f0\u7684\u6240\u6709\u6587\u4ef6"),(0,a.kt)("p",null,"\u4e3b\u8981\u4eff\u9020\u5b9e\u9a8c\u6587\u4ef6\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ls"),"\u51fd\u6570\u6765\u5199\u5c31\u53ef\u4ee5\u4e86\uff0c\u91cc\u9762\u7684\u4e00\u4e9b\u7ed3\u6784\u6211\u4e5f\u4e0d\u592a\u6e05\u695a\uff0c\u53ef\u80fd\u8981\u5b66\u5230\u540e\u9762\u7684\u6587\u4ef6\u7cfb\u7edf\u624d\u80fd\u641e\u660e\u767d\uff0c\u7b49\u5b66\u5230\u90a3\u91cc\u518d\u56de\u6765\u8be6\u7ec6\u8bf4\u8bf4"),(0,a.kt)("h6",{id:"\u4ee3\u7801-2"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'##include "kernel/types.h"\n##include "kernel/stat.h"\n##include "user/user.h"\n##include "kernel/fs.h"\n\nvoid \nfind(char *path, char *file)\n{\n  char buf[512], *p;\n  int fd;\n  struct dirent de;\n  struct stat st;\n\n  if((fd = open(path, 0)) < 0){\n    fprintf(2, "find: cannot open %s\\n", path);\n    return;\n  }\n\n  if(fstat(fd, &st) < 0){\n    fprintf(2, "find: cannot stat %s\\n", path);\n    close(fd);\n    return;\n  }\n  strcpy(buf, path);\n  p = buf+strlen(buf);\n  *p++ = \'/\';\n  while(read(fd, &de, sizeof(de)) == sizeof(de)){\n    if(de.inum == 0)\n      continue;\n    memmove(p, de.name, DIRSIZ);\n    p[DIRSIZ] = 0;\n    if(stat(buf, &st) < 0){\n      printf("find: cannot stat %s\\n", buf);\n      continue;\n    }\n    switch (st.type) {\n    case T_DIR:\n      if(strcmp(de.name, ".") != 0 && strcmp(de.name, ".."))\n        find(buf, file);\n    case T_FILE:\n      if (strcmp(de.name, file) == 0) {\n                printf("%s\\n", buf);\n            }\n    }\n  }\n  close(fd);\n  return;\n}\n\nint\nmain(int argc, char *argv[])\n{\n  /* \u672a\u6307\u5b9a\u76ee\u5f55, \u5219\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u67e5\u627e */\n  if(argc == 2){\n    find(".", argv[1]);\n  }\n  else if(argc == 3){\n    find(argv[1], argv[2]);.0\n  }\n  else{\n    fprintf(2, "find: find <dir> <file>\\n");\n    exit(1);\n  }\n  exit(0);\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"fstat"),"\u51fd\u6570\u5c06\u6587\u4ef6\u63cf\u8ff0\u7b26\u6307\u5411\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"inode"),"\u7684\u76f8\u5173\u4fe1\u606f\u4fdd\u5b58\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"struct stat"),"\u4e2d\uff0c\u8fd9\u4e2a\u7ed3\u6784\u4f53\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"##define T_DIR     1   // Directory\n##define T_FILE    2   // File\n##define T_DEVICE  3   // Device\n\nstruct stat {\n  int dev;     // File system's disk device\n  uint ino;    // Inode number\n  short type;  // Type of file\n  short nlink; // Number of links to file\n  uint64 size; // Size of file in bytes\n};\n")),(0,a.kt)("p",null,"\u76ee\u5f55\u548c\u6587\u4ef6\u6ca1\u6709\u663e\u5f0f\u7684\u533a\u522b\uff0c\u6211\u4eec\u53ea\u80fd\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"st.type"),"\u6765\u533a\u5206\u5b83\u4eec\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"T_DIR"),"\u8868\u793a\u76ee\u5f55\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"T_FILE"),"\u8868\u793a\u6587\u4ef6"),(0,a.kt)("p",null,"\u5927\u4f53\u601d\u8def\u662f\uff1a\u5982\u679c\u8bfb\u5230\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"T_DIR"),"\uff0c\u5219\u5bf9\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6bcf\u4e00\u4e2a\u76ee\u5f55\u7ee7\u7eed\u9012\u5f52\uff0c\u76f4\u5230\u8bfb\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"T_FILE"),"\uff0c\u8fd9\u662f\u4e00\u4e2a\u6df1\u5ea6\u4f18\u5148\u67e5\u627e\u7684\u8fc7\u7a0b\u3002\u8981\u6ce8\u610f\u6bcf\u4e00\u4e2a\u76ee\u5f55\u4e0b\u7684\u524d\u4e24\u4e2a\u76ee\u5f55\u90fd\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"."),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},".."),"\uff0c\u5206\u522b\u8868\u793a\u5f53\u524d\u76ee\u5f55\u548c\u4e0a\u4e00\u7ea7\u76ee\u5f55\uff0c\u9012\u5f52\u65f6\u5e94\u628a\u8fd9\u4e24\u8005\u6392\u9664\uff0c\u5426\u5219\u4f1a\u6b7b\u5faa\u73af"),(0,a.kt)("h2",{id:"xargs"},"xargs"),(0,a.kt)("h6",{id:"\u8981\u6c42-3"},"\u8981\u6c42"),(0,a.kt)("p",null,"\u7f16\u5199\u4e00\u4e2a\u7b80\u5355\u7248\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"UNIX xargs"),"\u7a0b\u5e8f\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"xargs"),"\u662f\u7ec4\u5408\u591a\u4e2a\u547d\u4ee4\u7684\u5de5\u5177\uff0c\u7b80\u5355\u6765\u8bf4\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7\u7ba1\u9053\u63a5\u53d7\u5b57\u7b26\u4e32\uff0c\u5e76\u5c06\u63a5\u6536\u5230\u7684\u5b57\u7b26\u4e32\u901a\u8fc7\u7a7a\u683c\u5206\u5272\u6210\u8bb8\u591a\u53c2\u6570\uff0c\u7136\u540e\u518d\u5c06\u53c2\u6570\u4f20\u9012\u7ed9\u5176\u540e\u9762\u7684\u547d\u4ee4\uff0c\u4f5c\u4e3a\u540e\u9762\u547d\u4ee4\u7684\u547d\u4ee4\u884c\u53c2\u6570"),(0,a.kt)("h6",{id:"shell-\u4e2d\u7684-pipe-\u539f\u7406"},"Shell \u4e2d\u7684 PIPE \u539f\u7406"),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u4e3a\u4e86\u66f4\u6df1\u5165\u7406\u89e3\uff0c\u4e0d\u59a8\u770b\u770b Shell \u4e2d\u7ba1\u9053\u7b26",(0,a.kt)("inlineCode",{parentName:"p"},"|"),"\u7684\u539f\u7406\u662f\u4ec0\u4e48"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220426182731397",src:t(51176).Z,width:"652",height:"674"})),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4ee3\u7801\u5199\u5f97\u7b80\u76f4\u662f\u592a\u6f02\u4eae\u4e86\uff01"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5f53 Shell \u68c0\u6d4b\u5230\u547d\u4ee4\u4e2d\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"|"),"\u65f6\uff0c\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"fork"),"\u4e24\u4e2a\u8fdb\u7a0b\uff0c\u5206\u522b\u8fd0\u884c\u4e24\u8fb9\u7684\u547d\u4ee4"),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u5de6\u8fb9\u7684\u547d\u4ee4\u524d\uff0c\u4f1a\u5173\u95ed\u8868\u793a\u6807\u51c6\u8f93\u51fa\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26 0\uff0c\u7531\u4e8e\u6587\u4ef6\u63cf\u8ff0\u7b26\u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u53ef\u7528\u8303\u56f4\u5185\u7684\u6700\u5c0f\u503c\uff0c\u6240\u4ee5\u968f\u540e\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"dup"),"\u64cd\u4f5c\u5c31\u4f7f\u6587\u4ef6\u63cf\u8ff0\u7b26 0 \u6307\u5411 pipe \u7684\u5199\u7aef\u53e3\uff0c\u5373\u5c06\u6807\u51c6\u8f93\u51fa\u91cd\u5b9a\u5411\u5230 pipe \u7684\u5199\u7aef"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u7406\uff0c\u5728\u8fd0\u884c\u53f3\u8fb9\u7684\u547d\u4ee4\u524d\uff0c\u4f7f\u6807\u51c6\u8f93\u5165\u91cd\u5b9a\u5411\u5230\u4e86 pipe \u7684\u8bfb\u7aef")),(0,a.kt)("h6",{id:"xargs-\u4e3e\u4f8b"},"xargs \u4e3e\u4f8b"),(0,a.kt)("p",null,"\u8003\u8651\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"find . b | xargs grep hello\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xargs grep"),"\u8868\u793a\u8fd9\u884c\u547d\u4ee4\u6700\u7ec8\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"grep"),"\u7a0b\u5e8f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"find . b"),"\u5c06\u627e\u5230\u7684\u6587\u4ef6\u8def\u5f84\u5199\u5165\u7ba1\u9053\uff0c\u5047\u8bbe\u8fd9\u91cc\u627e\u5230\u7684\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"./b"),"\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"li"},"xargs grep hello"),"\u963b\u585e\u7b49\u5f85"),(0,a.kt)("li",{parentName:"ul"},"\u5de6\u4fa7\u5199\u5b8c\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"xargs"),"\u4ece\u7ba1\u9053\u4e2d\u8bfb\u5165\u6240\u6709\u5b57\u7b26\uff0c\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"hello"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"./b"),"\u4f5c\u4e3a\u547d\u4ee4\u884c\u53c2\u6570\u6765\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"li"},"grep"))),(0,a.kt)("p",null,"\u4e8e\u662f\uff0c\u8fd9\u6761\u547d\u4ee4\u5c31\u7b49\u4ef7\u8fd0\u884c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"grep hello ./b\n")),(0,a.kt)("h6",{id:"\u4ee3\u7801-3"},"\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'##include "kernel/types.h"\n##include "kernel/stat.h"\n##include "user/user.h"\n##include "kernel/param.h"\n\n##define MAXLEN 128\n\nint main(int argc, char *argv[])\n{\n  if (argc < 2)\n  {\n    fprintf(2, "xargs [options] [command [initial-arguments]]\\n");\n    exit(1);\n  }\n\n  char *arg[MAXARG];\n  int j = 0;\n  for (int i = 1; i < argc; i++)\n    arg[j++] = argv[i];\n  for (int i = argc - 1; i < MAXARG; i++)\n    arg[i] = (char *)malloc(sizeof(MAXLEN));\n  //\u4e34\u65f6\u4fdd\u5b58\u8bfb\u5165\u7684\u5b57\u7b26\n  char buf;\n  int _read;\n  //\u53ef\u80fd\u6709\u591a\u884c\u547d\u4ee4, \u7528\'\\n\'\u5206\u9694\n  while (1)\n  {\n    //\u6bcf\u4e00\u7ec4\u53c2\u6570\u4e2d\u7684\u4f4d\u7f6e\n    int m = 0;\n    while ((_read = read(0, &buf, 1)) != 0)\n    {\n      if (buf == \' \')\n      {\n        arg[j][m] = 0;\n        m = 0;\n        j++;\n      }\n      else if (buf == \'\\n\')\n      {\n        arg[j][m] = 0;\n        m = 0;\n        j++;\n        break;\n      }\n      else\n      {\n        arg[j][m] = buf;\n        m++;\n      }\n    }\n    arg[j] = 0;\n    j = argc - 1;\n    int pid;\n    if ((pid = fork()) == 0)\n    {\n      exec(arg[0], arg);\n    }\n    else\n    {\n      wait(0);\n    }\n\n    if (_read <= 0)\n      break;\n  }\n  exit(0);\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u8981\u641e\u6e05\u695a\u4e86\u539f\u7406\uff0c\u96be\u70b9\u5c31\u53ea\u5728\u5b57\u7b26\u4e32\u7684\u5904\u7406\u4e86\uff08\u7528 C \u8bed\u8a00\u5904\u7406\u5b57\u7b26\u4e32\u7740\u5b9e\u6076\u5fc3\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u5f53\u8bfb\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"\\n"),"\u5c31\u6267\u884c\u4e00\u6761\u547d\u4ee4\uff0c\u4f46\u4e5f\u6709\u53ef\u80fd\u5728\u7ba1\u9053\u524d\u540c\u65f6\u8f93\u5165\u4e86\u591a\u884c\u547d\u4ee4\uff0c\u6240\u4ee5\u6267\u884c\u5b8c\u6bd5\u540e\u4e0d\u80fd\u9000\u51fa\uff0c\u8fd8\u8981\u5224\u65ad\u7ba1\u9053\u4e2d\u662f\u5426\u8fd8\u6709\u6570\u636e\uff0c\u5982\u679c\u6709\uff0c\u5219\u8981\u5c06\u5176\u4f5c\u4e3a\u65b0\u7684\u53c2\u6570\u518d\u4e00\u6b21\u6267\u884c")),(0,a.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,a.kt)("p",null,"\u6d4b\u8bd5\u622a\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220426185456523",src:t(89554).Z,width:"668",height:"681"})),(0,a.kt)("p",null,"\u6ee1\u5206\u901a\u8fc7\uff01"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"lab 1 \u5c31\u662f\u7528\u63a5\u53e3\u5b9e\u73b0\u4e00\u4e9b\u529f\u80fd\u51fd\u6570\uff0c\u5c5e\u4e8e\u9876\u5c42\u8bbe\u8ba1\uff0c\u505a\u8d77\u6765\u6bd4\u8f83\u8f7b\u677e\uff0c\u8fc7\u7a0b\u4e5f\u5f88\u6709\u8da3\u3002\u8d8a\u5f80\u540e\u7684\u5b9e\u9a8c\u8d8a\u9760\u8fd1\u5e95\u5c42\uff0c\u96be\u5ea6\u5e94\u8be5\u4e5f\u4f1a\u8d8a\u5927"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u8fd1\u771f\u662f\u5fd9\u5f97\u7126\u5934\u70c2\u989d\uff0c\u80fd\u62bd\u51fa\u65f6\u95f4\u5199\u4e00\u7bc7\u535a\u5ba2\u5df2\u7ecf\u6210\u4e86\u5962\u4f88\u30026.S081 \u7684\u5237\u8bfe\u901f\u5ea6\u53ef\u80fd\u8981\u653e\u7f13\u4e86\uff0c\u6211\u4e89\u53d6\u80fd\u591f\u4e24\u5468\u4ea7\u51fa\u4e00\u7bc7\u9ad8\u8d28\u91cf\u535a\u5ba2\u5427\uff08\u4e0d\u4ec5\u4ec5\u662f lab \u8bb0\u5f55\uff0c\u4e5f\u53ef\u80fd\u662f xv6 \u7684\u6e90\u7801\u5256\u6790\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u672c\u5b9e\u9a8c\u8017\u65f6 3 \u5929\uff0c\u7ea6 7 \u5c0f\u65f6")))}m.isMDXComponent=!0},15876:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20220425223127079-bebcf8be62597bfdb4781d589a26471f.png"},12984:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20220426142906558-a6d194508b1d445549ff98624750a59e.png"},22270:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20220426145241685-951e20e56f4773c66f28d7efbec5fa9c.png"},16981:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20220426150750274-490231f2df81416a93e8ff9aabf356b0.png"},18189:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20220426161527040-e04dccfd1fc5fac70b2289ab829251f4.png"},51176:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20220426182731397-e39eb88cfaf5761b5dc1215209a9524f.png"},89554:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/image-20220426185456523-abeb11aed0f3255d312d3dcbda805976.png"}}]);