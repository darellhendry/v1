(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(e,t,a){e.exports=a(377)},221:function(e,t,a){},222:function(e,t,a){},377:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),i=a.n(o),c=(a(221),a(18)),l=a(19),m=a(21),s=a(20),u=a(22),p=(a(222),a(37)),d=a(68),h=a.n(d),g=a(67),f=a.n(g),E=a(65),b=a.n(E),y=a(49),v=a.n(y),j=a(48),O=a.n(j),k=a(70),w=a.n(k),C=a(145),x=a.n(C),N=a(146),S=a.n(N),D=a(147),T=a.n(D),B=a(29),M=a.n(B),H=a(28),A=a.n(H),F=a(66),q=a.n(F),P=a(46),I=a.n(P),W=a(148),L=a.n(W),R=a(69),U=a.n(R),J=a(47),z=a.n(J),G=a(16),K=a(378),Q=a(380),V=a(381),Y=a(5),$=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={onText:a.props.text[0],count:0},a.updateText=function(){a.setState(function(e){var t=a.props.text,n=t.length,r=(e.count+1)%n;return{onText:t[r],count:r}})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.updateText,1500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Y.m,{gutterBottom:!0,variant:"h2"},this.state.onText))}}]),t}(r.a.Component),X=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Y.e,{in:!0,timeout:500},r.a.createElement(Y.f,{container:!0,justify:"center"},r.a.createElement(Y.f,{item:!0,className:e.helloRoot},r.a.createElement($,{text:["Aloha","Halo","Hall\xf3","Ciao","\uc5ec\ubcf4\uc138\uc694","Hola","Bonjour","\u4f60\u597d","Hell\xf3!","Hello"]})),r.a.createElement(Y.f,{item:!0},r.a.createElement(Y.f,{container:!0,justify:"center"},r.a.createElement(Y.f,{item:!0}),r.a.createElement(Y.f,{item:!0})))))}}]),t}(r.a.Component),Z=Object(G.withStyles)(function(e){return{helloRoot:{margin:3*e.spacing.unit}}})(X),_=a(142),ee=a.n(_),te=a(143),ae=a.n(te),ne=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(Y.h,null,r.a.createElement(Y.i,null,r.a.createElement(Y.a,null,r.a.createElement(ae.a,null))),r.a.createElement(Y.j,{primary:Boolean(e)?e.username:"",secondary:Boolean(e)?e.comment:""}))}}]),t}(r.a.Component),re=a(144),oe=a.n(re),ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",comment:""},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.name,o=a.comment;return r.a.createElement("form",{className:t.form},r.a.createElement(Y.l,{className:t.textField,name:"name",label:"Name",onChange:this.handleChange}),r.a.createElement(Y.l,{className:t.textField,multiline:!0,name:"comment",label:"Comment",onChange:this.handleChange}),r.a.createElement(Y.b,{onClick:function(){return e.props.onSubmit(n,o)},className:t.button,variant:"contained",color:"secondary"},"Submit ",r.a.createElement(oe.a,{style:{marginLeft:10}})))}}]),t}(r.a.Component),ce=Object(G.withStyles)(function(e){return{textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,marginBottom:4*e.spacing.unit},form:{display:"flex",flexDirection:"column",justifyContent:"center"},button:{width:130,marginBottom:2*e.spacing.unit}}},{withTheme:!0})(ie),le=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],loading:!0},a.handleSubmit=function(e,t){var n={username:e,comment:t};ee.a.post("https://contact-me-api.herokuapp.com/api/comments/",JSON.stringify(n),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),a.setState(function(a){var n=a.data.concat({username:e,comment:t});return console.log(n),{data:n}})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://contact-me-api.herokuapp.com/api/comments/").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({data:t,loading:!1})})}},{key:"render",value:function(){return r.a.createElement(Y.f,{container:!0},r.a.createElement(Y.f,{item:!0,xs:12,md:6},!this.state.loading&&r.a.createElement(ce,{onSubmit:this.handleSubmit})),r.a.createElement(Y.f,{item:!0,xs:12,md:6},r.a.createElement(Y.g,null,!this.state.loading&&this.state.data.map(function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(Y.d,null),r.a.createElement(ne,{data:e}),r.a.createElement(Y.d,null))}),this.state.loading&&r.a.createElement(Y.c,null))))}}]),t}(r.a.Component),me=Object(G.withStyles)(function(e){return{}},{withTheme:!0})(le),se={College:"There are some activities that i have done while I study in college. My first experience is joining a committe team, it's Fasilkom Graduation team. Then, while i did in graduation committe, I registered to FUKI, it's islamic organazition in Fasilkom and many more. Now i want to focus in my study and try to apply resume to some companies",Movie:"Sed ad unum fabulas, posse copiosae menandri an usu. Sit ex nominavi reformidans. Qui ea omnium corpora, ex nam vivendo copiosae recusabo. An pro eirmod voluptua reprehendunt, ut adipisci praesent usu, no idque tibique luptatum sed.",Code:"Ea utamur aliquam intellegebat mel. In vel impetus delenit expetendis, sea eu minimum copiosae quaestio, eruditi perfecto te quo. Stet soleat concludaturque vis id, autem etiam feugiat te vix. Nihil cetero phaedrum cu nec, wisi altera et nam. Eu verear delenit pri. Dolore vocibus deleniti qui ut, veniam dictas an quo."};var ue=Object(G.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,overflowY:"scroll",paddingRight:17,boxSizing:"content-box",maxHeight:"86vh"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0},description:{borderLeft:"8px solid #a5be00",padding:2*e.spacing.unit,backgroundColor:"#F2F2F2"},text:{color:"black !important"},subheader:{borderBottom:"4px solid #05668d",paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit},image:{maxHeight:300,maxWidth:300}}})(function(e){var t=e.classes;return r.a.createElement("div",{style:{overflow:"hidden"}},r.a.createElement(M.a,{className:t.root,subheader:r.a.createElement("li",null)},r.a.createElement("li",{key:"section-College",className:t.listSection},r.a.createElement("ul",{className:t.ul},r.a.createElement(Y.k,{className:t.subheader},r.a.createElement(Y.m,{variant:"h1",align:"center"},"College")),r.a.createElement(A.a,{key:"College"},r.a.createElement(Y.f,{container:!0,justify:"center",spacing:16},r.a.createElement(Y.f,{item:!0},r.a.createElement("img",{className:t.image,src:"/v1/img/ui-logo.png"})),r.a.createElement(Y.f,{item:!0},r.a.createElement("img",{className:t.image,src:"/v1/img/fuki-logo.png"})),r.a.createElement(Y.f,{item:!0},r.a.createElement(Y.m,{variant:"body1",style:{textAlign:"justify"}},se.College)),r.a.createElement(Y.f,{item:!0},r.a.createElement("div",{className:t.description},r.a.createElement(Y.m,{variant:"body1",style:{color:"#2D2D2D"}},"\u201cOrdinary people seek entertainment. Extraordinary people seek education and learning.\u201d -Benjamin Hardy"))))))),r.a.createElement("li",{key:"section-Movie",className:t.listSection},r.a.createElement("ul",{className:t.ul},r.a.createElement(Y.k,{className:t.subheader},r.a.createElement(Y.m,{variant:"h1",align:"center"},"Movie")),r.a.createElement(A.a,{key:"Movie",style:{minHeight:500}},r.a.createElement("span",{className:t.description},r.a.createElement(Y.m,{variant:"body1",style:{color:"#2D2D2D"}},se.Movie))))),r.a.createElement("li",{key:"section-Code",className:t.listSection},r.a.createElement("ul",{className:t.ul},r.a.createElement(Y.k,{className:t.subheader},r.a.createElement(Y.m,{variant:"h1",align:"center"},"Code")),r.a.createElement(A.a,{key:"Code",style:{minHeight:500}},r.a.createElement("span",{className:t.description},r.a.createElement(Y.m,{variant:"body1",style:{color:"#2D2D2D"}},se.Code)))))))}),pe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={mobileOpen:!1,onPage:""},a.handleDrawerToggle=function(){a.setState(function(e){return{mobileOpen:!e.mobileOpen}})},a.handleClick=function(e){a.setState({onPage:e,mobileOpen:!1})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=window.location.toString().split("/"),t=e[e.length-1];this.setState({onPage:""===t?"Home":t.charAt(0).toUpperCase()+t.slice(1)})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme,o={Home:r.a.createElement(x.a,{color:"secondary"}),About:r.a.createElement(S.a,{color:"secondary"}),"Contact-Me":r.a.createElement(T.a,{color:"secondary"})},i=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(b.a,null),r.a.createElement(M.a,null,["Home","About","Contact-Me"].map(function(t,a){return r.a.createElement(K.a,{key:t,style:{textDecoration:"none"},to:"/".concat("Home"===t?"":t).toLowerCase(),onClick:function(){return e.handleClick(t)}},r.a.createElement(A.a,{button:!0,key:t},r.a.createElement(q.a,null,o[t]),r.a.createElement(I.a,{primary:"Contact-Me"===t?"Contact Me":t})))})));return r.a.createElement("div",{className:a.root},r.a.createElement(f.a,null),r.a.createElement(h.a,{position:"fixed",className:a.appBar,color:"primary"},r.a.createElement(U.a,null,r.a.createElement(w.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerToggle,className:a.menuButton},r.a.createElement(L.a,null)),r.a.createElement(z.a,{variant:"h6",color:"inherit",noWrap:!0},this.state.onPage))),r.a.createElement("nav",{className:a.drawer},r.a.createElement(O.a,{smUp:!0,implementation:"css"},r.a.createElement(v.a,{container:this.props.container,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:a.drawerPaper}},i)),r.a.createElement(O.a,{xsDown:!0,implementation:"css"},r.a.createElement(v.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},i))),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(Q.a,null,r.a.createElement(V.a,{exact:!0,path:"/",component:Z}),r.a.createElement(V.a,{path:"/about",component:ue}),r.a.createElement(V.a,{path:"/contact-me",component:me}),r.a.createElement(V.a,{path:"/not-found",component:Z}))))}}]),t}(r.a.Component),de=Object(G.withStyles)(function(e){return{root:{display:"flex"},drawer:Object(p.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(p.a)({marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),menuButton:Object(p.a)({marginRight:20},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing.unit}}},{withTheme:!0})(pe),he=a(379),ge=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(he.a,null,r.a.createElement(de,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=Object(G.createMuiTheme)({palette:{type:"dark",primary:{main:"#05668d"},secondary:{main:"#a5be00"}},typography:{useNextVariants:!0}});i.a.render(r.a.createElement(function(){return r.a.createElement(G.MuiThemeProvider,{theme:fe},r.a.createElement(ge,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[216,1,2]]]);
//# sourceMappingURL=main.78d8463b.chunk.js.map