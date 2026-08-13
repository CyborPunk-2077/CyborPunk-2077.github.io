  if(p.interaction==='align') return `<div class="align-grid">${'<i></i>'.repeat(6)}</div>`;
  if(p.interaction==='transfer') return `<div class="transfer-rail"></div><div class="transfer-chip" role="button" aria-label="Drag project context">PROJECT / MOVE</div>`;
  if(p.interaction==='wave') return `<div class="wave-cursor"></div><div class="wave-bars">${Array.from({length:32},(_,i)=>`<i style="--h:${18+((i*37)%78)}%"></i>`).join('')}</div>`;
  if(p.interaction==='nodes') return `<div class="node-map"><button style="left:10%;top:18%">IDENTITY</button><button style="left:42%;top:9%">CORE</button><button style="right:10%;top:26%">WORKFLOW</button><button style="left:22%;bottom:12%">JOBS</button><button style="right:24%;bottom:13%">OBSERVE</button></div>`;
  if(p.interaction==='compare') return `<div class="compare-handle" role="slider" aria-label="Comparison divider" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"></div>`;
  if(p.interaction==='scan') return `<div class="scan-lens"></div>`;
  return '';
}

function renderProject(slug){
  const p=projects[slug]; if(!p) return;
  const idx=projectOrder.indexOf(slug), next=projectOrder[(idx+1)%projectOrder.length];
  const host=$('#projectRoute');
  host.style.setProperty('--project-accent',p.accent); host.style.setProperty('--project-bg',p.bg); host.style.setProperty('--project-ink',p.ink);
  host.innerHTML=`
  <article class="project-shell" data-project-page="${slug}">
    <header class="project-top"><button data-back>← INDEX</button><span class="project-seq">${p.no} / 06 · ${p.domain}</span><button class="project-next" data-next-project="${next}">NEXT SYSTEM →</button></header>
    <section class="project-hero" data-number="${p.no}">
      <div class="project-hero-copy">
        <div class="project-kicker"><span>${p.status}</span><span>${p.year}</span></div>
        <h1 class="project-title">${p.display.split('\n').map((x,i)=>i?`<em>${x}</em>`:x).join('')}</h1>
        <p class="project-summary">${p.summary}</p>
        <div class="project-meta"><div><b>DOMAIN</b>${p.domain}</div><div><b>BUILD</b>${p.tech}</div><div><b>STATUS</b>${p.status}</div><div><b>INTERACTION</b>${p.interaction.toUpperCase()}</div></div>
      </div>
      <div class="project-stage">
        <div class="project-image-frame" data-project-media="${slug}"><img src="${p.image}" alt="${p.name} interface"/><div class="project-interaction">${interactionMarkup(p)}</div><div class="project-actions"><a href="${p.demo}" target="_blank" rel="noreferrer">DEMO ↗</a><a href="${p.source}" target="_blank" rel="noreferrer">SOURCE ↗</a></div></div>
      </div>
    </section>
    <section class="project-story"><span class="story-label">THE SYSTEM / WHY IT EXISTS</span><h2>NOT A FEATURE LIST.<br>A RESPONSE TO <em>FRICTION.</em></h2><div class="story-body"><p>${p.problem}</p><p>${p.build}</p></div><aside class="story-side">${p.side}</aside></section>
    <section class="blueprint"><button class="blueprint-toggle" type="button" data-blueprint><span>SYSTEM MAP / OPEN</span><span>＋</span></button><div class="blueprint-panel">${p.blueprint.map((b,i)=>`<div class="blueprint-cell"><span>0${i+1} / LAYER</span><b>${b}</b></div>`).join('')}</div></section>
    <footer class="project-footer"><span>NEXT / ${projects[next].no}</span><button data-next-project="${next}">${projects[next].name}<br>→</button></footer>
  </article>`;
  setupProjectInteraction(slug);
}

