import{S as L,i as f}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const S="47705929-ee1ce2532f2b45b66a6f43010";function m(l,t=1,n=15){const s=new URLSearchParams({key:S,q:l,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:n});return fetch(`https://pixabay.com/api/?${s.toString()}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}let y;function h(l){const t=l.map(({tags:n,webformatURL:s,largeImageURL:e,likes:r,views:a,comments:g,downloads:b})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e}">
            <img class="gallery-img" src="${s}" alt="${n}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${r}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${a}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${g}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${b}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");v(t)}function v(l){const t=document.querySelector("ul.images-div");t.innerHTML=l,y?y.refresh():y=new L(".images-div a",{captionsData:"alt",captionDelay:250})}const w=document.querySelector("button[type=submit]"),p=document.querySelector(".images-div"),u=document.querySelector(".loaderClass"),o=document.createElement("button");o.textContent="Load more";o.style.display="none";o.classList.add("load-more");p.insertAdjacentElement("afterend",o);let i="",c=1;const d=15;w.addEventListener("click",P);o.addEventListener("click",q);function P(l){l.preventDefault();const t=document.querySelector('input[name="search"]'),n=document.querySelector(".not-found-img");if(i=t.value.trim(),c=1,i===""){f.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",color:"ef4040"});return}p.innerHTML="",n.innerHTML="",u.style.display="flex",o.style.display="none",m(i,c,d).then(s=>{if(s.totalHits===0){n.innerHTML=`Results for query <span>${i}</span> not found!`,f.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"white"});return}h(s.hits),s.totalHits>d&&(o.style.display="block")}).catch(console.error).finally(()=>{u.style.display="none"}),t.value=""}function q(){c+=1,u.style.display="flex",o.style.display="none",m(i,c,d).then(l=>{h(l.hits);const t=Math.ceil(l.totalHits/d);c>=t?(o.style.display="none",f.show({title:"ℹ️",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4E75FF",messageColor:"white"})):o.style.display="block"}).catch(console.error).finally(()=>{u.style.display="none"})}
//# sourceMappingURL=index.js.map
