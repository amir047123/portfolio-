import{j as t,a as e,S as h,P as p,A as g,b as x,r as d,e as f,R as u,B as y}from"./vendor.e06d8d8c.js";const b=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}};b();var v="/assets/hero.51ac128e.png";const N=[{icon:"logo-instagram",url:"https://www.instagram.com/amir__faysal/"},{icon:"logo-facebook",url:"https://www.facebook.com/amirfaysal047/"},{icon:"logo-linkedin",url:"https://www.linkedin.com/in/amir-faysal/"},{icon:"logo-twitter",url:"https://twitter.com/Amir__Faysal?t=nPNxS8IF2zFW567e__2_Qw&s=09"}],w=()=>t("section",{id:"home",className:"min-h-screen flex py-10 md:flex-row flex-col items-center",children:[e("div",{className:"flex-1 flex items-center justify-center h-full",children:e("img",{src:v,alt:"",className:"md:w-11/12 h-full object-cover"})}),e("div",{className:"flex-1",children:t("div",{className:"md:text-left text-center",children:[t("h1",{className:"md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold",children:[t("span",{className:"text-cyan-600 md:text-6xl text-5xl",children:["Hello!",e("br",{})]}),"My Name is ",e("span",{children:"Amir Faysal"})]}),e("h4",{className:"md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600",children:"Product Manager & Web Developer"}),e("button",{className:"btn-primary mt-10",onClick:()=>window.open("https://wa.me/8801960064557","_blank"),children:"Contact Me"}),e("div",{className:"mt-8 text-3xl flex items-center md:justify-start justify-center gap-5",children:N.map(({icon:n,url:a})=>e("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 hover:text-white cursor-pointer",children:e("ion-icon",{name:n})},n))})]})})]});var _="/assets/about.c57d2291.png";const j=()=>e("section",{id:"about",className:"py-10 text-white",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["About ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 my-3 text-lg",children:"My introduction"}),t("div",{className:"flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto",children:[e("div",{className:"p-2",children:t("div",{className:"text-gray-300 my-3",children:[e("p",{className:"text-justify leading-7 w-11/12 mx-auto",children:"I am a hardworking and passionate learner with a strong ability to adapt to new technologies, making me a strong candidate for a product management role. My excellent communication and team collaboration skills, along with my dedication to serving organizations, make me an asset to any team."}),e("div",{className:"flex mt-10 items-center gap-7",children:[{text:"Years experience",count:"04"},{text:"Completed Projects",count:"30"},{text:"Companies Work",count:"02"}].map(a=>t("div",{children:[t("h3",{className:"md:text-4xl text-2xl font-semibold text-white",children:[a.count,e("span",{className:"text-cyan-600",children:"+"})," "]}),e("span",{className:"md:text-base text-xs",children:a.text})]},a.text))}),e("br",{}),e("br",{}),e("a",{href:"./src/assets/Code_a_program.pdf",download:!0,children:e("button",{className:"btn-primary",children:"Download CV"})})]})}),e("div",{className:"flex-1 md:mt-0 mt-6 flex justify-center items-center",children:e("div",{className:"lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ",children:e("img",{src:_,alt:"",className:"w-full object-cover bg-cyan-600 rounded-xl"})})})]})]})}),k=()=>{const n=[{logo:"logo-html5",level:"Advance",count:86},{logo:"logo-css3",level:"Expect",count:90},{logo:"logo-nodejs",level:"Beginner",count:40},{logo:"logo-react",level:"Intermediate",count:80}];return e("section",{id:"skills",className:"py-10 bg-gray-800 relative",children:t("div",{className:"mt-8 text-gray-100 text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Skills"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My knowledge"}),e("div",{className:"flex items-center justify-center mt-12 gap-10 flex-wrap",children:n==null?void 0:n.map((a,i)=>t("div",{className:"border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl",children:[e("div",{style:{background:`conic-gradient(rgb(8,145,170) ${a.count}%,#ddd ${a.count}%)`},className:"w-32 h-32 flex items-center justify-center rounded-full",children:e("div",{className:"text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600",children:e("ion-icon",{name:a.logo})})}),e("p",{className:"text-xl mt-3",children:a.level})]},i))})]})})};var A="/assets/project-1.8f3963ea.png",M="/assets/project-2.6a32d774.jpg",S="/assets/project-3.cd7db3ec.jpg",C="/assets/project-4.b976e709.jpg",P="/assets/project-5.808bc575.png",E="/assets/project_person1.c267a292.png";const I=()=>t("section",{id:"projects",className:"py-10 text-white",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["My ",e("span",{className:"text-cyan-600",children:"Projects"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"My awesome works"})]}),e("br",{}),t("div",{className:"flex max-w-6xl gap-6 px-5 mx-auto items-center relative",children:[e("div",{className:"lg:w-2/3 w-full",children:e(h,{slidesPerview:1.2,spaceBetween:20,breakpoints:{768:{slidesPerView:2}},loop:!0,autoplay:{delay:3e3},pagination:{clickable:!0},modules:[p,g],children:[{img:A,name:"Movie App",github_link:"https://github.com/amirfaysal0471?tab=repositories",live_link:"https://myreactflix.netlify.app"},{img:M,name:"Job search Web App",github_link:"https://github.com/amirfaysal0471?tab=repositories",live_link:"https://myjobsearch.netlify.app"},{img:S,name:"Highking",github_link:"https://github.com/amirfaysal0471?tab=repositories",live_link:"https://highking01.netlify.app"},{img:C,name:"React Nav",github_link:"https://github.com/amirfaysal0471?tab=repositories",live_link:"https://reacttailwindnavbar.netlify.app"},{img:P,name:"Vue Country",github_link:"https://github.com/amirfaysal0471?tab=repositories",live_link:"https://github.com/amirfaysal0471?tab=repositories"}].map((a,i)=>e(x,{children:t("div",{className:"h-fit w-full p-4 bg-slate-700 rounded-xl",children:[e("img",{src:a.img,alt:"",className:"rounded-lg"}),e("h3",{className:"text-xl my-4",children:a.name}),t("div",{className:"flex gap-3",children:[e("a",{href:a.github_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Github"}),e("a",{href:a.live_link,target:"_blank",className:"text-cyan-600 bg-gray-800 px-2 py-1 inline-block",children:"Live Demo"})]})]})},i))})}),e("div",{className:"lg:block hidden",children:e("img",{src:E,alt:""})})]})]});var O="/assets/hireMe.9a3933ef.png";const G=()=>t("section",{id:"hireme",className:"py-10 px-3 text-white",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["Hire ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Do you have any work?"})]}),t("div",{className:"bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center",children:[t("div",{children:[e("h2",{className:"text-2xl font-semibold",children:"Do you want any work from me?"}),e("p",{className:"lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6",children:"Experienced Developer & Product Manager with a strong grasp of the software development life cycle. Skilled in MongoDB, Express.js, React, Node.js, and product management, delivering high-quality products from ideation to launch. Dedicated, hardworking, and passionate about exceeding expectations.          "}),e("button",{className:"btn-primary mt-10",onClick:()=>window.open("https://wa.me/8801960064557","_blank"),children:"Say Hello"})]}),e("img",{src:O,alt:"",className:"lg:h-[32rem] h-80 lg:absolute bottom-0 -right-3 object-cover"})]})]}),B=()=>{const n=[{logo:"mail",text:"amirfaysal0471@gmail.com"},{logo:"logo-whatsapp",text:"+8801875-071998"},{logo:"location",text:"Boikali,Khulna"}],[a,i]=d.exports.useState(""),[o,s]=d.exports.useState(""),[l,c]=d.exports.useState("");return e("section",{id:"contact",className:"py-10 px-3 text-white",children:t("div",{className:"text-center mt-8",children:[t("h3",{className:"text-4xl font-semibold",children:["Contact ",e("span",{className:"text-cyan-600",children:"Me"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"Get in touch"}),t("div",{className:"mt-16 flex md:flex-row flex-col\r gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto",children:[t("form",{className:"flex flex-col flex-1 gap-5",onSubmit:r=>{r.preventDefault(),f.sendForm("service_m9zsq3f","template_k6s54as",r.target,"azgz2Tu2QvnIFBABJgQlW").then(m=>{console.log(m.text),alert("Message sent successfully!")},m=>{console.log(m.text),alert("Message failed to send.")}),i(""),s(""),c("")},children:[e("input",{type:"text",placeholder:"Your Name",value:a,onChange:r=>i(r.target.value),name:"name"}),e("input",{type:"Email",placeholder:"Your Email Address",value:o,onChange:r=>s(r.target.value),name:"email"}),e("textarea",{placeholder:"Your Message",rows:10,value:l,onChange:r=>c(r.target.value),name:"message"}),e("button",{className:"btn-primary w-fit",type:"submit",children:"Send Message"})]}),e("div",{className:"flex flex-col  gap-7 ",children:n.map((r,m)=>t("div",{className:"flex flex-row  \r text-left gap-4 flex-wrap items-center",children:[e("div",{className:"min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full",children:e("ion-icon",{name:r.logo})}),e("p",{className:"md:text-base text-sm  break-words",children:r.text})]},m))})]})]})})},D=()=>e("div",{className:"bg-gray-800 text-sm p-4 text-center text-white",children:"Copyright \xA9 2023 Amir Faysal.All Rights reserved."}),F=()=>{const[n,a]=d.exports.useState(!1),[i,o]=d.exports.useState(!1),s=[{name:"HOME",link:"#home"},{name:"ABOUT",link:"#about"},{name:"SKILLS",link:"#skills"},{name:"PROJECTS",link:"#projects"},{name:"CONTACT",link:"#contact"}];return d.exports.useEffect(()=>{window.addEventListener("scroll",()=>{document.querySelector("nav"),window.scrollY>0?a(!0):a(!1)})},[]),e("nav",{className:`fixed w-full left-0 top-0 z-[999] ${n?"bg-white/60  text-gray-900":"text-white"}`,children:t("div",{className:"flex items-center justify-between",children:[e("div",{className:"mx-7",children:t("h4",{className:"text-4xl uppercase font-bold",children:["Amir",e("span",{className:"text-cyan-600",children:"Fay"}),"sal"]})}),e("div",{className:` ${n?"md:bg-white/0 bg-white":"bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`,children:e("ul",{className:"flex items-center gap-1 py-2 text-lg",children:s==null?void 0:s.map((l,c)=>e("li",{className:"px-6 hover:text-cyan-600",children:e("a",{href:l==null?void 0:l.link,children:l==null?void 0:l.name})},c))})}),e("div",{onClick:()=>o(!i),className:`z-[999]  ${i?"text-gray-900":"text-gray-100"} text-3xl md:hidden m-5`,children:e("ion-icon",{name:"menu"})}),e("div",{className:`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${i?"right-0":"right-[-100%]"}`,children:e("ul",{className:"flex flex-col justify-center h-full gap-10 py-2 text-lg",children:s==null?void 0:s.map((l,c)=>e("li",{onClick:()=>o(!1),className:"px-6 hover:text-cyan-600",children:e("a",{href:l==null?void 0:l.link,children:l==null?void 0:l.name})},c))})})]})})},L=()=>e("div",{className:"fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce",children:e("a",{href:"https://m.me/amirfaysal047",target:"_blank",rel:"noopener noreferrer",children:e("ion-icon",{name:"chatbubble-ellipses"})})}),X=()=>t("section",{id:"gallery",className:"py-10 px-3",children:[t("div",{className:"text-center",children:[t("h3",{className:"text-4xl font-semibold",children:["Our ",e("span",{className:"text-cyan-600",children:"Gallery"})]}),e("p",{className:"text-gray-400 mt-3 text-lg",children:"A selection of our finest work"})]}),e("div",{className:"mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",children:[{src:"https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/329331204_2354265194750466_8907569857664889697_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFwJNhoxb71wXghggIuuFFQe19SYotlGUN7X1Jii2UZQ_z6AvK9UM28UNA-hBPTE_UkGSD2oFyYQRrjPPbyGi6w&_nc_ohc=gC_LewC4YLIAX-Frn77&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfAOOhf1x-u8fb1WbWWwhliU6S2794H5ZOuG7PqZZ_vMSw&oe=64604053",alt:"Image 1"},{src:"https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/328868790_633806768506159_5219820431331550909_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF1ZnNLoXu5ex2iKmMzszngiEDZtXf2Ai-IQNm1d_YCL3-Ph4Xcs3FE9f__jyGDYQRJIylGGDSI8_dvO_XeXK0Y&_nc_ohc=YPWTKrlrepkAX_SDX3x&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfAvj4GNV5lIG_0s8iM6EhVuVpqwawslwYMcBMUfY66IwQ&oe=645FBA37",alt:"Image 2"},{src:"https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/330352906_506472201560230_2082215086342543064_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMyLpCRk12CyndKWChkNcJ7XU2hh7MfF3tdTaGHsx8Xftd3-LNaNVP0unKOWLO7HQZCxpbIj5Dc488sRg24qwB&_nc_ohc=1VrHwtw71HUAX8OXn_E&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfBCzJfGa_i-ErmePgMlzTtS0OIcd70EqmxpK353KZLMxQ&oe=64608505",alt:"Image 3"},{src:"https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/330316466_181786377924047_4293087326942431249_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeELZdqASAdDvVQ88gMNGIitpUPhdiyx2rGlQ-F2LLHasSaZTDype96u88mCWv4OahIeizZXiSSAvpAkdV8EBoDg&_nc_ohc=lrx2b-oCNdEAX9qKfBA&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfAfOBpaxX246PjN0K-Q-WqggdjrDd8QElrGvVAJYPPrJA&oe=6460305C",alt:"Image 4"}].map((a,i)=>e("div",{children:e("img",{src:a.src,alt:a.alt,className:"rounded-lg https://scontent.fjsr3-1.fna.fbcdn.net/v/t39.30808-6/330352906_506472201560230_2082215086342543064_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMyLpCRk12CyndKWChkNcJ7XU2hh7MfF3tdTaGHsx8Xftd3-LNaNVP0unKOWLO7HQZCxpbIj5Dc488sRg24qwB&_nc_ohc=1VrHwtw71HUAX8OXn_E&_nc_ht=scontent.fjsr3-1.fna&oh=00_AfBCzJfGa_i-ErmePgMlzTtS0OIcd70EqmxpK353KZLMxQ&oe=64608505"})},i))})]}),z=()=>e("section",{id:"mission-vision",className:"py-10 bg-gray-800 bg-gradient-to-r  to-gray-500  text-align: justify",children:e("div",{className:"max-w-6xl mx-auto",children:t("div",{className:"flex items-center justify-between",children:[t("div",{className:"w-1/2 pr-6",children:[e("h2",{className:"text-4xl font-bold text-white-800 mb-4",children:"Mission"}),e("p",{className:"text-lg text-white-600 leading-relaxed ",children:"At Thinkystorm, our mission is to develop innovative and high-quality software solutions that solve real-world problems for businesses and individuals. We believe that technology has the power to transform industries and improve people's lives, and we are committed to being at the forefront of this change."})]}),t("div",{className:"w-1/2 pl-6",children:[e("h2",{className:"text-4xl font-bold text-cyan-600 mb-4",children:"Vision"}),e("p",{className:"text-lg text-white-600 leading-relaxed",children:"Our vision is to be a leading software company that is recognized for its exceptional products, talented team, and commitment to customer success. We aspire to be a company that empowers its employees to achieve their full potential and fosters a culture of innovation, collaboration, and excellence."})]})]})})}),H=()=>t("div",{children:[e(F,{}),e(L,{}),e(w,{}),e(j,{}),e(k,{}),e(G,{}),e(I,{}),e(X,{}),e(z,{}),e(B,{}),e(D,{})]});u.render(e(y,{children:e(H,{})}),document.getElementById("root"));
