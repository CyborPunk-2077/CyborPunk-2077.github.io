const projects = {
  revenueos: {
    no:'01', name:'RevenueOS', display:'RevenueOS', accent:'#ff4a14', bg:'#fff7ee', ink:'#17120e',
    domain:'REVENUE OPERATIONS / CRM AUTOMATION', status:'HARDENING / NOT GA', year:'2026 — PRESENT',
    image:'https://abhishek-project-demos1.vercel.app/posters/revenueos.jpg',
    summary:'A unified revenue workspace built around the operational mess between leads, deals, communication, appointments, payments and follow-up.',
    problem:'Revenue work fragments easily across people, channels and tools. The system is designed around preserving customer context while turning follow-up into an explicit operational workflow.',
    build:'Multi-tenant revenue operations software with customer records, leads, opportunities, activities, communications, appointments, imports, analytics, payments and automation surfaces.',
    side:'Current repository documentation explicitly treats the product as not generally available and keeps externally gated capabilities honest until real provider evidence exists.',
    tech:'Python / TypeScript / PostgreSQL / Redis / Celery / React',
    blueprint:['CUSTOMER CONTEXT','WORKFLOW STATE','COMMUNICATIONS','ANALYTICS'],
    interaction:'align',
    demo:'https://abhishek-project-demos1.vercel.app/revenueos.html', source:'https://github.com/CyborPunk-2077/AI-RevenueOS'
  },
  viberant: {
    no:'02', name:'Viberant', display:'Viberant', accent:'#e6ff35', bg:'#181818', ink:'#f5f1e7',
    domain:'LOCAL-FIRST DEVELOPER WORKSPACE', status:'BUILT / LOCAL-FIRST', year:'2026 — PRESENT',
    image:'https://abhishek-project-demos1.vercel.app/posters/viberant.jpg',
    summary:'A local-first developer workspace for discovering projects, launching AI coding tools and editors in context, and handling save/GitHub flows without lying about state.',
    problem:'Developer context is repeatedly lost between projects, local tools, accounts and deployment surfaces. Viberant treats the project folder as the center rather than a cloud dashboard.',
    build:'Desktop/local workspace with project discovery, tool launching, account profiles, explicit offline states and Git/GitHub-oriented save workflows.',
    side:'The project favors explicit local state and failure handling. Offline work is not falsely presented as uploaded or synchronized.',
    tech:'JavaScript / Node.js / Electron / Git / GitHub',
    blueprint:['DISCOVER PROJECT','OPEN IN TOOL','PRESERVE CONTEXT','SAVE / GIT'],
    interaction:'transfer', demo:'https://abhishek-project-demos1.vercel.app/viberant.html', source:'https://github.com/CyborPunk-2077/Viberant'
  },
  receptionflow: {
    no:'03', name:'ReceptionFlow', display:'Reception\nFlow', accent:'#2e39ff', bg:'#e9ecff', ink:'#111328',
    domain:'AI VOICE RECEPTIONIST', status:'PROTOTYPE', year:'2026 — PRESENT',
    image:'https://abhishek-project-demos1.vercel.app/posters/receptionflow.jpg',
    summary:'A config-driven AI receptionist built around approved business knowledge, callback capture, routing, escalation and Hindi-English voice interaction.',
    problem:'Phone workflows combine latency, interruption, speech recognition, business rules and escalation. The prototype treats the call as a time-critical pipeline rather than a chatbot with audio.',
    build:'Telephony/STT/LLM/TTS-oriented pipeline with barge-in, adaptive VAD, mock-call simulation, diagnostics and automated validation.',
    side:'The prototype core and test-console path work end to end; live production accounts and external provider wiring remain a separate deployment concern.',
    tech:'Node.js / WebSockets / Exotel / Sarvam / OpenAI / Anthropic',
    blueprint:['CALL SIGNAL','SPEECH','INTENT','ACTION'],
    interaction:'wave', demo:'https://abhishek-project-demos1.vercel.app/receptionflow.html', source:'https://github.com/CyborPunk-2077/AI-VOICE-RECEPTIONIST'
  },
  forgeos: {
    no:'04', name:'ForgeOS', display:'ForgeOS', accent:'#ff4a14', bg:'#d8d3c7', ink:'#11110f',
    domain:'ENGINEERING PLATFORM ARCHITECTURE', status:'PLATFORM ARCHITECTURE', year:'2026',
    image:'https://abhishek-project-demos1.vercel.app/posters/forgeos.jpg',
    summary:'An engineering-platform architecture for the reusable foundation beneath multiple software products: identity, organizations, workflows, billing, jobs, integrations and observability.',
    problem:'Repeated SaaS infrastructure becomes a tax when every product rebuilds the same foundations. ForgeOS explores the architecture of a common platform layer.',
    build:'Modular-monolith / clean-architecture platform concept spanning auth, organizations, RBAC, AI framework, workflows, notifications, billing, analytics, audit, plugins, storage, jobs, integrations and monitoring.',
    side:'This is presented as architecture and engineering-platform work, not as a claim of external production adoption.',
    tech:'TypeScript / Node.js / NestJS / PostgreSQL / Redis / Prisma / Docker',
    blueprint:['IDENTITY','WORKFLOW','RUNTIME','OBSERVABILITY'],
    interaction:'nodes', demo:'https://abhishek-project-demos1.vercel.app/forgeos.html', source:'https://github.com/CyborPunk-2077/ArchitectX'
  },
  visionance: {
    no:'05', name:'Visionance', display:'Visionance', accent:'#ff4a14', bg:'#0f1111', ink:'#f2efe6',
    domain:'GPU VIDEO ENHANCEMENT', status:'DESKTOP / GPU', year:'2026',
    image:'https://abhishek-project-demos1.vercel.app/posters/visionance.jpg',
    summary:'A desktop GPU media experiment built around staged real-time video enhancement and an immediate before/after evaluation workflow.',
    problem:'Enhancement workflows are difficult to judge when processing is hidden behind export cycles. The project makes the pipeline visible and comparative while keeping playback central.',
    build:'A four-stage WebGL2 enhancement pipeline—restore, reconstruct, sharpen and finish—with split comparison, adaptive quality and desktop export workflows.',
    side:'The interactive comparison here explains the product idea; it is not presented as an objective quality benchmark.',
    tech:'WebGL2 / JavaScript / Electron / FFmpeg',
    blueprint:['RESTORE','RECONSTRUCT','SHARPEN','FINISH'],
    interaction:'compare', demo:'https://abhishek-project-demos1.vercel.app/visionance.html', source:'https://github.com/CyborPunk-2077/Upscalia'
  },
  visionextract: {
    no:'06', name:'VisionExtract', display:'Vision\nExtract', accent:'#2e39ff', bg:'#f4f2e9', ink:'#121212',
    domain:'ARTICLE IMAGE EXTRACTION PIPELINE', status:'BUILT', year:'2025 — PRESENT',
    image:'https://abhishek-project-demos1.vercel.app/posters/visionextract.jpg',
    summary:'A multi-stage article-image extraction pipeline that combines complementary parsers, retries and validation to produce structured image datasets.',
    problem:'Article pages are inconsistent and image selection is noisy. The pipeline uses staged extraction and validation rather than trusting one parser.',
    build:'Trafilatura → Newspaper3k → BeautifulSoup with retry and validation mechanisms, used to process large article collections into structured image data.',
    side:'Resume-reported results include ~93% precision and 10K+ processed articles.',
    tech:'Python / Trafilatura / Newspaper3k / BeautifulSoup / Docker',
    blueprint:['FETCH','CANDIDATES','VALIDATE','STRUCTURE'],
    interaction:'scan', demo:'https://abhishek-project-demos1.vercel.app/visionextract.html', source:'https://github.com/CyborPunk-2077/VisionExtract'
  }
};
const projectOrder = Object.keys(projects);
const archive = [
  ['AI-Code-Assistant','AI','2025'],['Splitwise','SYSTEMS','2024'],['Cube-Solver','AI','2024'],['Quizzer-App','TOOLS','2024'],['Witcher-Card-Game','EXPERIMENTS','2024'],['Virtual-Gesture-Mouse','AI','2024'],['Counter-Strike-Simulation','EXPERIMENTS','2024'],['CyborPunk-2077.github.io','TOOLS','2025'],['article-scraper','TOOLS','2025'],['job-matching','AI','2025'],['image-scrapper','TOOLS','2025'],['Phishing-attack-simulation','EXPERIMENTS','2025'],['CodeSage-AI','AI','2025'],['RingZeroGuard','SYSTEMS','2025'],['VisionExtract','AI','2025'],['Simulon','EXPERIMENTS','2025'],['RevenueOS','SYSTEMS','2026'],['ReceptionFlow','AI','2026'],['Upscalia','TOOLS','2026'],['ArchitectX','SYSTEMS','2026'],['ValoVault','TOOLS','2026'],['Hermes-CSetup','TOOLS','2026'],['ERP-Business','SYSTEMS','2026'],['Viberant','TOOLS','2026']
];

