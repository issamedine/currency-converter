(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1)),s=a(4),u=a(5),m=a(7),i=a(6),v=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={currencies:["USD","AUD","SGD","PHP","EUR"],base:"USD",amount:"",convertTo:"EUR",result:"",date:""},e.handleSelect=function(t){var a;e.setState((a={},Object(o.a)(a,t.target.name,t.target.value),Object(o.a)(a,"result",null),a),e.calculate)},e.handleInput=function(t){e.setState({amount:t.target.value,result:null,date:null},e.calculate)},e.calculate=function(){var t=e.state.amount;t!==isNaN&&fetch("https://api.exchangeratesapi.io/latest?base=".concat(e.state.base)).then((function(e){return e.json()})).then((function(a){console.log("data",a);var n=a.date,l=(a.rates[e.state.convertTo]*t).toFixed(4);e.setState({result:l,date:n})}))},e.handleSwap=function(t){var a=e.state.base,n=e.state.convertTo;t.preventDefault(),e.setState({convertTo:a,base:n,result:null},e.calculate)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.currencies,a=e.base,n=e.amount,r=e.convertTo,c=e.result,o=e.date;return l.a.createElement("div",{className:"container my-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-7 mx-auto"},l.a.createElement("div",{className:"card card-body"},l.a.createElement("h5",null,n," ",a," is equevalent to"),l.a.createElement("h2",null,""===n?"0":null===c?"Calculating...":c," ",r),l.a.createElement("p",null,"As of ",""===n?"/ / /":null===o?"":o),l.a.createElement("div",{className:"row d-flex justify-content-md-around align-items-center"},l.a.createElement("div",null,l.a.createElement("form",{className:"form-inline mb-4"},l.a.createElement("input",{type:"number",value:n,onChange:this.handleInput,className:"form-control form-control-lg mx-3"}),l.a.createElement("select",{name:"base",value:a,onChange:this.handleSelect,className:"form-control form-control-lg"},t.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("form",{className:"form-inline"},l.a.createElement("input",{disabled:!0,value:""===n?"0":null===c?"Calculating...":c,className:"form-control form-control-lg mx-3"}),l.a.createElement("select",{name:"convertTo",value:r,onChange:this.handleSelect,className:"form-control form-control-lg"},t.map((function(e){return l.a.createElement("option",{key:e,value:e},e)}))))),l.a.createElement("div",{className:"border py-1 px-3"},l.a.createElement("h1",{onClick:this.handleSwap,className:"swap"},"\u2193\u2191")))))))}}]),a}(n.Component);a(14);var d=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.77a47991.chunk.js.map