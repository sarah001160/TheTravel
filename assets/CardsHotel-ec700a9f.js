import{_ as N,u as B,r as v,a as g,o,c as l,b as e,d,t,e as m,F as f,f as S,w as D,g as i,h as H,i as y,p as P,j as V,k as u}from"./index-6423e04f.js";import{N as w}from"./Navigate-9702bc5d.js";const n=c=>(P("data-v-5e4ed681"),c=c(),V(),c),A={style:{"margin-top":"10px"}},E=n(()=>e("div",{class:"pictureArea"},[e("h2",null,"旅宿")],-1)),L={style:{"margin-left":"10%"}},M=["onClick"],R=["src"],j={key:1,src:y,class:"imgIncard"},F={class:"locationtag"},T=n(()=>e("img",{src:u,style:{"margin-right":"5px"}},null,-1)),W={class:"descrip"},$={class:"Pinmobile"},O=n(()=>e("img",{src:u,style:{"margin-right":"5px"}},null,-1)),Z={class:"locationtag",style:{display:"inline-block"}},q={key:0,class:"modalBox"},z={class:"IntroA"},G=["src"],J={key:1,src:y},K={class:"fBold f28"},Q=n(()=>e("img",{src:u,style:{"margin-right":"5px"}},null,-1)),U={class:"locationtag",style:{display:"inline-block"}},X={class:"detailZone"},Y={key:0},ee={key:1},se={key:2},te=["href"],oe={key:3},le={class:"IntroB"},ae=n(()=>e("h4",{class:"title fBold f28"},"旅宿介紹",-1)),ne=n(()=>e("br",null,null,-1)),ce={__name:"CardsHotel",setup(c){const _=B();_.getHotelsData();const s=v({}),r=v(!1);function k(p){b(),s.value=p}function b(){r.value=!0}function x(){r.value=!1,s.value={}}return(p,h)=>{const I=g("search-barglobal"),C=g("footerglobal");return o(),l(f,null,[e("div",A,[d(I)]),E,d(w),e("div",L,"所有旅宿-共有"+t(m(_).HotelsLength)+"筆資料",1),e("section",null,[(o(!0),l(f,null,S(m(_).Hotelsdata,(a,ie)=>(o(),l("div",{class:"card",key:a.index,onClick:_e=>k(a)},[a.Picture1?(o(),l("img",{key:0,src:a.Picture1,class:"imgIncard"},null,8,R)):(o(),l("img",j)),e("h4",null,t(a.Name),1),e("p",F,[T,i(" "+t(a.Region),1)]),e("p",W,t(a.Description),1),e("div",$,[e("h4",null,t(a.Name),1),O,e("p",Z,t(a.Region),1)])],8,M))),128))]),r.value?(o(),l("div",q,[e("a",{href:"#",onClick:h[0]||(h[0]=D(a=>x(),["prevent"])),class:"close"}),e("div",z,[s.value.Picture1?(o(),l("img",{key:0,src:s.value.Picture1},null,8,G)):(o(),l("img",J)),e("div",null,[e("h4",K,t(s.value.Name),1),Q,e("p",U,t(s.value.Region),1),e("div",X,[e("p",null,"旅宿地點: "+t(s.value.Location)+t(s.value.Add),1),s.value.IndustryEmail?(o(),l("p",Y,"電子信箱: "+t(s.value.IndustryEmail),1)):(o(),l("p",ee,"電子信箱: 無")),e("p",null,"聯絡電話: +"+t(s.value.Tel),1),s.value.Website?(o(),l("p",se,[i("網站: "),e("a",{href:s.value.Website,target:"blank"},"連結",8,te)])):(o(),l("p",oe,"網站: 無"))])])]),e("div",le,[ae,e("p",null,[i(t(s.value.Description)+" ",1),ne,i(" "+t(s.value.Serviceinfo),1)])])])):H("",!0),d(C)],64)}}},ue=N(ce,[["__scopeId","data-v-5e4ed681"]]);export{ue as default};