(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(18),o=n.n(i),s=(n(27),n(20)),r=n(2),l=n(4),u=n(3),p=n.p+"static/media/close-icon.2ceb783a.svg",d=n(0);var h=function(e){var t=Object(u.g)(),n=c.a.useState(!1),a=Object(r.a)(n,2),i=a[0],o=a[1],s=c.a.useState(!1),h=Object(r.a)(s,2),j=h[0],_=h[1];function b(){o(!i)}function m(){window.innerWidth<500?_(!0):(_(!1),o(!1))}function f(){o(!1),e.onLogout()}return c.a.useEffect((function(){window.addEventListener("resize",m),m()}),[]),Object(d.jsxs)("header",{className:"header",children:[Object(d.jsxs)("div",{className:"header__menu ".concat(i?"header__menu_opened":""),children:[Object(d.jsx)("p",{className:"header__login",children:e.email}),Object(d.jsx)(l.b,{to:"/sign-in",className:"header__link header__link_logged-in",onClick:f,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(d.jsxs)("div",{className:"header__container",children:[Object(d.jsx)("a",{href:"/",className:"logo",rel:"noreferrer",target:"_blank",children:" "}),function(){switch(t.pathname){case"/sign-in":return Object(d.jsx)(l.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"});case"/sign-up":return Object(d.jsx)(l.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"});case"/":return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"header__login ".concat(j?"header__login_hidden":""),children:e.email}),Object(d.jsx)(l.b,{to:"/sign-in",className:"header__link header__link_logged-in ".concat(j?"header__link_hidden":""),onClick:f,children:"\u0412\u044b\u0439\u0442\u0438"}),Object(d.jsx)("button",{className:"header__menu-button",onClick:b,children:Object(d.jsx)("img",{src:i?p:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAVCAYAAABc6S4mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAqSURBVHgB7dMxEQAACMPAFv+eAQcMXLe8gUxxLwWVwuIB4M+MBuQx2mkAhA8MBFFMCNUAAAAASUVORK5CYII=",alt:"\u041c\u0435\u043d\u044e"})})]});default:return Object(d.jsx)(l.b,{to:"/",className:"header__link",children:"\u0421\u0441\u044b\u043b\u043a\u0430"})}}()]})]})};function j(){var e=(new Date).getFullYear();return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("div",{className:"footer__container",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",e,". \u041c\u0430\u043a\u0441\u0438\u043c \u0413\u0440\u0438\u0432\u0435\u043d\u043d\u044b\u0439"]})})})}var _=c.a.createContext();function b(e){var t=e.card,n=e.onClick,a=e.onCardLike,i=e.onCardDelete,o=c.a.useContext(_),s=t.owner._id===o._id,r=t.likes.some((function(e){return e._id===o._id})),l="card__like-button ".concat(r?"card__like-button_active":"card__like-button_disabled");return Object(d.jsxs)("article",{className:"card",children:[Object(d.jsx)("div",{className:"card__image-container",children:Object(d.jsx)("img",{src:t.link,alt:t.name,className:"card__image",onClick:function(){n(t)}})}),s?Object(d.jsx)("button",{className:"card__delete-button",onClick:function(){i(t)}}):null,Object(d.jsxs)("div",{className:"card__info",children:[Object(d.jsx)("h2",{className:"card__title",children:t.name}),Object(d.jsxs)("div",{className:"card__like",children:[Object(d.jsx)("button",{className:l,type:"button",onClick:function(){a(t)}}),Object(d.jsx)("p",{className:"card__likes-count",children:t.likes.length})]})]})]})}function m(e){var t=e.cards,n=c.a.useContext(_);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsx)("div",{className:"profile",children:Object(d.jsxs)("div",{className:"profile__container",children:[Object(d.jsx)("div",{className:"profile__avatar",onClick:e.onEditAvatar,children:Object(d.jsx)("img",{src:n.avatar,className:"profile__avatar-image",alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__name",children:n.name}),Object(d.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile}),Object(d.jsx)("p",{className:"profile__description",children:n.about})]}),Object(d.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]})}),Object(d.jsx)("div",{className:"cards",children:Object(d.jsx)("div",{className:"cards__container",children:t.map((function(t){return Object(d.jsx)(b,{card:t,onClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})}function f(e){var t=e.card,n=e.isOpen,a=e.onClose;return Object(d.jsxs)("div",{className:"popup popup_type_image ".concat(n?"popup_opened":""),children:[Object(d.jsx)("div",{className:"popup__overlay popup__overlay_type_image",onClick:a}),Object(d.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(d.jsx)("img",{src:null===t||void 0===t?void 0:t.link,alt:null===t||void 0===t?void 0:t.name,className:"popup__image"}),Object(d.jsx)("h2",{className:"popup__title popup__title_type_image",children:t?t.name:""}),Object(d.jsx)("button",{className:"popup__close-button",type:"button",onClick:a})]})]})}var O=n(10),g=n(11),v=new(function(){function e(t){var n=t.baseUrl,a=t.authorization;Object(O.a)(this,e),this._baseUrl=n,this._token=a}return Object(g.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"setProfileInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"addPlace",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-22",authorization:"6e0d021d-4f3f-452d-8c82-5a27e9592d29"});function x(e){var t=e.isOpen,n=e.isLoading,a=e.name,c=e.title,i=e.onSubmit,o=e.submitText,s=e.onClose,r=e.children,l=e.isSubmitValid,u="popup__submit-button ".concat(l?"":"popup__submit-button_disabled");return Object(d.jsxs)("div",{className:"popup popup_type_".concat(a," ").concat(t?"popup_opened":""),children:[Object(d.jsx)("div",{className:"popup__overlay popup__overlay_type_remove",onClick:s}),Object(d.jsxs)("div",{className:"popup__container popup__container_type_remove",children:[Object(d.jsx)("h2",{className:"popup__title",children:c}),Object(d.jsxs)("form",{className:"popup__form",name:a,onSubmit:i,noValidate:!0,children:[r,Object(d.jsx)("button",{className:u,type:"submit",disabled:!l,children:n?"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...":o})]}),Object(d.jsx)("button",{className:"popup__close-button",type:"button",onClick:s})]})]})}function k(e){var t=e.isOpen,n=e.isLoading,a=e.onClose,i=e.onUpdateUser,o=c.a.useContext(_),s=c.a.useState(""),l=Object(r.a)(s,2),u=l[0],p=l[1],h=c.a.useState(""),j=Object(r.a)(h,2),b=j[0],m=j[1],f=c.a.useState(""),O=Object(r.a)(f,2),g=O[0],v=O[1],k=c.a.useState(""),N=Object(r.a)(k,2),C=N[0],y=N[1],S=c.a.useState(!1),A=Object(r.a)(S,2),L=A[0],w=A[1],U=c.a.useState(!1),P=Object(r.a)(U,2),E=P[0],T=P[1],I=c.a.useState(!1),R=Object(r.a)(I,2),D=R[0],M=R[1],B="popup__input ".concat(L?"popup__input_type_error":""),z="popup__input ".concat(E?"popup__input_type_error":""),V="popup__error ".concat(L?"popup__error_visible":""),q="popup__error ".concat(E?"popup__error_visible":"");function F(e){var t=e.target;switch(t.name){case"profileName":t.validity.valid?(w(!1),v(""),M(!0)):(w(!0),v(t.validationMessage),M(!1));break;case"profilePosition":t.validity.valid?(T(!1),y(""),M(!0)):(T(!0),y(t.validationMessage),M(!1))}}return c.a.useEffect((function(){p(o.name),m(o.about)}),[t,o]),c.a.useEffect((function(){w(!1),T(!1),M(!0),v(""),y("")}),[t]),Object(d.jsxs)(x,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,isLoading:n,isSubmitValid:D,onClose:a,onSubmit:function(e){e.preventDefault(),i({name:u,about:b})},children:[Object(d.jsx)("input",{className:B,type:"text",name:"profileName",id:"profileName",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:"".concat(u),onChange:function(e){p(e.target.value),F(e)}}),Object(d.jsx)("span",{className:V,children:L&&g}),Object(d.jsx)("input",{className:z,type:"text",name:"profilePosition",id:"profilePosition",placeholder:"\u0412\u0430\u0448\u0430 \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",minLength:"2",maxLength:"200",required:!0,value:"".concat(b),onChange:function(e){m(e.target.value),F(e)}}),Object(d.jsx)("span",{className:q,children:E&&C})]})}function N(e){var t=e.isOpen,n=e.isLoading,a=e.onClose,i=e.onUpdateAvatar,o=c.a.useState(""),s=Object(r.a)(o,2),l=s[0],u=s[1],p=c.a.useState(""),h=Object(r.a)(p,2),j=h[0],_=h[1],b=c.a.useState(!1),m=Object(r.a)(b,2),f=m[0],O=m[1],g=c.a.useState(!1),v=Object(r.a)(g,2),k=v[0],N=v[1],C="popup__input ".concat(f?"popup__input_type_error":""),y="popup__error ".concat(f?"popup__error_visible":"");return c.a.useEffect((function(){O(!1),N(!1),_(""),u("")}),[t]),Object(d.jsxs)(x,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,isLoading:n,isSubmitValid:k,onClose:a,onSubmit:function(e){e.preventDefault(),i({avatar:l})},submitText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:[Object(d.jsx)("input",{className:C,type:"url",name:"avatarLink",id:"avatarLink",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",minLength:"2",required:!0,onChange:function(e){u(e.target.value),function(e){var t=e.target;t.validity.valid?(O(!1),_(""),N(!0)):(O(!0),_(t.validationMessage),N(!1))}(e)},value:l}),Object(d.jsx)("span",{className:y,id:"avatarLink-error",children:f?j:""})]})}function C(e){var t=e.isOpen,n=e.isLoading,a=e.onClose,i=e.onAddPlace,o=c.a.useState(""),s=Object(r.a)(o,2),l=s[0],u=s[1],p=c.a.useState(""),h=Object(r.a)(p,2),j=h[0],_=h[1],b=c.a.useState(""),m=Object(r.a)(b,2),f=m[0],O=m[1],g=c.a.useState(""),v=Object(r.a)(g,2),k=v[0],N=v[1],C=c.a.useState(!1),y=Object(r.a)(C,2),S=y[0],A=y[1],L=c.a.useState(!1),w=Object(r.a)(L,2),U=w[0],P=w[1],E=c.a.useState(!1),T=Object(r.a)(E,2),I=T[0],R=T[1],D="popup__input ".concat(S?"popup__input_type_error":""),M="popup__input ".concat(U?"popup__input_type_error":""),B="popup__error ".concat(S?"popup__error_visible":""),z="popup__error ".concat(U?"popup__error_visible":"");function V(e){var t=e.target;switch(t.name){case"placeName":t.validity.valid?(A(!1),O("")):(A(!0),O(t.validationMessage));break;case"placeLink":t.validity.valid?(P(!1),N("")):(P(!0),N(t.validationMessage))}}return c.a.useEffect((function(){u(""),_("")}),[t]),c.a.useEffect((function(){A(!1),P(!1),R(!1),O(""),N("")}),[t]),c.a.useEffect((function(){R(!(S||U||!l||!j))}),[S,U,l,j]),Object(d.jsxs)(x,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,isLoading:n,isSubmitValid:I,onClose:a,onSubmit:function(e){e.preventDefault(),i({name:l,link:j})},submitText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(d.jsx)("input",{className:D,type:"text",name:"placeName",id:"placeName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,value:l,onChange:function(e){u(e.target.value),V(e)}}),Object(d.jsx)("span",{className:B,id:"placeName-error",children:S&&f}),Object(d.jsx)("input",{className:M,type:"url",name:"placeLink",id:"placeLink",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",minLength:"2",required:!0,value:j,onChange:function(e){_(e.target.value),V(e)}}),Object(d.jsx)("span",{className:z,id:"placeLink-error",children:U&&k})]})}function y(e){var t=e.isOpen,n=e.isLoading,a=e.onClose,c=e.onCardDelete,i=e.card;return Object(d.jsx)(x,{name:"remove",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:t,isLoading:n,onClose:a,onSubmit:function(e){e.preventDefault(),c(i)},submitText:"\u0414\u0430",isSubmitValid:!0})}var S=n.p+"static/media/fail-icon.df8eddf6.svg",A=n.p+"static/media/success-icon.1b6082f8.svg";var L=function(e){var t=Object(u.g)();return Object(d.jsxs)("div",{className:"popup popup_type_info ".concat(e.isOpen?"popup_opened":""),children:[Object(d.jsx)("div",{className:"popup__overlay",onClick:e.onClose}),Object(d.jsxs)("div",{className:"popup__container popup__container_type_info",children:[Object(d.jsx)("img",{className:"popup__result",src:e.result?A:S,alt:"loginResult"}),Object(d.jsx)("h2",{className:"popup__title popup__title_type_info",children:e.result?function(){switch(t.pathname){case"/":return"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438!";case"/sign-in":return"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!";default:return"\u0423\u0441\u043f\u0435\u0445!"}}():"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(d.jsx)("button",{className:"popup__close-button",type:"button",onClick:e.onClose})]})]})};var w=Object(u.h)((function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],i=n[1],o=c.a.useState(""),s=Object(r.a)(o,2),u=s[0],p=s[1];return Object(d.jsx)("div",{className:"auth",children:Object(d.jsxs)("div",{className:"auth__container",children:[Object(d.jsx)("h2",{className:"auth__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onRegister({email:a,password:u}),i(""),p("")},children:[Object(d.jsx)("input",{className:"auth__input",type:"text",id:"registerLogin",placeholder:"\u041b\u043e\u0433\u0438\u043d",value:a,onChange:function(e){i(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"auth__input",type:"text",id:"registerPassword",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:u,onChange:function(e){p(e.target.value)},required:!0}),Object(d.jsx)("button",{className:"auth__submit-button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsx)(l.b,{to:"/sign-in",className:"auth__login-link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})})}));var U=Object(u.h)((function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],i=n[1],o=c.a.useState(""),s=Object(r.a)(o,2),l=s[0],u=s[1];return Object(d.jsx)("div",{className:"auth",children:Object(d.jsxs)("div",{className:"auth__container",children:[Object(d.jsx)("h2",{className:"auth__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"auth__form",onSubmit:function(t){t.preventDefault(),e.onLogin({login:a,password:l}),i(""),u("")},children:[Object(d.jsx)("input",{className:"auth__input",type:"text",id:"loginLogin",placeholder:"\u041b\u043e\u0433\u0438\u043d",value:a,onChange:function(e){i(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"auth__input",type:"text",id:"loginPassword",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:l,onChange:function(e){u(e.target.value)},required:!0}),Object(d.jsx)("button",{className:"auth__submit-button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})})),P=n(21),E=n(22),T=function(e){var t=e.component,n=Object(E.a)(e,["component"]);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(P.a)({},n)):Object(d.jsx)(u.a,{to:"./sign-in"})}})},I=new(function(){function e(t){var n=t.baseUrl;Object(O.a)(this,e),this._baseUrl=n}return Object(g.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"register",value:function(e){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,email:e.email})}).then(this._checkResponse)}},{key:"login",value:function(e){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e.password,email:e.login})}).then(this._checkResponse)}},{key:"getEmail",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(this._checkResponse)}}]),e}())({baseUrl:"https://auth.nomoreparties.co"});var R=Object(u.h)((function(e){var t=c.a.useState({}),n=Object(r.a)(t,2),a=n[0],i=n[1],o=c.a.useState(!1),l=Object(r.a)(o,2),p=l[0],b=l[1],O=c.a.useState(!1),g=Object(r.a)(O,2),x=g[0],S=g[1],A=c.a.useState(!1),P=Object(r.a)(A,2),E=P[0],R=P[1],D=c.a.useState(!1),M=Object(r.a)(D,2),B=M[0],z=M[1],V=c.a.useState(!1),q=Object(r.a)(V,2),F=q[0],J=q[1],Q=c.a.useState(!1),Y=Object(r.a)(Q,2),X=Y[0],H=Y[1],K=c.a.useState(!1),W=Object(r.a)(K,2),G=W[0],Z=W[1],$=c.a.useState([]),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(null),ce=Object(r.a)(ae,2),ie=ce[0],oe=ce[1],se=c.a.useState(!1),re=Object(r.a)(se,2),le=re[0],ue=re[1],pe=c.a.useState(!1),de=Object(r.a)(pe,2),he=de[0],je=de[1],_e=c.a.useState(""),be=Object(r.a)(_e,2),me=be[0],fe=be[1],Oe=B||E||p||F||x||X;function ge(){b(!1),S(!1),R(!1),z(!1),J(!1),H(!1),oe(null)}function ve(t){I.getEmail(t).then((function(n){localStorage.setItem("token",t),ue(!0),je(!0),H(!0),fe(n.data.email),e.history.push("/")})).catch((function(e){return xe(e)}))}function xe(e){je(!1),H(!0),console.log(e)}return c.a.useEffect((function(){localStorage.getItem("token")&&ve(localStorage.getItem("token")),v.getProfileInfo().then((function(e){i(e)})).catch((function(e){return console.log(e)})),v.getInitialCards().then((function(e){ne(e)})).catch((function(e){return console.log(e)}))}),[]),Object(d.jsx)(_.Provider,{value:a,children:Object(d.jsx)("div",{className:"page",tabIndex:"0",onKeyDown:Oe?function(e){27===e.keyCode&&ge()}:null,children:Object(d.jsxs)("div",{className:"page__content",children:[Object(d.jsx)(u.b,{path:"/",children:Object(d.jsx)(h,{onLogout:function(){ue(!1),localStorage.removeItem("token")},email:me})}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(w,{onRegister:function(t){var n=t.email,a=t.password;I.register({email:n,password:a}).then((function(){je(!0),H(!0),e.history.push("/sign-in")})).catch((function(e){return xe(e)}))}})}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(U,{onLogin:function(e){var t=e.login,n=e.password;I.login({login:t,password:n}).then((function(e){e.token&&ve(e.token)})).catch((function(e){return xe(e)}))}})}),Object(d.jsx)(T,{exact:!0,path:"/",component:m,onEditProfile:function(){b(!0)},onAddPlace:function(){S(!0)},onEditAvatar:function(){R(!0)},onCardClick:function(e){J(!0),oe(e)},cards:te,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));v.changeLikeCardStatus(e._id,t).then((function(t){ne((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){z(!0),oe(e)},loggedIn:le})]}),Object(d.jsx)(u.b,{exact:!0,path:"/",children:Object(d.jsx)(j,{})}),Object(d.jsx)(L,{isOpen:X,onClose:ge,result:he}),Object(d.jsx)(k,{isOpen:p,isLoading:G,onClose:ge,onUpdateUser:function(e){Z(!0),v.setProfileInfo(e).then((function(e){i(e),ge()})).catch((function(e){return console.log(e)})).finally((function(){Z(!1)}))}}),Object(d.jsx)(C,{isOpen:x,isLoading:G,onClose:ge,onAddPlace:function(e){Z(!0),v.addPlace({name:e.name,link:e.link}).then((function(e){ne([e].concat(Object(s.a)(te))),ge()})).catch((function(e){return console.log(e)})).finally((function(){Z(!1)}))}}),Object(d.jsx)(f,{isOpen:F,card:ie,onClose:ge}),Object(d.jsx)(N,{isOpen:E,isLoading:G,onClose:ge,onUpdateAvatar:function(e){var t=e.avatar;Z(!0),v.changeAvatar(t).then((function(e){i(e),ge()})).catch((function(e){console.log(e)})).finally((function(){Z(!1)}))}}),Object(d.jsx)(y,{card:ie,onClose:ge,isOpen:B,isLoading:G,onCardDelete:function(e){Z(!0),v.removeCard(e._id).then((function(){ne((function(t){return t.filter((function(t){return t._id!==e._id}))})),ge()})).catch((function(e){return console.log(e)})).finally((function(){return Z(!1)}))}})]})})})})),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(l.a,{basename:"/react-mesto-auth",children:Object(d.jsx)(R,{})})}),document.getElementById("root")),D()}},[[34,1,2]]]);
//# sourceMappingURL=main.797577cb.chunk.js.map