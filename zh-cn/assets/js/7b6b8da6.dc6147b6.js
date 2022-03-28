"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7370],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,m=c["".concat(o,".").concat(d)]||c[d]||u[d]||l;return a?r.createElement(m,i(i({ref:t},h),{},{components:a})):r.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},30481:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],s={id:"release_procedure",title:"Release Procedure"},o=void 0,p={type:"mdx",permalink:"/zh-cn/community/release_procedure",source:"@site/src/pages/community/release_procedure.md",title:"Release Procedure",description:"\x3c!--",frontMatter:{id:"release_procedure",title:"Release Procedure"}},h=[{value:"Create a Release",id:"create-a-release",level:2},{value:"Tag and update release for version",id:"tag-and-update-release-for-version",level:3},{value:"Update the CHANGELOG",id:"update-the-changelog",level:3},{value:"Run the release tool",id:"run-the-release-tool",level:3},{value:"Create Signature",id:"create-signature",level:4},{value:"Create Checksum",id:"create-checksum",level:4},{value:"Upload Release Candidate Artefacts",id:"upload-release-candidate-artefacts",level:3},{value:"Start Voting Thread",id:"start-voting-thread",level:3},{value:"Publish the Release",id:"publish-the-release",level:3},{value:"Release Docker images",id:"release-docker-images",level:4},{value:"Release Helm Charts",id:"release-helm-charts",level:4},{value:"Update the website",id:"update-the-website",level:4},{value:"Cleanup",id:"cleanup",level:4},{value:"Create the GIT releases",id:"create-the-git-releases",level:4},{value:"Verify the release",id:"verify-the-release",level:3},{value:"Signing your first release",id:"signing-your-first-release",level:2},{value:"Generate a Key",id:"generate-a-key",level:3},{value:"Add the signature to the project KEYS file",id:"add-the-signature-to-the-project-keys-file",level:3}],u={toc:h};function c(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"yunikorn-release-procedure"},"YuniKorn Release Procedure"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release"},"release repository")," contains the code and configuration to create a release for Apache YuniKorn.\nBefore starting the release procedure clone the repository and checkout the master branch.\nEven if a release has been made before make sure that the latest version is checked out as the code and or config might have changed.  "),(0,l.kt)("p",null,"The instructions and tools obey the ASF ",(0,l.kt)("a",{parentName:"p",href:"http://www.apache.org/legal/release-policy.html"},"release policy"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-a-release"},"Create a Release"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tag-and-update-release-for-version"},"Tag and update release for version")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#update-the-changelog"},"Update the CHANGELOG")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#run-the-release-tool"},"Run the release tool"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-signature"},"Create Signature")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-checksum"},"Create Checksum")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-release-candidate-artefacts"},"Upload Release Candidate Artefacts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#start-voting-thread"},"Start Voting Thread")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#publish-the-release"},"Publish the Release"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#release-docker-images"},"Release Docker images")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#release-helm-charts"},"Release Helm Charts")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#update-the-website"},"Update the website")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#create-the-git-releases"},"Create the GIT releases")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#verify-the-release"},"Verify the release")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#signing-your-first-release"},"Signing your first release"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#generate-a-key"},"Generate a Key")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#add-the-signature-to-the-project-keys-file"},"Add the signature to the project KEYS file"))))),(0,l.kt)("h2",{id:"create-a-release"},"Create a Release"),(0,l.kt)("p",null,"Simplified release procedure: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a release branch for the target release in all git repos, such as ",(0,l.kt)("inlineCode",{parentName:"li"},"branch-0.8")),(0,l.kt)("li",{parentName:"ol"},"Stabilize the release by fixing test failures and bugs only"),(0,l.kt)("li",{parentName:"ol"},"Tag update release for a new version to prepare a release candidate, e.g ",(0,l.kt)("inlineCode",{parentName:"li"},"v0.8.0")),(0,l.kt)("li",{parentName:"ol"},"Update the CHANGELOG"),(0,l.kt)("li",{parentName:"ol"},"Configure ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-release/tree/master/tools/release-configs.json"},"release-configs.json")),(0,l.kt)("li",{parentName:"ol"},"Run script ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-release/tree/master/tools/build-release.py"},"build-release.py")," to generate source code tarball, checksum and signature."),(0,l.kt)("li",{parentName:"ol"},"Voting and releasing the candidate")),(0,l.kt)("h3",{id:"tag-and-update-release-for-version"},"Tag and update release for version"),(0,l.kt)("p",null,"Branching and tagging can, and in most cases will, require changes in the go mod files.\nBranching is part of the release preparation and often has happened some time before the release process starts.\nA release needs to be tagged in git before starting the release process.\nAs an example check ",(0,l.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-358"},"YUNIKORN-358"),".\nRelease candidates and final release use the same tag which gets moved if a new release candidate is generated. "),(0,l.kt)("p",null,"The tagging is multi step process, all actions are done on the branch that will be released, like ",(0,l.kt)("inlineCode",{parentName:"p"},"branch-0.8"),":"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Tag the web and scheduler interface with the release tag."),(0,l.kt)("li",{parentName:"ol"},"Update the ",(0,l.kt)("inlineCode",{parentName:"li"},"go.mod")," file in the core using ",(0,l.kt)("inlineCode",{parentName:"li"},"go get github.com/apache/yunikorn-scheduler-interface"),(0,l.kt)("br",{parentName:"li"}),"Add the tag and commit the changes."),(0,l.kt)("li",{parentName:"ol"},"Update the ",(0,l.kt)("inlineCode",{parentName:"li"},"go.mod")," file in the shim using ",(0,l.kt)("inlineCode",{parentName:"li"},"go get github.com/apache/yunikorn-scheduler-interface")," and",(0,l.kt)("br",{parentName:"li"}),(0,l.kt)("inlineCode",{parentName:"li"},"go get github.com/apache/yunikorn-core"),". Add the tag and commit the changes."),(0,l.kt)("li",{parentName:"ol"},"Create a new branch in the yunikorn-release repo, set the correct chart version in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-release/tree/master/helm-charts/yunikorn/Chart.yaml"},"Chart.yaml"),", and then create the tag.")),(0,l.kt)("h3",{id:"update-the-changelog"},"Update the CHANGELOG"),(0,l.kt)("p",null,"In the release artifacts a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/tree/master/release-top-level-artifacts/CHANGELOG"},"CHANGELOG")," is added for each release.\nThe CHANGELOG should contain the list of jiras fixed in the release.\nFollow these steps to generate the list:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to the ",(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/projects/YUNIKORN?selectedItem=com.atlassian.jira.jira-projects-plugin%3Arelease-page&status=released-unreleased"},"releases page in jira")),(0,l.kt)("li",{parentName:"ul"},"Click on the version that is about to be released, i.e. ",(0,l.kt)("inlineCode",{parentName:"li"},"0.8")),(0,l.kt)("li",{parentName:"ul"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"li"},"Release Notes")," link on the top of the page"),(0,l.kt)("li",{parentName:"ul"},"Click the button ",(0,l.kt)("inlineCode",{parentName:"li"},"Configure Release Notes")),(0,l.kt)("li",{parentName:"ul"},"Select the style ",(0,l.kt)("inlineCode",{parentName:"li"},"Text")," and click ",(0,l.kt)("inlineCode",{parentName:"li"},"create")),(0,l.kt)("li",{parentName:"ul"},"Scroll to the bottom of the page and copy the content of the text area and update the CHANGELOG file in the ../release-top-level-artifacts directory.")),(0,l.kt)("h3",{id:"run-the-release-tool"},"Run the release tool"),(0,l.kt)("p",null,"A tool has been written to handle most of the release tasks.\nThe tool requires a simple ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/tree/master/tools/release-configs.json"},"json")," input file to be updated before running.\nThis configuration points to the current release tag. Only update the tag for each repository."),(0,l.kt)("p",null,"The tool has one requirement outside of standard Python 3: ",(0,l.kt)("a",{parentName:"p",href:"https://gitpython.readthedocs.io/en/stable/intro.html"},"GitPython"),"\nMake sure you have installed it by running ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install gitpython"),"."),(0,l.kt)("p",null,"Run the tool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"python3 build-release.py\n")),(0,l.kt)("p",null,"If you want to automatically sign the release using your GPG key run the tool using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"python3 build-release.py --sign <email-address>\n")),(0,l.kt)("h4",{id:"create-signature"},"Create Signature"),(0,l.kt)("p",null,"If you have GPG with a ",(0,l.kt)("em",{parentName:"p"},"pinentry")," program setup you can automatically sign the release using the release tool.\nOn MacOSX this will be setup automatically if you use the keychain for the keys.\nFor more details check the ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/GnuPG"},"GnuPG tools wiki")," and specifically the ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.archlinux.org/index.php/GnuPG#pinentry"},"pinentry")," chapter.  "),(0,l.kt)("p",null,"Run the release tool using the option ",(0,l.kt)("inlineCode",{parentName:"p"},"--sign <email-address>")," to auto sign the release."),(0,l.kt)("p",null,"Manually creating the signature for the file generated by the tool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"gpg --local-user <email-address> --armor --output apache-yunikorn-0.8.0-src.tar.gz.asc --detach-sig apache-yunikorn-0.8.0-src.tar.gz\n")),(0,l.kt)("p",null,"This will create the signature in the file: ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-yunikorn-0.8.0-src.tar.gz.asc"),"\nVerify that the signature is correct using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"gpg --verify apache-yunikorn-0.8.0-src.tar.gz.asc apache-yunikorn-0.8.0-src.tar.gz\n")),(0,l.kt)("h4",{id:"create-checksum"},"Create Checksum"),(0,l.kt)("p",null,"This step is included in the release after generation of the source tar ball, if the release tool is used this step can be skipped. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"shasum -a 512 apache-yunikorn-0.8.0-src.tar.gz > apache-yunikorn-0.8.0-src.tar.gz.sha512\n")),(0,l.kt)("p",null,"This will create the checksum in the file: ",(0,l.kt)("inlineCode",{parentName:"p"},"apache-yunikorn-0.8.0-src.tar.gz.sha512"),"\nVerify that the checksum is correct using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"shasum -a 512 -c apache-yunikorn-0.8.0-src.tar.gz.sha512 \n")),(0,l.kt)("h3",{id:"upload-release-candidate-artefacts"},"Upload Release Candidate Artefacts"),(0,l.kt)("p",null,"The release artefacts consist of three parts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"source tarball"),(0,l.kt)("li",{parentName:"ul"},"signature file"),(0,l.kt)("li",{parentName:"ul"},"checksum file\nThe three artefacts need to be uploaded to: ",(0,l.kt)("inlineCode",{parentName:"li"},"https://dist.apache.org/repos/dist/dev/yunikorn/")," ")),(0,l.kt)("p",null,"Create a release directory based on the version, i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},"0.8.0"),", add the three files to directory.\nCommit the changes."),(0,l.kt)("p",null,"If you have not done so already make sure to ",(0,l.kt)("a",{parentName:"p",href:"#add-the-signature-to-the-project-keys-file"},"add your signature")," to the KEYS file.\nDo not remove any keys from the file they are kept here to enable older releases to be verified."),(0,l.kt)("p",null,"NOTE: you will need to install subversion to access this repo (use your apache ID). You can use any SVN client, e.g svnX, for convenience."),(0,l.kt)("h3",{id:"start-voting-thread"},"Start Voting Thread"),(0,l.kt)("p",null,"According to the Apache ",(0,l.kt)("a",{parentName:"p",href:"http://www.apache.org/legal/release-policy.html#release-approval"},"release approval doc"),", the steps are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"start a voting thread on ",(0,l.kt)("inlineCode",{parentName:"li"},"dev@yunikorn.apache.org"),". (72 hours)\nAt least three +1 votes are required and more +1 votes than -1 votes.")),(0,l.kt)("h3",{id:"publish-the-release"},"Publish the Release"),(0,l.kt)("p",null,"Once the voting is passed, move the release artefacts from the staging area to the release location ",(0,l.kt)("inlineCode",{parentName:"p"},"https://dist.apache.org/repos/dist/release/yunikorn/"),".\nOnce moved to this space, the content will be automatically synced to ",(0,l.kt)("inlineCode",{parentName:"p"},"https://downloads.apache.org/yunikorn/")," which must be used as the final location for release files.\nRead more for ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/mirrors#location"},"location of files on main server"),"."),(0,l.kt)("p",null,"This will temporarily provide us with two releases in the release area.\nThis is needed to allow the start the mirror sync process and allow for the download page to be updated.\nCleanup of the older release is handled after the website has been updated in the ",(0,l.kt)("a",{parentName:"p",href:"#Cleanup"},"cleanup"),". "),(0,l.kt)("h4",{id:"release-docker-images"},"Release Docker images"),(0,l.kt)("p",null,"The standard build process should be used to build the image.\nRun a ",(0,l.kt)("inlineCode",{parentName:"p"},"make image")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"web"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"k8shim")," repositories to generate the three images required (web, scheduler and admission-controller):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"VERSION=0.8.0; make image\n")),(0,l.kt)("p",null,"Make can also be used to build and push the image if you have access to the Apache docker hub YuniKorn container.\nPush the latest docker images to the apache docker hub using the release as tag.\nMake sure the docker image is built on the specific SHA."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"VERSION=0.8.0; DOCKER_USERNAME=<name>; DOCKER_PASSWORD=<password>; make push \n")),(0,l.kt)("p",null,"Publish an announcement email to the ",(0,l.kt)("inlineCode",{parentName:"p"},"dev@yunikorn.apache.org")," email list. "),(0,l.kt)("h4",{id:"release-helm-charts"},"Release Helm Charts"),(0,l.kt)("p",null,"This step is part of the release tool if the release tool is used the packaging can be skipped."),(0,l.kt)("p",null,"If the release tool is ",(0,l.kt)("strong",{parentName:"p"},"not")," used the ",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," must be updated manually.\nThe other option is to run the helm script against the generated source directory as the tool does: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"helm package --sign --key ${your_key_name} --keyring ${path/to/keyring.secret} staging/<release-dir>/helm-charts/yunikorn --destination staging/ \n")),(0,l.kt)("p",null,"Signing the helm package requires a legacy PGP keyring. The PGP v2 keyring must be converted to the legacy format.\nFor more information please check ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/provenance/"},"Helm documentation"),".\nHelm charts should be signed on release.\nContrary to the source code tar ball signing, signing the helm charts requires manual entry of the key password. "),(0,l.kt)("p",null,"The helm package will generate two files:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"helm package: example ",(0,l.kt)("inlineCode",{parentName:"li"},"yunikorn-0.8.0.tgz")),(0,l.kt)("li",{parentName:"ul"},"provenance or signature file: example ",(0,l.kt)("inlineCode",{parentName:"li"},"yunikorn-0.8.0.tgz.prov"),"\nBoth files should be attached to the ","[release in GIT]","(#Create-the GIT-releases) for the release repository.")),(0,l.kt)("p",null,"Last step is to update the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/yunikorn-release/blob/gh-pages/index.yaml"},"index.yaml")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch with the new release.\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"digest")," mentioned in the index.yaml file is the digest that gets printed by the tool (unsigned package) or stored in the provenance file.\nIt can be generated manually using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"shasum -a 256 yunikorn-0.8.0.tgz\n")),(0,l.kt)("p",null,"Note: do not use the ",(0,l.kt)("inlineCode",{parentName:"p"},"helm repo index")," command to update the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.yaml")," file. The command does not handle the enhanced information stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.yaml")," file nicely.\nUpdate the file manually."),(0,l.kt)("h4",{id:"update-the-website"},"Update the website"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a new documentation version on YuniKorn website based on the latest content in ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-site/tree/master/docs"},"docs")," directory. Refer to ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-site/tree/master#release-a-new-version"},"this")," guide to create the new documentation. "),(0,l.kt)("li",{parentName:"ul"},"Create the release announcement to be referenced from download page on the website. The release announcement is a markdown file based on the version: ",(0,l.kt)("inlineCode",{parentName:"li"},"0.8.0.md"),". The file is stored as part of the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-site/tree/master/src/pages/release-announce"},"static pages")," on the website. "),(0,l.kt)("li",{parentName:"ul"},"Update the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/yunikorn-site/tree/master/src/pages/community/download.md"},"download page")," of the website.")),(0,l.kt)("p",null,"The release announcement are linked to the release details on the download page."),(0,l.kt)("p",null,"Links for the releases have to follow these rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The first download link on the page ",(0,l.kt)("strong",{parentName:"li"},"must")," use the mirror resolution link for the source tar ball only."),(0,l.kt)("li",{parentName:"ul"},"The signature and checksum links ",(0,l.kt)("strong",{parentName:"li"},"must")," point to the release location."),(0,l.kt)("li",{parentName:"ul"},"The non-current releases ",(0,l.kt)("strong",{parentName:"li"},"must")," use the archive links: ",(0,l.kt)("inlineCode",{parentName:"li"},"https://archive.apache.org/dist/yunikorn/")," for the tar ball, the signature and the checksum.")),(0,l.kt)("p",null,"A limited set of three (3) or four (4) releases should be maintained in the table for direct access.\nOlder releases not mentioned in the table can still be accessed via the archive link on the bottom of the page and do not need to be referenced."),(0,l.kt)("h4",{id:"cleanup"},"Cleanup"),(0,l.kt)("p",null,"NOTE: this step should be performed after the website updates have been made as the download links change."),(0,l.kt)("p",null,"There should only be one release, the latest, in the release area.\nAny release that has been in the release area will be automatically copied to the archive.\nOlder releases should be downloaded from the archive directly, not from the release area."),(0,l.kt)("p",null,"The releases need to clean up in two locations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Remove the newly released version from the ",(0,l.kt)("em",{parentName:"li"},"dev")," area by removing the old release candidate directory.\nFor the location see ",(0,l.kt)("a",{parentName:"li",href:"#Upload-Release-Candidate-Artefacts"},"release candidate location")),(0,l.kt)("li",{parentName:"ul"},"Remove the non-current release from the ",(0,l.kt)("em",{parentName:"li"},"release")," area by removing the old release directory.\nFor the location see ",(0,l.kt)("a",{parentName:"li",href:"#Publish-the-Release"},"release location"))),(0,l.kt)("h4",{id:"create-the-git-releases"},"Create the GIT releases"),(0,l.kt)("p",null,"In the GIT repositories finish the release process by creating a release based on the git tag that was added.\nRepeat these steps for all five repositories (core, k8shim, web, scheduler-interface and release):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to the ",(0,l.kt)("inlineCode",{parentName:"li"},"tags")," page"),(0,l.kt)("li",{parentName:"ul"},"click the ",(0,l.kt)("inlineCode",{parentName:"li"},"...")," at the right-hand side of the page that you want to release, select ",(0,l.kt)("inlineCode",{parentName:"li"},"Create Release")," from the drop down"),(0,l.kt)("li",{parentName:"ul"},"update the name and note"),(0,l.kt)("li",{parentName:"ul"},"add the packaged helm chart files (yunikorn-release repository only)"),(0,l.kt)("li",{parentName:"ul"},"click ",(0,l.kt)("inlineCode",{parentName:"li"},"Publish Release")," to finish the steps")),(0,l.kt)("h3",{id:"verify-the-release"},"Verify the release"),(0,l.kt)("p",null,"After the whole procedure verify the documentation on the website and that the released artifacts can be downloaded.\nMirror links might take up to 24 hours to be updated."),(0,l.kt)("h2",{id:"signing-your-first-release"},"Signing your first release"),(0,l.kt)("p",null,"If you haven't signed any releases before, read the documentation to ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/openpgp.html#generate-key"},"generate signing key"),"\nFollow the steps below to add the key you can use to sign. "),(0,l.kt)("h3",{id:"generate-a-key"},"Generate a Key"),(0,l.kt)("p",null,"Generate a new PGP key (skip this step if you already have an Apache linked key):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"gpg --gen-key\n")),(0,l.kt)("p",null,"Fill out the requested information using your full name and Apache email address."),(0,l.kt)("p",null,"Upload the exported key to a public key server like ",(0,l.kt)("inlineCode",{parentName:"p"},"https://pgp.mit.edu/"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"gpg --export --armor <email-address>\n")),(0,l.kt)("p",null,"Upload the fingerprint to apache server: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://id.apache.org/"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"gpg --fingerprint <email-address>\n")),(0,l.kt)("h3",{id:"add-the-signature-to-the-project-keys-file"},"Add the signature to the project KEYS file"),(0,l.kt)("p",null,"Only needed if this is the first release signed with the specific key.\nMore detail can be found in the document: ",(0,l.kt)("a",{parentName:"p",href:"https://infra.apache.org/release-signing.html#keys-policy"},"Signing a Release")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"(gpg --list-sigs <email-address> && gpg --armor --export <email-address>) >> MY_KEY\n")),(0,l.kt)("p",null,"Add the content of the generated file to the existing KEYS list at ",(0,l.kt)("inlineCode",{parentName:"p"},"https://dist.apache.org/repos/dist/release/yunikorn/KEYS"),"\nNever remove a key from this list!"),(0,l.kt)("p",null,"NOTE: you will need to install subversion to access this repo (use your apache ID). You can use any SVN client, e.g. svnX, for convenience."))}c.isMDXComponent=!0}}]);