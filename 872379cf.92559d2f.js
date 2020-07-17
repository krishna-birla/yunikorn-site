(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{179:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(9),c=(r(0),r(212)),a={id:"deployment",title:"Deployment Guide"},i={id:"version-0.8.0/setup/deployment",isDocsHomePage:!1,title:"Deployment Guide",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/setup/deployment.md",permalink:"/docs/setup/deployment",version:"0.8.0",sidebar:"version-0.8.0/docs",previous:{title:"Configure Scheduler",permalink:"/docs/setup/configure_scheduler"},next:{title:"Environment Setup",permalink:"/docs/setup/env_setup"}},l=[{value:"Setup RBAC",id:"setup-rbac",children:[]},{value:"Create the ConfigMap",id:"create-the-configmap",children:[]},{value:"Deploy the scheduler on k8s",id:"deploy-the-scheduler-on-k8s",children:[]},{value:"Access to the web UI",id:"access-to-the-web-ui",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The easiest way to deploy YuniKorn is to leverage our ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/tree/master/helm-charts"}),"helm charts"),",\nyou can find the guide ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/"}),"here"),". However, if you want to explore the deployment procedure\nstep by step, here are the instructions."),Object(c.b)("h2",{id:"setup-rbac"},"Setup RBAC"),Object(c.b)("p",null,"The first step is to create the RBAC role for the scheduler, see ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/yunikorn-rbac.yaml"}),"yunikorn-rbac.yaml")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f scheduler/yunikorn-rbac.yaml\n")),Object(c.b)("p",null,"The role is a requirement on the current versions of kubernetes."),Object(c.b)("h2",{id:"create-the-configmap"},"Create the ConfigMap"),Object(c.b)("p",null,"YuniKorn loads its configuration from a K8s configmap, so it is required to create the configmap before launching the scheduler."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"download a sample configuration file:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"curl -o queues.yaml https://raw.githubusercontent.com/apache/incubator-yunikorn-k8shim/master/conf/queues.yaml\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"create ConfigMap in kubernetes:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create configmap yunikorn-configs --from-file=queues.yaml\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"check if the ConfigMap was created correctly:")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl describe configmaps yunikorn-configs\n")),Object(c.b)("p",null,"For more information about how to manage scheduler's configuration via configmap, see more from ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configure_scheduler"}),"here"),"."),Object(c.b)("h2",{id:"deploy-the-scheduler-on-k8s"},"Deploy the scheduler on k8s"),Object(c.b)("p",null,"Before you can deploy the scheduler the image for the scheduler and the web interface must be build with the appropriate tags.\nThe procedure on how to build the images is explained in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"a_developer_guide.md"}),"build document"),". See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/scheduler.yaml"}),"scheduler.yaml")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"kubectl create -f scheduler/scheduler.yaml\n")),Object(c.b)("p",null,"The deployment will run 2 containers from your pre-built docker images in 1 pod,"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"yunikorn-scheduler-core (yunikorn scheduler core and shim for K8s)"),Object(c.b)("li",{parentName:"ul"},"yunikorn-scheduler-web (web UI)")),Object(c.b)("p",null,"The pod is deployed as a customized scheduler, it will take the responsibility to schedule pods which explicitly specifies ",Object(c.b)("inlineCode",{parentName:"p"},"schedulerName: yunikorn")," in pod's spec."),Object(c.b)("h2",{id:"access-to-the-web-ui"},"Access to the web UI"),Object(c.b)("p",null,"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard ports can be turned on via:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),'POD=`kubectl get pod -l app=yunikorn -o jsonpath="{.items[0].metadata.name}"` && \\\nkubectl port-forward ${POD} 9889 9080\n')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"9889")," is the default port for Web UI, ",Object(c.b)("inlineCode",{parentName:"p"},"9080")," is the default port of scheduler's Restful service where web UI retrieves info from.\nOnce this is done, web UI will be available at: http://localhost:9889."))}p.isMDXComponent=!0},212:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,h=s["".concat(a,".").concat(d)]||s[d]||b[d]||c;return r?o.a.createElement(h,i(i({ref:t},u),{},{components:r})):o.a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);