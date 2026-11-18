(()=>{
const d=document,I='assets/png/',rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const A=(h,i)=>`<div class="sx-a" style="--i:${i}">${h}</div>`;
const M=(p,t)=>`<div class="sx-m"><svg viewBox="0 0 120 120"><circle class="t" cx="60" cy="60" r="52"/><circle class="p" cx="60" cy="60" r="52" style="--o:${327*(1-p)}"/></svg><b>${t}</b><small>Grão Verde</small></div>`;
const top=(a,b)=>`<div class="sx-row"><div><div class="sx-sm">${a}</div><div class="sx-h">${b}</div></div><img src="${I}emblema-grao-verde.png" width="34" height="34" alt="" style="object-fit:contain"></div>`;
const seals=n=>`<div class="sx-seals">${[1,2,3].map(i=>`<img src="${I}mao-${i}.png" class="${i>n?'off':''}" alt="">`).join('')}</div>`;
const tr=(a,b,c,s)=>`<div class="sx-tr"><b>${a}</b><span>${b}</span><span class="sx-sm">${c}</span><span class="sx-chip ${s?'':'g'}">${s?'Recebida':'A caminho'}</span></div>`;
const side=(n,l)=>`<div class="sx-side"><img src="${I}logo-grao-a-grao.png" alt="">${l.map((x,i)=>`<span class="${i==n?'s':''}">${x}</span>`).join('')}</div>`;
const donor=[
{t:'Início',h:[top('Olá,','Padaria Sol'),M(.8,'240'),'<div class="sx-card"><div class="sx-row"><b>Selos</b><span class="sx-chip">2 de 3</span></div><div class="sx-bar" style="margin-top:9px"><i style="--w:66%"></i></div></div>','<div class="sx-card sx-row"><span>Pão · 15 kg</span><span class="sx-chip">Recebida</span></div>','<div class="sx-btn">Nova doação</div>']},
{t:'Doar',h:['<div class="sx-h">Nova doação</div>','<div class="sx-sm">O que você vai doar?</div><div class="sx-chips" style="margin-top:6px"><span class="s">Arroz</span><span>Feijão</span><span>Pão</span><span>Leite</span></div>','<div class="sx-card sx-row"><span>Quantidade</span><b>12 kg</b></div>','<div class="sx-card"><div class="sx-sm">Destino</div><b>Lar Esperança</b></div>','<div class="sx-btn">Registrar doação</div>']},
{t:'Enviada',h:['<div class="sx-ok">✓</div>','<div class="sx-h" style="text-align:center">Doação registrada</div>','<div class="sx-sm" style="text-align:center">Você ganha <b style="color:#305C43">+40 Grão Verde</b> quando a instituição confirmar.</div>','<div class="sx-card sx-steps"><div><b>✓</b>Registrada</div><div><b>✓</b>A caminho</div><div class="n"><b>3</b>Recebida</div></div>']},
{t:'Selos',h:['<div class="sx-h">Seus selos</div>',seals(2),'<div class="sx-card sx-row"><div><b>Amigo da ONG</b><div class="sx-sm">Faltam 1 selo</div></div><span class="sx-chip g">Bloqueado</span></div>','<div class="sx-bar"><i style="--w:66%"></i></div>']}];
const recv=[
{t:'Início',h:[top('Bem-vindo,','Lar Esperança'),'<div class="sx-g2 sx-row" style="gap:10px"><div class="sx-card" style="flex:1"><div class="sx-sm">A caminho</div><div class="sx-h">3</div></div><div class="sx-card" style="flex:1"><div class="sx-sm">Recebidas</div><div class="sx-h">12</div></div></div>','<div class="sx-card sx-row"><span>Padaria Sol · Arroz</span><span class="sx-chip g">A caminho</span></div>','<div class="sx-card sx-row"><span>Mercado Bom · Leite</span><span class="sx-chip g">A caminho</span></div>']},
{t:'Doação',h:['<div class="sx-h">Doação a caminho</div>','<div class="sx-card"><div class="sx-sm">De</div><b>Padaria Sol</b><div class="sx-sm" style="margin-top:8px">Itens</div><b>Arroz · 12 kg</b></div>','<div class="sx-steps sx-card"><div><b>✓</b>Registrada</div><div><b>✓</b>A caminho</div><div class="n"><b>3</b>Recebida</div></div>','<div class="sx-btn">Confirmar recebimento</div>']},
{t:'Recebida',h:['<div class="sx-ok">✓</div>','<div class="sx-h" style="text-align:center">Recebimento confirmado</div>','<div class="sx-sm" style="text-align:center">O doador já foi reconhecido com Grão Verde.</div>','<div class="sx-card sx-row"><span>Comprovante #0231</span><span class="sx-chip">Guardado</span></div>']},
{t:'Histórico',h:['<div class="sx-h">Histórico</div>','<div class="sx-card sx-row"><span>Arroz · 12 kg</span><span class="sx-chip">Recebida</span></div>','<div class="sx-card sx-row"><span>Pão · 15 kg</span><span class="sx-chip">Recebida</span></div>','<div class="sx-card sx-row"><span>Feijão · 8 kg</span><span class="sx-chip">Recebida</span></div>','<div class="sx-btn o">Exportar registro</div>']}];
const mac=[
{t:'Login',c:'sx-lg',h:`<div><img src="${I}logo-grao-a-grao_offwhite.png" alt=""><h4>Cada grão conta.</h4><p>Registre, acompanhe e reconheça doações de alimentos.</p></div><div><div class="sx-h">Entrar</div><div class="sx-tg"><span class="s">Doador</span><span>Receptor</span></div><div class="sx-in2">E-mail da instituição</div><div class="sx-in2">Senha</div><div class="sx-btn">Entrar</div><div class="sx-sm" style="text-align:center">Ainda não tem conta? <b style="color:#305C43">Criar conta</b></div></div>`},
{t:'Painel do doador',c:'sx-dash',h:side(0,['Painel','Doar','Histórico','Selos'])+`<div class="sx-main"><div class="sx-h" style="font-size:26px">Olá, Padaria Sol</div><div class="sx-g3"><div class="sx-card"><div class="sx-sm">Grão Verde</div><b>240</b></div><div class="sx-card"><div class="sx-sm">Selos</div><b>2/3</b></div><div class="sx-card"><div class="sx-sm">Doações</div><b>6</b></div></div><div class="sx-card">${tr('Arroz · 12 kg','Lar Esperança','Hoje',0)}${tr('Pão · 15 kg','Casa do Idoso','Ontem',1)}${tr('Feijão · 8 kg','Lar Esperança','12 nov',1)}</div></div>`},
{t:'Painel do receptor',c:'sx-dash',h:side(0,['Recebimentos','Histórico','Comprovantes'])+`<div class="sx-main"><div class="sx-h" style="font-size:26px">Lar Esperança</div><div class="sx-g3"><div class="sx-card"><div class="sx-sm">A caminho</div><b>3</b></div><div class="sx-card"><div class="sx-sm">Recebidas</div><b>12</b></div><div class="sx-card"><div class="sx-sm">Comprovantes</div><b>12</b></div></div><div class="sx-card"><div class="sx-row" style="padding:8px 4px"><span><b>Padaria Sol</b> · Arroz 12 kg</span><span class="sx-btn" style="padding:8px 18px">Confirmar</span></div><div class="sx-row" style="padding:8px 4px;border-top:1px solid var(--line)"><span><b>Mercado Bom</b> · Leite 20 L</span><span class="sx-btn o" style="padding:8px 18px">Confirmar</span></div></div></div>`},
{t:'Certificado',c:'sx-cert',h:`<div><div><img class="l" src="${I}logo-grao-a-grao.png" alt=""><span class="sx-sm">Certificado de reconhecimento</span><h4>Amigo da ONG</h4><p class="sx-sm">Por registrar e validar doações com transparência, concedemos este título a</p><div class="nm">Padaria Sol</div><span class="sx-chip g">Documento demonstrativo — sem validade</span></div></div>`}];
const build=(el,list,o)=>{
 const box=d.createElement('div');box.className='sx-box '+o.cls;const inn=d.createElement('div');inn.className='sx-in';
 inn.innerHTML=list.map(s=>`<div class="sx-s ${s.c||''}">${o.mac?s.h:s.h.map((x,i)=>A(x,i)).join('')}</div>`).join('');
 box.appendChild(inn);(o.lid||el).appendChild(box);
 const tabs=d.createElement('div');tabs.className='sx-tabs';tabs.setAttribute('role','tablist');
 tabs.innerHTML=list.map((s,i)=>`<button type="button" role="tab">${s.t}</button>`).join('');el.appendChild(tabs);
 const S=[...inn.children],B=[...tabs.children];let k=-1,tm,vis=false,hold=false;
 const fit=()=>{const w=box.clientWidth,s=w/o.w;inn.style.transform=`scale(${s})`;box.style.height=o.h*s+'px'};
 const set=i=>{k=(i+list.length)%list.length;S.forEach((x,j)=>x.classList.toggle('on',j==k));B.forEach((x,j)=>{x.classList.toggle('on',j==k);x.setAttribute('aria-selected',j==k)})};
 const run=()=>{clearInterval(tm);if(!rm&&vis&&!hold)tm=setInterval(()=>set(k+1),o.ms||3400)};
 B.forEach((b,i)=>b.addEventListener('click',()=>{set(i);run()}));
 box.addEventListener('pointerenter',()=>{hold=true;run()});box.addEventListener('pointerleave',()=>{hold=false;run()});
 new IntersectionObserver(e=>{vis=e[0].isIntersecting;run()},{threshold:.3}).observe(box);
 if(window.ResizeObserver)new ResizeObserver(fit).observe(box);fit();set(0);
};
const P=d.getElementById('sx-donor'),R=d.getElementById('sx-recv'),Mc=d.getElementById('sx-mac');
if(P)build(P,donor,{cls:'sx-ph',w:300,h:540});
if(R)build(R,recv,{cls:'sx-ph',w:300,h:540,ms:3800});
if(Mc)build(Mc,mac,{cls:'sx-mc',w:960,h:600,mac:1,lid:Mc.querySelector('.sx-lid'),ms:4200});
const f=d.getElementById('sx-frame'),r=d.getElementById('sx-reset');
if(f&&r)r.addEventListener('click',()=>{f.src='demo/index.html?reset=1&t='+Date.now()});
})();