function setupProjectInteraction(slug){
  const p=projects[slug], frame=$('.project-image-frame'); if(!frame) return;
  if(p.interaction==='transfer'){
    const chip=$('.transfer-chip'), rail=$('.transfer-rail'); let drag=false,start=0,base=0;
    const move=e=>{if(!drag)return; const r=frame.getBoundingClientRect(); const x=clamp(e.clientX-r.left,40,r.width-130); chip.style.left=`${x}px`; rail.style.transform=`scaleX(${x/r.width})`;};
    chip.addEventListener('pointerdown',e=>{drag=true;chip.setPointerCapture(e.pointerId);document.body.classList.add('is-dragging')}); chip.addEventListener('pointermove',move); chip.addEventListener('pointerup',()=>{drag=false;document.body.classList.remove('is-dragging')});
  }
  if(p.interaction==='wave') frame.addEventListener('pointermove',e=>{const r=frame.getBoundingClientRect(); $('.wave-cursor').style.left=`${e.clientX-r.left}px`; $$('.wave-bars i').forEach((b,i)=>{const d=Math.abs((i/31)*r.width-(e.clientX-r.left)); b.style.height=`${clamp(100-d*.18,12,100)}%`;});});
  if(p.interaction==='nodes') $$('.node-map button').forEach(btn=>btn.addEventListener('click',()=>{$$('.node-map button').forEach(b=>b.classList.remove('is-on'));btn.classList.add('is-on')}));
  if(p.interaction==='compare'){
    const h=$('.compare-handle');let drag=false;const move=e=>{if(!drag)return;const r=frame.getBoundingClientRect();const pc=clamp((e.clientX-r.left)/r.width*100,5,95);h.style.left=pc+'%';h.setAttribute('aria-valuenow',Math.round(pc));frame.querySelector('img').style.filter=`contrast(${.75+pc/180}) saturate(${.65+pc/130}) sharpness(1)`;};h.addEventListener('pointerdown',e=>{drag=true;h.setPointerCapture(e.pointerId)});h.addEventListener('pointermove',move);h.addEventListener('pointerup',()=>drag=false);
  }
  if(p.interaction==='scan') frame.addEventListener('pointermove',e=>{const r=frame.getBoundingClientRect(); const l=$('.scan-lens');l.style.left=`${e.clientX-r.left}px`;l.style.top=`${e.clientY-r.top}px`;});
  $('[data-blueprint]')?.addEventListener('click',e=>{const panel=$('.blueprint-panel');panel.classList.toggle('is-open');e.currentTarget.lastElementChild.textContent=panel.classList.contains('is-open')?'−':'＋';e.currentTarget.firstElementChild.textContent=panel.classList.contains('is-open')?'SYSTEM MAP / CLOSE':'SYSTEM MAP / OPEN';});
}

function showView(route){
  const home=$('#homeRoute'), project=$('#projectRoute');
  if(route==='home'){home.hidden=false;project.hidden=true;document.body.dataset.route='home';state.activeProject=null;}
  else if(projects[route]){renderProject(route);home.hidden=true;project.hidden=false;document.body.dataset.route=route;state.activeProject=route;scrollTo(0,0);}
  state.route=route;
}