const state = { route:'home', activeProject:null, pointer:{x:innerWidth/2,y:innerHeight/2,px:innerWidth/2,py:innerHeight/2,speed:0}, transition:false };
const $ = (q, el=document) => el.querySelector(q);
const $$ = (q, el=document) => [...el.querySelectorAll(q)];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

function initArchive(){
  const list=$('#archiveList'); if(!list) return;
  list.innerHTML=archive.map((x,i)=>`<div class="archive-item" data-cat="${x[1].toLowerCase()}"><span>${String(i+1).padStart(2,'0')}</span><b>${x[0]}</b><span>${x[1]}</span><em>${x[2]}</em></div>`).join('');
}

function setupPointer(){
  const p=$('#pointer'), preview=$('#preview'), pImg=$('#preview img');
  addEventListener('pointermove',e=>{
    const dx=e.clientX-state.pointer.px, dy=e.clientY-state.pointer.py;
    state.pointer.speed=Math.hypot(dx,dy);
    Object.assign(state.pointer,{x:e.clientX,y:e.clientY,px:e.clientX,py:e.clientY});
    document.documentElement.style.setProperty('--px',`${e.clientX}px`);
    document.documentElement.style.setProperty('--py',`${e.clientY}px`);
    document.documentElement.style.setProperty('--speed',state.pointer.speed.toFixed(2));
    if(p) p.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
    if(preview.classList.contains('is-on')) preview.style.transform=`translate(${clamp(e.clientX+170,180,innerWidth-180)}px,${clamp(e.clientY,130,innerHeight-130)}px) translate(-50%,-50%)`;
  });
  document.addEventListener('pointerover',e=>{
    const interactive=e.target.closest('a,button,.archive-item,.project-image-frame');
    document.body.classList.toggle('is-hovering',!!interactive);
    if(p) $('span',p).textContent=interactive?.dataset?.openProject?'OPEN':interactive?.tagName==='A'?'GO':'SELECT';
    const row=e.target.closest('[data-project]');
    if(row && projects[row.dataset.project]){pImg.src=projects[row.dataset.project].image;preview.classList.add('is-on')}
  });
  document.addEventListener('pointerout',e=>{ if(e.target.closest('[data-project]')) preview.classList.remove('is-on'); });
}

function setupHomeInteractions(){
  $$('.media-card').forEach((el,i)=>el.addEventListener('pointermove',e=>{
    const r=el.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width-.5; const y=(e.clientY-r.top)/r.height-.5;
    el.querySelector('img').style.transform=`scale(1.06) translate(${x*-12}px,${y*-8}px)`;
  }));
  $$('.media-card').forEach(el=>el.addEventListener('pointerleave',()=>el.querySelector('img').style.transform=''));
  $$('.capability-field button').forEach(btn=>{
    btn.addEventListener('pointerenter',()=>{ $('#capabilityReadout').innerHTML=`<span>${btn.dataset.cap}</span><b>${btn.dataset.related}</b>`; });
  });
  $$('.archive-toolbar button').forEach(btn=>btn.addEventListener('click',()=>{
    $$('.archive-toolbar button').forEach(b=>b.classList.toggle('is-active',b===btn));
    const f=btn.dataset.filter; $$('.archive-item').forEach(x=>{x.style.display=f==='all'||x.dataset.cat===f?'grid':'none'});
  }));
}

function interactionMarkup(p){
