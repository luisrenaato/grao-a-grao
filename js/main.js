(()=>{
const d=document,root=d.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
root.classList.add('js');
d.querySelectorAll('[data-split]').forEach(el=>{
 const t=el.textContent.trim();el.setAttribute('aria-label',t);
 el.style.setProperty('--base',el.dataset.base||'0s');el.textContent='';
 t.split(' ').forEach((w,i)=>{const s=d.createElement('span');s.className='w';s.style.setProperty('--i',i);s.setAttribute('aria-hidden','true');s.textContent=w+' ';el.appendChild(s)});
});
const HAND={
 underline:'<svg viewBox="0 0 300 22" preserveAspectRatio="none"><path d="M4 12C34 6 70 16 118 9S206 15 296 6" pathLength="1"/><path class="b" d="M22 18C80 13 150 19 250 13" pathLength="1"/></svg>',
 circle:'<svg viewBox="0 0 400 100" preserveAspectRatio="none"><path d="M58 16C130 2 290 0 352 18C396 32 398 70 346 84C282 100 120 102 56 86C10 74 4 40 40 24C80 8 170 4 262 8" pathLength="1"/></svg>',
 mark:'<svg viewBox="0 0 200 60" preserveAspectRatio="none"><path d="M8 34C48 22 110 44 192 30" pathLength="1"/></svg>'
};
d.querySelectorAll('[data-hand]').forEach(el=>{const s=d.createElement('span');s.className='hand h-'+el.dataset.hand;s.setAttribute('aria-hidden','true');s.style.setProperty('--hd',el.dataset.hd||'1s');s.innerHTML=HAND[el.dataset.hand]||'';el.appendChild(s)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2,rootMargin:'0px 0px -8% 0px'});
const go=()=>{root.classList.add('ready');d.body.classList.remove('lock');d.querySelectorAll('.rv,[data-split],.cert,.sc-card,.igrid,[data-hand]').forEach(el=>io.observe(el))};
addEventListener('load',()=>setTimeout(go,rm?50:1500));
setTimeout(()=>{if(!root.classList.contains('ready'))go()},4000);
if(!rm){
 const L=[...d.querySelectorAll('[data-p]')];let tick=false;
 const f=()=>{L.forEach(l=>l.style.transform=`translate3d(0,${scrollY*l.dataset.p}px,0)`);tick=false};
 addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(f)}},{passive:true});
}

const sw=[];d.querySelectorAll('[data-scrub]').forEach(el=>{const tx=el.textContent.trim();el.setAttribute('aria-label',tx);el.textContent='';tx.split(' ').forEach(w=>{const s=d.createElement('span');s.className='scw';s.setAttribute('aria-hidden','true');s.textContent=w+' ';el.appendChild(s);sw.push(s)})});
const imp=d.getElementById('importancia'),sc=d.getElementById('sc');
if(!rm){
 const onS=()=>{const vh=innerHeight;
  if(imp){const r=imp.getBoundingClientRect(),p=Math.min(1,Math.max(0,-r.top/(r.height-vh))),k=Math.floor(p*1.15*sw.length);sw.forEach((w,i)=>w.classList.toggle('on',i<=k))}
  if(sc){const r=sc.parentElement.getBoundingClientRect(),p=Math.min(1,Math.max(0,(vh-r.top)/(vh*.8))),m=innerWidth<=768;sc.style.transform=`rotateX(${20*(1-p)}deg) scale(${m?.9+.1*p:1.05-.05*p})`}};
 let q=false;addEventListener('scroll',()=>{if(!q){q=true;requestAnimationFrame(()=>{onS();q=false})}},{passive:true});onS();
 if(matchMedia('(hover:hover)').matches)d.querySelectorAll('[data-tilt]').forEach(el=>{
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.setProperty('--mx',x*100+'%');el.style.setProperty('--my',y*100+'%');el.style.transform=`perspective(1000px) rotateX(${(.5-y)*4}deg) rotateY(${(x-.5)*5}deg)`});
  el.addEventListener('pointerleave',()=>{el.style.transform=''})});
}

