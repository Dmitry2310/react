(this.webpackJsonpnetwork=this.webpackJsonpnetwork||[]).push([[3],{384:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var a=s(7),i=s(139),r=(s(0),s(17)),o=s(15),c=s(1),n=["isAuth"],l=function(t){return{isAuth:t.auth.isAuth}};function u(t){return Object(o.b)(l,{})((function(e){if(!e.isAuth)return Object(c.jsx)(r.a,{to:"/login"});e.isAuth;var s=Object(i.a)(e,n);return Object(c.jsx)(t,Object(a.a)({},s))}))}},385:function(t,e,s){t.exports={writeMessage:"MyPosts_writeMessage__2aPDx",button:"MyPosts_button__2WbpQ",area:"MyPosts_area__XnDhM",posts:"MyPosts_posts__3tZ1c"}},386:function(t,e,s){t.exports={item:"Post_item__ihtu9",likes:"Post_likes__2o7Hq",news:"Post_news__R0WCn"}},387:function(t,e,s){t.exports={userData:"ProfileInfo_userData__3mmIK",contacts:"ProfileInfo_contacts__3y62P",bgDescription:"ProfileInfo_bgDescription__3zN-X",bgImg:"ProfileInfo_bgImg__1v8sR",avatarContainer:"ProfileInfo_avatarContainer__1Nl_A",description:"ProfileInfo_description__2yWda",itemStatus:"ProfileInfo_itemStatus__1r5Ee",userName:"ProfileInfo_userName__2XnM7",contact:"ProfileInfo_contact__1N3gp",editButton:"ProfileInfo_editButton__wSjKk",formSummaryError:"ProfileInfo_formSummaryError__3Pphw",title:"ProfileInfo_title__2t6A6"}},388:function(t,e,s){t.exports={description:"ProfileData_description__35rBw",wrapper:"ProfileData_wrapper__1LDW8",contacts:"ProfileData_contacts__2izxH",item:"ProfileData_item__2xTYg",itemStatus:"ProfileData_itemStatus__2vqF6",userName:"ProfileData_userName__1Q1xM",contact:"ProfileData_contact__8ybAu",editButton:"ProfileData_editButton__1evVC",formSummaryError:"ProfileData_formSummaryError__3jKHt",title:"ProfileData_title__1o1RH"}},390:function(t,e,s){"use strict";s.r(e);var a=s(7),i=s(174),r=s(175),o=s(193),c=s(190),n=s(0),l=s.n(n),u=s(385),j=s.n(u),b=s(386),d=s.n(b),f=s(1),p=function(t){return Object(f.jsxs)("div",{className:d.a.item,children:[Object(f.jsx)("img",{src:"https://images3.alphacoders.com/690/690494.jpg",alt:""}),Object(f.jsx)("div",{className:d.a.news,children:t.message}),Object(f.jsxs)("div",{className:d.a.likes,children:["Likes ",t.likesCount]})]})},h=s(140),m=s(189),O=s(106),_=s(67),x=Object(O.a)(10),v=Object(m.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(f.jsxs)("form",{className:j.a.writeMessage,onSubmit:t.handleSubmit,children:[Object(f.jsx)(h.a,{className:j.a.area,validate:[O.b,x],placeholder:"Whats up?",name:"newPostText",component:_.b}),Object(f.jsx)("div",{className:j.a.button,children:Object(f.jsx)("button",{children:"Add Post"})})]})})),P=function(t){var e=t.posts.map((function(t){return Object(f.jsx)(p,{message:t.post,likesCount:t.likesCount},t.id)}));return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{onSubmit:function(e){t.postNews(e.newPostText)}}),Object(f.jsx)("div",{className:j.a.posts,children:e})]})},g=s(151),N=s(15),S=Object(N.b)((function(t){return{posts:t.profilePage.posts}}),{postNews:g.a.addPostActionCreator})(P),k=s(149),w=s(387),y=s.n(w),D=s(109),I=s(177),A=s.p+"static/media/bg.570f1bb2.jpg",M=function(t){var e=Object(n.useState)(!1),s=Object(k.a)(e,2),a=s[0],i=s[1],r=Object(n.useState)(t.status),o=Object(k.a)(r,2),c=o[0],l=o[1];Object(n.useEffect)((function(){l(t.status)}),[t.status]);return Object(f.jsxs)("div",{children:[!a&&Object(f.jsx)("div",{children:Object(f.jsx)("div",{onDoubleClick:function(){i(!0)},children:t.status||"No status"})}),a&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(c)},value:c})})]})},C=s(388),E=s.n(C),F=Object(m.a)({form:"edit-profile"})((function(t){var e=t.profile,s=t.handleSubmit,a=t.error;return Object(f.jsxs)("form",{className:E.a.description,onSubmit:s,children:[Object(f.jsxs)("div",{className:E.a.wrapper,children:[a&&Object(f.jsx)("div",{className:E.a.formSummaryError,children:a}),Object(f.jsxs)("div",{className:E.a.editButton,children:[" ",Object(f.jsx)("button",{children:"Save"})," "]}),Object(f.jsx)("div",{className:E.a.item,children:Object(f.jsxs)("div",{className:E.a.userName,children:[Object(f.jsx)("b",{children:"Name"}),": ",Object(_.c)("Full Name","fullName",[O.b],_.a)]})}),Object(f.jsxs)("div",{className:E.a.item,children:[Object(f.jsx)("b",{children:"Looking for a job"})," :",Object(_.c)("","lookingForAJob",[],_.a,{type:"checkbox"})]}),Object(f.jsxs)("div",{className:E.a.item,children:[Object(f.jsx)("b",{children:"My professional skills"})," :",Object(_.c)("My professional skills","lookingForAJobDescription",[],_.b)]}),Object(f.jsxs)("div",{className:E.a.item,children:[Object(f.jsx)("b",{children:"About me"})," :",Object(_.c)("About me","aboutMe",[],_.b)]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Contacts"})," : "]}),Object(f.jsx)("div",{className:E.a.contacts,children:Object.keys(e.contacts).map((function(t){return Object(f.jsx)("div",{className:E.a.contact,children:Object(f.jsxs)("b",{children:[t,": ",Object(_.c)(t,"contacts."+t,[],_.a)]})},t)}))})]})})),B=s(373),T=function(t){var e=t.profile,s=t.isOwner,a=t.goToEditMode;return Object(f.jsxs)("div",{className:y.a.description,children:[s&&Object(f.jsx)(B.a,{className:y.a.editButton,onClick:a,children:"Edit"}),Object(f.jsxs)("div",{className:y.a.userData,children:[Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:y.a.userName,children:[Object(f.jsx)("b",{children:"Name"})," : ",e.fullName]})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Looking for a job"})," :",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"My skills"})," :",e.lookingForAJobDescription]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"About me"})," :",e.aboutMe]})]}),Object(f.jsxs)("div",{className:y.a.contacts,children:[Object(f.jsx)("b",{children:"Contacts"})," : ",Object.keys(e.contacts).map((function(t){return Object(f.jsx)(J,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},J=function(t){var e=t.contactTitle,s=t.contactValue;return Object(f.jsxs)("div",{className:y.a.contact,children:[Object(f.jsxs)("b",{children:[" ",e," "]})," : ",s]})},U=function(t){var e=Object(n.useState)(!1),s=Object(k.a)(e,2),a=s[0],i=s[1];if(!t.profile)return Object(f.jsx)(D.a,{});return Object(f.jsxs)("div",{className:y.a.bgDescription,children:[Object(f.jsx)("img",{src:A,alt:"",className:y.a.bgImg}),t.isOwner&&Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{className:y.a.title,children:"Change photo"}),Object(f.jsx)("input",{type:"file",onChange:function(e){var s;(null===(s=e.target.files)||void 0===s?void 0:s.length)&&t.savePhoto(e.target.files[0])}})]}),Object(f.jsx)("div",{className:y.a.avatarContainer,children:Object(f.jsx)("img",{alt:"",src:null!=t.profile.photos.small?t.profile.photos.small:I.a})}),Object(f.jsx)("div",{className:y.a.itemStatus,children:Object(f.jsx)(M,{status:t.status,updateStatus:t.updateStatus})}),a?Object(f.jsx)(F,{initialValues:t.profile,profile:t.profile,onSubmit:function(e){t.saveProfile(e),i(!1)}}):Object(f.jsx)(T,{profile:t.profile,isOwner:t.isOwner,goToEditMode:function(){i(!0)}})]})},W=function(t){return Object(f.jsxs)("div",{children:[Object(f.jsx)(U,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),Object(f.jsx)(S,{})]})},z=s(17),H=s(384),L=s(19),V=function(t){Object(o.a)(s,t);var e=Object(c.a)(s);function s(){var t;Object(i.a)(this,s);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).refreshProfile=function(){var e=+t.props.match.params.userId;e||(e=t.props.autorizedUserId)||t.props.history.push("/login"),e?(t.props.getUserProfile(e),t.props.getStatus(e)):console.log("ID should be exist")},t}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(W,Object(a.a)(Object(a.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))})}}]),s}(l.a.Component);e.default=Object(L.d)(Object(N.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,autorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:g.d,getStatus:g.c,updateStatus:g.g,savePhoto:g.e,saveProfile:g.f}),z.h,H.a)(V)}}]);
//# sourceMappingURL=3.f8d9aad8.chunk.js.map