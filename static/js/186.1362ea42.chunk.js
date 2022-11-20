"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[186],{9055:function(t,n,e){e.d(n,{r2:function(){return u},xu:function(){return i},yh:function(){return l}});var a,c,r=e(168),o=e(9854),s=e(407),i=(0,o.ZP)("div")(s.$_,s.cp,s.Dh),u=o.ZP.main(a||(a=(0,r.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100vh;\n    align-items: center;\n"]))),l=o.ZP.form(c||(c=(0,r.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 370px;\n    text-align: center;\n\n    & div{\n        margin-bottom: 5px;\n    }\n"])))},3186:function(t,n,e){e.r(n),e.d(n,{default:function(){return F}});var a=e(2791),c=e(9434),r=function(t){return t.contacts.filter},o=function(t){return t.contacts.items},s=function(t){return t.contacts.isAddingContact},i=e(3634),u="contactForm_contactForm__f4X+T",l="contactForm_contactForm__input__4cv2w",m="contactForm_contactForm__btn__mR+PI",d=e(184);function _(){var t=(0,c.I0)(),n=(0,c.v9)(o),e=(0,c.v9)(s);return(0,d.jsxs)("form",{className:u,name:"phoneBook",onSubmit:function(e){e.preventDefault();var a=e.target,c=a.elements,r=c.name,o=c.number;if(n.some((function(t){return t.name.toLowerCase()===r.value.toLowerCase()})))return r.focus(),alert('"'.concat(r.value,'" is already in contacts'));t((0,i.uK)({name:r.value,number:o.value})),a.reset(),r.focus()},children:[(0,d.jsxs)("label",{children:["Name",(0,d.jsx)("input",{autoFocus:"autofocus",className:l,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsxs)("label",{children:["Phone",(0,d.jsx)("input",{className:l,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("button",{className:m,type:"submit",children:e?"Loading...":"Add contact"})]})}var f="contactItem_contactList__item__Ezu8+",h="contactItem_contactList__name__tOpho",x="contactItem_contactList__number__4+egX",p="contactItem_contactList__btn__UftMw";function v(t){var n=t.name,e=t.number,a=t.contactId,r=(0,c.I0)();return(0,d.jsxs)("li",{className:f,children:[(0,d.jsxs)("p",{className:h,children:[n,":"]}),(0,d.jsx)("p",{className:x,children:e}),(0,d.jsx)("button",{className:p,type:"button",onClick:function(){return t=a,r((0,i.GK)(t));var t},children:"Delete"})]})}var b="contactList_contactList__rfM1N";function j(){var t=(0,c.v9)(o),n=(0,c.v9)(r),e=t.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return(0,d.jsx)("ul",{className:b,children:e.map((function(t){var n=t.id,e=t.name,a=t.number;return(0,d.jsx)(v,{name:e,number:a,contactId:n},n)}))})}function g(t){var n=t.message;return(0,d.jsx)("p",{children:n})}var y=e(7840),w="filter_filter__HJEMj";function N(){var t=(0,c.I0)();return(0,d.jsxs)("label",{children:["Find contacts by name",(0,d.jsx)("input",{className:w,type:"text",onChange:function(n){console.log(n.target.value),t((0,y.Tv)(n.target.value))}})]})}var C=e(9055);function F(){var t=(0,c.v9)(o),n=(0,c.I0)();return(0,a.useEffect)((function(){n((0,i.yF)())}),[n]),(0,d.jsxs)(C.xu,{textAlign:"center",children:[(0,d.jsx)("h2",{children:"Add new contact"}),(0,d.jsx)(_,{}),(0,d.jsx)("h2",{children:"Contacts"}),0===t.length?(0,d.jsx)(g,{message:"Phonebook is empty. You can add a new contact."}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(N,{}),(0,d.jsx)(j,{})]})]})}}}]);
//# sourceMappingURL=186.1362ea42.chunk.js.map