if(sc){
 const NS='http://www.w3.org/2000/svg',y0=17,A=4,LW=46,nx=34;
 const st=d.createElementNS(NS,'svg');st.setAttribute('class','stitch');st.setAttribute('aria-hidden','true');
 const nd=d.createElementNS(NS,'svg');nd.setAttribute('class','ndl');nd.setAttribute('viewBox','0 0 60 120');nd.setAttribute('aria-hidden','true');
 nd.innerHTML='<path fill="#8D989E" fill-rule="evenodd" d="M36.5 117 4.5 14C3 6 8 2 12.5 2 17 2 21 6 19 14ZM10.6 6.5C8.9 6.5 8.2 8.3 9 10.6L12.6 21 14 20.4 12.6 10.2C12.4 7.9 11.8 6.5 10.6 6.5Z"/>';
 sc.appendChild(st);sc.appendChild(nd);
 const draw=()=>{const W=sc.clientWidth,f=x=>y0+A*Math.sin((x-nx)/LW*2),xe=W-44;let p='';
  for(let x=-6;x<=xe;x+=4)p+=(p?'L':'M')+x+' '+f(x).toFixed(1);
  const ye=f(xe),t='M'+xe+' '+ye.toFixed(1)+'C'+(xe+16)+' '+(ye+7)+' '+(xe+34)+' '+(ye-3)+' '+(xe+24)+' '+(ye-11)+'C'+(xe+14)+' '+(ye-19)+' '+(xe+4)+' '+(ye+2)+' '+(xe+36)+' '+(ye+9);
  st.setAttribute('viewBox','0 0 '+W+' 48');st.innerHTML='<path class="run" d="'+p+'"/><path d="'+t+'"/>';
  nd.style.left=(nx-5.4)+'px';nd.style.top=(y0-4.3)+'px'};
 draw();if(window.ResizeObserver)new ResizeObserver(draw).observe(sc);
}
const ft=d.querySelector('footer');if(ft)new IntersectionObserver(e=>ft.classList.toggle('paused',!e[0].isIntersecting)).observe(ft);

const bm=d.querySelector('.bmp'),b2=d.querySelector('.b2'),hero=d.getElementById('topo');
if(!rm){
 if(hero)addEventListener('pointermove',e=>{hero.style.setProperty('--bx',((e.clientX/innerWidth-.5)*-14).toFixed(1)+'px');hero.style.setProperty('--by',((e.clientY/innerHeight-.5)*-9).toFixed(1)+'px')},{passive:true});
 if(bm&&matchMedia('(hover:hover) and (pointer:fine)').matches){
  let tx=0,ty=0,x1=0,y1=0,x2=0,y2=0,raf=0,on=false;
  const loop=()=>{raf=0;x1+=(tx-x1)*.14;y1+=(ty-y1)*.14;x2+=(tx-x2)*.06;y2+=(ty-y2)*.06;
   bm.style.transform=`translate3d(${x1-85}px,${y1-85}px,0)`;b2.style.transform=`translate3d(${x2-160}px,${y2-160}px,0)`;
   if(Math.hypot(tx-x1,ty-y1)>.4||Math.hypot(tx-x2,ty-y2)>.4)raf=requestAnimationFrame(loop)};
  addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;if(!on){on=true;x1=x2=tx;y1=y2=ty;d.body.classList.add('bump-on')}if(!raf)raf=requestAnimationFrame(loop)},{passive:true});
  d.documentElement.addEventListener('pointerleave',()=>{on=false;d.body.classList.remove('bump-on')});
 }
}

