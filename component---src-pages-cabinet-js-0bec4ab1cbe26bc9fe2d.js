(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{rKNA:function(e,t,n){"use strict";n.r(t);var c=n("qKvR"),s=n("zLVn"),a=(n("q1tI"),n("Bl7J")),i=n("vrFN"),r=n("7Qib"),b=n("8C97"),d=n("m0tv"),o=n("Wbzz"),O=n("wx14"),j=n("KQm4"),m=n("/RSD");var l={name:"3s2cu5",styles:"margin-bottom:6rem;"},f={name:"dfo7fh",styles:"text-align:center;font-size:3.6rem;margin:3rem;"},u={name:"12s2wjg",styles:"display:flex;flex-wrap:wrap;margin:0 auto;justify-content:center;"},g=function(e){var t=e.members,n=e.title,s=Object(j.a)(t);return s.sort(r.l),s=s.map((function(e){var t=e.cabinet_position.filter((function(e){return e.indexOf(n)>=0})).join(", ");return Object(c.d)(m.a,Object(O.a)({key:e.id},e,{cabinet_position:t,type:"cabinet"}))})),Object(c.d)("div",{css:l},Object(c.d)("h2",{css:f},n),Object(c.d)("div",{css:u},s))},p=function(){var e=Object(o.useStaticQuery)("4245691691"),t="นายกรัฐมนตรี",n=e.allPeopleYaml.edges.filter((function(e){return e.node.cabinet_position.some((function(e){return e===t}))})),s=function(e){return function(t,n){var c=t.node.cabinet_position.find((function(t){return t.indexOf(e)>-1}));return c===n.node.cabinet_position.find((function(t){return t.indexOf(e)>-1}))?-1:c.indexOf("ช่วย")>-1?1:-1}},a=[{ministry:t,members:n}].concat(["รองนายกรัฐมนตรี","สำนักนายกรัฐมนตรี","กระทรวงกลาโหม","กระทรวงการคลัง","กระทรวงการต่างประเทศ","กระทรวงการท่องเที่ยวและกีฬา","กระทรวงพัฒนาสังคมและความมั่นคงของมนุษย์","กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม","กระทรวงเกษตรและสหกรณ์","กระทรวงคมนาคม","กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม","กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม","กระทรวงพลังงาน","กระทรวงพาณิชย์","กระทรวงมหาดไทย","กระทรวงยุติธรรม","กระทรวงแรงงาน","กระทรวงวัฒนธรรม","กระทรวงศึกษาธิการ","กระทรวงสาธารณสุข","กระทรวงอุตสาหกรรม"].map((function(t){return{ministry:t,members:e.allPeopleYaml.edges.filter((function(e){return e.node.cabinet_position.some((function(e){return e.indexOf(t)>-1}))})).sort(s(t))}})));return Object(c.d)("div",null,a.map((function(e){var t=e.ministry,n=e.members.map((function(e){return Object.assign({},e.node)}));return Object(c.d)(g,{key:t,members:n,title:t})})))},v=n("InJ6");n("HRfi");var y={fontSize:"4rem"},h={fontSize:"2.4rem",textAlign:"left",margin:"1.5rem 0 1.2rem 0"},w={},x={margin:"1rem 0"},_={name:"8atqhb",styles:"width:100%;"},k={name:"t3pdin",styles:"background:var(--cl-white);"},z={name:"4zf7my",styles:"font-size:4.8rem;text-align:center;"};t.default=function(e){var t,n=e.data,o=n.cabinet,O=Object(s.a)(n,["cabinet"]),j=Object(r.g)(O),m=j.gender,l=j.age,f=j.education,u=j.occupation_group,g=j.asset;return Object(c.d)(a.a,{pageStyles:{background:"#c0e4ff"}},Object(c.d)(i.a,{title:"คณะรัฐมนตรี"}),Object(c.d)("section",{className:"section"},Object(c.d)("div",{className:"book"},Object(c.d)("div",{className:"page leftPage"},Object(c.d)("h1",{css:Object(c.c)(Object.assign({},y,{margin:"1rem 0 0 0"}),"")},o.name," ชุดที่ ",o.party_ordinal),Object(c.d)("h2",{style:Object.assign({},h)},Object(c.d)("span",{dangerouslySetInnerHTML:{__html:Object(r.e)(o.party_ordinal)}})," ","Cabinet"),Object(c.d)("h2",{css:Object(c.c)(Object.assign({},h),"")},"About"),Object(c.d)("p",{css:Object(c.c)(Object.assign({},w),"")},o.description),Object(c.d)("h2",{css:Object(c.c)(Object.assign({},h),"")},"Official Link"),Object(c.d)(d.b,o),Object(c.d)("h2",{css:Object(c.c)(Object.assign({},h),"")},"In Office"),Object(c.d)(d.a,o)),Object(c.d)("div",{className:"page"},Object(c.d)("h2",{css:Object(c.c)(Object.assign({},h,(t={},t[Object(v.a)(767)]={marginTop:"11rem",marginBottom:"0rem"},t)),"")},"Members"),Object(c.d)("h2",{css:Object(c.c)(Object.assign({},h,{fontFamily:"var(--ff-text)",fontWeight:"normal"}),"")},"คณะรัฐมนตรีจำนวน ",O.allPeopleYaml.totalCount," คน"),Object(c.d)("div",{css:_},Object(c.d)("div",{css:Object(c.c)(Object.assign({},x),"")},Object(c.d)(b.a,{data:m})),Object(c.d)("div",{css:Object(c.c)(Object.assign({},x),"")},Object(c.d)(b.a,{data:l})),Object(c.d)("div",{css:Object(c.c)(Object.assign({},x),"")},Object(c.d)(b.a,{data:f})),Object(c.d)("div",{css:Object(c.c)(Object.assign({},x),"")},Object(c.d)(b.a,{data:u})),Object(c.d)("div",{style:Object.assign({},x)},Object(c.d)(b.a,{data:g})))))),Object(c.d)("section",{className:"section",css:k},Object(c.d)("h1",{css:z},"สมาชิกทั้งหมด"),Object(c.d)("div",{className:"container"},Object(c.d)(p,null))))}}}]);
//# sourceMappingURL=component---src-pages-cabinet-js-0bec4ab1cbe26bc9fe2d.js.map