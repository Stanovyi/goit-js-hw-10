import"./assets/modulepreload-polyfill-3cfb730f.js";import{f,i as m}from"./assets/vendor-77e16229.js";/* empty css                      */const h=document.querySelector("#datetime-picker"),a=document.querySelector("button[data-start]"),b=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");a.setAttribute("disabled","");let s;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<=Date.now()?m.error({title:"Error",titleColor:"#ffffff",message:"Please choose a date in the future",backgroundColor:"#b51b1b",messageColor:"#ffffff",position:"topRight",color:"#FFFFFF",iconUrl:"/cross-icon.svg"}):(a.removeAttribute("disabled"),s=t[0])}};f("#datetime-picker",S);a.addEventListener("click",g);function g(t){t.target.setAttribute("disabled",""),h.setAttribute("disabled","");let e;const c=setInterval(()=>{s&&(e=s-Date.now());const{days:i,hours:u,minutes:n,seconds:r}=v(e);e>0?(b.textContent=o(i),y.textContent=o(u),p.textContent=o(n),C.textContent=o(r)):clearInterval(c)},1e3)}function v(t){const n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:r,minutes:d,seconds:l}}function o(t){return String(t).padStart(2,0)}
//# sourceMappingURL=commonHelpers.js.map
