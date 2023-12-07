import{a as s,j as e}from"./index-2a42981b.js";const l=[{title:"Step 1:",step_Descripcion:"Write the word in the box",step_Img:s.stepOne},{title:"Step 2:",step_Descripcion:"Press the Search Button",step_Img:s.stepTwo},{title:"Step 3:",step_Descripcion:"Improve your English by practicing",step_Img:s.stepThree},{title:"PS:",step_Descripcion:"Have a nice day! :)",step_Img:s.stepFour}];function a({title:t,step_Descripcion:r,step_Img:i}){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"",children:e.jsxs("div",{className:`stepByStep shadow-sm shadow-blue-500/30 hover:shadow-md hover:shadow-blue-500/40 rounded-lg \r
                transform hover:scale-105 transition-transform cursor-pointer transition-colors duration-300 ease-in-out m-1`,children:[e.jsx("div",{className:"m-5",children:e.jsx("h2",{className:`p-2 rounded-lg shadow-md shadow-blue-500/40 font-bold text-3xl bg-blue-500 text-white\r
                        `,children:t})}),e.jsx("div",{className:"grid justify-items-center",children:e.jsx("img",{className:"stepByStep-img",src:i,alt:`imagen referente al paso ${t}`})}),e.jsx("div",{className:"font-semibold ",children:e.jsx("blockquote",{children:e.jsx("p",{className:"px-3 py-4 text-blue-900",children:r})})})]})})})}function n(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"grid grid-cols-1 justify-items-center",children:[e.jsx("div",{className:"mb-10 mt-8 font-bold text-blue-500 ",children:e.jsx("h2",{className:"text-2xl xl:text-5xl",children:"📌 Step By Step 📌"})}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 xl:grid-cols-4 text-center",children:l.map((t,r)=>e.jsx(a,{...t},r))}),e.jsx("div",{className:"my-10 mx-5 xl:mx-10 p-2 pb-4 font-bold text-white rounded-lg text-center bg-blue-500",children:e.jsx("h2",{className:"text-3xl xl:text-5xl",children:"🎓 Master English, Discover Words and Improve your Fluency"})}),e.jsx("div",{className:"grid justify-items-center",children:e.jsx("img",{className:"header-img",src:s.gifBeforeView,alt:"Gif de la seccion de app de before"})})]})})}export{n as default};