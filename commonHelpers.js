import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h}from"./assets/vendor-77e16229.js";const o=document.getElementById("start-button"),T=document.getElementById("datetime-picker"),g=document.querySelector("[data-days]"),E=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]"),m=document.querySelector(".timer");let l,t;function u(e){const a=new Date().getTime(),r=e-a;if(r<=0){clearInterval(l),m.style.display="none",iziToast.error({title:"Error",message:"Timer is ended"});return}const{days:c,hours:d,minutes:s,seconds:i}=k(r);g.textContent=n(c),E.textContent=n(d),p.textContent=n(s),b.textContent=n(i)}function k(e){const s=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),y=Math.floor(e%864e5%36e5%6e4/1e3);return{days:s,hours:i,minutes:f,seconds:y}}function n(e){return e<10?`0${e}`:e}function C(){if(!t||t.getTime()<=new Date().getTime()){iziToast.error({title:"Error",message:"Please choose a date in the future"});return}const e=t.getTime();m.style.display="block",o.disabled=!0,T.disabled=!0,u(e),l=setInterval(()=>{u(e)},1e3)}h("#datetime-picker",{enableTime:!0,dateFormat:"Y-m-d H:i",time_24hr:!0,minuteIncrement:1,onClose:function(e){t=e[0],!t||t.getTime()<=new Date().getTime()?(iziToast.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):o.disabled=!1}});o.addEventListener("click",C);
//# sourceMappingURL=commonHelpers.js.map