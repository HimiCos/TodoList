(function(){"use strict";var o={8691:function(o,t,e){var n=e(7195),d=function(){var o=this,t=o._self._c;return t("div",{attrs:{id:"todoBody"}},[t("TodoHeader",{attrs:{addTodo:o.addTodo}}),t("TodoList",{attrs:{todos:o.todos,checkTodo:o.checkTodo,deleteTodo:o.deleteTodo}}),t("TodoFooter",{attrs:{deleteDoneTodo:o.deleteDoneTodo,todos:o.todos,selectAllTodo:o.selectAllTodo}})],1)},i=[],r=function(){var o=this,t=o._self._c;return t("div",{attrs:{id:"todoHeader"}},[t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:o.title,expression:"title",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"請輸入你的任務名稱，按回車鍵確認"},domProps:{value:o.title},on:{keyup:function(t){return!t.type.indexOf("key")&&o._k(t.keyCode,"enter",13,t.key,"Enter")?null:o.add.apply(null,arguments)},change:function(t){o.title=t.target.value}}})])},s=[],l=e(9523),c={name:"TodoHeader",data(){return{title:""}},props:["addTodo"],methods:{add(){if(!this.title.trim())return;const o={id:(0,l.x0)(),title:this.title,isDone:!1};this.addTodo(o),this.title=""}}},a=c,u=e(1001),h=(0,u.Z)(a,r,s,!1,null,"2c58b0de",null),f=h.exports,p=function(){var o=this,t=o._self._c;return t("ul",{directives:[{name:"show",rawName:"v-show",value:o.todos.length>0,expression:"todos.length > 0"}],attrs:{id:"todoList"}},o._l(o.todos,(function(e){return t("TodoItem",{key:e.id,attrs:{todos:e,checkTodo:o.checkTodo,deleteTodo:o.deleteTodo}})})),1)},T=[],v=function(){var o=this,t=o._self._c;return t("li",{attrs:{id:"todoItem"}},[t("label",[t("input",{attrs:{type:"checkbox"},domProps:{checked:o.todos.isDone},on:{change:function(t){return o.handleCheck(o.todos.id)}}}),t("span",[o._v(o._s(o.todos.title))])]),t("button",{staticClass:"hover-button",on:{click:function(t){return o.delTodo(o.todos.id)}}},[o._v("刪除當前任務")])])},m=[],k={name:"TodoItem",props:["todos","checkTodo","deleteTodo"],methods:{handleCheck(o){this.checkTodo(o)},delTodo(o){confirm("確定刪除當前任務嗎？")&&this.deleteTodo(o)}}},y=k,_=(0,u.Z)(y,v,m,!1,null,"545ac9ce",null),b=_.exports,A={name:"TodoList",components:{TodoItem:b},props:["todos","checkTodo","deleteTodo"]},x=A,g=(0,u.Z)(x,p,T,!1,null,"5992df20",null),w=g.exports,D=function(){var o=this,t=o._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:o.total,expression:"total"}],attrs:{id:"todoFooter"}},[t("div",{staticClass:"total"},[t("input",{directives:[{name:"model",rawName:"v-model",value:o.isAll,expression:"isAll"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.isAll)?o._i(o.isAll,null)>-1:o.isAll},on:{change:function(t){var e=o.isAll,n=t.target,d=!!n.checked;if(Array.isArray(e)){var i=null,r=o._i(e,i);n.checked?r<0&&(o.isAll=e.concat([i])):r>-1&&(o.isAll=e.slice(0,r).concat(e.slice(r+1)))}else o.isAll=d}}}),t("span",[o._v("已完成: "+o._s(o.doneTodo)+" / 全部: "+o._s(o.total))])]),t("button",{on:{click:o.delDoneTodo}},[o._v("清除已完成的任務")])])},O=[],C={name:"TodoFooter",props:["deleteDoneTodo","todos","selectAllTodo"],methods:{delDoneTodo(){confirm("確定刪除已完成的任務嗎？")&&this.deleteDoneTodo()}},computed:{total(){return this.todos.length},doneTodo(){return this.todos.reduce(((o,t)=>o+(t.isDone?1:0)),0)},isAll:{get(){return this.doneTodo===this.total&&this.total>0},set(o){this.selectAllTodo(o)}}}},P=C,Z=(0,u.Z)(P,D,O,!1,null,"9364c39c",null),j=Z.exports,F={name:"App",components:{TodoHeader:f,TodoList:w,TodoFooter:j},methods:{addTodo(o){this.todos.unshift(o)},checkTodo(o){this.todos.forEach((t=>{t.id===o&&(t.isDone=!t.isDone)}))},deleteTodo(o){this.todos=this.todos.filter((t=>t.id!==o))},deleteDoneTodo(){this.todos=this.todos.filter((o=>!o.isDone))},selectAllTodo(o){this.todos.forEach((t=>{t.isDone=o}))}},data(){return{todos:[{id:"001",title:"吃飯",isDone:!0},{id:"002",title:"睡覺",isDone:!1},{id:"003",title:"打豆豆",isDone:!0}]}}},E=F,H=(0,u.Z)(E,d,i,!1,null,null,null),I=H.exports;n.ZP.config.productionTip=!1,new n.ZP({render:o=>o(I)}).$mount("#app")}},t={};function e(n){var d=t[n];if(void 0!==d)return d.exports;var i=t[n]={exports:{}};return o[n].call(i.exports,i,i.exports,e),i.exports}e.m=o,function(){var o=[];e.O=function(t,n,d,i){if(!n){var r=1/0;for(a=0;a<o.length;a++){n=o[a][0],d=o[a][1],i=o[a][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||r>=i)&&Object.keys(e.O).every((function(o){return e.O[o](n[l])}))?n.splice(l--,1):(s=!1,i<r&&(r=i));if(s){o.splice(a--,1);var c=d();void 0!==c&&(t=c)}}return t}i=i||0;for(var a=o.length;a>0&&o[a-1][2]>i;a--)o[a]=o[a-1];o[a]=[n,d,i]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={143:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var d,i,r=n[0],s=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==o[t]}))){for(d in s)e.o(s,d)&&(e.m[d]=s[d]);if(l)var a=l(e)}for(t&&t(n);c<r.length;c++)i=r[c],e.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return e.O(a)},n=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(8691)}));n=e.O(n)})();
//# sourceMappingURL=app.b2b0787e.js.map