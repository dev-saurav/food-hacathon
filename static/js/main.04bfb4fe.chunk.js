(this.webpackJsonphackedfood=this.webpackJsonphackedfood||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/Illustration1.7cd92069.png"},22:function(e,a,t){e.exports=t.p+"static/media/Illustration2.dfb2ea3c.png"},23:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAF6ADAAQAAAABAAAAFwAAAACFL/OTAAABZklEQVRIDa1UC1HEMBTsoSASKiES4oA4ABwcDsBBHFAHFAeVEAcNGCAOYF9JOkv6y83dm9l5v91N2un01KyHwvge0ISI2id8pIx0WRjQR+DnAO/YyyWqw4F5ZMr7b/BtjXtpHCE6AwZQQAtYwAF8gNQa2AyDDQt69GqT/XdgIM24xRcTWWZzMa4J0UUg69ya6JEIQhZRbVgQs7nkRciJmXBebI8HnvSG6XdoNA2EeGkMJGCv5hbmgcxbqifzSANFdW3JGvaazD25aKprS9aw18Lc1DoSj80DzadSlvlrkczkklv2jrSxXOa+J9KIWuXFTn4mjVzKbnHFLBL56IfkiCvGn8AiTjSRk+U3yuHRDEAAFKATWuQyOgyeyiH3Ig6A3KYGXwXvDf1uyA0dsGcesbfJpSu48wH8WhL3XzLoNNACYuiBkDLSHB2qh7lrmlfUL9RfXXZwyE/bX+22YuAwGwC9srvt6Bczko9VwdFDmAAAAABJRU5ErkJggg=="},26:function(e,a,t){e.exports=t(45)},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),i=(t(31),t(32),t(21)),s=t.n(i),o=t(22),m=t.n(o),u=t(6),d=t(7),p=t(9),A=t(8),E=(t(33),t(23)),v=t.n(E),h=function(e){Object(p.a)(t,e);var a=Object(A.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("img",{className:"search-icon",src:v.a,alt:"search"}),r.a.createElement("input",{className:"search",type:"text",placeholder:"Search your favourite recipe..."}))}}]),t}(n.Component),f=(t(34),function(e){var a=e.subText,t=e.heading;return r.a.createElement("div",{className:"header"},r.a.createElement("p",null,a.toUpperCase()),r.a.createElement("h1",null,t))}),g=(t(35),t(25)),b=t(12),N=t.n(b),y=t(14),k=(t(37),function(e){var a=e.name,t=e.image,n=e.category,c=e.description,l=(e.index+1)%2===0?"light":"dark";return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"imgContent",style:{backgroundImage:"url(".concat(t,")")}},r.a.createElement("div",{className:"top-bar"},"In ",n)),r.a.createElement("div",{className:"content",style:{background:"light"===l?"linear-gradient(0deg, white, 90%, transparent)":"linear-gradient(0deg, black, 90%, transparent)",color:"light"===l?"black":"white"}},r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"card-top"},r.a.createElement("div",{className:"card-title"},r.a.createElement("h3",null,a),r.a.createElement("div",{className:"time"},r.a.createElement("i",{class:"fa fa-clock-o","aria-hidden":"true"}),"24min")),r.a.createElement("div",{className:"heart"},r.a.createElement("i",{className:"fa fa-heart-o","aria-hidden":"true"}))),r.a.createElement("div",{className:"description"},c))))}),w=(t(38),t(11)),O=function(e){Object(p.a)(t,e);var a=Object(A.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={recipes:[]},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var a=Object(y.a)(N.a.mark((function a(){var t,n;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("http://starlord.hackerearth.com/recipe");case 2:return t=a.sent,a.next=5,t.json();case 5:n=a.sent,e.setState({recipes:n});case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}},{key:"render",value:function(){return r.a.createElement("div",{className:"CardDisplay"},this.state.recipes.map((function(e,a){var t=e.id,n=Object(g.a)(e,["id"]);return r.a.createElement(w.b,{to:"/recipe/".concat(t)},r.a.createElement(k,Object.assign({className:"item",key:t},n,{index:a})))})),r.a.createElement(k,null))}}]),t}(n.Component),j=function(e){Object(p.a)(t,e);var a=Object(A.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(f,{subText:"Category",heading:"Pizza & Noodles"}),r.a.createElement(O,null))}}]),t}(n.Component),x=t(1),I=(t(44),function(e){Object(p.a)(t,e);var a=Object(A.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={recipe:{}},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;console.log(a),function(){var t=Object(y.a)(N.a.mark((function t(){var n,r,c;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://starlord.hackerearth.com/recipe");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,c=r.find((function(e){return e.id==a})),console.log(c),e.setState({recipe:c});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}},{key:"render",value:function(){return r.a.createElement("div",{className:"recipeDetail"},r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(w.b,{to:"/"},r.a.createElement("i",{class:"fa fa-arrow-left","aria-hidden":"true"}),"Go Back")),r.a.createElement("br",null),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement("img",{src:this.state.recipe.image,height:"200px",width:"300px",alt:"img"}),r.a.createElement("div",{className:"ingredients"},r.a.createElement("div",{className:"header"},"Ingredients : "),r.a.createElement("div",{className:"ingredients-body"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor eum assumenda neque, eveniet optio sit aperiam numquam corporis deserunt nesciunt. Esse aspernatur, suscipit voluptas quo ab nisi magni.")),r.a.createElement("div",{className:"howtoprepare"},r.a.createElement("div",{className:"header"},"How to Prepare :"),r.a.createElement("div",{className:"howtoprepare-body"},"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam illo dolor eum assumenda neque, eveniet optio sit aperiam numquam corporis deserunt nesciunt. Esse aspernatur, suscipit voluptas quo ab nisi magni."))),r.a.createElement("div",{className:"five wide column right"},r.a.createElement("span",null,"RECIPE"),r.a.createElement("h1",null,this.state.recipe.name),r.a.createElement("span",null,"DESCRIPTION"),r.a.createElement("div",null,this.state.recipe.description),r.a.createElement("br",null),r.a.createElement("div",{className:"threeCircles"},r.a.createElement("div",{className:"circle"},r.a.createElement("div",null,"8"),r.a.createElement("span",null,"Ingredients")),r.a.createElement("div",{className:"circle"},r.a.createElement("div",null,"220"),r.a.createElement("span",null,"Bucks")),r.a.createElement("div",{className:"circle"},r.a.createElement("div",null,"25"),r.a.createElement("span",null,"Minutes"))),r.a.createElement("br",null),r.a.createElement("div",null,"FAVOURITE THIS RECIPE",r.a.createElement("i",{class:"fa fa-heart","aria-hidden":"true",style:{fontSize:"20px",color:"#CE1D1D",marginLeft:"10px"}}))))))}}]),t}(n.Component)),S=Object(x.e)(I),C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(h,null),r.a.createElement(w.a,null,r.a.createElement(x.a,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(x.a,{exact:!0,path:"/recipe/:id"},r.a.createElement(S,null)))),r.a.createElement("img",{src:m.a,className:"top-illustration",alt:"illustration"}),r.a.createElement("img",{src:s.a,className:"bottom-illustration",alt:"illustration"}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.04bfb4fe.chunk.js.map