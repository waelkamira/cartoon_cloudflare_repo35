(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4242],{3087:function(e,t,l){Promise.resolve().then(l.bind(l,7045))},2954:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var n=l(7437),a=l(7648);l(2265);var s=l(5168);function i(){return(0,n.jsxs)(a.default,{href:"/",className:"fixed bottom-4 sm:top-4 left-4 xl:top-12 xl:left-12 z-40",children:[(0,n.jsxs)("div",{className:" flex items-center justify-center rounded-lg overflow-hidden cursor-pointer xl:w-fit ",children:[(0,n.jsx)(s.ut6,{className:" z-20 text-white text-2xl sm:text-4xl lg:text-[44px] animate-pulse transition-all duration-300  rounded-l-lg"}),(0,n.jsx)(s.ut6,{className:" absolute -top-[4px] -left-[3px] z-10 text-gray-400 text-[33px] sm:text-4xl lg:text-[44px]  transition-all duration-300  rounded-l-lg"})]}),(0,n.jsx)("h1",{className:"text-white",children:"رجوع"})]})}},1759:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var n=l(7437),a=l(7648);function s(e){let{style:t,title:l,onClick:s,path:i=""}=e;return(0,n.jsx)(a.default,{href:i,className:"w-full",children:(0,n.jsx)("button",{type:"submit",onClick:s,className:" btn text-sm py-0.5 px-4 sm:text-lg sm:py-2 sm:px-8 my-2 text-white text-nowrap select-none rounded-full w-full max-h-12 hover:text-white shadow-lg hover:border-[#596067] ",children:l})})}l(2265)},4481:function(e,t,l){"use strict";l.d(t,{InputsContextProvider:function(){return r},t:function(){return i}});var n=l(7437),a=l(2265);function s(e,t){switch(t.type){case"SET_SERIESES":return{serieses:null==t?void 0:t.payload};case"NEW_SERIES":return{newSeries:null==t?void 0:t.payload};case"NEW_SONG":return{newSong:null==t?void 0:t.payload};case"KIDS_SONG_NAME":return{kidsSongName:null==t?void 0:t.payload};case"SPACETOON_SONG_NAME":return{SpacetoonSongName:null==t?void 0:t.payload};case"NEW_SPACETOON_SONG":return{newSpacetoonSong:null==t?void 0:t.payload};case"NEW_MOVIE":return{newMovie:null==t?void 0:t.payload};case"SELECTED_VALUE":return{data:{...null==e?void 0:e.data,selectedValue:t.payload.selectedValue,modelName:t.payload.modelName}};case"DELETE_SERIES":return{deletedSeries:{...null==e?void 0:e.data,selectedValue:t.payload.selectedValue,modelName:t.payload.modelName}};case"IMAGE":return{data:{...null==e?void 0:e.data,image:t.payload}};case"PROFILE_IMAGE":return{profile_image:{image:t.payload}};case"IMAGE_ERROR":return{imageError:null==t?void 0:t.payload};case"ACTION":return{action:null==t?void 0:t.payload};case"MY_SERIESES":return{mySerieses:null==t?void 0:t.payload};case"FIRST_EPISODE":return{firstEpisode:null==t?void 0:t.payload};case"IS_SONG_NAME":return{isSongName:null==t?void 0:t.payload};default:return e}}let i=(0,a.createContext)("");function r(e){let{children:t}=e,[l,r]=(0,a.useReducer)(s,{data:{},imageError:{},profile_image:{},serieses:[],newSeries:{},newSong:{},kidsSongName:{},firstEpisode:"",SpacetoonSongName:{},newSpacetoonSong:{},newMovie:{},deletedSeries:{},deleteFavoritePost:{},action:{},mySerieses:[],isSongName:""});return(0,n.jsx)(i.Provider,{value:{...l,dispatch:r},children:t})}},1394:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var n=l(2265),a=l(4481),s=l(605);function i(){let{profile_image:e}=(0,n.useContext)(a.t),[t,l]=(0,n.useState)(),{data:i,status:r}=(0,s.useSession)();async function o(){if(i){var e;let t=null==i?void 0:null===(e=i.user)||void 0===e?void 0:e.email,n=await fetch("/api/user?email=".concat(t)),a=await (null==n?void 0:n.json());n.ok&&(localStorage.setItem("CurrentUser",JSON.stringify(a)),l(a))}}return(0,n.useEffect)(()=>{"authenticated"===r&&o()},[r,null==e?void 0:e.image]),{...t}}},6393:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var n=l(7437),a=l(2265),s=l(1273);function i(e){let{myMessage:t="لا يوجد نتائج لعرضها \uD83D\uDE10"}=e,[l,i]=(0,a.useState)(""),[r,o]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{setTimeout(()=>{i(t),o(!1)},5e3)},[]),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center  h-[300px] rounded-lg w-full",children:[r&&(0,n.jsxs)("div",{className:"flex flex-col justify-start items-center bg-gray-300 rounded-lg w-full h-full p-8 transition duration-300",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,n.jsx)(s.mdD,{className:"animate-spin text-5xl mt-8 transition duration-300"}),(0,n.jsx)(s.mdD,{className:"animate-spin text-2xl transition duration-300 mx-8 w-full"})]}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("hr",{className:"w-1/2 h-[10px] bg-gray-600 rounded-full border-hidden  my-4 transition duration-300"}),(0,n.jsx)("hr",{className:"w-3/4 h-[10px] bg-gray-600 rounded-full border-hidden  my-4 transition duration-300"}),(0,n.jsx)("hr",{className:"w-full h-[10px] bg-gray-600 rounded-full border-hidden  my-4 transition duration-300"})]})]}),(0,n.jsx)("h1",{className:"text-2xl mt-4 text-white bg-four rounded-lg p-2 text-center",children:l||"جاري التحميل"})]})}},8827:function(e,t,l){"use strict";l.d(t,{Z:function(){return s}});var n=l(7437),a=l(1273);function s(){return(0,n.jsx)("div",{className:"flex items-center justify-center  rounded-full h-full",children:(0,n.jsx)(a.mdD,{className:"animate-spin text-xl transition duration-300 text-gray-500"})})}},705:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var n=l(7437),a=l(605);l(2265),l(1394);var s=l(3145),i=l(7648),r=l(1759);function o(e){let{planetName:t,planetImage:l,planetRoute:a}=e;return(0,n.jsx)("div",{children:(0,n.jsxs)(i.default,{href:a,className:"flex justify-start gap-2 items-center hover:shadow-md rounded-lg",children:[(0,n.jsx)("div",{className:"relative h-14 w-16 my-1",children:(0,n.jsx)(s.default,{priority:!0,src:l,fill:!0,alt:"photo"})}),(0,n.jsx)("h5",{className:"text-black text-sm",children:t})]})})}function u(e){let{setIsOpen:t}=e,l=(0,a.useSession)();return(0,n.jsx)("div",{className:"absolute w-full h-screen border top-0 z-50 right-0",onClick:()=>t(!1),children:(0,n.jsxs)("div",{className:"w-64 bg-white z-50 right-0 h-screen overflow-y-auto",onClick:e=>e.stopPropagation(),children:[(0,n.jsxs)("div",{className:"sticky top-0 w-full z-50",children:[(0,n.jsx)("div",{className:"flex justify-center items-center w-full cursor-pointer line-clamp-2 bg-one p-4",children:(0,n.jsx)("div",{className:"relative size-20 ml-4",children:(0,n.jsx)(s.default,{priority:!0,src:"https://i.imgur.com/uuWOSAu.png",fill:!0,alt:"photo"})})}),(0,n.jsx)("div",{className:"bg-white px-4",children:(0,n.jsx)(r.Z,{title:"إغلاق",onClick:()=>t(!1)})})]}),(0,n.jsxs)("div",{className:"relative p-4 ",children:[(null==l?void 0:l.status)==="authenticated"&&(0,n.jsx)(n.Fragment,{children:" "}),(0,n.jsx)(o,{planetName:"أغاني سبيس تون",planetImage:"https://i.imgur.com/BWPdDAF.png",planetRoute:"/spacetoonSongsPlanet"}),(0,n.jsx)(o,{planetName:"أغاني أطفال",planetImage:"https://i.imgur.com/rRBpVhp.png",planetRoute:"/songsPlanet"}),(0,n.jsx)(o,{planetName:"كوكب زمردة",planetImage:"https://i.imgur.com/wbjwdXO.png",planetRoute:"/zomurodaPlanet"}),(0,n.jsx)(o,{planetName:"كوكب مغامرات",planetImage:"https://i.imgur.com/sUeBEaz.png",planetRoute:"/adventuresPlanet"}),(0,n.jsx)(o,{planetName:"كوكب رياضة",planetImage:"https://i.imgur.com/CI7HaVo.png",planetRoute:"/sportPlanet"}),(0,n.jsx)(o,{planetName:"كوكب أكشن",planetImage:"https://i.imgur.com/bg5hr5i.png",planetRoute:"/actionPlanet"}),(0,n.jsx)(o,{planetName:"كوكب أفلام",planetImage:"https://i.imgur.com/QBreMYl.png",planetRoute:"/moviesPlanet"}),(0,n.jsx)(o,{planetName:"كوكب بون بونة",planetImage:"https://i.imgur.com/DnKrRt2.png",planetRoute:"/bonbonaPlanet"})]})]})})}l(8827)},7045:function(e,t,l){"use strict";l.d(t,{default:function(){return x}});var n=l(7437),a=l(8779);l(466);var s=l(9376),i=l(2265),r=l(4481),o=l(3145),u=l(6393),d=l(8737),c=l(705);l(2954);var m=l(2744);function x(e){let{vertical:t=!1,image:l=!0,title:x=!0}=e,[p,f]=(0,i.useState)(1),[h,g]=(0,i.useState)([]),{newSong:v,deletedSong:N,dispatch:w}=(0,i.useContext)(r.t),j=(0,s.useRouter)(),[S,y]=(0,i.useState)(!1),[E,b]=(0,i.useState)(!0),[_,I]=(0,i.useState)(""),[O,R]=(0,a.E)({loop:!1,mode:"free",vertical:!!t,rtl:!t,slides:{perView:()=>{var e;return(null===(e=window)||void 0===e?void 0:e.innerWidth)>768||t?3:2},spacing:5},slideChanged(e){e.track.details.rel>=e.track.details.slides.length-3&&f(e=>e+1)}});async function k(){try{let e=await fetch("/api/songs?page=".concat(p,"&limit=4&random=true")),t=await e.json();if(e.ok){let e=new Set(h.map(e=>e.id)),l=t.filter(t=>!e.has(t.id));l.length>0&&g(e=>[...e,...l])}}catch(e){console.error("Error fetching songs:",e)}}(0,i.useEffect)(()=>{k();let e=setTimeout(()=>{b(!1)},9e4);return()=>clearTimeout(e)},[v,N,p]),(0,i.useEffect)(()=>{R.current&&R.current.update()},[h,v]);let C=e=>{I(window.location.pathname+window.location.search),j.push("/song?songName=".concat(e)),setTimeout(()=>{let e=window.location.pathname+window.location.search;if(e!==_&&e.includes("/song")){var t,l;null===(l=window)||void 0===l||null===(t=l.location)||void 0===t||t.reload()}},3e3)};return(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full overflow-x-hidden p-2 bg-one",children:[t?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsxs)("div",{className:"absolute flex flex-col items-start gap-2 z-40 top-2 right-2 sm:top-4 sm:right-4 xl:right-12 xl:top-12",children:[(0,n.jsx)(d.Ogj,{className:"p-1 rounded-lg text-3xl lg:text-5xl text-white cursor-pointer z-50 bg-two",onClick:()=>y(!S)}),S&&(0,n.jsx)(c.Z,{setIsOpen:y})]})]}):"",l?(0,n.jsxs)("div",{className:"relative h-44 w-48 sm:h-[300px] sm:w-80",children:[(0,n.jsx)(o.default,{src:"https://i.imgur.com/rRBpVhp.png",layout:"fill",objectFit:"cover",alt:"أغاني أطفال"})," "]}):"",x?(0,n.jsx)("h1",{className:"w-full text-start p-2 text-white my-2",children:"أغاني أطفال"}):"",E&&(0,n.jsxs)("div",{className:"relative w-full flex items-center justify-between text-white h-12  text-2xl px-2 ",children:[(0,n.jsx)(m.eDK,{}),(0,n.jsx)("h6",{className:"text-sm w-full text-start",children:"اسحب لمزيد من الأغاني"})]}),(0,n.jsx)("div",{ref:O,className:(t?"h-[600px]":" h-fit")+" keen-slider py-2 shadow-lg overflow-scroll rounded-md",children:0===h.length?(0,n.jsx)(u.Z,{}):null==h?void 0:h.map(e=>(0,n.jsxs)("div",{className:"keen-slider__slide snap-center flex flex-col items-center justify-start flex-shrink-0 px-2 w-full",onClick:()=>{w({type:"KIDS_SONG_NAME",payload:null==e?void 0:e.songName}),C(null==e?void 0:e.songName)},children:[(0,n.jsx)("div",{className:(t?"w-72 h-44":"w-40 h-[90px]")+" relative w-24 h-32 sm:w-full sm:h-64 rounded-md overflow-hidden hover:cursor-pointer",children:(0,n.jsx)(o.default,{src:null==e?void 0:e.songImage,layout:"fill",objectFit:"cover",alt:null==e?void 0:e.songName})}),(0,n.jsx)("h1",{className:"text-white text-center m-2 text-[10px] sm:text-[15px] w-full line-clamp-2 font-bold",children:null==e?void 0:e.songName})]},null==e?void 0:e.id))})]})}}},function(e){e.O(0,[5864,7240,5027,6950,6051,2972,605,5726,9069,2971,5030,1744],function(){return e(e.s=3087)}),_N_E=e.O()}]);