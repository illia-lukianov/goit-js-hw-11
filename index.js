import{a as p,S as g,i as l}from"./assets/vendor-DUzvakyU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h={key:"49359598-9a4c243d7cce225cafe13dd3f",image_type:"photo",orientation:"horizontal",safesearch:"true"};function y(t){return p.get("https://pixabay.com/api",{params:{q:t,...h}})}const i=document.querySelector(".gallery");function L(t){const s=t.map(n=>{const{webformatURL:e,largeImageURL:r,tags:o,likes:u,views:m,comments:f,downloads:d}=n;return`<li class="gallery-item">
            <a href="${r}"><img class="item-image" src="${e}" alt="${o}"></a>
            <div class="image-info">
                <p class="item-likes"><span class="info-accent">Likes</span>${u}</p>
                <p class="item-views"><span class="info-accent">Views</span>${m}</p>
                <p class="item-comments"><span class="info-accent">Comments</span>${f}</p>
                <p class="item-downloads"><span class="info-accent">Downloads</span>${d}</p>
            </div>
        </li>`}).join("");i.innerHTML="",i.insertAdjacentHTML("beforeend",s),new g(".gallery a").refresh()}const v=document.querySelector(".form"),c=document.querySelector("#loader");v.addEventListener("submit",t=>{t.preventDefault();const s=t.currentTarget.elements.searchText.value.trim();b(s)&&(c.classList.add("loader"),y(s).then(a=>a.data.hits).then(a=>{if(!w(a))throw new Error("Invalid data from API");return a}).then(a=>L(a)).catch(a=>console.error("ERROR:",a)).finally(()=>c.classList.remove("loader")))});function b(t){return t===""?(l.error({title:"Error",message:"Please, input data to search."}),!1):!0}function w(t){return t.length===0?(l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),!1):!0}
//# sourceMappingURL=index.js.map
