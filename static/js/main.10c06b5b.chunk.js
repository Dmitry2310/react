(this.webpackJsonpnetwork=this.webpackJsonpnetwork||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field is required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},109:function(e,t,n){"use strict";var r=n.p+"static/media/Internet.cfc3fbe7.gif",c=n(145),a=n.n(c),i=(n(0),n(1));t.a=function(e){return Object(i.jsx)("div",{className:a.a.preloaderWrapper,children:Object(i.jsx)("img",{src:r,alt:"",className:a.a.preloader})})}},145:function(e,t,n){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__3Fx-G",preloader:"Preloader_preloader__2G3Hk"}},146:function(e,t,n){e.exports={formControl:"FormsControl_formControl__WE9ql",error:"FormsControl_error__eY5EU",formSummaryError:"FormsControl_formSummaryError__3Uy6X"}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return O})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return p}));var r=n(14),c=n.n(r),a=n(31),i=n(72),s=n(8),o=n(24),u={getProfile:function(e){return o.c.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return o.c.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return o.c.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),o.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return o.c.put("profile",e).then((function(e){return e.data}))}},l=n(63),d={posts:[{id:1,post:"hi",likesCount:12},{id:2,post:"hi, how are u?",likesCount:9},{id:3,post:"It's my first progect!",likesCount:16}],profile:null,status:"",photos:null},j={addPostActionCreator:function(e){return{type:"PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"PROFILE/SET_STATUS",status:e}},setPhotoSuccess:function(e){return{type:"PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},f=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.getProfile(e);case 2:r=t.sent,n(j.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.getStatus(e);case 2:r=t.sent,n(j.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.updateStatus(e);case 2:0===t.sent.resultCode&&n(j.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n(j.setPhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,u.saveProfile(e);case 3:if(0!==(i=t.sent).resultCode){t.next=12;break}if(null==a){t.next=9;break}n(f(a)),t.next=10;break;case 9:throw Error("UserId can`t be a null");case 10:t.next=14;break;case 12:return n(Object(l.a)("edit-profile",{_error:i.messages[0]})),t.abrupt("return",Promise.reject(i.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/ADD-POST":var n={id:4,post:t.newPostText,likesCount:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[n].concat(Object(i.a)(e.posts))});case"PROFILE/SET_STATUS":return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case"PROFILE/SET_USER_PROFILE":return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case"PROFILE/SAVE_PHOTO_SUCCESS":return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},152:function(e,t,n){},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(72),c=n(8),a={dialogs:[{id:1,name:"Bob"},{id:2,name:"Mary"},{id:3,name:"Viktor"},{id:4,name:"Sveta"}],messages:[{id:1,message:"hi"},{id:2,message:"how ar u?"},{id:3,message:"gav gav"}]},i={sendMessageCreator:function(e){return{type:"DIALOGS/SEND_MESSAGE",newMessageText:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DIALOGS/SEND_MESSAGE":var n=t.newMessageText;return Object(c.a)(Object(c.a)({},e),{},{messages:[{id:4,message:n}].concat(Object(r.a)(e.messages))});default:return e}}},177:function(e,t,n){"use strict";t.a=n.p+"static/media/user.1f1285f0.png"},196:function(e,t,n){e.exports={header:"Header_header__1VCKf",networkTitle:"Header_networkTitle__2K0OL",loginBlock:"Header_loginBlock__6mma5"}},207:function(e,t,n){e.exports={formControl:"Login_formControl__1v_Mx",error:"Login_error__17Wu6",formSummaryError:"Login_formSummaryError__3cy0x"}},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r,c,a=n(193),i=n.n(a).a.create({withCredentials:!0,responseType:"json",baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2c764cb3-4b05-4ea7-9034-a0dec41567b0"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},321:function(e,t,n){},368:function(e,t,n){"use strict";n.r(t);n(152);var r=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,386)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},c=n(19),a=n(151),i=n(162),s={},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;return e},u=n(14),l=n.n(u),d=n(31),j=n(72),f=n(8),b=n(24),O={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return b.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},followAPI:function(e){return b.c.post("follow/".concat(e)).then((function(e){return e.data}))},unFollowAPI:function(e){return b.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},h={users:[],pageSize:20,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},p=function(e){return{type:"USER/FOLLOW",userId:e}},m=function(e){return{type:"USER/UNFOLLOW",userId:e}},g=function(e){return{type:"USER/SET_USERS",users:e}},x=function(e){return{type:"USER/SET_CURRENT_PAGE",currentPage:e}},v=function(e){return{type:"USER/SET_FILTER",payload:e}},S=function(e){return{type:"USER/SET_TOTAL_USERS_COUNT",count:e}},_=function(e){return{type:"USER/TOGGLE_IS_FETCHING",isFetching:e}},E=function(e,t){return{type:"USER/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},P=function(e,t,n){return function(){var r=Object(d.a)(l.a.mark((function r(c){var a;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(x(e)),c(_(!0)),c(v(n)),r.next=5,O.getUsers(e,t,n.term,n.friend);case 5:a=r.sent,c(_(!1)),c(g(a.items)),c(S(a.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},w=function(){var e=Object(d.a)(l.a.mark((function e(t,n,r,c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(c(n)),t(E(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER/FOLLOW":return Object(f.a)(Object(f.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(f.a)(Object(f.a)({},e),{},{followed:!0}):e}))});case"USER/UNFOLLOW":return Object(f.a)(Object(f.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(f.a)(Object(f.a)({},e),{},{followed:!1}):e}))});case"USER/SET_USERS":return Object(f.a)(Object(f.a)({},e),{},{users:t.users});case"USER/SET_CURRENT_PAGE":return Object(f.a)(Object(f.a)({},e),{},{currentPage:t.currentPage});case"USER/SET_TOTAL_USERS_COUNT":return Object(f.a)(Object(f.a)({},e),{},{totalUsersCount:t.count});case"USER/TOGGLE_IS_FETCHING":return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.isFetching});case"USER/SET_FILTER":return Object(f.a)(Object(f.a)({},e),{},{filter:t.payload});case"USER/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(f.a)(Object(f.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(j.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},I={getMe:function(){return b.c.get("/auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c={email:e,password:t,rememberMe:n,captcha:r};return b.c.post("/auth/login",c).then((function(e){return e.data}))},logout:function(){return b.c.delete("/auth/login").then((function(e){return e.data}))},getCaptcha:function(){return b.c.get("security/get-captcha-url").then((function(e){return e.data}))}},C=n(63),T={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},U=function(e,t,n,r){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},R=function(e){return{type:"auth/SET_CAPTCHA",payload:{captchaUrl:e}}},k=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getMe();case 2:(n=e.sent).resultCode===b.b.Success&&(r=n.data,c=r.id,a=r.email,i=r.login,t(U(c,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){return function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getCaptcha();case 2:n=e.sent,r=n.url,t(R(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/SET_CAPTCHA":return Object(f.a)(Object(f.a)({},e),t.payload);default:return e}},L={inicialization:!1},A=function(){return{type:"APP/SET_INICIALIZATION"}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_INICIALIZATION":return Object(f.a)(Object(f.a)({},e),{},{inicialization:!0});default:return e}},M=n(195),z=n(191),D=Object(c.c)({profilePage:a.b,messagesPage:i.b,sideBar:o,usersPage:y,auth:F,form:z.a,app:G}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,W=Object(c.e)(D,H(Object(c.a)(M.a)));window.store=W;var V=W,q=n(0),B=n.n(q),K=n(36),X=n.n(K),J=n(174),Z=n(175),Q=n(192),Y=n(190),$=(n(321),n(322),n.p+"static/media/logo.d2e09d95.png"),ee=n(81),te=n.n(ee),ne=n(37),re=n(370),ce=n(373),ae=n(376),ie=n(377),se=n(378),oe=n(379),ue=n(210),le=n(196),de=n.n(le),je=n(374),fe=n(375),be=n(372),Oe=n(371),he=n(15),pe=function(e){return e.auth.isAuth},me=function(e){return e.auth.login},ge=n(1),xe=function(e){var t=Object(he.d)(pe),n=(Object(he.d)(me),Object(he.c)()),r=re.a.Header;return Object(ge.jsx)(r,{className:"site-layout-sub-header-background",style:{padding:0},children:Object(ge.jsxs)(je.a,{children:[Object(ge.jsx)(fe.a,{span:20,className:de.a.networkTitle,children:Object(ge.jsx)("span",{children:"FRIENDS FINDER"})}),t?Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(fe.a,{span:1,children:Object(ge.jsx)(be.a,{style:{backgroundColor:"#87d068"},icon:Object(ge.jsx)(ae.a,{})})}),Object(ge.jsx)(fe.a,{span:3,children:Object(ge.jsx)(Oe.a,{onClick:function(){n(function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.logout();case 2:e.sent.resultCode===b.b.Success&&t(U(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})})]}):Object(ge.jsx)(fe.a,{span:4,children:Object(ge.jsx)(Oe.a,{children:Object(ge.jsx)(ne.b,{to:"/login",children:"Login"})})})]})})},ve=n(111),Se=n(149),_e=n(7),Ee=n.n(_e),Pe=n(82),we=n.n(Pe),ye=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,c=void 0===r?1:r,a=e.onPageChanget,i=void 0===a?function(e){return e}:a,s=e.portionSize,o=void 0===s?10:s,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var j=Math.ceil(u/o),f=Object(q.useState)(1),b=Object(Se.a)(f,2),O=b[0],h=b[1],p=(O-1)*o+1,m=O*o;return Object(ge.jsxs)("div",{className:we.a.paginator,children:[O>1&&Object(ge.jsx)("button",{className:we.a.button,onClick:function(){h(O-1)},children:"PREV"}),l.filter((function(e){return e>=p&&e<=m})).map((function(e){return Object(ge.jsx)("div",{className:Ee()(Object(ve.a)({},we.a.selectedPage,c===e),we.a.pageNumber),children:Object(ge.jsx)("span",{onClick:function(t){i(e)},children:e},e)})})),j>O&&Object(ge.jsx)("button",{className:we.a.button,onClick:function(){h(O+1)},children:"NEXT"})]})},Ie=n(54),Ce=n.n(Ie),Te=n(177),Ue=function(e){var t=e.user,n=e.followingInProgress,r=e.unFollow,c=e.follow;return Object(ge.jsxs)("div",{className:Ce.a.human,children:[Object(ge.jsx)(ne.c,{to:"/profile/"+t.id,children:Object(ge.jsx)("div",{className:Ce.a.avatar,children:Object(ge.jsx)("img",{src:null!=t.photos.small?t.photos.small:Te.a,alt:""})})}),Object(ge.jsxs)("div",{className:Ce.a.users,children:[Object(ge.jsx)("div",{className:Ce.a.item,children:t.name}),Object(ge.jsx)("div",{className:Ce.a.item,children:t.status}),Object(ge.jsx)("div",{className:Ce.a.item,children:"user.age"}),Object(ge.jsx)("div",{className:Ce.a.item,children:"user.location.city"}),Object(ge.jsx)("div",{className:Ce.a.item,children:"user.location.country"})]}),Object(ge.jsx)("div",{className:Ce.a.but,children:t.followed?Object(ge.jsx)(Oe.a,{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unsubscribe"}):Object(ge.jsx)(Oe.a,{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)},children:"Subscribe"})})]})},Re=n(93),ke=function(e){return e.usersPage.users},Ne=function(e){return e.usersPage.pageSize},Fe=function(e){return e.usersPage.totalUsersCount},Le=function(e){return e.usersPage.currentPage},Ae=function(e){return e.usersPage.isFetching},Ge=function(e){return e.usersPage.followingInProgress},Me=function(e){return e.usersPage.filter},ze=function(e){return{}},De=function(e){var t=e.onFilterChanged,n=Object(he.d)(Me);return Object(ge.jsx)("div",{children:Object(ge.jsx)("div",{children:Object(ge.jsx)(Re.c,{enableReinitialize:!0,initialValues:{term:n.term,friend:String(n.friend)},validate:ze,onSubmit:function(e,n){var r=n.setSubmitting,c={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(ge.jsxs)(Re.b,{children:[Object(ge.jsx)(Re.a,{type:"text",name:"term"}),Object(ge.jsxs)(Re.a,{name:"friend",as:"select",children:[Object(ge.jsx)("option",{value:"null",children:"All"}),Object(ge.jsx)("option",{value:"true",children:"Only followed"}),Object(ge.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(ge.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})},He=n(17),We=function(e){var t=Object(he.d)(Fe),r=Object(he.d)(ke),c=Object(he.d)(Le),a=Object(he.d)(Ne),i=Object(he.d)(Me),s=Object(he.d)(Ge),o=Object(he.c)(),u=Object(He.g)();Object(q.useEffect)((function(){var e=n(178).parse(u.location.search.substring(1)),t=c,r=i;switch(e.page&&(t=Number(e.page)),e.term&&(r=Object(f.a)(Object(f.a)({},r),{},{term:e.term})),e.friend){case"null":r=Object(f.a)(Object(f.a)({},r),{},{friend:null});break;case"true":r=Object(f.a)(Object(f.a)({},r),{},{friend:!0});break;case"false":r=Object(f.a)(Object(f.a)({},r),{},{friend:!1})}o(P(t,a,r))}),[]),Object(q.useEffect)((function(){var e={};i.term&&(e.term=i.term),null!==i.friend&&(e.friend=String(i.friend)),1!==c&&(e.page=String(c));var t=n(178);u.push({pathname:"/users",search:t.stringify(e)})}),[i,c]);var j=function(e){o(function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(n,e,O.unFollowAPI.bind(O),m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},b=function(e){o(function(e){return function(){var t=Object(d.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(n,e,O.followAPI.bind(O),p);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(ge.jsxs)("div",{children:[Object(ge.jsx)(De,{onFilterChanged:function(e){o(P(1,a,e))}}),Object(ge.jsx)(ye,{currentPage:c,onPageChanget:function(e){o(P(e,a,i))},pageSize:a,totalItemsCount:t}),r.map((function(e){return Object(ge.jsx)(Ue,{user:e,followingInProgress:s,follow:b,unFollow:j},e.id)}))]})},Ve=n(109),qe=function(e){var t=Object(he.d)(Ae);return Object(ge.jsxs)(ge.Fragment,{children:[t?Object(ge.jsx)(Ve.a,{}):null,Object(ge.jsx)(We,{})]})},Be=n(140),Ke=n(189),Xe=n(66),Je=n(106),Ze=n(207),Qe=n.n(Ze),Ye=Object(Ke.a)({form:"loginForm"})((function(e){var t=e.error,n=e.captchaUrl,r=e.handleSubmit;return Object(ge.jsxs)("form",{action:"#",onSubmit:r,children:[Object(ge.jsx)("div",{children:Object(Xe.c)("Email","email",[Je.b],Xe.a)}),Object(ge.jsx)("div",{children:Object(ge.jsx)(Be.a,{type:"password",placeholder:"Password",name:"password",component:Xe.a,validate:[Je.b]})}),Object(ge.jsxs)("div",{children:[Object(ge.jsx)(Be.a,{type:"checkbox",name:"rememberMe",component:Xe.a})," remember me"]}),n&&Object(ge.jsx)("div",{children:Object(ge.jsx)("img",{alt:"captchaUrl",src:n})}),n&&Object(ge.jsx)("div",{children:Object(Xe.c)("Symbols from image","captcha",[Je.b],Xe.a)}),t&&Object(ge.jsx)("div",{className:Qe.a.formSummaryError,children:t}),Object(ge.jsx)("div",{children:Object(ge.jsx)("button",{children:"Login"})})]})})),$e=function(){var e=Object(he.d)((function(e){return e.auth.captchaUrl})),t=Object(he.d)((function(e){return e.auth.isAuth})),n=Object(he.c)();return t?Object(ge.jsx)(He.a,{to:"/profile"}):Object(ge.jsxs)("div",{children:[Object(ge.jsx)("h1",{children:"Login"}),Object(ge.jsx)(Ye,{onSubmit:function(e){var t,r,c,a;n((t=e.email,r=e.password,c=e.rememberMe,a=e.captcha,function(){var e=Object(d.a)(l.a.mark((function e(n){var i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.login(t,r,c,a);case 2:(i=e.sent).resultCode===b.b.Success?n(k()):(i.resultCode===b.a.CaptchaIsRequired&&n(N()),s=i.messages.length>0?i.messages[0]:"Some error",n(Object(C.a)("loginForm",{_error:s})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e})]})};function et(e){return function(t){return Object(ge.jsx)(q.Suspense,{fallback:Object(ge.jsx)("div",{children:"Loading..."}),children:Object(ge.jsx)(e,Object(f.a)({},t))})}}var tt=B.a.lazy((function(){return n.e(4).then(n.bind(null,389))})),nt=B.a.lazy((function(){return n.e(3).then(n.bind(null,388))})),rt=B.a.lazy((function(){return n.e(5).then(n.bind(null,387))})),ct=et(tt),at=et(nt),it=et(rt),st=re.a.Content,ot=re.a.Footer,ut=re.a.Sider,lt=function(e){Object(Q.a)(n,e);var t=Object(Y.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.inicialization?Object(ge.jsxs)(re.a,{children:[Object(ge.jsxs)(ut,{breakpoint:"lg",collapsedWidth:"0",onBreakpoint:function(e){console.log(e)},onCollapse:function(e,t){console.log(e,t)},children:[Object(ge.jsx)("div",{className:"logo",children:Object(ge.jsx)("img",{src:$,alt:"",style:{width:60,marginLeft:60}})}),Object(ge.jsxs)(ce.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],style:{marginTop:0,position:"sticky",top:"0"},children:[Object(ge.jsx)(ce.a.Item,{icon:Object(ge.jsx)(ae.a,{}),children:Object(ge.jsx)("div",{className:te.a.item,children:Object(ge.jsx)(ne.b,{to:"/profile",children:"Profile"})})},"1"),Object(ge.jsx)(ce.a.Item,{icon:Object(ge.jsx)(ie.a,{}),children:Object(ge.jsx)("div",{className:te.a.item,children:Object(ge.jsx)(ne.b,{to:"/dialogs",children:"Messages"})})},"2"),Object(ge.jsx)(ce.a.Item,{icon:Object(ge.jsx)(se.a,{}),children:Object(ge.jsx)("div",{className:te.a.item,children:Object(ge.jsx)(ne.b,{to:"/users",children:"Friends"})})},"3"),Object(ge.jsx)(ce.a.Item,{icon:Object(ge.jsx)(oe.a,{}),children:Object(ge.jsx)("div",{className:te.a.item,children:Object(ge.jsx)("a",{children:"Music"})})},"4"),Object(ge.jsx)(ce.a.Item,{icon:Object(ge.jsx)(ue.a,{}),children:Object(ge.jsx)("div",{className:te.a.item,children:Object(ge.jsx)(ne.b,{to:"/chat",children:"Chat"})})},"5")]})]}),Object(ge.jsxs)(re.a,{children:[Object(ge.jsx)(xe,{}),Object(ge.jsx)(st,{style:{margin:"24px 16px 0"},children:Object(ge.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:Object(ge.jsx)("div",{className:"content",children:Object(ge.jsxs)(He.d,{children:[Object(ge.jsx)(He.b,{exact:!0,path:"/",render:function(){return et(nt)}}),Object(ge.jsx)(He.b,{path:"/profile/:userId?",render:function(){return Object(ge.jsx)(at,{})}}),Object(ge.jsx)(He.b,{path:"/dialogs",render:function(){return Object(ge.jsx)(ct,{})}}),Object(ge.jsx)(He.b,{path:"/users",render:function(){return Object(ge.jsx)(qe,{})}}),Object(ge.jsx)(He.b,{path:"/chat",render:function(){return Object(ge.jsx)(it,{})}}),Object(ge.jsx)(He.b,{path:"/login",render:function(){return Object(ge.jsx)($e,{})}})]})})})}),Object(ge.jsx)(ot,{style:{textAlign:"center"},children:"Network Design \xa92022 Created by Person"})]})]}):Object(ge.jsx)(Ve.a,{})}}]),n}(B.a.Component),dt=Object(c.d)(He.h,Object(he.b)((function(e){return{inicialization:e.app.inicialization}}),{initializeApp:function(){return function(e){var t=e(k());Promise.all([t]).then((function(){e(A())}))}}}))(lt);X.a.render(Object(ge.jsx)(ne.a,{basename:"/github.react",children:Object(ge.jsx)(he.a,{store:V,children:Object(ge.jsx)(dt,{})})}),document.getElementById("root")),r()},54:function(e,t,n){e.exports={human:"Users_human__2F_ZC",avatar:"Users_avatar__gHOlh",users:"Users_users__2Iv27",item:"Users_item__2_u8d",but:"Users_but__1pH-Q",selectedPage:"Users_selectedPage__J63sh"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b}));var r=n(8),c=n(139),a=n(146),i=n.n(a),s=n(140),o=n(1),u=["input","meta","children"],l=["input","meta","children"],d=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,a=n&&r;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(a?i.a.error:" "),children:[c,a&&Object(o.jsx)("span",{children:r})]})},j=function(e){var t=e.input,n=(e.meta,e.children,Object(c.a)(e,u));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,e.children,Object(c.a)(e,l));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function b(e,t,n,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(s.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},a))," ",i]})}},81:function(e,t,n){e.exports={item:"Navbar_item__zmMk4"}},82:function(e,t,n){e.exports={pageNumber:"Pagination_pageNumber__3OfQM",selectedPage:"Pagination_selectedPage__sPSVP",paginator:"Pagination_paginator__3EzHz",button:"Pagination_button__U0lwD"}}},[[368,1,2]]]);
//# sourceMappingURL=main.10c06b5b.chunk.js.map