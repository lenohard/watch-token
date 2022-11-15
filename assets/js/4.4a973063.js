(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{241:function(e,t,n){"use strict";t.a={data:()=>({embedded:!1}),mounted(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast(e,t,n=null){this.$bvToast.toast(t,{title:e,variant:n,solid:!0})},promisify:(e,...t)=>new Promise((n,a)=>{e(...t,(e,t)=>{e?a(e):n(t)})}),getParam(e){const t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,a){t[n]=void 0!==a?a:""})),e?t[e]?t[e]:null:t}}}},242:function(e,t,n){const a=n(245);e.exports={description:"Create a Widget for your ERC20 or BEP20 Token and share it with your users. Add your Token to DApp browsers or MetaMask both on Ethereum, Binance Smart Chain or Polygon Network.",base:"/watch-token/",plugins:[["@vuepress/google-analytics",{ga:a.gaId}],["vuepress-plugin-facebook-pixel",{pixelId:a.fbPixelId}]],head:[["link",{rel:"shortcut icon",href:"/favicon.ico"}],["meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}],["meta",{property:"og:type",content:"website"}],["meta",{property:"og:url",content:"https://vittominacori.github.io/watch-token"}],["meta",{property:"og:image",content:"https://vittominacori.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:card",content:"summary_large_image"}],["meta",{property:"twitter:image",content:"https://vittominacori.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:title",content:"WatchToken | Create a Widget for your ERC20 or BEP20 Token"}],["script",{src:"/assets/js/web3.min.js"}],["script",{src:"https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1",defer:!0}]],defaultNetwork:a.defaultNetwork,infuraProjectId:a.infuraProjectId,bitlyAccessToken:a.bitlyAccessToken}},244:function(e,t,n){"use strict";n(94);var a=n(242),r=n.n(a),s=n(246);t.a={data:()=>({web3:null,web3Provider:null,metamask:{installed:!1,netId:null},network:{default:r.a.defaultNetwork,current:null,map:{1:"mainnet",3:"ropsten",4:"rinkeby",42:"kovan",5:"goerli",56:"bsc_mainnet",97:"bsc_testnet"},list:{mainnet:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://mainnet.infura.io/v3/"+r.a.infuraProjectId,explorerLink:"https://etherscan.io",explorerName:"Etherscan",id:1,name:"Main Ethereum Network"},ropsten:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://ropsten.infura.io/v3/"+r.a.infuraProjectId,explorerLink:"https://ropsten.etherscan.io",explorerName:"Etherscan",id:3,name:"Ropsten Test Network"},rinkeby:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://rinkeby.infura.io/v3/"+r.a.infuraProjectId,explorerLink:"https://rinkeby.etherscan.io",explorerName:"Etherscan",id:4,name:"Rinkeby Test Network"},kovan:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://kovan.infura.io/v3/"+r.a.infuraProjectId,explorerLink:"https://kovan.etherscan.io",explorerName:"Etherscan",id:42,name:"Kovan Test Network"},goerli:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://goerli.infura.io/v3/"+r.a.infuraProjectId,explorerLink:"https://goerli.etherscan.io",explorerName:"Etherscan",id:5,name:"Goerli Test Network"},bsc_mainnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://bsc-dataseed.binance.org/",explorerLink:"https://bscscan.com",explorerName:"BscScan",id:56,name:"BSC Mainnet"},bsc_testnet:{blockchain:"Binance Smart Chain",tokenType:"BEP20",web3Provider:"https://data-seed-prebsc-1-s1.binance.org:8545/",explorerLink:"https://testnet.bscscan.com",explorerName:"BscScan",id:97,name:"BSC Testnet"},polygon_mainnet:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://polygon-rpc.com/",explorerLink:"https://polygonscan.com",explorerName:"PolygonScan",id:137,name:"Polygon Mainnet"},polygon_mumbai:{blockchain:"Polygon",tokenType:"ERC20",web3Provider:"https://rpc-mumbai.maticvigil.com/",explorerLink:"https://mumbai.polygonscan.com",explorerName:"PolygonScan",id:80001,name:"Matic Mumbai"}},blockchains:["Ethereum","Binance Smart Chain","Polygon"]},contracts:{token:null},instances:{token:null}}),methods:{async initWeb3(e,t){if(!Object.prototype.hasOwnProperty.call(this.network.list,e))throw new Error(`Failed initializing network ${e}. Allowed values are ${Object.keys(this.network.list)}.`);if(t&&void 0!==window.ethereum){console.log("injected ethereum"),this.web3Provider=window.ethereum,this.web3=new Web3(this.web3Provider),this.metamask.installed=this.web3Provider.isMetaMask;const t=await this.promisify(this.web3.eth.getChainId);this.metamask.netId=t,t!==this.network.list[e].id&&(this.network.current=this.network.list[this.network.map[t]],await this.initWeb3(e,!1))}else console.log("provided ethereum"),this.network.current=this.network.list[e],this.web3Provider=new Web3.providers.HttpProvider(this.network.list[e].web3Provider),this.web3=new Web3(this.web3Provider)},initContract(e){console.log(`init ${e} on ${this.network.current.name}`),this.instances.token=new this.web3.eth.Contract(s,e)}}}},245:function(e){e.exports=JSON.parse('{"gald":"","fbPixelId":"","defaultNetwork":"","infuraProjectId":"","bitlyAccessToken":""}')},246:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},293:function(e,t,n){"use strict";n.r(t);var a=n(241),r=n(244),s={name:"Generator",mixins:[a.a,r.a],data:()=>({loaded:!1,loading:!1,currentNetwork:null,token:{address:"",name:"",symbol:"",decimals:"",logo:""}}),computed:{tokenType(){return this.network.current?this.network.current.tokenType:"ERC20"},blockchain(){return this.network.current?this.network.current.blockchain:"Ethereum"}},mounted(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{async initDapp(){this.network.current=this.network.list[this.currentNetwork];try{await this.initWeb3(this.currentNetwork,!0),this.$validator.extend("eth_address",{getMessage:e=>"Insert a valid token address.",validate:e=>this.web3.utils.isAddress(e)}),this.token.address=this.getParam("address")||"",""!==this.token.address&&this.getToken()}catch(e){alert(e),document.location.href=this.$withBase("/")}},getToken(){this.$validator.validateAll().then(async e=>{if(e)try{this.loaded=!1,this.loading=!0,this.initContract(this.token.address),this.token.name=await this.promisify(this.instances.token.methods.name().call),this.token.symbol=await this.promisify(this.instances.token.methods.symbol().call),this.token.decimals=(await this.promisify(this.instances.token.methods.decimals().call)).valueOf(),this.token.name&&this.token.symbol&&this.token.decimals?this.loaded=!0:(alert("It seems that it is not a valid Token or you are on the wrong network"),this.loaded=!1),this.loading=!1}catch(e){alert("It seems that it is not a valid Token or you are on the wrong network"),this.loaded=!1,this.loading=!1}})},createTokenPage(){this.$validator.validateAll().then(e=>{if(e){const e=this.web3.utils.toHex(JSON.stringify({address:this.token.address,logo:this.token.logo}));document.location.href=this.$withBase(`/page/?hash=${e}&network=${this.currentNetwork}`)}})}}},o=n(16),i=Object(o.a)(s,(function(){var e=this,t=e._self._c;return t("b-row",{staticClass:"p-0 pt-4"},[e.loaded||e.loading?e._e():t("b-col",{attrs:{lg:"8","offset-lg":"2"}},[t("b-card",{attrs:{"bg-variant":"light",title:`Create your ${e.tokenType} Token Widget`}},[t("p",[e._v("\n        Create a Widget for your "),t("b",[e._v(e._s(e.tokenType))]),e._v("\n        Token on "),t("b",[e._v(e._s(e.blockchain))]),e._v("."),t("br"),e._v("\n        Enter your Token details, create a Widget and share it with your users.\n      ")]),e._v(" "),t("b-form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.getToken.apply(null,arguments)}}},[t("b-row",[t("b-col",{attrs:{lg:"12"}},[t("b-form-group",{attrs:{label:"Network","label-for":"network"}},[t("b-form-select",{attrs:{id:"network",size:"lg",disabled:e.loading},on:{input:e.initDapp},model:{value:e.currentNetwork,callback:function(t){e.currentNetwork=t},expression:"currentNetwork"}},e._l(e.network.blockchains,(function(n){return t("b-form-select-option-group",{attrs:{label:n}},e._l(e.network.list,(function(a,r){return a.blockchain===n?t("b-form-select-option",{attrs:{value:r}},[e._v("\n                    "+e._s(a.name)+"\n                  ")]):e._e()})),1)})),1)],1)],1),e._v(" "),t("b-col",{attrs:{lg:"12"}},[t("b-form-group",{attrs:{label:"Token Address","label-for":"tokenAddress"}},[t("b-input-group",[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|eth_address",expression:"'required|eth_address'"}],class:{"is-invalid":e.errors.has("tokenAddress")},attrs:{name:"tokenAddress",placeholder:"0x123456789...",size:"lg",disabled:e.loading,"data-vv-as":"token address"},model:{value:e.token.address,callback:function(t){e.$set(e.token,"address","string"==typeof t?t.trim():t)},expression:"token.address"}}),e._v(" "),t("b-input-group-append",[t("b-button",{attrs:{disabled:e.loading,type:"submit",variant:"success"}},[t("b-icon-search")],1)],1)],1),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenAddress"),expression:"errors.has('tokenAddress')"}],staticClass:"text-danger"},[e._v("\n                "+e._s(e.errors.first("tokenAddress"))+"\n              ")])],1)],1)],1)],1)],1)],1),e._v(" "),e.loading?t("b-col",{attrs:{lg:"8","offset-lg":"2"}},[t("b-card",{attrs:{"bg-variant":"light"}},[t("ui--loader",{attrs:{loading:e.loading}})],1)],1):e._e(),e._v(" "),e.loaded?t("b-col",{attrs:{lg:"8","offset-lg":"2"}},[t("b-card",{attrs:{"bg-variant":"light"}},[t("b-form",{staticClass:"mt-3",on:{submit:function(t){return t.preventDefault(),e.createTokenPage.apply(null,arguments)}}},[t("b-row",[t("b-col",{attrs:{lg:"12"}},[t("b-form-group",{attrs:{label:"Address","label-for":"tokenAddress"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|eth_address",expression:"'required|eth_address'"}],class:{"is-invalid":e.errors.has("tokenAddress")},attrs:{id:"tokenAddress",name:"tokenAddress",placeholder:"Your token address",size:"lg",readonly:"","data-vv-as":"token address"},model:{value:e.token.address,callback:function(t){e.$set(e.token,"address","string"==typeof t?t.trim():t)},expression:"token.address"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenAddress"),expression:"errors.has('tokenAddress')"}],staticClass:"text-danger"},[e._v("\n                "+e._s(e.errors.first("tokenAddress"))+"\n              ")])],1)],1),e._v(" "),t("b-col",{attrs:{lg:"12"}},[t("b-form-group",{attrs:{label:"Name","label-for":"tokenName"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("tokenName")},attrs:{id:"tokenName",name:"tokenName",placeholder:"Your token name",size:"lg",readonly:"","data-vv-as":"token name"},model:{value:e.token.name,callback:function(t){e.$set(e.token,"name","string"==typeof t?t.trim():t)},expression:"token.name"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenName"),expression:"errors.has('tokenName')"}],staticClass:"text-danger"},[e._v("\n                "+e._s(e.errors.first("tokenName"))+"\n              ")])],1)],1),e._v(" "),t("b-col",{attrs:{lg:"12"}},[t("b-form-group",{attrs:{label:"Symbol","label-for":"tokenSymbol"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("tokenSymbol")},attrs:{id:"tokenSymbol",name:"tokenSymbol",placeholder:"Your token symbol",size:"lg",readonly:"","data-vv-as":"token symbol"},model:{value:e.token.symbol,callback:function(t){e.$set(e.token,"symbol","string"==typeof t?t.trim():t)},expression:"token.symbol"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenSymbol"),expression:"errors.has('tokenSymbol')"}],staticClass:"text-danger"},[e._v("\n                "+e._s(e.errors.first("tokenSymbol"))+"\n              ")])],1)],1),e._v(" "),t("b-col",{attrs:{lg:"12"}},[t("b-form-group",{attrs:{label:"Decimals","label-for":"tokenDecimals"}},[t("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":e.errors.has("tokenDecimals")},attrs:{id:"tokenDecimals",name:"tokenDecimals",placeholder:"Your token decimals",size:"lg",readonly:"",type:"number",min:"0",max:"36",step:"1","data-vv-as":"token decimals"},model:{value:e.token.decimals,callback:function(t){e.$set(e.token,"decimals","string"==typeof t?t.trim():t)},expression:"token.decimals"}}),e._v(" "),t("small",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("tokenDecimals"),expression:"errors.has('tokenDecimals')"}],staticClass:"text-danger"},[e._v("\n                "+e._s(e.errors.first("tokenDecimals"))+"\n              ")])],1)],1),e._v(" "),t("b-col",{attrs:{lg:"12"}},[t("b-form-group",{attrs:{label:"Logo (optional)","label-for":"tokenLogo",description:"Suggested: a square SVG or PNG with transparent background (recommended greater than 64x64px)."}},[t("b-form-input",{attrs:{id:"tokenLogo",placeholder:"Your token logo link",size:"lg"},model:{value:e.token.logo,callback:function(t){e.$set(e.token,"logo","string"==typeof t?t.trim():t)},expression:"token.logo"}})],1)],1)],1),e._v(" "),t("b-row",[t("b-col",{staticClass:"mt-3",attrs:{lg:"12"}},[t("b-button",{attrs:{size:"lg",variant:"outline-success",block:"",type:"submit"}},[e._v("\n              Create Token Widget\n            ")])],1)],1)],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=i.exports}}]);