async function transitionTo(route, origin){
  if(state.transition || route===state.route) return;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){location.hash=route;showView(route);return;}
  state.transition=true;
  const stage=$('#transitionStage'), strips=$('.transition-strips',stage), word=$('.transition-word',stage), rule=$('.transition-rule',stage);
  const incoming=projects[route], outgoing=projects[state.route];
  const img=incoming?.image || outgoing?.image || 'https://abhishek-project-demos1.vercel.app/posters/revenueos.jpg';
  const label=incoming?.name || 'INDEX';
  stage.style.background=incoming?.bg || 'var(--paper)'; word.style.color=incoming?.ink || 'var(--ink)'; word.textContent=label;
  strips.innerHTML=Array.from({length:7},(_,i)=>`<div class="transition-strip" style="--i:${i};--fromY:${i%2?'-105%':'105%'}"><img src="${img}" alt=""/></div>`).join('');
  stage.classList.add('is-active');
  const stripEls=$$('.transition-strip',stage);
  stripEls.forEach((s,i)=>s.animate([{transform:`translateY(${i%2?'-105%':'105%'})`},{transform:'translateY(0%)'},{transform:`translateY(${i%2?'105%':'-105%'})`}],{duration:930,delay:i*32,easing:'cubic-bezier(.76,0,.24,1)',fill:'forwards'}));
  word.animate([{transform:'translateY(130%) skewY(8deg)'},{transform:'translateY(0) skewY(0)'},{transform:'translateY(-120%) skewY(-5deg)'}],{duration:880,delay:100,easing:'cubic-bezier(.16,1,.3,1)',fill:'forwards'});
  rule.animate([{transform:'scaleX(0)'},{transform:'scaleX(1)'},{transform:'scaleX(0)',transformOrigin:'right'}],{duration:700,delay:150,easing:'cubic-bezier(.16,1,.3,1)',fill:'forwards'});
  setTimeout(()=>{location.hash=route;showView(route);},450);
  await new Promise(r=>setTimeout(r,1080));
  stage.classList.remove('is-active'); strips.innerHTML=''; state.transition=false;
}

function setupRouting(){
  document.addEventListener('click',e=>{
    const open=e.target.closest('[data-open-project]'); if(open){e.preventDefault();transitionTo(open.dataset.openProject,open);return;}
    const back=e.target.closest('[data-back]'); if(back){e.preventDefault();transitionTo('home',back);return;}
    const next=e.target.closest('[data-next-project]'); if(next){e.preventDefault();transitionTo(next.dataset.nextProject,next);return;}
    const scroll=e.target.closest('[data-scroll]'); if(scroll){e.preventDefault(); if(state.route!=='home'){showView('home');history.replaceState(null,'','#home');requestAnimationFrame(()=>$('#'+scroll.dataset.scroll)?.scrollIntoView({behavior:'smooth'}));} else $('#'+scroll.dataset.scroll)?.scrollIntoView({behavior:'smooth'});}
  });
  addEventListener('hashchange',()=>{const r=location.hash.slice(1)||'home';if(r!==state.route && !state.transition)showView(projects[r]?r:'home')});
}

function setupDialogs(){
  const q=$('#quickDialog'), c=$('#commandDialog'), input=$('#commandInput'), results=$('#commandResults');
  $$('[data-quick]').forEach(b=>b.addEventListener('click',()=>q.showModal())); $('[data-close-quick]')?.addEventListener('click',()=>q.close());
  $$('[data-command]').forEach(b=>b.addEventListener('click',()=>{c.showModal();input.focus();renderCommands('')}));
  addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();c.showModal();input.focus();renderCommands('')} if(e.key==='Escape'&&c.open)c.close();});
  const cmds=[...projectOrder.map(k=>({label:projects[k].name,route:k})),{label:'Selected Work',scroll:'work'},{label:'Profile',scroll:'profile'},{label:'Contact',scroll:'contact'}];
  function renderCommands(val){const v=val.toLowerCase();results.innerHTML=cmds.filter(x=>x.label.toLowerCase().includes(v)).map((x,i)=>`<button class="command-result" data-cmd="${i}" data-route="${x.route||''}" data-scroll-cmd="${x.scroll||''}"><span>${x.label}</span><span>↗</span></button>`).join('');}
  input.addEventListener('input',()=>renderCommands(input.value)); results.addEventListener('click',e=>{const b=e.target.closest('.command-result');if(!b)return;c.close();if(b.dataset.route)transitionTo(b.dataset.route,b);else{showView('home');setTimeout(()=>$('#'+b.dataset.scrollCmd)?.scrollIntoView({behavior:'smooth'}),0)}});
}

function boot(){
  initArchive(); setupPointer(); setupHomeInteractions(); setupRouting(); setupDialogs();
  const route=location.hash.slice(1)||'home'; showView(projects[route]?route:'home');
}
boot();
