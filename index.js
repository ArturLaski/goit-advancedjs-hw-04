import{S as d,i as m}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="47705929-ee1ce2532f2b45b66a6f43010";function y(l){const r=new URLSearchParams({key:f,q:l,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${r.toString()}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let c;function g(l){const r=l.map(({tags:o,webformatURL:s,largeImageURL:e,likes:t,views:n,comments:i,downloads:a})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e}">
            <img class="gallery-img" src="${s}" alt="${o}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${t}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${n}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${i}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${a}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");h(r)}function h(l){const r=document.querySelector("ul.images-div");r.innerHTML=l,c?c.refresh():c=new d(".images-div a",{captionsData:"alt",captionDelay:250})}const p=document.querySelector("button[type=submit]"),b=document.querySelector(".images-div"),u=document.querySelector(".loaderClass");p.addEventListener("click",L);function L(l){l.preventDefault();let r=document.querySelector('input[name="search"]'),o=document.querySelector(".not-found-img"),s=r.value.trim();if(s<=0){m.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",color:"ef4040"});return}u.style.display="flex",y(s).then(e=>{if(e.total===0){b.innerHTML="",o.innerHTML=`Results for query <span>${s}</span> not found!`,m.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"white"});return}o.innerHTML="",g(e.hits);const t=document.querySelectorAll(".gallery-img"),n=Array.from(t).map(i=>new Promise(a=>{i.onload=a,i.onerror=a}));Promise.all(n).then(()=>{console.log(n)}).catch(i=>{u.innerHTML="",console.error(i)})}).catch(console.error).finally(()=>{console.log("completed"),u.style.display="none"}),r.value=""}
//# sourceMappingURL=index.js.map
