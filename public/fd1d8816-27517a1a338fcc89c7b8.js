(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"L+Nk":function(e,t,a){"use strict";a.r(t);var n=a("wx14"),s=a("qKvR"),c=a("zLVn"),i=a("wig9"),r=a.n(i),l=a("q1tI"),o=a("Bl7J"),d=a("vrFN"),b=a("7Qib"),m=a("8C97"),j=a("m0tv"),O=a("rvKY"),p=a("/RSD"),u=a("U+36"),g=a("InJ6");a("HRfi");var f={fontSize:"4rem"},v={paddingTop:"3rem",paddingBottom:"8rem",h2:{fontSize:"4.8rem",textAlign:"center"}},h={fontSize:"2.4rem",textAlign:"left",margin:"1.5rem 0 1.2rem 0"},y={},_={margin:"1rem 0"},k={name:"8atqhb",styles:"width:100%;"},w={name:"10miw0s",styles:"display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;margin-top:6rem;"},x={name:"5hu69k",styles:"font-size:4.8rem;text-align:center;padding-top:6rem;"},C={name:"1pcmrxu",styles:"display:block;list-style:none;text-align:center;> li{display:inline-block;font-size:2.4rem;padding:1rem 0 0;margin:0 1rem;cursor:pointer;&.active{border-bottom:8px solid var(--cl-black);}}"},N={name:"ttzt9k",styles:"display:flex;flex-wrap:wrap;justify-content:space-evenly;"},S={name:"1ps6xn0",styles:"font-family:var(--ff-title);font-size:3.2rem;text-align:center;margin:6rem 0;"};t.default=function(e){var t,a,i=e.data,z=i.senate,Y=Object(c.a)(i,["senate"]),P=Object(l.useState)({}),I=P[0],J=P[1],L=Object(l.useState)(Y.allPeopleYaml.edges.map((function(e){return e.node})))[0],q=function(e){return L.filter((function(t){return!e.senator_method||t.senator_method===e.senator_method})).length},A=[{id:"ทั้งหมด",label:"ทั้งหมด",count:q({}),filter:{},getClass:function(e){return e.senator_method?"":"active"}},{id:"โดยตำแหน่ง",label:"โดยตำแหน่ง",count:q({senator_method:"โดยตำแหน่ง"}),filter:{senator_method:"โดยตำแหน่ง"},getClass:function(e){return"โดยตำแหน่ง"===e.senator_method?"active":""}},{id:"เลือกกันเอง",label:"สรรหา",count:q({senator_method:"เลือกกันเอง"}),filter:{senator_method:"เลือกกันเอง"},getClass:function(e){return"เลือกกันเอง"===e.senator_method?"active":""}},{id:"เลือกโดย คสช.",label:"เลือกโดย คสช.",count:q({senator_method:"เลือกโดย คสช."}),filter:{senator_method:"เลือกโดย คสช."},getClass:function(e){return"เลือกโดย คสช."===e.senator_method?"active":""}}],B=Object(b.g)(Y),K=B.gender,M=B.age,R=B.education,T=B.occupation_group,V=B.asset,F=r()([{name:"speaker",label:"ประธานสภา"},{name:"first_deputy_speaker",label:"รองประธานสภา คนที่ 1"},{name:"second_deputy_speaker",label:"รองประธานสภา คนที่ 2"}].map((function(e,t){if(!z[e.name])return null;var a=z[e.name].split(" ").slice(1),n=Object(b.j)(a.join(" "));return{id:t,name:a[0],lastname:a.slice(1).join(" "),position:e.label,fields:{slug:n}}}))),H=((a=L.filter((function(e){return!I.senator_method||e.senator_method===I.senator_method}))).sort((function(e,t){return e.name===t.name?e.lastname.localeCompare(t.lastname,"th"):e.name.localeCompare(t.name,"th")})),a),D=Object(b.f)(Y.allPeopleYaml,Y.allPeopleVoteYaml,Y.allVotelogYaml).filter((function(e){return e.total_voter>0}));return Object(s.d)(o.a,{pageStyles:{background:"#edf087"}},Object(s.d)(d.a,{title:"สมาชิกวุฒิสภา"}),Object(s.d)("section",{className:"section"},Object(s.d)("div",{className:"book"},Object(s.d)("div",{className:"page leftPage"},Object(s.d)("h1",{css:Object(s.c)(Object.assign({},f,{margin:"1rem 0 0 0"}),"")},z.name," ชุดที่ ",z.party_ordinal),Object(s.d)("h2",{style:Object.assign({},h)},Object(s.d)("span",{dangerouslySetInnerHTML:{__html:Object(b.e)(z.party_ordinal)}})," ","Senate"),Object(s.d)("h2",{style:Object.assign({},h)},"About"),Object(s.d)("p",{css:Object(s.c)(Object.assign({},y),"")},z.description),Object(s.d)("h2",{css:Object(s.c)(Object.assign({},h),"")},"Official Link"),Object(s.d)(j.b,z),Object(s.d)("h2",{css:Object(s.c)(Object.assign({},h),"")},"In Office"),Object(s.d)(j.a,z),Object(s.d)("h2",{style:Object.assign({},h)},"Key Members"),F.map((function(e){return Object(s.d)("div",{className:"peopleCard",key:e.id},Object(s.d)(O.a,Object(n.a)({key:e.id},e)))}))),Object(s.d)("div",{className:"page"},Object(s.d)("h2",{style:Object.assign({},h,(t={},t[Object(g.a)(767)]={marginTop:"11rem",marginBottom:"0rem"},t))},"Members"),Object(s.d)("h2",{style:Object.assign({},h,{fontFamily:"var(--ff-text)",fontWeight:"normal"})},"สมาชิกวุฒิสภาจำนวน ",Y.allPeopleYaml.totalCount," คน"),Object(s.d)("div",{css:k},Object(s.d)("div",{style:Object.assign({},_)},Object(s.d)(m.a,{data:K})),Object(s.d)("div",{style:Object.assign({},_)},Object(s.d)(m.a,{data:M})),Object(s.d)("div",{style:Object.assign({},_)},Object(s.d)(m.a,{data:R})),Object(s.d)("div",{style:Object.assign({},_)},Object(s.d)(m.a,{data:T})),Object(s.d)("div",{style:Object.assign({},_)},Object(s.d)(m.a,{data:V})))))),D.length>0?Object(s.d)("section",{css:Object(s.c)(Object.assign({},v,{background:"var(--cl-white)"}),"")},Object(s.d)("div",{className:"container"},Object(s.d)("h2",{css:Object(s.c)(Object.assign({},f),"")},"การลงมติล่าสุดของวุฒิสภา"),Object(s.d)("div",{css:w},D.map((function(e){return Object(s.d)(u.a,{key:e.id,view:"compact",css:Object(s.c)({width:"calc((var(--container-width) - 4rem) / 2)",margin:"0 1rem 2rem 1rem"},""),title:e.title,description_th:e.description_th,passed:e.passed,approve:e.approve,disprove:e.disprove,abstained:e.abstained,absent:e.absent,total_voter:e.total_voter,vote_date:e.vote_date,slug:e.fields.slug})}))))):null,Object(s.d)("section",{css:Object(s.c)(Object.assign({},v,{background:"#eeeeee"}),"")},Object(s.d)("div",{className:"container"},Object(s.d)("h2",{css:x},"สมาชิกทั้งหมด"),Object(s.d)("ul",{css:C},A.map((function(e){return Object(s.d)("li",{key:e.id,className:[e.getClass(I)].join(" "),role:"tab",onClick:(t=e.filter,function(){return J(t)})},e.label," (",e.count,")");var t}))),H.length>0?Object(s.d)("div",{css:N},H.map((function(e,t){return Object(s.d)(p.a,Object(n.a)({key:e.id},e,{type:"senator"}))}))):Object(s.d)("div",{css:S},"ไม่มีสมาชิก"))))}}}]);
//# sourceMappingURL=fd1d8816-27517a1a338fcc89c7b8.js.map