if(matchMedia('(hover:hover) and (pointer:fine)').matches){
 const hl=d.createElement('div');hl.className='hlw';hl.setAttribute('aria-hidden','true');d.body.appendChild(hl);
 let px=0,py=0,hr=0;const W=/[\p{L}\p{N}'’-]/u;
 const find=()=>{hr=0;let n,o;
  if(d.caretPositionFromPoint){const p=d.caretPositionFromPoint(px,py);if(p){n=p.offsetNode;o=p.offset}}
  else if(d.caretRangeFromPoint){const r=d.caretRangeFromPoint(px,py);if(r){n=r.startContainer;o=r.startOffset}}
  if(!n||n.nodeType!==3||n.parentElement.closest('.btn,.pre,script,style,svg')){hl.classList.remove('on');return}
  const s=n.textContent;let a=o,b=o;while(a>0&&W.test(s[a-1]))a--;while(b<s.length&&W.test(s[b]))b++;
  if(a===b){hl.classList.remove('on');return}
  const r=d.createRange();r.setStart(n,a);r.setEnd(n,b);const c=r.getBoundingClientRect();
  if(px<c.left-3||px>c.right+3||py<c.top-3||py>c.bottom+3||c.width<2){hl.classList.remove('on');return}
  hl.style.width=(c.width+12)+'px';hl.style.height=(c.height+6)+'px';hl.style.transform=`translate3d(${c.left-6}px,${c.top-3}px,0)`;hl.classList.add('on')};
 addEventListener('pointermove',e=>{px=e.clientX;py=e.clientY;if(!hr)hr=requestAnimationFrame(find)},{passive:true});
 addEventListener('scroll',()=>hl.classList.remove('on'),{passive:true});
 d.documentElement.addEventListener('pointerleave',()=>hl.classList.remove('on'));
}

d.addEventListener('pointermove',e=>{const el=e.target.closest&&e.target.closest('.lg,.gp');if(!el)return;const r=el.getBoundingClientRect();el.style.setProperty('--mx',(e.clientX-r.left)+'px');el.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});

const sim=d.getElementById('sim');
if(sim){
 const ADD=40,PER=100,NEED=3,$=i=>d.getElementById(i);let total=0,shown=0;
 const pts=$('pts'),mp=sim.querySelector('.mp'),seals=[...sim.querySelectorAll('.seal')],cq=$('certq'),cs=$('cstate'),don=$('don'),rst=$('rst'),chip=$('chip'),fl=[...sim.querySelectorAll('.flow li')],live=$('live'),plus=$('plus');
 const setPts=to=>{const from=shown;if(rm){pts.textContent=to;shown=to;return}const t0=performance.now(),st=n=>{const k=Math.min(1,(n-t0)/600);shown=Math.round(from+(to-from)*(1-Math.pow(1-k,3)));pts.textContent=shown;if(k<1)requestAnimationFrame(st)};requestAnimationFrame(st)};
 const render=msg=>{const e=Math.min(NEED,Math.floor(total/PER)),done=e>=NEED,prog=done?1:(total%PER)/PER;
  mp.style.strokeDashoffset=327*(1-prog);mp.style.stroke=done?'#D6A52B':'';
  seals.forEach((s,i)=>s.classList.toggle('on',i<e));cq.classList.toggle('on',done);
  cs.textContent=done?'Liberado':'Bloqueado · faltam '+(NEED-e)+' selo'+(NEED-e>1?'s':'');
  const sg=done?3:e>0?2:total>0?1:-1;fl.forEach((li,i)=>li.classList.toggle('on',i<=sg));
  setPts(total);don.textContent=done?'Simulação concluída':'Simular uma doação';don.disabled=done;rst.hidden=total===0;
  chip.textContent=msg||'Dona Papuda · guia da rede';live.textContent=msg||''};
 don.addEventListener('click',()=>{const b=Math.floor(total/PER);total+=ADD;const a=Math.floor(total/PER);plus.classList.remove('go');void plus.offsetWidth;plus.classList.add('go');
  render(Math.min(NEED,a)>=NEED?'Certificado liberado':a>b?'Selo conquistado':'Boa! +'+ADD+' Grão Verde')});
 rst.addEventListener('click',()=>{total=0;render('')});
}
{const L=[...d.querySelectorAll('nav ul a')],M=L.map(a=>d.querySelector(a.getAttribute('href'))).filter(Boolean);
 if(M.length){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)L.forEach(a=>a.classList.toggle('act',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-35% 0px -55% 0px'});M.forEach(m=>o.observe(m))}
 d.querySelectorAll('.pgrid').forEach(el=>io.observe(el))}
})();
//teoria