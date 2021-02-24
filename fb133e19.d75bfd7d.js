(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),i=n(6),o=(n(0),n(166)),a={id:"predicates",title:"Support K8s Predicates"},c={unversionedId:"design/predicates",id:"version-0.9.0/design/predicates",isDocsHomePage:!1,title:"Support K8s Predicates",description:"\x3c!--",source:"@site/versioned_docs/version-0.9.0/design/predicates.md",slug:"/design/predicates",permalink:"/docs/design/predicates",version:"0.9.0",sidebar:"version-0.9.0/docs",previous:{title:"Resilience",permalink:"/docs/design/resilience"},next:{title:"Scheduler Configuration",permalink:"/docs/design/scheduler_configuration"}},s=[{value:"Design",id:"design",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"Predicates White-list",id:"predicates-white-list",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"design"},"Design"),Object(o.b)("p",null,"Predicates are a set of pre-registered functions in K8s, the scheduler invokes these functions to check if a pod\nis eligible to be allocated onto a node. Common predicates are: node-selector, pod affinity/anti-affinity etc. To support\nthese predicates in YuniKorn, we don't intend to re-implement everything on our own, but to re-use the core predicates\ncode as much as possible."),Object(o.b)("p",null,"YuniKorn-core is agnostic about underneath RMs, so the predicates functions are implemented in K8s-shim as a ",Object(o.b)("inlineCode",{parentName:"p"},"SchedulerPlugin"),".\nSchedulerPlugin is a way to plug/extend scheduler capabilities. Shim can implement such plugin and register itself to\nyunikorn-core, so plugged function can be invoked in the scheduler core. Find all supported plugins in\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-core/blob/master/pkg/plugins/types.go"},"types"),"."),Object(o.b)("h2",{id:"workflow"},"Workflow"),Object(o.b)("p",null,"First, RM needs to register itself to yunikorn-core, it advertises what scheduler plugin interfaces are supported.\nE.g a RM could implement ",Object(o.b)("inlineCode",{parentName:"p"},"PredicatePlugin")," interface and register itself to yunikorn-core. Then yunikorn-core will\ncall PredicatePlugin API to run predicates before making allocation decisions."),Object(o.b)("p",null,"Following workflow demonstrates how allocation looks like when predicates are involved."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"pending pods: A, B\nshim sends requests to core, including A, B\ncore starts to schedule A, B\n  partition -> queue -> app -> request\n    schedule A (1)\n      run predicates (3)\n        generate predicates metadata (4)\n        run predicate functions one by one with the metadata\n        success\n        proposal: A->N\n    schedule B (2)\n      run predicates (calling shim API)\n        generate predicates metadata\n        run predicate functions one by one with the metadata\n        success\n        proposal: B->N\ncommit the allocation proposal for A and notify k8s-shim\ncommit the allocation proposal for B and notify k8s-shim\nshim binds pod A to N\nshim binds pod B to N\n")),Object(o.b)("p",null,"(1) and (2) are running in parallel."),Object(o.b)("p",null,"(3) yunikorn-core calls a ",Object(o.b)("inlineCode",{parentName:"p"},"schedulerPlugin")," API to run predicates, this API is implemented on k8s-shim side."),Object(o.b)("p",null,"(4) K8s-shim generates metadata based on current scheduler cache, the metadata includes some intermittent states about nodes and pods."),Object(o.b)("h2",{id:"predicates-white-list"},"Predicates White-list"),Object(o.b)("p",null,"Intentionally, we only support a white-list of predicates. Majorly due to 2 reasons,"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Predicate functions are time-consuming, it has negative impact on scheduler performance. To support predicates that are only necessary can minimize the impact. This will be configurable via CLI options;"),Object(o.b)("li",{parentName:"ul"},"The implementation depends heavily on K8s default scheduler code, though we reused some unit tests, the coverage is still a problem. We'll continue to improve the coverage when adding new predicates.")),Object(o.b)("p",null,"the white-list currently is defined in ",Object(o.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/pkg/plugin/predicates/predictor.go"},"DefaultSchedulerPolicy"),"."))}p.isMDXComponent=!0},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);