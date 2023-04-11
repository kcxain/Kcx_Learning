"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[675],{3905:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>N});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),p=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):m(m({},n),e)),a},i=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),l=p(a),u=r,N=l["".concat(c,".").concat(u)]||l[u]||d[u]||s;return a?t.createElement(N,m(m({ref:n},i),{},{components:a})):t.createElement(N,m({ref:n},i))}));function N(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,m=new Array(s);m[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[l]="string"==typeof e?e:r,m[1]=o;for(var p=2;p<s;p++)m[p]=a[p];return t.createElement.apply(null,m)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56576:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const s={},m="A1-Exploring Word Vectors",o={unversionedId:"ai/dl-nlp/Assignment1-Exploring_Word_Vectors",id:"ai/dl-nlp/Assignment1-Exploring_Word_Vectors",title:"A1-Exploring Word Vectors",description:"\u5b9e\u9a8c\u6982\u89c8",source:"@site/docs/ai/dl-nlp/Assignment1-Exploring_Word_Vectors.md",sourceDirName:"ai/dl-nlp",slug:"/ai/dl-nlp/Assignment1-Exploring_Word_Vectors",permalink:"/ai/dl-nlp/Assignment1-Exploring_Word_Vectors",draft:!1,editUrl:"https://github.com/kcxain/Kcx_Learning/tree/master/docs/ai/dl-nlp/Assignment1-Exploring_Word_Vectors.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cs224n: \u81ea\u7136\u8bed\u8a00\u5904\u7406\u4e0e\u6df1\u5ea6\u5b66\u4e60",permalink:"/ai/dl-nlp/"},next:{title:"A2-word2vec",permalink:"/ai/dl-nlp/Assignment2-word2vec"}},c={},p=[{value:"\u5b9e\u9a8c\u6982\u89c8",id:"\u5b9e\u9a8c\u6982\u89c8",level:2},{value:"Part 1\uff1a\u57fa\u4e8e\u8ba1\u6570\u7684\u8bcd\u5411\u91cf",id:"part-1\u57fa\u4e8e\u8ba1\u6570\u7684\u8bcd\u5411\u91cf",level:2},{value:"\u4efb\u52a11\uff1a\u83b7\u53d6\u5355\u8bcd\u8868",id:"\u4efb\u52a11\u83b7\u53d6\u5355\u8bcd\u8868",level:3},{value:"\u4efb\u52a12\uff1a\u8ba1\u7b97\u5171\u73b0\u77e9\u9635",id:"\u4efb\u52a12\u8ba1\u7b97\u5171\u73b0\u77e9\u9635",level:3},{value:"\u4efb\u52a13\uff1a\u964d\u7ef4",id:"\u4efb\u52a13\u964d\u7ef4",level:3},{value:"\u4efb\u52a14\uff1a\u5b9e\u73b0\u753b\u51fa\u8bcd\u5411\u91cf",id:"\u4efb\u52a14\u5b9e\u73b0\u753b\u51fa\u8bcd\u5411\u91cf",level:3},{value:"Part2\uff1a\u57fa\u4e8e\u8bcd\u5411\u91cf\u7684\u9884\u6d4b",id:"part2\u57fa\u4e8e\u8bcd\u5411\u91cf\u7684\u9884\u6d4b",level:2}],i={toc:p},l="wrapper";function d(e){let{components:n,...s}=e;return(0,r.kt)(l,(0,t.Z)({},i,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"a1-exploring-word-vectors"},"A1-Exploring Word Vectors"),(0,r.kt)("h2",{id:"\u5b9e\u9a8c\u6982\u89c8"},"\u5b9e\u9a8c\u6982\u89c8"),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b21\u5b9e\u9a8c\u975e\u5e38\u7b80\u5355\uff0c\u5c31\u662f\u5bf9 Word Vector \u6709\u4e00\u4e2a\u521d\u6b65\u7684\u8ba4\u8bc6\uff0c\u5f15\u8d77\u6211\u4eec\u63a2\u7d22\u7684\u6b32\u671b\u3002\u5176\u5b9e\u6ca1\u4ec0\u4e48\u597d\u5199\u7684\uff0c\u6743\u5f53\u8bb0\u5f55\u4e00\u4e0b\u5b66\u4e60\u8fc7\u7a0b"),(0,r.kt)("h2",{id:"part-1\u57fa\u4e8e\u8ba1\u6570\u7684\u8bcd\u5411\u91cf"},"Part 1\uff1a\u57fa\u4e8e\u8ba1\u6570\u7684\u8bcd\u5411\u91cf"),(0,r.kt)("p",null,'\u5c31\u662f\u4e00\u4e2a\u6734\u7d20\u7684\u60f3\u6cd5\uff1a"You shall know a word by the company it keeps"\uff0c\u4f7f\u7528\u5171\u73b0\u77e9\u9635\u6765\u6c42\u5f97\u8bcd\u5411\u91cf(Co-Occurrence)\uff0c\u601d\u8def\u5c31\u662f\u53d6\u7a97\u53e3\u5927\u5c0f',(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"n")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))),"\uff0c\u7edf\u8ba1\u6bcf\u4e00\u4e2a\u5355\u8bcd\u4e0a\u4e0b\u6587\u7a97\u53e3\u4e2d\u5176\u5b83\u5355\u8bcd\u51fa\u73b0\u7684\u6b21\u6570"),(0,r.kt)("p",null,"\u5f97\u5230\u5171\u73b0\u77e9\u9635\u540e\uff0c\u8be5\u77e9\u9635\u7684\u884c\uff08\u6216\u5217\uff09\u63d0\u4f9b\u4e86\u53ef\u4ee5\u770b\u4f5c\u4e00\u79cd\u7684\u8bcd\u5411\u91cf\uff0c\u4f46\u8fd9\u79cd\u5411\u91cf\u901a\u5e38\u8f83\u5927\uff08\u7ef4\u6570\u4e3a\u8bed\u6599\u5e93\u4e2d\u8bcd\u7684\u6570\u76ee\uff09\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u7684\u4e0b\u4e00\u6b65\u5e94\u8be5\u8fdb\u884c\u964d\u7ef4\u64cd\u4f5c"),(0,r.kt)("p",null,"\u4f7f\u7528\u5947\u5f02\u503c\u5206\u89e3\uff08SVD\uff09\u65b9\u6cd5\uff0c\u8fd9\u662f\u4e00\u79cd\u5e7f\u4e49 PCA\uff08\u4e3b\u6210\u5206\u5206\u6790\uff09\uff0c\u4ee5\u9009\u62e9\u4e3b\u8981\u7279\u5f81\uff0c\u5982\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37551).Z,width:"487",height:"176"})),(0,r.kt)("p",null,"\u7efc\u4e0a\uff0c\u57fa\u4e8e\u8ba1\u6570\u7684\u8bcd\u5411\u91cf\u8ba1\u7b97\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e\u8bed\u6599\u5e93\u5f97\u5230\u5171\u73b0\u77e9\u9635"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u5171\u7ebf\u77e9\u9635\u8fdb\u884c\u5947\u5f02\u503c\u5206\u89e3\u964d\u7ef4")),(0,r.kt)("p",null,"\u5f53\u8bed\u6599\u5e93\u592a\u8fc7\u5e9e\u5927\u65f6\uff0c\u5bf9\u5171\u73b0\u77e9\u9635\u8fdb\u884c SVD \u662f\u975e\u5e38\u8017\u8d39\u65f6\u7a7a\u7684\uff0c\u5229\u7528\u5171\u73b0\u77e9\u9635\u6bd4\u8f83\u7a00\u758f\u7684\u7279\u70b9\uff0c\u4e00\u822c\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"\u622a\u65ad SVD")),(0,r.kt)("h3",{id:"\u4efb\u52a11\u83b7\u53d6\u5355\u8bcd\u8868"},"\u4efb\u52a11\uff1a\u83b7\u53d6\u5355\u8bcd\u8868"),(0,r.kt)("p",null,"\u8981\u6c42\u4ece\u8bed\u6599\u5e93\u4e2d\u63d0\u53d6\u51fa\u5355\u8bcd\u5217\u8868\uff0c\u5229\u7528 Python \u7684 set \u5373\u53ef\uff0c\u975e\u5e38\u7b80\u5355"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def distinct_words(corpus):\n    """ Determine a list of distinct words for the corpus.\n        Params:\n            corpus (list of list of strings): corpus of documents\n        Return:\n            corpus_words (list of strings): sorted list of distinct words across the corpus\n            n_corpus_words (integer): number of distinct words across the corpus\n    """\n    corpus_words = []\n    n_corpus_words = -1\n  \n    # ------------------\n    # Write your implementation here.\n    corpus_words = sorted(list(set([j for i in corpus for j in set(i)])))\n    n_corpus_words = len(corpus_words)\n\n    # ------------------\n\n    return corpus_words, n_corpus_words\n')),(0,r.kt)("h3",{id:"\u4efb\u52a12\u8ba1\u7b97\u5171\u73b0\u77e9\u9635"},"\u4efb\u52a12\uff1a\u8ba1\u7b97\u5171\u73b0\u77e9\u9635"),(0,r.kt)("p",null,"\u8981\u6c42\u8ba1\u7b97\u51fa\u5171\u73b0\u77e9\u9635\uff0c\u904d\u5386\u5373\u53ef\uff0c\u6ce8\u610f\u7d22\u5f15\u7ec6\u8282"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def compute_co_occurrence_matrix(corpus, window_size=4):\n    """ Compute co-occurrence matrix for the given corpus and window_size (default of 4).\n  \n        Note: Each word in a document should be at the center of a window. Words near edges will have a smaller\n              number of co-occurring words.\n  \n              For example, if we take the document "<START> All that glitters is not gold <END>" with window size of 4,\n              "All" will co-occur with "<START>", "that", "glitters", "is", and "not".\n  \n        Params:\n            corpus (list of list of strings): corpus of documents\n            window_size (int): size of context window\n        Return:\n            M (a symmetric numpy matrix of shape (number of unique words in the corpus , number of unique words in the corpus)): \n                Co-occurence matrix of word counts. \n                The ordering of the words in the rows/columns should be the same as the ordering of the words given by the distinct_words function.\n            word2ind (dict): dictionary that maps word to index (i.e. row/column number) for matrix M.\n    """\n    words, n_words = distinct_words(corpus)\n    M = None\n    word2ind = {}  \n  \n    # ------------------\n    # Write your implementation here.\n    word2ind = {w : i for i, w in enumerate(words)}\n    M = np.zeros((n_words, n_words))\n    for s in corpus:\n        index = [word2ind[i] for i in s]\n        for i, wid in enumerate(index):\n            left = max(i - window_size, 0)\n            right = min(i + window_size, len(s))\n            for j in index[left:i] + index[i + 1:right + 1]:\n                M[wid][j] += 1\n    # ------------------\n    return M, word2ind\n')),(0,r.kt)("h3",{id:"\u4efb\u52a13\u964d\u7ef4"},"\u4efb\u52a13\uff1a\u964d\u7ef4"),(0,r.kt)("p",null,"\u5229\u7528\u622a\u65ad SVD \u5f97\u5230 k \u7ef4\u7684\u8bcd\u5411\u91cf\u77e9\u9635"),(0,r.kt)("p",null,"\u8fd9\u91cc\u76f4\u63a5\u8c03 Scikit-Learn \u7684\u5e93",(0,r.kt)("a",{parentName:"p",href:"http://scikit-learn.org/stable/modules/generated/sklearn.decomposition.TruncatedSVD.html"},"TruncatedSVD"),"\uff0c\u6ce8\u610f\u7ed3\u679c\u8981\u8f6c\u7f6e\u4e00\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def reduce_to_k_dim(M, k=2):\n    """ Reduce a co-occurence count matrix of dimensionality (num_corpus_words, num_corpus_words)\n        to a matrix of dimensionality (num_corpus_words, k) using the following SVD function from Scikit-Learn:\n            - http://scikit-learn.org/stable/modules/generated/sklearn.decomposition.TruncatedSVD.html\n  \n        Params:\n            M (numpy matrix of shape (number of unique words in the corpus , number of unique words in the corpus)): co-occurence matrix of word counts\n            k (int): embedding size of each word after dimension reduction\n        Return:\n            M_reduced (numpy matrix of shape (number of corpus words, k)): matrix of k-dimensioal word embeddings.\n                    In terms of the SVD from math class, this actually returns U * S\n    """  \n    n_iters = 10     # Use this parameter in your call to `TruncatedSVD`\n    M_reduced = None\n    print("Running Truncated SVD over %i words..." % (M.shape[0]))\n  \n    # ------------------\n    # Write your implementation here.\n    svd = TruncatedSVD(n_components=k, n_iter=n_iters)\n    M_reduced=svd.fit_transform(M)\n\n\n    # ------------------\n    print("Done.")\n    return M_reduced\n')),(0,r.kt)("h3",{id:"\u4efb\u52a14\u5b9e\u73b0\u753b\u51fa\u8bcd\u5411\u91cf"},"\u4efb\u52a14\uff1a\u5b9e\u73b0\u753b\u51fa\u8bcd\u5411\u91cf"),(0,r.kt)("p",null,"\u5982\u679c\u53d6 k = 2\uff0c\u90a3\u4e48\u5c31\u5f97\u5230\u4e8c\u7ef4\u8bcd\u5411\u91cf\uff0c\u5c31\u80fd\u5728\u4e8c\u7ef4\u5750\u6807\u4e2d\u753b\u51fa\u6765\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def plot_embeddings(M_reduced, word2ind, words):\n    """ Plot in a scatterplot the embeddings of the words specified in the list "words".\n        NOTE: do not plot all the words listed in M_reduced / word2ind.\n        Include a label next to each point.\n  \n        Params:\n            M_reduced (numpy matrix of shape (number of unique words in the corpus , 2)): matrix of 2-dimensioal word embeddings\n            word2ind (dict): dictionary that maps word to indices for matrix M\n            words (list of strings): words whose embeddings we want to visualize\n    """\n    # ------------------\n    # Write your implementation here.\n    for w in words:\n        index = word2ind[w]\n\n        x = M_reduced[index][0]\n        y = M_reduced[index][1]\n\n        plt.scatter(x,y)\n        plt.text(x, y, w)\n    plt.show()\n\n    # ------------------\n')),(0,r.kt)("h2",{id:"part2\u57fa\u4e8e\u8bcd\u5411\u91cf\u7684\u9884\u6d4b"},"Part2\uff1a\u57fa\u4e8e\u8bcd\u5411\u91cf\u7684\u9884\u6d4b"),(0,r.kt)("p",null,"\u6b64\u6b21\u4f5c\u4e1a\u9700\u8981\u81ea\u5df1\u4ee3\u7801\u7684\u90e8\u5206\u5df2\u7ecf\u7ed3\u675f\u4e86\uff0c\u7b2c\u4e8c\u90e8\u5206\u53ea\u662f\u770b\u770b\u57fa\u4e8e\u8ba1\u6570\u7684\u8bcd\u5411\u91cf\u80fd\u6709\u4ec0\u4e48\u7528"),(0,r.kt)("p",null,"\u5f00\u5934\u6211\u4eec\u63d0\u5230\u4e86\uff0c\u8fd9\u79cd\u57fa\u4e8e\u4e0a\u4e0b\u6587\u8ba1\u6570\u7684\u8bcd\u5411\u91cf\u7684\u57fa\u672c\u601d\u60f3\uff0c\u90a3\u4e48\u663e\u7136\u4e24\u4e2a\u76f8\u4f3c\u7684\u8bcd\uff0c\u5b83\u4eec\u7684\u4e0a\u4e0b\u6587\u4e5f\u5e94\u8be5\u5dee\u4e0d\u591a\uff0c\u90a3\u4e48\u8bcd\u5411\u91cf\u4e5f\u4f1a\u5f88\u76f8\u4f3c"),(0,r.kt)("p",null,"\u5982\u4f55\u8bc4\u4ef7\u8bcd\u5411\u91cf\u7684\u76f8\u4f3c\u7a0b\u5ea6\u5462\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e24\u5411\u91cf\u95f4\u7684\u5939\u89d2\u6765\u523b\u753b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(86620).Z,width:"360",height:"276"})),(0,r.kt)("p",null,"\u53d6\u5176\u4f59\u5f26\u503c\uff1a"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mo",{parentName:"mrow"},"\u22c5"),(0,r.kt)("mi",{parentName:"mrow"},"q")),(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow"},"q"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"))),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mtext",{parentName:"mrow"},"\xa0where\xa0"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow"},"\u2208"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"s = \\frac{p \\cdot q}{||p|| ||q||}, \\textrm{ where } s \\in [-1, 1]")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.0574em",verticalAlign:"-0.936em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.1214em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223\u2223"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223\u2223\u2223\u2223"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q"),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223\u2223"))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u22c5"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.936em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord textrm"},"\xa0where\xa0")),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"["),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mpunct"},","),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},"]")))))),(0,r.kt)("p",null,"\u8be5\u503c\u8d8a\u5927\u5219\u8bf4\u660e\u4e24\u5411\u91cf\u5939\u89d2\u8d8a\u5c0f\uff0c\u5219\u8d8a\u76f8\u4f3c"),(0,r.kt)("p",null,"\u8be5\u90e8\u5206\u5185\u5bb9\u5c31\u662f\u5229\u7528\u8fd9\u4e2a\u76f8\u4f3c\u6027\u6765\u6c42\u5f97\u540c\u4e49\u8bcd\uff0c\u53cd\u4e49\u8bcd\u7b49\uff0c\u5c31\u4e0d\u5728\u6587\u7ae0\u4e2d\u5199\u4e86"),(0,r.kt)("p",null,'\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u79cd\u76f8\u4f3c\u6027\u5176\u5b9e\u5e76\u4e0d\u80fd\u6c42\u5f97\u540c\u4e49\u8bcd\uff0c\u5b83\u66f4\u591a\u7684\u8868\u73b0\u7684\u662f\u76f8\u540c\u8bcd\u6027\u7684\u8bcd\u7684\u8bcd\u5411\u91cf\u76f8\u4f3c\uff0c\u6bd4\u5982"large" \u548c "small" \u8fd9\u4e00\u5bf9\u8bcd\u867d\u7136\u662f\u53cd\u4e49\u8bcd\uff0c\u4f46\u662f\u6839\u636e\u6211\u4eec\u7684\u76f4\u89c9\uff0c\u5b83\u4eec\u7684\u4e0a\u4e0b\u6587\u5176\u5b9e\u5e94\u8be5\u662f\u5dee\u4e0d\u591a\u7684\uff0c\u6545\u8bcd\u5411\u91cf\u4e5f\u4f1a\u975e\u5e38\u76f8\u8fd1\uff0c\u4e8b\u5b9e\u8bc1\u660e\u786e\u5b9e\u5982\u6b64\uff1a'),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38834).Z,width:"694",height:"302"})))}d.isMDXComponent=!0},38834:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/1862470853-ee7daa11e8eeef104849d46b375f5917.png"},37551:(e,n,a)=>{a.d(n,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAecAAACwCAYAAAA18aavAAAXMklEQVR4Xu3dCbCV8x/H8WSJ0kYhkWijssxYohgjKpRKUvaQEdlSoSzhX9FiJ5UaY8mWiBIassxkKyXUCGPJUjSElGj7/efzM+c497m327n39/s993nueb9mvuOec55bOtv7nOd5znOqGAAAkChVomcAAICKRZwBAEgY4gwAQMIQZwAAEoY4AwCQMMQZAICEIc4AACQMcQYAIGGIMwAACUOcAQBIGOIMAEDCEGcAABKGOAMAkDDEGQCAhCHOAAAkDHEGACBhiDMAAAlDnAEASBjiXE6vvPKK6du3r5kxY0b0IlSwV1991bRt29aMGDEiehEApAJxdtClSxczd+7c6NlIgK5du5o5c+ZEzwaAVCDO5bRp0yaz5557mvXr10cvQgXTbbPbbruZv/76K3oRAKQCcS6jVatWme+++858+OGH5oQTTohejATQbdOuXTv788aNG+1q7u+//z6yFAAkF3Eug/vuu89MmDDBvPfee6ZTp05s00yoO+64w1x//fVm5cqVZtKkSeaRRx4xPXr0iC4GAIlFnPP05JNP2h3AMjp06MD25oTq3LmzmTJlinnqqafs6UWLFplPP/00shQAJBdxzlPz5s3Nu+++a39me3NyaTV2vXr1TO/evc20adOiFwNAKhDnPHzzzTdmxx13NJs3b7an58+fb7c3K9J///13ZGlUpHnz5mW3Nw8ePNiMGjXK/vzbb7/lLgYAiUac87BixQrTrFmz7Olhw4aZ4cOH29Xay5Yty1kSFW3MmDHmhhtusD/fc8895qabbjJr1qwx06dPjywJAMlFnPOkJ/nZs2ebqVOn2h2Ohg4dah588MHoYqhgp556qnn77bftz9pxb9CgQeaBBx4w//zzT2RJAEgu4lwG+jjOhg0b7M8//fQT25wT6JdffilyWntsr1u3rsh5AJB0xBkAgIQhzgAAJAxxBgAgYVIX52rVqpkqVaowVVJ30zmpW7eu/Tdvs802QSfzd1StWpUpx+j6e+yxx6I3X960o2X0fh5q9P+7ww47JHL0/3fLLbdEr568vfjii9l/YyGProOmTZtGr55USN0zfIMGDeyOWfrMcaHO2rVr7YuUQqIDi/Tv39/ueR1yatSoYZYvX24PZsKUfc466yzz6KOPRm++vA0ZMsQccMABZvz48UFH31o2cOBAe5yCJI4OP3vjjTdGr5686aODNWvWtIccLuQ544wzzH777Re9elIhdXHWkbl++OGH6NkFRd+2pIOiFBJ9y9RVV11lJk6cGHRq165tfv755+hfjzyde+65znFu1apVsdvF93Tr1s1cd9110b8+MW699Vb78c3yUpy1tin67y60Oe+880yTJk2iV08qEOcUIs7hhji7Ic5+EGc/Q5xjRJyJc8ghzm6Isx+VMc7an+Caa67Z4uiIftHfcR3iHCPiTJxDDnF2EyrO+qpWPdHuvffedicf7bTXunVru904umw+Q5zjH+0no+8k0O2o7cC6HfXz6aefbv9fL7nkkmK/4zrEOUbEmTiHHOLsJkScFeZjjjnGNGrUyFx55ZX2sLna2UdPvLq9zj777GK349aGOMc7eld84IEHZk+3adPGxlk75+n0RRddZHfeiv6e6xDnGBFn4hxyiLObEHHWXvr6lMa9996bPU9P9vfff78ZMWKEjVBZn9iJc/lGn2jQ7dOwYUOz8847m/r169vTt99+e3YZ/aw97mvVqmXfIffs2dO+mNJq7cwy0Tjfdddd9guFon+f6xDnGBFn4tyvXz/7KlwPfL2b2n///e0ThL6QRJfrga7Tulyj1Z+5T+ylDXF2EyLOuq379OmTve31DXFHHnmkadu2rV22c+fOZrvttivTO2ji7DaXX365jas+k63HW/Tyu+++2+y1117Z+EYnGudQQ5xjRJyJc2b0oNMDvFevXsUelBqdX5YnbA1xdhMiznrXrHdVeuelGOS+wxo7dqy9H2gZxSjf25s4u402Neyxxx728advgotervN69+5d7PzMEOetI84pRJz/na3FWU8O55xzTrHzSxvi7CZEnLUT2ODBg83xxx9vdtppp2JP6Iq1lsms4s4n0MTZfXTAGT3+6tSpY/cDyJyvn/U8XdraKuK8dcQ5hYjzv0OckydEnBVSrcJu3769vb0PPfRQ87///a/IMtquqf/mG2ji7D7a5q8j6uk2ufDCC7Pn9+3b13Ts2LHY8hrdbieeeKJ9HtfvderUye4MFl3O1xDnGBFn4pwZ4pw8IeKsfQkUmlNOOSV7/HNN9erV7bLnn39+keXzCTRx9jMnnXSSvS2070fmvH333bfIDmK5o3fVeketsOdOdDlfQ5xjRJyJc2bKGudBgwbZB+vI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"},86620:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/4096508183-4f0f19403e1fc9246fad305686ec5dde.png"}}]);