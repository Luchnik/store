(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/jumbotron.1d8e929f.jpeg"},34:function(e,t,a){e.exports=a(59)},39:function(e,t,a){},43:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(30),s=a.n(i),c=a(13),o=(a(39),a(3)),u=a.n(o),l=a(14),m=a(11),p=a(5),d=a(6),h=a(8),v=a(7),f=a(9),b=a(15),g=(a(41),a(23)),E=a.n(g);E.a.initializeApp({apiKey:"AIzaSyCYBIdKfmAD-JNdWeZ1LO5cmnYXyE_gXek",authDomain:"store-3f284.firebaseapp.com",databaseURL:"https://store-3f284.firebaseio.com",projectId:"store-3f284",storageBucket:"",messagingSenderId:"873883748774",appId:"1:873883748774:web:f2ce8a05e5c2781c"});var y=E.a,j=y.auth(),O=new y.auth.GoogleAuthProvider;O.setCustomParameters({prompt:"select_account"});var w=function(){return j.signInWithPopup(O)},N=function(){return j.signOut()},k=(a(43),function(e){var t=e.currentUser;return r.a.createElement("header",{className:"header-container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(c.b,{className:"menu-item",to:"/"},"Home"),r.a.createElement("div",{className:"user-data-container"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"display-name"},t.displayName),r.a.createElement("div",{className:"menu-item",onClick:N},"Log Out")):r.a.createElement(c.b,{className:"menu-item",to:"/signin"},"Log In"))))}),x=a(33),C=a.n(x),I=function(e){return function(t){function a(){return Object(p.a)(this,a),Object(h.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(f.a)(a,t),Object(d.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(V.Consumer,null,function(a){return r.a.createElement(e,Object.assign({currentUser:a},t.props))})}}]),a}(r.a.Component)},U=a(17),P=(a(48),[{title:"tempor incididunt",price:220,imageUrl:"https://i.ibb.co/9YCqtqp/scream.jpg",description:"His ad civibus nominavi torquatos. Ne mei semper lucilius sapientem. Duis verear id vim. Id pro aperiam intellegam, mandamus periculis id sea."},{title:"sed do eiusmod",price:740,imageUrl:"https://i.ibb.co/Kx4dBzh/water.jpg",description:"Et vix vidit assentior prodesset. Ad ipsum adipisci vim, vix eros deseruisse ei. No facete euripidis temporibus vel, posse iudico mea ex. In appareat dissentiet mel, eos an nibh prodesset deseruisse."},{title:"dolor sit amet",price:550,imageUrl:"https://i.ibb.co/zmp7FjJ/night.jpg",description:"Omittam vivendum deserunt ei cum, mel ea omittantur liberavisse, ad nonumy mollis epicurei eam. Ea vis mundi tation. Ad vidisse virtute eloquentiam usu, an vim dolorem delicata oportere, ei mea omnes perpetua. Eum viderer legendos id, at iriure voluptatum cotidieque eam, te mucius disputando mei. Nobis affert abhorreant at sit."},{title:"consectetur adipiscing elit",price:325,imageUrl:"https://i.ibb.co/MnY8K1r/lake.jpg",description:"Pri id accumsan delicata persecuti, ubique labores torquatos cu ius, omnis timeam ad quo. Everti disputando contentiones vim ne, sit at omnium option epicuri, id erant aliquip eruditi cum. Ut sea veniam deseruisse, sit paulo omnium no. Vel no nominavi deseruisse, vim case facer no, scripta bonorum ut nec. Vel nisl dolores omittantur no."},{title:"lorem ipsum",price:255,imageUrl:"https://i.ibb.co/JtfF43p/kiss.jpg",description:"Eu dolorem liberavisse vix, ne vis zril invenire similique. Aeque doming officiis vim an, vis tritani praesent ne, his no erat dissentiunt. Molestie definiebas comprehensam mei at, no his semper honestatis. Erant essent placerat quo ne, usu alia iracundia an. Ne habeo ornatus mea, ex semper salutandi periculis pri."}]),S=y.firestore(),A=function(e){try{P.forEach(function(){var t=Object(m.a)(u.a.mark(function t(a){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.collection("Gallery").doc(),t.next=3,n.set(a);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}catch(t){console.log("Error updating gallery",t.message)}},q=function(){var e=Object(m.a)(u.a.mark(function e(t,a){var n,r,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=S.doc("Users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,i=t.email,e.prev=8,e.next=11,n.set(Object(l.a)({displayName:r,email:i,createdAt:new Date},a));case 11:A(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(8),console.log("Error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}},e,null,[[8,14]])}));return function(t,a){return e.apply(this,arguments)}}(),D=(a(51),Object(b.f)(function(e){var t=e.itemId,a=e.title,n=e.price,i=e.imageUrl,s=e.history,c=e.match;return r.a.createElement("div",{className:"item-container",onClick:function(){return s.push("".concat(c.url).concat(t))}},r.a.createElement("div",{className:"item-preview",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"item-details"},r.a.createElement("div",{className:"title"},a),r.a.createElement("div",{className:"price"},"\u20b4",n)))})),F=(a(52),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={items:[]},a.unsubscribeFromFirestore=null,a.componentDidMount=function(){var e=a.props.userId;a.unsubscribeFromFirestore=S.collection("Users/".concat(e,"/Gallery")).onSnapshot(function(e){var t=e.docs.map(function(e){return Object(l.a)({id:e.id},e.data())});a.setState({items:t})})},a.componentWillUnmount=function(){a.unsubscribeFromFirestore()},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid-container"},this.state.items.map(function(e){var t=e.id,a=Object(U.a)(e,["id"]);return r.a.createElement(D,Object.assign({key:t,itemId:t},a))}))}}]),t}(r.a.PureComponent)),L=(a(53),I(function(e){var t=e.currentUser;return t?r.a.createElement(F,{userId:t.id}):r.a.createElement("div",{className:"home-page-container"},r.a.createElement("div",{className:"jumbotron",style:{backgroundImage:"url(".concat(C.a,")")}}),r.a.createElement("div",{className:"heading-container"},r.a.createElement("h1",null,"Personal Art Gallery"),r.a.createElement("p",null,"Where your masterpieces are stored")))})),W=(a(54),I(function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={},a.componentDidMount=function(){var e=a.props,t=e.match,n=e.currentUser,r=t.params.itemId,i=S.doc("Users/".concat(n.id,"/Gallery/").concat(r));a.getItemDetails(i)},a.getItemDetails=function(){var e=Object(m.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get();case 2:(n=e.sent).exists&&a.setState(Object(l.a)({},n.data()));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.price,n=e.imageUrl,i=e.description;return r.a.createElement("div",{className:"item-details-container"},r.a.createElement("div",{className:"image-container",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"item-description"},r.a.createElement("h2",{className:"title"},t),r.a.createElement("label",{className:"price"},"\u20b4",a),r.a.createElement("p",{className:"description"},i)))}}]),t}(r.a.PureComponent))),G=a(16),z=(a(55),function(e){var t=e.name,a=e.type,n=e.placeholder,i=e.value,s=e.onInputChange,c=Object(U.a)(e,["name","type","placeholder","value","onInputChange"]);return r.a.createElement("input",Object.assign({className:"input-field",name:t,type:a,placeholder:n,value:i,onChange:s},c))}),J=(a(56),function(e){var t=e.children,a=(e.outlineColor,e.googleLogIn),n=Object(U.a)(e,["children","outlineColor","googleLogIn"]);return r.a.createElement("button",Object.assign({className:"custom-button ".concat(a?"google-login":"")},n),t)}),M=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,r,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,i=n.password,e.prev=2,e.next=5,j.signInWithEmailAndPassword(r,i);case 5:a.setState({email:"",password:""}),a.props.history.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(G.a)({},n,r))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"sign-in-container"},r.a.createElement("h2",null,"Log in"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(z,{name:"email",type:"email",placeholder:"Email",value:t,onInputChange:this.handleChange,required:!0}),r.a.createElement(z,{name:"password",type:"password",placeholder:"Password",value:a,onInputChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"button-group"},r.a.createElement(J,{type:"submit"},"Log In"),r.a.createElement(J,{onClick:w,googleLogIn:!0},"Log In With Google"))))}}]),t}(r.a.PureComponent),B=Object(b.f)(M),K=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={displayName:"",email:"",password:"",confirmPassword:""},a.handleSubmit=function(){var e=Object(m.a)(u.a.mark(function e(t){var n,r,i,s,c,o,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,r=n.displayName,i=n.email,s=n.password,c=n.confirmPassword,s===c){e.next=5;break}return alert("Password don't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,j.createUserWithEmailAndPassword(i,s);case 8:return o=e.sent,l=o.user,e.next=12,q(l,{displayName:r});case 12:a.setState({displayName:"",email:"",password:"",confirmPassword:""}),a.props.history.push("/"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.error(e.t0);case 19:case"end":return e.stop()}},e,null,[[5,16]])}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(G.a)({},n,r))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,i=e.confirmPassword;return r.a.createElement("div",{className:"sign-up-container"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(z,{name:"displayName",type:"text",placeholder:"Display Name",value:t,onInputChange:this.handleChange,required:!0}),r.a.createElement(z,{name:"email",type:"email",placeholder:"Email",value:a,onInputChange:this.handleChange,required:!0}),r.a.createElement(z,{name:"password",type:"password",placeholder:"Password",value:n,onInputChange:this.handleChange,required:!0}),r.a.createElement(z,{name:"confirmPassword",type:"password",placeholder:"Confirm Password",value:i,onInputChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"button-group"},r.a.createElement(J,{type:"submit"},"Sign Up"))))}}]),t}(r.a.PureComponent),Y=Object(b.f)(K),H=(a(57),function(){return r.a.createElement("div",{className:"signin-and-signup-container"},r.a.createElement(B,null),r.a.createElement(Y,null))}),V=(a(58),r.a.createContext(null)),X=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={currentUser:null},a.unsubscribeFromAuth=null,a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=j.onAuthStateChanged(function(){var t=Object(m.a)(u.a.mark(function t(a){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,q(a);case 3:t.sent.onSnapshot(function(t){e.setState({currentUser:Object(l.a)({id:t.id},t.data())})}),t.next=8;break;case 7:e.setState({currentUser:a});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(k,{currentUser:this.state.currentUser}),r.a.createElement("main",{className:"main-container"},r.a.createElement(V.Provider,{value:this.state.currentUser},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:L}),r.a.createElement(b.a,{path:"/signin",component:H}),r.a.createElement(b.a,{path:"/:itemId",component:W})))))}}]),t}(r.a.Component);s.a.render(r.a.createElement(c.a,{basename:"/art-gallery"},r.a.createElement(X,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.672b0f07.chunk.js.map