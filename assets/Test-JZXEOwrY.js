import{d as o,r as a,_ as r,o as c,c as i,a as n,t as p}from"./index-5ViN3Sm5.js";const u=o({name:"TextVue",setup(){const e=a(0);return{count:e,increment:()=>{e.value+=1}}}}),l={class:"test-container page-container"},d=n("div",{class:"page-title"},"Unit Test Page",-1);function m(e,t,f,_,g,$){return c(),i("div",l,[d,n("p",null,"count is: "+p(e.count),1),n("button",{onClick:t[0]||(t[0]=(...s)=>e.increment&&e.increment(...s))},"increment")])}const v=r(u,[["render",m]]);export{v as default};