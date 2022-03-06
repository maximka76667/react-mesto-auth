(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(18),o=n.n(c),s=(n(28),n(22)),r=n(2),l=n(5),u=n(3),p=n.p+"static/media/close-icon.039f1f52.svg",d=n(0);var h=function(e){var t=Object(u.g)(),n=i.a.useState(!1),a=Object(r.a)(n,2),c=a[0],o=a[1],s=i.a.useState(!1),h=Object(r.a)(s,2),j=h[0],_=h[1];function b(){o(!c)}function m(){window.innerWidth<500?_(!0):(_(!1),o(!1))}function f(){o(!1),e.onLogout()}return i.a.useEffect((function(){window.addEventListener("resize",m),m()}),[]),Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("div",{className:"header__menu ".concat(c?"header__menu_opened":""),children:[Object(d.jsx)("p",{className:"header__login",children:e.email}),Object(d.jsx)(l.b,{to:"/sign-in",className:"header__link header__link_logged-in",onClick:f,children:"Logout"})]}),Object(d.jsxs)("div",{className:"header__container",children:[Object(d.jsx)(l.b,{to:"/",className:"logo"}),function(){switch(t.pathname){case"/sign-in":return Object(d.jsx)(l.b,{to:"/sign-up",className:"header__link",children:"Sign up"});case"/sign-up":return Object(d.jsx)(l.b,{to:"/sign-in",className:"header__link",children:"Sign in"});case"/":return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"header__login ".concat(j?"header__login_hidden":""),children:e.email}),Object(d.jsx)(l.b,{to:"/sign-in",className:"header__link header__link_logged-in ".concat(j?"header__link_hidden":""),onClick:f,children:"Logout"}),Object(d.jsx)("button",{className:"header__menu-button",onClick:b,children:Object(d.jsx)("img",{src:c?p:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAqSURBVHgB7dMxEQAACMPAFv+eAQcMXLe8gUxxLwWVwuIB4M+MBuQx2mkAhA8MBFFMCNUAAAAASUVORK5CYII=",alt:"Menu"})})]});default:return Object(d.jsx)(l.b,{to:"/",className:"header__link",children:"Link"})}}()]})]})};function j(){var e=(new Date).getFullYear();return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("div",{className:"footer__container",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",e,". Maxim Grivennyy"]})})})}var _=i.a.createContext();function b(e){var t=e.card,n=e.onClick,a=e.onCardLike,c=e.onCardDelete,o=i.a.useContext(_),s=t.owner._id===o._id,r=t.likes.some((function(e){return e._id===o._id})),l="card__like-button ".concat(r?"card__like-button_active":"card__like-button_disabled");return Object(d.jsxs)("article",{className:"card",children:[Object(d.jsx)("div",{className:"card__image-container",children:Object(d.jsx)("img",{src:t.link,alt:t.name,className:"card__image",onClick:function(){n(t)}})}),s?Object(d.jsx)("button",{className:"card__delete-button",onClick:function(){c(t)}}):null,Object(d.jsxs)("div",{className:"card__info",children:[Object(d.jsx)("h2",{className:"card__title",children:t.name}),Object(d.jsxs)("div",{className:"card__like",children:[Object(d.jsx)("button",{className:l,type:"button",onClick:function(){a(t)}}),Object(d.jsx)("p",{className:"card__likes-count",children:t.likes.length})]})]})]})}function m(e){var t=e.cards,n=i.a.useContext(_);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsx)("div",{className:"profile",children:Object(d.jsxs)("div",{className:"profile__container",children:[Object(d.jsx)("div",{className:"profile__avatar",onClick:e.onEditAvatar,children:Object(d.jsx)("img",{src:n.avatar,className:"profile__avatar-image",alt:"Profile avatar"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:n.name}),Object(d.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile}),Object(d.jsx)("p",{className:"profile__description",children:n.about})]}),Object(d.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]})}),Object(d.jsx)("div",{className:"cards",children:Object(d.jsx)("div",{className:"cards__container",children:t.map((function(t){return Object(d.jsx)(b,{card:t,onClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})}function f(e){var t=e.card,n=e.isOpen,a=e.onClose;return Object(d.jsxs)("div",{className:"popup popup_type_image ".concat(n?"popup_opened":""),children:[Object(d.jsx)("div",{className:"popup__overlay popup__overlay_type_image",onClick:a}),Object(d.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(d.jsx)("img",{src:null===t||void 0===t?void 0:t.link,alt:null===t||void 0===t?void 0:t.name,className:"popup__image"}),Object(d.jsx)("h2",{className:"popup__title popup__title_type_image",children:t?t.name:""}),Object(d.jsx)("button",{className:"popup__close-button",type:"button",onClick:a})]})]})}var O=n(13),g=n(14),v=new(function(){function e(t){var n=t.baseUrl,a=t.authorization;Object(O.a)(this,e),this._baseUrl=n,this._token=a}return Object(g.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setProfileInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"addPlace",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-22",authorization:"6e0d021d-4f3f-452d-8c82-5a27e9592d29"});function x(e){var t=e.isOpen,n=e.isLoading,a=e.name,i=e.title,c=e.onSubmit,o=e.submitText,s=e.onClose,r=e.children,l=e.isSubmitValid,u="popup__submit-button ".concat(l?"":"popup__submit-button_disabled");return Object(d.jsxs)("div",{className:"popup popup_type_".concat(a," ").concat(t?"popup_opened":""),children:[Object(d.jsx)("div",{className:"popup__overlay popup__overlay_type_remove",onClick:s}),Object(d.jsxs)("div",{className:"popup__container popup__container_type_remove",children:[Object(d.jsx)("h2",{className:"popup__title",children:i}),Object(d.jsxs)("form",{className:"popup__form",name:a,onSubmit:c,noValidate:!0,children:[r,Object(d.jsx)("button",{className:u,type:"submit",disabled:!l,children:n?"Loading...":o})]}),Object(d.jsx)("button",{className:"popup__close-button",type:"button",onClick:s})]})]})}function k(e){var t=e.isOpen,n=e.isLoading,a=e.onClose,c=e.onUpdateUser,o=i.a.useContext(_),s=i.a.useState(""),l=Object(r.a)(s,2),u=l[0],p=l[1],h=i.a.useState(""),j=Object(r.a)(h,2),b=j[0],m=j[1],f=i.a.useState(""),O=Object(r.a)(f,2),g=O[0],v=O[1],k=i.a.useState(""),N=Object(r.a)(k,2),y=N[0],C=N[1],S=i.a.useState(!1),A=Object(r.a)(S,2),L=A[0],w=A[1],P=i.a.useState(!1),E=Object(r.a)(P,2),U=E[0],T=E[1],I=i.a.useState(!1),R=Object(r.a)(I,2),D=R[0],M=R[1],B="popup__input ".concat(L?"popup__input_type_error":""),z="popup__input ".concat(U?"popup__input_type_error":""),V="popup__error ".concat(L?"popup__error_visible":""),q="popup__error ".concat(U?"popup__error_visible":"");function Y(e){var t=e.target;switch(t.name){case"profileName":t.validity.valid?(w(!1),v(""),M(!0)):(w(!0),v(t.validationMessage),M(!1));break;case"profilePosition":t.validity.valid?(T(!1),C(""),M(!0)):(T(!0),C(t.validationMessage),M(!1))}}return i.a.useEffect((function(){p(o.name),m(o.about)}),[t,o]),i.a.useEffect((function(){w(!1),T(!1),M(!0),v(""),C("")}),[t]),Object(d.jsxs)(x,{name:"edit",title:"Edit profile",submitText:"Save",isOpen:t,isLoading:n,isSubmitValid:D,onClose:a,onSubmit:function(e){e.preventDefault(),c({name:u,about:b})},children:[Object(d.jsx)("input",{className:B,type:"text",name:"profileName",id:"profileName",placeholder:"Your name",minLength:"2",maxLength:"40",required:!0,value:"".concat(u),onChange:function(e){p(e.target.value),Y(e)}}),Object(d.jsx)("span",{className:V,children:L&&g}),Object(d.jsx)("input",{className:z,type:"text",name:"profilePosition",id:"profilePosition",placeholder:"Your position",minLength:"2",maxLength:"200",required:!0,value:"".concat(b),onChange:function(e){m(e.target.value),Y(e)}}),Object(d.jsx)("span",{className:q,children:U&&y})]})}function N(e){var t=e.isOpen,n=e.isLoading,a=e.onClose,c=e.onUpdateAvatar,o=i.a.useState(""),s=Object(r.a)(o,2),l=s[0],u=s[1],p=i.a.useState(""),h=Object(r.a)(p,2),j=h[0],_=h[1],b=i.a.useState(!1),m=Object(r.a)(b,2),f=m[0],O=m[1],g=i.a.useState(!1),v=Object(r.a)(g,2),k=v[0],N=v[1],y="popup__input ".concat(f?"popup__input_type_error":""),C="popup__error ".concat(f?"popup__error_visible":"");return i.a.useEffect((function(){O(!1),N(!1),_(""),u("")}),[t]),Object(d.jsxs)(x,{name:"avatar",title:"Update avatar",isOpen:t,isLoading:n,isSubmitValid:k,onClose:a,onSubmit:function(e){e.preventDefault(),c({avatar:l})},submitText:"Save",children:[Object(d.jsx)("input",{className:y,type:"url",name:"avatarLink",id:"avatarLink",placeholder:"Image link",minLength:"2",required:!0,onChange:function(e){u(e.target.value),function(e){var t=e.target;t.validity.valid?(O(!1),_(""),N(!0)):(O(!0),_(t.validationMessage),N(!1))}(e)},value:l}),Object(d.jsx)("span",{className:C,id:"avatarLink-error",children:f?j:""})]})}function y(e){var t=e.isOpen,n=e.isLoading,a=e.onClose,c=e.onAddPlace,o=i.a.useState(""),s=Object(r.a)(o,2),l=s[0],u=s[1],p=i.a.useState(""),h=Object(r.a)(p,2),j=h[0],_=h[1],b=i.a.useState(""),m=Object(r.a)(b,2),f=m[0],O=m[1],g=i.a.useState(""),v=Object(r.a)(g,2),k=v[0],N=v[1],y=i.a.useState(!1),C=Object(r.a)(y,2),S=C[0],A=C[1],L=i.a.useState(!1),w=Object(r.a)(L,2),P=w[0],E=w[1],U=i.a.useState(!1),T=Object(r.a)(U,2),I=T[0],R=T[1],D="popup__input ".concat(S?"popup__input_type_error":""),M="popup__input ".concat(P?"popup__input_type_error":""),B="popup__error ".concat(S?"popup__error_visible":""),z="popup__error ".concat(P?"popup__error_visible":"");function V(e){var t=e.target;switch(t.name){case"placeName":t.validity.valid?(A(!1),O("")):(A(!0),O(t.validationMessage));break;case"placeLink":t.validity.valid?(E(!1),N("")):(E(!0),N(t.validationMessage))}}return i.a.useEffect((function(){u(""),_("")}),[t]),i.a.useEffect((function(){A(!1),E(!1),R(!1),O(""),N("")}),[t]),i.a.useEffect((function(){R(!(S||P||!l||!j))}),[S,P,l,j]),Object(d.jsxs)(x,{name:"add",title:"New place",isOpen:t,isLoading:n,isSubmitValid:I,onClose:a,onSubmit:function(e){e.preventDefault(),c({name:l,link:j})},submitText:"Post",children:[Object(d.jsx)("input",{className:D,type:"text",name:"placeName",id:"placeName",placeholder:"Name",minLength:"2",maxLength:"30",required:!0,value:l,onChange:function(e){u(e.target.value),V(e)}}),Object(d.jsx)("span",{className:B,id:"placeName-error",children:S&&f}),Object(d.jsx)("input",{className:M,type:"url",name:"placeLink",id:"placeLink",placeholder:"Image link",minLength:"2",required:!0,value:j,onChange:function(e){_(e.target.value),V(e)}}),Object(d.jsx)("span",{className:z,id:"placeLink-error",children:P&&k})]})}function C(e){var t=e.isOpen,n=e.isLoading,a=e.onClose,i=e.onCardDelete,c=e.card;return Object(d.jsx)(x,{name:"remove",title:"Are you sure?",isOpen:t,isLoading:n,onClose:a,onSubmit:function(e){e.preventDefault(),i(c)},submitText:"Yep",isSubmitValid:!0})}var S=n.p+"static/media/fail-icon.d4ce2a26.svg",A=n.p+"static/media/success-icon.a9eb6caf.svg";var L=function(e){var t=Object(u.g)();return Object(d.jsxs)("div",{className:"popup popup_type_info ".concat(e.isOpen?"popup_opened":""),children:[Object(d.jsx)("div",{className:"popup__overlay",onClick:e.onClose}),Object(d.jsxs)("div",{className:"popup__container popup__container_type_info",children:[Object(d.jsx)("img",{className:"popup__result",src:e.result?A:S,alt:"loginResult"}),Object(d.jsx)("h2",{className:"popup__title popup__title_type_info",children:e.result?function(){switch(t.pathname){case"/":return"You have successfully logged into your account!";case"/sign-in":return"You have successfully registered an account!";default:return"Success!"}}():"Something went wrong! Try again."}),Object(d.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose})]})]})};var w=Object(u.h)((function(e){var t=i.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=i.a.useState(""),s=Object(r.a)(o,2),u=s[0],p=s[1];return Object(d.jsx)("div",{className:"auth",children:Object(d.jsxs)("div",{className:"auth__container",children:[Object(d.jsx)("h2",{className:"auth__title",children:"Registration"}),Object(d.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onRegister({email:a,password:u}),c(""),p("")},children:[Object(d.jsx)("input",{className:"auth__input",type:"text",id:"registerEmail",placeholder:"Email",value:a,onChange:function(e){c(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"auth__input",type:"text",id:"registerPassword",placeholder:"Password",value:u,onChange:function(e){p(e.target.value)},required:!0}),Object(d.jsx)("button",{className:"auth__submit-button",children:"Register"})]}),Object(d.jsx)(l.b,{to:"/sign-in",className:"auth__login-link",children:"Already registered? Sign in"})]})})}));var P=Object(u.h)((function(e){var t=i.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=i.a.useState(""),s=Object(r.a)(o,2),l=s[0],u=s[1];return Object(d.jsx)("div",{className:"auth",children:Object(d.jsxs)("div",{className:"auth__container",children:[Object(d.jsx)("h2",{className:"auth__title",children:"Sign in"}),Object(d.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onLogin({login:a,password:l}),c(""),u("")},children:[Object(d.jsx)("input",{className:"auth__input",type:"text",id:"loginLogin",placeholder:"Login",value:a,onChange:function(e){c(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"auth__input",type:"text",id:"loginPassword",placeholder:"Password",value:l,onChange:function(e){u(e.target.value)},required:!0}),Object(d.jsx)("button",{className:"auth__submit-button",children:"Let's go"})]})]})})})),E=n(23),U=n(21),T=["component"],I=function(e){var t=e.component,n=Object(U.a)(e,T);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(E.a)({},n)):Object(d.jsx)(u.a,{to:"./sign-in"})}})},R=new(function(){function e(t){var n=t.baseUrl;Object(O.a)(this,e),this._baseUrl=n}return Object(g.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}},{key:"register",value:function(e){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,email:e.email})}).then(this._checkResponse)}},{key:"login",value:function(e){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,email:e.login})}).then(this._checkResponse)}},{key:"getEmail",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._checkResponse)}}]),e}())({baseUrl:"https://auth.nomoreparties.co"});var D=Object(u.h)((function(e){var t=i.a.useState({}),n=Object(r.a)(t,2),a=n[0],c=n[1],o=i.a.useState(!1),l=Object(r.a)(o,2),p=l[0],b=l[1],O=i.a.useState(!1),g=Object(r.a)(O,2),x=g[0],S=g[1],A=i.a.useState(!1),E=Object(r.a)(A,2),U=E[0],T=E[1],D=i.a.useState(!1),M=Object(r.a)(D,2),B=M[0],z=M[1],V=i.a.useState(!1),q=Object(r.a)(V,2),Y=q[0],F=q[1],J=i.a.useState(!1),Q=Object(r.a)(J,2),X=Q[0],G=Q[1],H=i.a.useState(!1),K=Object(r.a)(H,2),W=K[0],Z=K[1],$=i.a.useState([]),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=i.a.useState(null),ie=Object(r.a)(ae,2),ce=ie[0],oe=ie[1],se=i.a.useState(!1),re=Object(r.a)(se,2),le=re[0],ue=re[1],pe=i.a.useState(!1),de=Object(r.a)(pe,2),he=de[0],je=de[1],_e=i.a.useState(""),be=Object(r.a)(_e,2),me=be[0],fe=be[1],Oe=B||U||p||Y||x||X;function ge(){b(!1),S(!1),T(!1),z(!1),F(!1),G(!1),oe(null)}function ve(t){R.getEmail(t).then((function(n){localStorage.setItem("token",t),ue(!0),je(!0),G(!0),fe(n.data.email),e.history.push("/")})).catch((function(e){return xe(e)}))}function xe(e){je(!1),G(!0),console.log(e)}return i.a.useEffect((function(){localStorage.getItem("token")&&ve(localStorage.getItem("token")),v.getProfileInfo().then((function(e){c(e)})).catch((function(e){return console.log(e)})),v.getInitialCards().then((function(e){ne(e)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsx)(_.Provider,{value:a,children:Object(d.jsx)("div",{className:"page",tabIndex:"0",onKeyDown:Oe?function(e){27===e.keyCode&&ge()}:null,children:Object(d.jsxs)("div",{className:"page__content",children:[Object(d.jsx)(u.b,{path:"/",children:Object(d.jsx)(h,{onLogout:function(){ue(!1),localStorage.removeItem("token")},email:me})}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(w,{onRegister:function(t){var n=t.email,a=t.password;R.register({email:n,password:a}).then((function(){je(!0),G(!0),e.history.push("/sign-in")})).catch((function(e){return xe(e)}))}})}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(P,{onLogin:function(e){var t=e.login,n=e.password;R.login({login:t,password:n}).then((function(e){e.token&&ve(e.token)})).catch((function(e){return xe(e)}))}})}),Object(d.jsx)(I,{exact:!0,path:"/",component:m,onEditProfile:function(){b(!0)},onAddPlace:function(){S(!0)},onEditAvatar:function(){T(!0)},onCardClick:function(e){F(!0),oe(e)},cards:te,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));v.changeLikeCardStatus(e._id,t).then((function(t){ne((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){z(!0),oe(e)},loggedIn:le})]}),Object(d.jsx)(u.b,{exact:!0,path:"/",children:Object(d.jsx)(j,{})}),Object(d.jsx)(L,{isOpen:X,onClose:ge,result:he}),Object(d.jsx)(k,{isOpen:p,isLoading:W,onClose:ge,onUpdateUser:function(e){Z(!0),v.setProfileInfo(e).then((function(e){c(e),ge()})).catch((function(e){return console.log(e)})).finally((function(){Z(!1)}))}}),Object(d.jsx)(y,{isOpen:x,isLoading:W,onClose:ge,onAddPlace:function(e){Z(!0),v.addPlace({name:e.name,link:e.link}).then((function(e){ne([e].concat(Object(s.a)(te))),ge()})).catch((function(e){return console.log(e)})).finally((function(){Z(!1)}))}}),Object(d.jsx)(f,{isOpen:Y,card:ce,onClose:ge}),Object(d.jsx)(N,{isOpen:U,isLoading:W,onClose:ge,onUpdateAvatar:function(e){var t=e.avatar;Z(!0),v.changeAvatar(t).then((function(e){c(e),ge()})).catch((function(e){console.log(e)})).finally((function(){Z(!1)}))}}),Object(d.jsx)(C,{card:ce,onClose:ge,isOpen:B,isLoading:W,onCardDelete:function(e){Z(!0),v.removeCard(e._id).then((function(){ne((function(t){return t.filter((function(t){return t._id!==e._id}))})),ge()})).catch((function(e){return console.log(e)})).finally((function(){return Z(!1)}))}})]})})})})),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(l.a,{basename:"/react-mesto-auth",children:Object(d.jsx)(D,{})})}),document.getElementById("root")),M()}},[[38,1,2]]]);
//# sourceMappingURL=main.1e199250.chunk.js.map