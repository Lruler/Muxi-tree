import{j as d,r as l,N as m,u as p,R as v,a as c,b as E,c as B,B as f}from"./vendor.9b009ccc.js";const N=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const r of u)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(u){const r={};return u.integrity&&(r.integrity=u.integrity),u.referrerpolicy&&(r.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?r.credentials="include":u.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(u){if(u.ep)return;u.ep=!0;const r=s(u);fetch(u.href,r)}};N();function h(a,e={}){return e.method="POST",e.headers={"Content-Type":"application/json"},e.token&&(e.headers.token=e.token),e.body=JSON.stringify(e.data)||null,fetch(a,e).then(s=>{if(s.ok)return s.json().then(n=>n)})}let F={Login(a,e){return h("api/user",{data:{student_id:a,password:e}})},tijiao(a,e){return h("api/content",{token:e,data:{text:a}})}};const t=d.exports.jsx,i=d.exports.jsxs,g=d.exports.Fragment;class C extends l.exports.Component{constructor(e){super(e);this.state={username:"",pwd:"",user:null,isPc:!1}}componentDidMount(){document.body.offsetWidth>700&&(alert("\u7528\u624B\u673A\u6253\u5F00\u6D4F\u89C8\u83B7\u5F97\u66F4\u826F\u597D\u4F53\u9A8C\uFF01"),this.setState({isPc:!0}))}changeUsername(e){this.setState({username:e.target.value})}changePwd(e){this.setState({pwd:e.target.value})}Login(){const{username:e,pwd:s}=this.state;e&&s&&F.Login(e,s).then(n=>{n&&n.code==200?(localStorage.setItem("id",e),localStorage.setItem("token",n.data),this.setState({user:n.data})):alert("\u5BC6\u7801\u6216\u7528\u6237\u540D\u9519\u8BEF!")}).catch(()=>{alert("\u670D\u52A1\u7AEF\u9519\u8BEF")})}render(){return t("div",{className:"body",children:this.state.isPc?"\u8BF7\u7528\u624B\u673A\u6253\u5F00\u83B7\u5F97\u66F4\u826F\u597D\u4F53\u9A8C\u54E6\uFF01":i(g,{children:[this.state.user&&t(m,{to:"/request",replace:"true"}),i("div",{className:"centent",children:[t("input",{className:"username",placeholder:"\u8BF7\u8F93\u5165\u5B66\u53F7",onChange:this.changeUsername.bind(this)}),t("input",{className:"pwd",type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",onChange:this.changePwd.bind(this)}),t("div",{className:"denglu",onClick:this.Login.bind(this),children:"\u5B66\u53F7\u767B\u5F55"})]})]})})}}function A(){const[a,e]=l.exports.useState(null),s=p();return t("div",{className:"body-re",children:i("div",{className:a===1?"t":"center-re",children:[a===1?t("div",{className:"gobtn",onClick:()=>s("/xie"),children:"\u5F00\u59CB"}):null,a===1?`
              \u8FD9\u4E00\u6B21

              \u7ED9\u81EA\u5DF1\u4E00\u4E2A\u673A\u4F1A

              3.12

              \u79CD\u4E0B\u5C0F\u6811\u82D7

              \u5199\u4E0B\u4E00\u70B9\u4E1C\u897F

              \u6216\u662F\u613F\u671B

              \u6216\u662F\u671F\u5F85

              \u6216\u662F\u5929\u9A6C\u884C\u7A7A\u7684\u672A\u6765

              \u63A5\u4E0B\u6765

              \u4EA4\u7ED9\u6211\u4EEC

              \u5728\u672A\u6765\u7684\u67D0\u4E00\u4E2A\u65F6\u523B

              \u7531\u6728\u7280\u6765\u5E26\u7ED9\u4F60\u8FD9\u4E00\u523B\u7684\u501A\u9A6C\u4E07\u8A00/

              \u4E66\u77ED\u610F\u957F

              \u770B\u8FD9\u643A\u5E26\u8BB0\u5FC6\u800C\u6765\u7684\u53C2\u5929\u5927\u6811

              \u662F\u6210\u957F\u800C\u6765\u7684\u5FEB\u4E50
`:i(g,{children:[t("div",{className:"text-re",children:"\u662F\u5426\u5F00\u542F\u6B64\u6B21\u690D\u6811(\u4E66\u5199)\u4E4B\u65C5?"}),i("div",{className:"xuanze",children:[t("div",{className:"btn",onClick:()=>e(1),children:t("p",{children:"\u662F"})}),t("div",{className:"btn",onClick:()=>s("/"),children:t("p",{children:"\u5426"})})]})]})]})})}var x="/assets/log.82a84176.png";class D extends l.exports.Component{constructor(e){super(e);this.state={user:null,data:""}}chagedata(e){this.setState({data:e.target.value})}tijiao(){let e=this.state.data,s=localStorage.getItem("token");F.tijiao(e,s).then(n=>{this.setState({user:1})})}getNowTime(){let e,s=new Date().getFullYear(),n=new Date().getMonth()+1,u=new Date().getDate();return e=s+"\u5E74"+n+"\u6708"+u+"\u65E5",e}render(){return i("div",{className:"body-x",children:[this.state.user&&t(m,{to:"/tree",replace:"true"}),i("div",{className:"center-x",children:[i("div",{className:"jiTime",children:["\u5BC4\u4FE1\u65F6\u95F4:",this.getNowTime()]}),i("div",{className:"jiName",children:["\u5BC4\u4FE1\u4EBA\uFF1A",localStorage.getItem("id")]}),i("div",{className:"div-ct",children:[t("div",{className:"div"}),t("div",{className:"div"}),t("div",{className:"div"}),t("div",{className:"div"}),t("div",{className:"div"})]}),t("textarea",{className:"input-x",onChange:this.chagedata.bind(this)}),t("img",{src:x,className:"log"}),t("div",{className:"submit",onClick:this.tijiao.bind(this),children:"\u5BC4\u51FA\u4FE1\u4EF6"})]})]})}}class y extends l.exports.Component{constructor(e){super(e);this.state={}}render(){return t("div",{className:"page",children:t("div",{className:"body-t",children:t("div",{className:"text-t",children:"\u5C0F\u6811\u6B63\u5728\u6210\u957F\u4E2D\uFF0C\u6765\u5E74\u5728\u6765\u770B\u5B83\u5427"})})})}}function b(){return i(v,{children:[t(c,{path:"/",element:t(C,{})}),t(c,{path:"/request",element:t(A,{})}),t(c,{path:"/xie",element:t(D,{})}),t(c,{path:"/tree",element:t(y,{})})]})}E.render(t(B.StrictMode,{children:t(f,{children:t(b,{})})}),document.getElementById("root"));
