(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6ICo":function(e,t,n){},"7YE6":function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n("qKvR"),s=n("wx14"),i=(n("q1tI"),n("/RSD"));n("rMck"),n("6ICo");var o=function(e,t){return{position:"relative",width:8,height:8,boxSizing:"border-box",margin:"0 3px 3px 0",border:"1px solid var(--cl-black)",borderColor:t,backgroundColor:e,"&:hover":{border:"2px solid var(--cl-black)"},"&:hover .tooltip-text":{display:"block",zIndex:10}}},a={display:"none",position:"absolute",top:"5px",left:"-2px",width:350,padding:0,lineHeight:"1.8rem",border:"none",borderRadius:"0 5px 5px 5px",backgroundColor:"transparent"},c=function(e,t,n){return Array(Math.ceil(e.length/t)).fill().map((function(e,n){return n*t})).map((function(n){return e.slice(n,n+t)})).map(n)},l={name:"1ny7vd6",styles:"padding:1rem 1rem;margin:0;align-items:center;border:2px solid var(--cl-black);.card-info{.card-name{font-size:1.8rem;font-weight:bold;font-family:var(--ff-text);}.card-description{font-size:1.6rem;font-family:var(--ff-text);}}.profile-picture{height:5rem;flex-basis:5rem;}"};t.a=function(e){var t=e.data,n=e.colors,d=e.borderColors,p=e.style,b=e.css;return Object(r.d)("div",{className:"waffle",css:Object(r.c)(Object.assign({justifyContent:"center"},b),""),style:p},t.map((function(e,p){return function(e,t,n,d){var p=c(e,100,(function(d,p){return Object(r.d)("div",{key:p,className:"hundred",style:{margin:e[0].node.is_senator?"0 10px 0 0":"0 27px 0 0"}},c(d,25,(function(e,c){return Object(r.d)("div",{key:c,className:"quarter"},e.map((function(e){var c=e.node;return Object(r.d)("div",{key:c.id,css:o(t,n)},Object(r.d)("div",{className:"tooltip-text",css:a},Object(r.d)(i.a,Object(s.a)({},c,{css:l}))))})))})))}));return d&&p.push(Object(r.d)("div",{key:"line",className:"line"})),p}(e,n[p],d[p],p<t.length-1)})))}},B36s:function(e,t,n){"use strict";var r=n("qKvR"),s=n("dI71"),i=n("q1tI"),o=n("Wbzz"),a=n("InJ6");var c={name:"79elbk",styles:"position:relative;"},l={name:"1b7xw85",styles:"color:var(--cl-black);"},d={name:"wtkmdy",styles:"display:flex;padding:0;border:none;background:none;width:100%;padding-top:20rem;background:transparent linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5) );border-radius:10px;position:absolute;bottom:-2rem;pointer-events:none;&:focus{outline:none;}"},p={name:"dywitz",styles:"font-family:var(--ff-title);font-size:2.4rem;line-height:3rem;cursor:pointer;border:0.2rem solid black;border-radius:5px;padding:1rem 6rem;display:block;margin:2rem auto;background-color:white;pointer-events:auto;"},b={name:"1r28g78",styles:"font-size:2rem;margin:6rem 0;text-align:center;"},m=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).state={voter:t.props.voter,hidden:!0,check:t.props.check},t}return Object(s.a)(t,e),t.prototype.render=function(){var e,t=this;return Object(r.d)("div",{css:Object(r.c)((e={width:"100%",minHeight:this.props.check?"unset":"500",borderRadius:10,overflow:"hidden"},e[Object(a.a)(767)]={width:"calc(50% - 2rem)",":nth-child(odd)":{marginRight:"2rem"}},e),"")},Object(r.d)("h2",{style:{fontSize:this.props.check?"3.2rem":"2.5rem",marginTop:this.props.check?"2.6rem":"0",padding:this.props.check?"1rem 0 2rem 0":"1rem 3rem"}},this.props.choice+" ("+this.state.voter.length+")"),this.state.voter.length>0?Object(r.d)("ul",{css:c,style:{minHeight:this.props.check?"285px":"518px",marginBottom:this.props.check?"1rem":"10rem",marginLeft:this.props.check?"0":"1.44rem"}},this.state.voter.sort((function(e,t){return e.name.localeCompare(t.name,"th")})).map((function(e,n){return Object(r.d)("li",{key:e.fields.slug,css:Object(r.c)("display:",t.state.hidden&&n>7?"none":"block",";"),style:{fontSize:t.props.check?"1.8rem":"2rem",margin:t.props.check?"0.5rem 2rem":"2rem 2rem"}},Object(r.d)(o.Link,{to:e.fields.slug,css:l,style:{fontWeight:t.props.check?"normal":"bold"}},Object(r.d)("span",null,n+1,". "),e.title," ",e.name," ",e.lastname),!t.props.check&&Object(r.d)("p",null,e.is_senator?"สมาชิกวุฒิสภา":e.party))})),this.state.hidden&&this.props.voter.length>8?Object(r.d)("button",{css:d},Object(r.d)("span",{onClick:function(){return t.setState({hidden:!t.state.hidden})},css:p},"ดูทั้งหมด")):""):Object(r.d)("div",{css:b},"ไม่มีคะแนนเลือกมติประเภทนี้"))},t}(i.Component),u={name:"2imjyh",styles:"display:flex;flex-wrap:wrap;"};t.a=function(e){var t=e.data,n=e.page;return Object(r.d)("div",{css:u},Object(r.d)(m,{voter:t[0],check:n,choice:"เห็นด้วย"}),Object(r.d)(m,{voter:t[1],check:n,choice:"ไม่เห็นด้วย"}),Object(r.d)(m,{voter:t[2],check:n,choice:"งดออกเสียง"}),Object(r.d)(m,{voter:t[3],check:n,choice:5===t.length?"ไม่ลงมติ":"ไม่ลงคะแนน"}),5===t.length&&Object(r.d)(m,{voter:t[4],check:n,choice:"ขาด"}))}},iiOs:function(e,t,n){"use strict";var r,s=n("q1tI"),i=n.n(s),o=n("qKvR"),a=n("InJ6"),c=function(e){var t,n=e.missing,r=e.type;return(t={display:n?"flex":"unset",flexWrap:n?"wrap":"unset",justifyContent:n?"center":"unset",marginRight:"0"})[Object(a.a)(767)]={justifyContent:n?"group"===r||"popup"!==r?"flex-start":"center":"unset",transform:n&&"popup"!==r?"translateY(1.5px)":"none",marginRight:n?"2rem":"0"},t},l=function(e){var t,n=e.missing,r=e.type;return(t={width:n&&"popup"!==r&&"group"===r?3:10,height:10,backgroundColor:"var(--cl-white)",border:"1px solid var(--cl-black)",boxSizing:"border-box",display:"inline-block"})[Object(a.a)(767)]={width:n&&"popup"!==r?"group"===r?3:15:8,height:n&&"popup"!==r?"group"===r?10:15:8},t},d=function(e){var t,n=e.missing,r=e.type;return(t={marginRight:n?"0.7rem":"1rem",display:n?"flex":"unset",alignItems:n?"center":"none",fontSize:n?"1rem":"unset",marginTop:"0.6rem"})[Object(a.a)(767)]={fontSize:n?"group"===r?"1rem":"1.4rem":"unset",marginTop:"0"},t},p=function(e){var t,n=e.missing,r=e.type;return(t={fontSize:n?"1rem":"unset",marginRight:n?"1rem":"unset",display:n?"popup"===r?"none":"unset":"none",marginTop:"0.6rem"})[Object(a.a)(767)]={fontSize:n?"1rem":"unset",display:"none",flex:"none",marginTop:"0"},t},b=((r={margin:"0 0.5rem"})[Object(a.a)(767)]={margin:"0 1rem"},r);t.a=function(e){var t=e.approve,n=e.disprove,r=e.abstained,s=e.absent,a=e.missing,m=e.type;return Object(o.d)("div",{css:c({missing:a,type:m})},Object(o.d)("div",{css:p({missing:a,type:m})},"โดยเฉลี่ย"),Object(o.d)("span",{css:d({missing:a,type:m})},Object(o.d)("div",{css:l({missing:a,type:m}),style:{backgroundColor:"var(--cl-vote-yes)",border:"1px solid var(--cl-vote-yes)"}})," ",null!=a?"group"===m?Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{style:{margin:"0 0.3rem"}})," ",t,"%"):"popup"===m?Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{style:{margin:"0 1rem"}},"เห็นด้วย")," ",t):Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{css:b},"เห็นด้วย")," ",t,"%"):"เห็นด้วย "+t),Object(o.d)("span",{css:d({missing:a,type:m})},Object(o.d)("div",{css:l({missing:a,type:m}),style:{backgroundColor:"var(--cl-vote-no)",border:"1px solid var(--cl-vote-no)"}})," ",null!=a?"group"===m?Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{style:{margin:"0 0.3rem"}})," ",n,"%"):"popup"===m?Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{style:{margin:"0 1rem"}},"ไม่เห็นด้วย")," ",n):Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{css:b},"ไม่เห็นด้วย")," ",n,"%"):"ไม่เห็นด้วย "+n),Object(o.d)("span",{css:d({missing:a,type:m})},Object(o.d)("div",{css:l({missing:a,type:m}),style:{backgroundColor:a?"var(--cl-senate-vote-abstained)":"var(--cl-vote-abstained)",border:a?"1px solid var(--cl-senate-vote-abstained)":"1px solid var(--cl-vote-abstained)"}})," ",null!=a?"group"===m?Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{style:{margin:"0 0.3rem"}})," ",r,"%"):"popup"===m?Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{style:{margin:"0 1rem"}},"งดออกเสียง")," ",r):Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{css:b},"งดออกเสียง")," ",r,"%"):"งดออกเสียง "+r),Object(o.d)("span",{css:d({missing:a,type:m})},Object(o.d)("div",{css:l({missing:a,type:m}),style:{backgroundColor:a?"var(--cl-senate-vote-absent)":"var(--cl-missing)",border:a?"1px solid var(--cl-senate-vote-absent)":"1px solid var(--cl-black)"}})," ",null!=a?"group"===m?Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{style:{margin:"0 0.3rem"}})," ",s,"%"):"popup"===m?Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{style:{margin:"0 1rem"}},"ไม่ลงมติ")," ",s):Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{css:b},"ไม่ลงมติ")," ",s,"%"):"ไม่ลงคะแนน "+s),null!=a&&Object(o.d)("span",{css:d({missing:a,type:m})},Object(o.d)("div",{css:l({missing:a,type:m}),style:{backgroundColor:"var(--cl-senate-vote-missing)",border:"1px solid var(--cl-senate-vote-missing)"}})," ","group"===m?Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{style:{margin:"0 0.3rem"}})," ",a,"%"):"popup"===m?Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{style:{margin:"0 1rem"}},"ขาด")," ",a):Object(o.d)(i.a.Fragment,null,Object(o.d)("b",{css:b},"ขาด")," ",a,"%")))}}}]);
//# sourceMappingURL=component---src-templates-votelog-template-js-a6773b8f599ecb707962.js.map