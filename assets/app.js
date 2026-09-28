const STAGES=[
  {id:"source",label:"원본",en:"SOURCE"},
  {id:"extract",label:"추출",en:"EXTRACT"},
  {id:"structure",label:"구조화",en:"STRUCTURE"},
  {id:"visualize",label:"표현",en:"VISUALIZE"},
  {id:"use",label:"활용",en:"USE"},
  {id:"package",label:"패키지",en:"PACKAGE"}
];

const BLOCKS={
  source:[["book","책 / PDF"],["paper","논문"],["lecture","강의 / 영상"],["meeting","회의록"],["article","기사 / 리포트"],["interview","인터뷰"],["manual","매뉴얼"],["data","데이터 / 표"]],
  extract:[["summary","요약"],["keyideas","핵심 아이디어"],["insights","인사이트"],["evidence","근거 / 데이터"],["quotes","핵심 문장"],["questions","질문거리"],["actions","행동 항목"],["terms","용어"]],
  structure:[["mindmap","마인드맵"],["concept","개념맵"],["timeline","타임라인"],["framework","프레임워크"],["flow","플로차트"],["compare","비교표"],["outline","아웃라인"],["matrix","매트릭스"]],
  visualize:[["sketch","스케치노트"],["info","인포그래픽"],["diagram","다이어그램"],["onepage","원페이지"],["poster","포스터"],["cards","카드"],["table","표"],["story","스토리보드"]],
  use:[["learn","이해"],["remember","암기"],["quiz","퀴즈"],["teach","설명 / Teach-back"],["present","발표"],["decide","의사결정"],["apply","실행"],["create","콘텐츠 제작"]],
  package:[["studykit","학습 키트"],["brief","브리핑"],["deck","발표자료"],["workbook","워크북"],["playbook","실행 매뉴얼"],["cheatsheet","치트시트"],["report","리포트"],["contentkit","콘텐츠 키트"]]
};

const RECIPES=[
  ["book-onepage","독서","책 한 권 핵심 한 장","책을 읽고 전체 논리와 핵심 개념을 한눈에 보고 싶을 때","이해","중급",["book","keyideas","mindmap","sketch","teach","cheatsheet"],"핵심 개념 관계가 보이는 시각 학습노트"],
  ["book-action","독서","자기계발서 실행 전환","읽고 끝내지 않고 실제 행동으로 옮길 때","실행","중급",["book","actions","framework","onepage","apply","playbook"],"원칙 → 행동 → 체크리스트로 이어지는 실행 매뉴얼"],
  ["book-memory","독서","시험형 독서 노트","책 내용을 오래 기억하고 복습할 때","암기","고급",["book","terms","concept","cards","remember","studykit"],"개념 카드와 복습 루프가 포함된 학습 키트"],
  ["paper-brief","연구","논문 10분 브리핑","긴 논문을 빠르게 파악해야 할 때","이해","중급",["paper","summary","outline","diagram","present","brief"],"연구 질문·방법·결과·한계를 압축한 브리핑"],
  ["paper-map","연구","논문 구조 지도","연구 주장과 근거의 연결을 파악할 때","이해","고급",["paper","evidence","concept","diagram","learn","report"],"주장과 근거가 연결된 논문 구조도"],
  ["paper-compare","연구","복수 논문 비교","여러 논문의 차이와 공통점을 비교할 때","비교","고급",["paper","insights","matrix","table","decide","report"],"연구별 가설·방법·결과·한계 비교표"],
  ["lecture-kit","학습","강의 복습 패키지","강의 후 시험 대비 자료가 필요할 때","암기","고급",["lecture","keyideas","outline","cards","quiz","studykit"],"요약·암기카드·퀴즈가 묶인 복습 패키지"],
  ["lecture-teach","학습","강의 Teach-back","배운 내용을 자기 말로 설명하며 확인할 때","이해","중급",["lecture","questions","concept","diagram","teach","workbook"],"설명 질문과 빈칸이 포함된 자기점검 워크북"],
  ["meeting-action","업무","회의를 실행계획으로","회의록에서 결정과 할 일을 빠르게 정리할 때","실행","중급",["meeting","actions","flow","table","apply","playbook"],"담당자·기한·의존성이 정리된 실행 목록"],
  ["meeting-brief","업무","회의 1페이지 브리핑","불참자에게 회의 내용을 빠르게 전달할 때","발표","초급",["meeting","summary","outline","onepage","present","brief"],"결정사항과 다음 단계 중심의 1페이지 브리핑"],
  ["article-check","정보","기사 핵심 주장 점검","긴 기사·리포트의 주장과 근거를 분리할 때","의사결정","중급",["article","evidence","framework","table","decide","brief"],"사실·주장·근거·불확실성을 나눈 판단 자료"],
  ["trend-map","정보","트렌드 맵","여러 기사에서 반복되는 흐름을 볼 때","이해","중급",["article","insights","mindmap","info","learn","report"],"트렌드·원인·영향을 연결한 시각 리포트"],
  ["interview-insight","리서치","인터뷰 인사이트 맵","사용자 인터뷰에서 패턴을 찾을 때","의사결정","고급",["interview","insights","framework","cards","decide","report"],"니즈·문제·행동 패턴이 정리된 인사이트 리포트"],
  ["interview-content","콘텐츠","인터뷰 콘텐츠 키트","인터뷰를 다양한 SNS 콘텐츠로 재가공할 때","콘텐츠","중급",["interview","quotes","outline","story","create","contentkit"],"카드뉴스·숏폼·게시물 아이디어 패키지"],
  ["manual-cheat","업무","매뉴얼 치트시트","복잡한 업무 절차를 빠르게 참고할 때","실행","중급",["manual","actions","flow","diagram","apply","cheatsheet"],"절차와 예외가 압축된 현장용 치트시트"],
  ["data-story","데이터","데이터 스토리","표나 수치를 이해하기 쉬운 메시지로 바꿀 때","발표","고급",["data","insights","framework","info","present","deck"],"핵심 수치 → 의미 → 시사점으로 이어지는 발표 구조"],
  ["data-decision","데이터","의사결정 매트릭스","여러 선택지를 데이터로 비교할 때","의사결정","고급",["data","evidence","matrix","table","decide","report"],"기준·가중치·근거가 분리된 비교 리포트"],
  ["plan-roadmap","기획","기획안을 로드맵으로","아이디어를 실행 가능한 순서로 바꿀 때","실행","고급",["article","actions","timeline","diagram","apply","playbook"],"단계·마일스톤·리스크가 포함된 실행 로드맵"],
  ["content-series","콘텐츠","한 자료로 콘텐츠 시리즈","하나의 원본을 여러 포맷으로 확장할 때","콘텐츠","중급",["article","keyideas","outline","story","create","contentkit"],"롱폼·카드·숏폼으로 재사용 가능한 콘텐츠 키트"],
  ["faq-maker","업무","FAQ 자동 설계","문서에서 자주 묻는 질문 형태로 재구성할 때","이해","초급",["manual","questions","outline","cards","learn","brief"],"질문-답변 중심의 빠른 안내서"],
  ["timeline-history","학습","역사 타임라인","사건의 시간 흐름과 인과를 이해할 때","이해","중급",["book","summary","timeline","info","learn","cheatsheet"],"시간순 사건과 원인이 연결된 타임라인"],
  ["compare-products","의사결정","제품 비교 프레임","여러 제품·서비스를 기준별로 비교할 때","의사결정","중급",["article","evidence","compare","table","decide","report"],"기준별 장단점과 근거가 한눈에 보이는 비교표"],
  ["presentation-fast","발표","10분 발표 만들기","자료를 짧은 발표 흐름으로 재구성할 때","발표","중급",["paper","keyideas","outline","diagram","present","deck"],"오프닝-핵심-근거-결론으로 이어지는 슬라이드 구조"],
  ["socratic-study","학습","소크라테스식 학습","정답을 바로 보지 않고 질문으로 이해할 때","이해","고급",["book","questions","concept","cards","teach","workbook"],"단계별 질문과 자기설명이 포함된 학습 워크북"]
].map(r=>({id:r[0],scenario:r[1],title:r[2],desc:r[3],goal:r[4],level:r[5],path:r[6],outcome:r[7]}));

const STYLE_DATA=`
minimalism-and-swiss-style|Minimalism & Swiss Style|active
neumorphism|Neumorphism|active
glassmorphism|Glassmorphism|active
brutalism|Brutalism|active
3d-and-hyperrealism|3D & Hyperrealism|active
vibrant-and-block-based|Vibrant & Block-based|active
dark-mode-oled|Dark Mode (OLED)|active
accessible-and-ethical|Accessible & Ethical|active
claymorphism|Claymorphism|active
aurora-ui|Aurora UI|active
retro-futurism|Retro-Futurism|active
flat-design|Flat Design|active
skeuomorphism|Skeuomorphism|active
liquid-glass|Liquid Glass|active
motion-driven|Motion-Driven|active
micro-interactions|Micro-interactions|active
inclusive-design|Inclusive Design|active
zero-interface|Zero Interface|active
soft-ui-evolution|Soft UI Evolution|active
data-dense-dashboard|Data-Dense Dashboard|active
heat-map-and-heatmap-style|Heat Map & Heatmap Style|supplemental
executive-dashboard|Executive Dashboard|supplemental
real-time-monitoring|Real-Time Monitoring|supplemental
drill-down-analytics|Drill-Down Analytics|supplemental
comparative-analysis-dashboard|Comparative Analysis Dashboard|supplemental
predictive-analytics|Predictive Analytics|supplemental
user-behavior-analytics|User Behavior Analytics|supplemental
financial-dashboard|Financial Dashboard|supplemental
sales-intelligence-dashboard|Sales Intelligence Dashboard|supplemental
neubrutalism|Neubrutalism|active
bento-box-grid|Bento Box Grid|active
y2k-aesthetic|Y2K Aesthetic|active
cyberpunk-ui|Cyberpunk UI|active
organic-biophilic|Organic Biophilic|active
ai-native-ui|AI-Native UI|active
memphis-design|Memphis Design|active
vaporwave|Vaporwave|supplemental
dimensional-layering|Dimensional Layering|active
exaggerated-minimalism|Exaggerated Minimalism|active
kinetic-typography|Kinetic Typography|active
parallax-storytelling|Parallax Storytelling|active
swiss-modernism-2-0|Swiss Modernism 2.0|supplemental
hud-sci-fi-fui|HUD / Sci-Fi FUI|active
pixel-art|Pixel Art|active
spatial-ui-visionos|Spatial UI (VisionOS)|active
e-ink-paper|E-Ink / Paper|active
gen-z-chaos-maximalism|Gen Z Chaos / Maximalism|active
biomimetic-organic-2-0|Biomimetic / Organic 2.0|active
anti-polish-raw-aesthetic|Anti-Polish / Raw Aesthetic|active
tactile-digital-deformable-ui|Tactile Digital / Deformable UI|active
nature-distilled|Nature Distilled|active
interactive-cursor-design|Interactive Cursor Design|active
voice-first-multimodal|Voice-First Multimodal|active
3d-product-preview|3D Product Preview|active
gradient-mesh-aurora-evolved|Gradient Mesh / Aurora Evolved|supplemental
editorial-grid-magazine|Editorial Grid / Magazine|active
chromatic-aberration-rgb-split|Chromatic Aberration / RGB Split|supplemental
vintage-analog-retro-film|Vintage Analog / Retro Film|active
bauhaus|Bauhaus|active
minimalist-monochrome|Minimalist Monochrome|supplemental
modern-dark-cinema-mobile|Modern Dark (Cinema Mobile)|supplemental
saas-mobile-high-tech-boutique|SaaS Mobile (High-Tech Boutique)|supplemental
terminal-cli-mobile|Terminal CLI (Mobile)|supplemental
kinetic-brutalism-mobile|Kinetic Brutalism (Mobile)|supplemental
flat-design-mobile-touch-first|Flat Design Mobile (Touch-First)|supplemental
material-you-md3-mobile|Material 3 Expressive (Mobile)|active
neo-brutalism-mobile|Neo Brutalism (Mobile)|supplemental
bold-typography-mobile-poster|Bold Typography (Mobile Poster)|supplemental
academia-scholarly-mobile|Academia (Scholarly Mobile)|supplemental
cyberpunk-mobile-hud|Cyberpunk Mobile HUD|supplemental
bitcoin-defi-mobile|Bitcoin DeFi (Mobile)|supplemental
claymorphism-mobile|Claymorphism (Mobile)|supplemental
enterprise-saas-mobile|Enterprise SaaS (Mobile)|supplemental
sketch-hand-drawn-mobile|Sketch Hand-Drawn (Mobile)|supplemental
neumorphism-mobile|Neumorphism (Mobile)|supplemental
fluent-2|Fluent 2|active
shopify-polaris|Shopify Polaris|active
spectrum-design-system|Adobe Spectrum|active
spectrum-2|Spectrum 2|supplemental
`;

const STYLE_CATALOG=STYLE_DATA.trim().split("\n").map(line=>{
  const [id,name,status]=line.split("|");
  return {id,name,status};
});

const FAMILIES={
  minimal:{label:"Minimal / Swiss",desc:"여백, 명료한 계층, 기능 중심",a:"#f7f7f4",b:"#ffffff",text:"#151515",radius:"2px"},
  glass:{label:"Glass / Liquid",desc:"투명 레이어, 블러, 공간감",a:"#151b34",b:"#3d2d71",text:"#ffffff",radius:"20px"},
  brutal:{label:"Brutal / Neo Brutal",desc:"강한 경계, 원색, 즉각적인 대비",a:"#f7ff3b",b:"#ff7a00",text:"#050505",radius:"0px"},
  soft:{label:"Soft / Neumorphic",desc:"부드러운 깊이와 저채도 표면",a:"#e7ecf4",b:"#dce5f0",text:"#253047",radius:"22px"},
  clay:{label:"Clay / Tactile",desc:"두툼하고 촉각적인 입체 카드",a:"#ffd9cf",b:"#cfe8ff",text:"#302b38",radius:"26px"},
  neon:{label:"Neon / HUD",desc:"다크 표면, 발광 포인트, 테크 감성",a:"#05070d",b:"#13213b",text:"#00e7ff",radius:"5px"},
  organic:{label:"Organic / Biophilic",desc:"자연색, 유기적 곡선, 차분한 질감",a:"#eff5e9",b:"#d8e7c8",text:"#2f5138",radius:"26px"},
  retro:{label:"Retro / Analog",desc:"복고 색감, 강한 타이포, 빈티지 질감",a:"#1c1730",b:"#5b2855",text:"#fff2cd",radius:"9px"},
  flat:{label:"Flat / Product",desc:"단순한 면, 빠른 인지, 제품 UI",a:"#eef4ff",b:"#dfe8ff",text:"#246bfe",radius:"8px"},
  paper:{label:"Paper / Academia",desc:"종이 질감, 읽기 중심, 에디토리얼",a:"#f0eadc",b:"#fbf7ed",text:"#2e5544",radius:"2px"},
  geometric:{label:"Bauhaus / Geometric",desc:"기하학, 원색, 구조적 배치",a:"#f7f4ea",b:"#f1d65c",text:"#e43b2f",radius:"0px"},
  editorial:{label:"Editorial / Magazine",desc:"타이포그래피와 그리드 중심",a:"#f8f7f3",b:"#ffffff",text:"#a42520",radius:"0px"},
  system:{label:"Design System / Dashboard",desc:"생산성, 데이터 밀도, 시스템 UI",a:"#f7f8fb",b:"#eef1f6",text:"#4b68d6",radius:"12px"},
  maximal:{label:"Maximal / Memphis",desc:"대담한 컬러와 시각적 에너지",a:"#ffefd4",b:"#fff2ff",text:"#ff276d",radius:"18px"},
  dimensional:{label:"Dimensional / 3D",desc:"레이어 깊이, 그림자, 몰입감",a:"#10141e",b:"#252f43",text:"#9e7cff",radius:"19px"},
  pixel:{label:"Pixel / Game",desc:"픽셀 감성, 각진 경계, 레트로 게임",a:"#111827",b:"#374151",text:"#facc15",radius:"0px"},
  terminal:{label:"Terminal / CLI",desc:"모노스페이스, 터미널 콘솔 감성",a:"#050a06",b:"#102516",text:"#55ff66",radius:"2px"}
};

function familyFor(style){
  const id=style.id;
  if(id.includes("terminal")) return "terminal";
  if(id.includes("pixel")) return "pixel";
  if(id.includes("glass")||id.includes("liquid")||id.includes("spatial")) return "glass";
  if(id.includes("brutal")) return "brutal";
  if(id.includes("neumorphism")||id.includes("soft-ui")) return "soft";
  if(id.includes("clay")||id.includes("tactile")) return "clay";
  if(id.includes("cyber")||id.includes("hud")||id.includes("dark-mode")||id.includes("bitcoin")||id.includes("chromatic")) return "neon";
  if(id.includes("organic")||id.includes("biomimetic")||id.includes("nature")) return "organic";
  if(id.includes("retro")||id.includes("vaporwave")||id.includes("y2k")) return "retro";
  if(id.includes("e-ink")||id.includes("academia")||id.includes("sketch-hand")) return "paper";
  if(id.includes("editorial")||id.includes("vintage")) return "editorial";
  if(id.includes("bauhaus")||id.includes("memphis")||id.includes("vibrant")) return "geometric";
  if(id.includes("maximal")) return "maximal";
  if(id.includes("3d")||id.includes("dimensional")||id.includes("parallax")) return "dimensional";
  if(id.includes("dashboard")||id.includes("analytics")||id.includes("monitoring")||id.includes("financial")||id.includes("sales")||id.includes("fluent")||id.includes("polaris")||id.includes("spectrum")||id.includes("enterprise")||id.includes("saas")||id.includes("material")) return "system";
  if(id.includes("flat")||id.includes("voice-first")||id.includes("ai-native")) return "flat";
  if(id.includes("minimal")||id.includes("swiss")||id.includes("accessible")||id.includes("inclusive")||id.includes("zero-interface")||id.includes("exaggerated")) return "minimal";
  if(id.includes("aurora")||id.includes("gradient")) return "glass";
  return "system";
}

const LABEL_CACHE=Object.fromEntries(Object.values(BLOCKS).flat().map(([id,name])=>[id,name]));
const label=id=>LABEL_CACHE[id]||id;
const safeJSON=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)??"null")??fallback}catch{return fallback}};
const pageView=document.body.dataset.view||"home";

const state={
  q:"",
  goal:"all",
  source:"all",
  level:"all",
  styleQ:"",
  styleStatus:"all",
  fav:safeJSON("pa-fav",[]),
  style:localStorage.getItem("pa-style")||"minimalism-and-swiss-style",
  builder:safeJSON("pa-builder",{source:"book",extract:"keyideas",structure:"mindmap",visualize:"sketch",use:"teach",package:"cheatsheet"})
};

function currentStyle(){
  return STYLE_CATALOG.find(s=>s.id===state.style)||STYLE_CATALOG[0];
}
function applyStyle(id,{persist=true}={}){
  const style=STYLE_CATALOG.find(s=>s.id===id)||STYLE_CATALOG[0];
  state.style=style.id;
  document.documentElement.dataset.style=style.id;
  document.documentElement.dataset.family=familyFor(style);
  if(persist) localStorage.setItem("pa-style",style.id);
  const picker=document.querySelector("#global-style-picker");
  if(picker) picker.value=style.id;
  document.querySelectorAll("[data-style-card]").forEach(el=>el.classList.toggle("selected",el.dataset.styleCard===style.id));
}
function toast(message){
  const el=document.querySelector("#toast");
  if(!el) return;
  el.textContent=message;el.classList.add("show");
  clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove("show"),1800);
}
async function copyText(text){
  try{await navigator.clipboard.writeText(text)}
  catch{
    const ta=document.createElement("textarea");
    ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand("copy");ta.remove();
  }
  toast("복사했습니다.");
}
function promptFor(path){
  const lines=path.map((id,i)=>`[${i+1}] ${STAGES[i].label} — ${label(id)}`).join("\n");
  return `다음 자료를 아래 흐름으로 처리해줘.

${lines}

각 단계마다 먼저 중간 결과를 짧게 정리한 뒤 다음 단계로 진행해.
원본에 없는 사실은 임의로 만들지 말고, 사실·해석·추론을 구분해.
최종 결과는 바로 사용할 수 있는 완성형으로 작성해.
필요하면 표, 계층 구조, 체크리스트를 사용하되 중복은 줄여줘.`;
}
function recipeCard(r){
  const fav=state.fav.includes(r.id);
  const path=r.path.map((x,i)=>`<span>${label(x)}</span>${i<r.path.length-1?'<span class="arrow">→</span>':""}`).join("");
  return `<article class="card">
    <div class="card-top">
      <span class="badge">${r.goal}</span><span class="badge muted">${r.level}</span>
      <button class="fav ${fav?"on":""}" data-fav="${r.id}" aria-label="즐겨찾기">${fav?"★":"☆"}</button>
    </div>
    <h3>${r.title}</h3>
    <p>${r.desc}</p>
    <div class="path">${path}</div>
    <div class="outcome"><strong>최종 결과</strong><br>${r.outcome}</div>
    <div class="card-actions">
      <button class="small-btn primary" data-load="${r.id}">이 조합 사용</button>
      <button class="small-btn" data-copy="${r.id}">프롬프트 복사</button>
    </div>
  </article>`;
}
function filters(){
  return `<div class="toolbar">
    <input class="input" id="recipe-q" type="search" placeholder="예: 논문, 마인드맵, 시험, 실행계획" value="${state.q}">
    <select class="select" data-filter="goal">
      <option value="all">목적 전체</option>
      ${["이해","암기","비교","발표","실행","의사결정","콘텐츠"].map(x=>`<option value="${x}" ${state.goal===x?"selected":""}>${x}</option>`).join("")}
    </select>
    <select class="select" data-filter="source">
      <option value="all">원본 전체</option>
      ${BLOCKS.source.map(([id,name])=>`<option value="${id}" ${state.source===id?"selected":""}>${name}</option>`).join("")}
    </select>
    <select class="select" data-filter="level">
      <option value="all">난이도 전체</option>
      ${["초급","중급","고급"].map(x=>`<option value="${x}" ${state.level===x?"selected":""}>${x}</option>`).join("")}
    </select>
  </div>`;
}
function filteredRecipes(){
  const q=state.q.trim().toLowerCase();
  return RECIPES.filter(r=>{
    const hay=[r.title,r.desc,r.scenario,r.goal,r.outcome,...r.path.map(label)].join(" ").toLowerCase();
    return (!q||hay.includes(q))&&(state.goal==="all"||r.goal===state.goal)&&(state.source==="all"||r.path[0]===state.source)&&(state.level==="all"||r.level===state.level);
  });
}
function renderHome(){
  const groups=[...new Set(RECIPES.map(r=>r.scenario))];
  const list=filteredRecipes();
  return `
    <section class="wrap hero">
      <div>
        <div class="kicker">Source × Extract × Structure × Visualize × Use × Package</div>
        <h1>자료 하나를 넣고,<br><em>결과의 조합을 설계하세요.</em></h1>
        <p>책, 논문, 강의, 회의록, 기사, 인터뷰에서 무엇을 뽑고 어떻게 구조화하며 어떤 형태로 보여줄지까지 한 번에 설계합니다. 현재 UI 자체도 여러 디자인 스타일로 즉시 바꿔 비교할 수 있습니다.</p>
        <div class="cta-row"><a class="btn primary" href="./builder.html">직접 조합하기</a><a class="btn secondary" href="./styles.html">79개 스타일 보기</a></div>
      </div>
      <aside class="hero-preview">
        <span class="badge">추천 조합 · 독서</span>
        <h2>책 한 권을 한 장으로</h2>
        <div class="flow">
          ${["책 / PDF","핵심 아이디어 추출","마인드맵 구조","스케치노트 표현","치트시트 패키지"].map((x,i)=>`<div class="flow-item"><span class="flow-no">${i+1}</span>${x}</div>`).join("")}
        </div>
      </aside>
    </section>
    <section class="wrap section">
      <div class="section-head"><div><div class="kicker">Situation Explorer</div><h2>상황에서 시작하세요</h2></div><p>같은 원본도 목적에 따라 구조와 최종 결과가 달라집니다.</p></div>
      ${filters()}
      ${groups.map(g=>{const rs=list.filter(r=>r.scenario===g);return rs.length?`<div style="margin:28px 0"><div class="section-head"><h2 style="font-size:20px">${g} <span class="badge muted">${rs.length}</span></h2></div><div class="grid">${rs.map(recipeCard).join("")}</div></div>`:""}).join("")||'<div class="empty">조건에 맞는 조합이 없습니다.</div>'}
    </section>`;
}
function renderRecipes(){
  const list=filteredRecipes();
  return `<section class="wrap page-head"><div class="kicker">Recipe Library</div><h1>완성 레시피</h1><p>원본부터 최종 패키지까지 한 번에 비교하고, 원하는 조합을 빌더로 바로 가져갈 수 있습니다.</p></section>
    <section class="wrap section">${filters()}<div class="grid">${list.length?list.map(recipeCard).join(""):'<div class="empty">조건에 맞는 레시피가 없습니다.</div>'}</div></section>`;
}
function renderPipeline(){
  return `<section class="wrap page-head"><div class="kicker">Pipeline Map</div><h1>6단계 조합 지도</h1><p>어떤 옵션이 어느 단계에 속하는지 전체 구조를 한눈에 봅니다. 항목을 클릭하면 조합 빌더에 저장됩니다.</p></section>
    <section class="wrap section"><div class="pipeline">${STAGES.map(s=>`<section class="stage"><h3>${s.label} · ${s.en}</h3>${BLOCKS[s.id].map(([id,name])=>`<button class="block ${state.builder[s.id]===id?"active":""}" data-block="${s.id}:${id}">${name}</button>`).join("")}</section>`).join("")}</div><div class="cta-row"><a class="btn primary" href="./builder.html">현재 선택으로 빌더 열기</a></div></section>`;
}
function renderMatrix(){
  const rows=BLOCKS.structure,cols=BLOCKS.visualize;
  return `<section class="wrap page-head"><div class="kicker">Combination Matrix</div><h1>구조화 × 표현 매트릭스</h1><p>같은 정보 구조를 어떤 표현 방식으로 바꾸느냐에 따라 결과물이 어떻게 달라지는지 탐색합니다.</p></section>
    <section class="wrap section"><div class="matrix"><table><thead><tr><th>구조화 × 표현</th>${cols.map(c=>`<th>${c[1]}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr><th>${r[1]}</th>${cols.map(c=>`<td><button data-matrix="${r[0]}:${c[0]}"><strong>${r[1]} → ${c[1]}</strong><br><span style="color:var(--muted)">빌더에서 사용</span></button></td>`).join("")}</tr>`).join("")}</tbody></table></div></section>`;
}
function renderBuilder(){
  const path=STAGES.map(s=>state.builder[s.id]);
  return `<section class="wrap page-head"><div class="kicker">Combination Builder</div><h1>나만의 결과 흐름 만들기</h1><p>여섯 단계에서 하나씩 선택하면 바로 복사해서 쓸 수 있는 최종 프롬프트를 생성합니다.</p></section>
    <section class="wrap section"><div class="builder">
      <div class="panel">${STAGES.map(s=>`<div class="builder-row"><label>${s.label} · ${s.en}</label><select data-build="${s.id}">${BLOCKS[s.id].map(([id,name])=>`<option value="${id}" ${state.builder[s.id]===id?"selected":""}>${name}</option>`).join("")}</select></div>`).join("")}</div>
      <div class="panel"><div class="kicker">Final Prompt</div><h2 style="font-size:19px">${path.map(label).join(" → ")}</h2><div class="prompt-box">${escapeHTML(promptFor(path))}</div><div class="cta-row"><button class="btn primary" id="copy-builder">프롬프트 복사</button><button class="btn secondary" id="copy-share">조합 링크 복사</button></div></div>
    </div></section>`;
}
function renderStyles(){
  const q=state.styleQ.trim().toLowerCase();
  const list=STYLE_CATALOG.filter(s=>(state.styleStatus==="all"||s.status===state.styleStatus)&&(!q||(`${s.name} ${s.id} ${familyFor(s)}`).toLowerCase().includes(q)));
  const active=STYLE_CATALOG.filter(s=>s.status==="active").length;
  const supplemental=STYLE_CATALOG.filter(s=>s.status==="supplemental").length;
  return `<section class="wrap page-head"><div class="kicker">Style Studio</div><h1>79개 UI 스타일로 같은 서비스를 비교하세요</h1><p>UI UX Pro Max의 MIT 라이선스 스타일 분류 체계를 참고해, Prompt Atlas의 전체 UI를 즉시 바꿔 볼 수 있게 구성했습니다. 스타일 선택은 브라우저에 저장되어 다른 페이지에서도 유지됩니다.</p></section>
    <section class="wrap section">
      <div class="stats"><div class="stat"><b>${STYLE_CATALOG.length}</b><span>검색 가능한 스타일</span></div><div class="stat"><b>${active}</b><span>Active</span></div><div class="stat"><b>${supplemental}</b><span>Supplemental</span></div><div class="stat"><b>${Object.keys(FAMILIES).length}</b><span>실시간 렌더링 패밀리</span></div></div>
      <div class="style-controls"><input id="style-q" class="input" type="search" placeholder="스타일 검색: glass, brutal, bento, editorial..." value="${state.styleQ}"><select class="select" id="style-status"><option value="all">상태 전체</option><option value="active" ${state.styleStatus==="active"?"selected":""}>Active 50</option><option value="supplemental" ${state.styleStatus==="supplemental"?"selected":""}>Supplemental 29</option></select><button class="btn secondary" id="reset-style">기본 스타일</button></div>
      <div class="style-grid">${list.map(styleCard).join("")}</div>
      <div class="panel" style="margin-top:24px"><strong>Source attribution</strong><p style="font-size:12px;color:var(--muted)">스타일 명칭과 분류는 <a href="https://github.com/ko9ma7/ui-ux-pro-max-skill" target="_blank" rel="noopener" style="color:var(--accent);font-weight:900">UI UX Pro Max</a>의 MIT 라이선스 데이터셋을 참고했습니다. Prompt Atlas의 실제 CSS 구현은 이 서비스에 맞게 별도로 재구성했습니다.</p></div>
    </section>`;
}
function styleCard(style){
  const family=familyFor(style);
  const f=FAMILIES[family];
  return `<article class="style-card ${state.style===style.id?"selected":""}" data-style-card="${style.id}">
    <div class="style-preview" style="--preview-a:${f.a};--preview-b:${f.b};--preview-text:${f.text};--preview-radius:${f.radius}"></div>
    <h3>${style.name}</h3>
    <div class="style-meta"><span class="badge">${f.label}</span><span class="badge muted">${style.status}</span></div>
    <p>${f.desc}</p>
    <button data-apply-style="${style.id}">${state.style===style.id?"적용 중":"이 스타일 적용"}</button>
  </article>`;
}
function escapeHTML(str){
  return str.replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]));
}
function renderPage(){
  const host=document.querySelector("#page-content");
  if(!host) return;
  if(pageView==="home") host.innerHTML=renderHome();
  if(pageView==="recipes") host.innerHTML=renderRecipes();
  if(pageView==="pipeline") host.innerHTML=renderPipeline();
  if(pageView==="matrix") host.innerHTML=renderMatrix();
  if(pageView==="builder") host.innerHTML=renderBuilder();
  if(pageView==="styles") host.innerHTML=renderStyles();
  setNav();
  renderStyleDock();
}
function setNav(){
  document.querySelectorAll("[data-nav]").forEach(a=>a.removeAttribute("aria-current"));
  const current=document.querySelector(`[data-nav="${pageView}"]`);
  if(current) current.setAttribute("aria-current","page");
}
function renderStyleDock(){
  const dock=document.querySelector("#style-dock");
  if(!dock) return;
  dock.innerHTML=`<select id="global-style-picker" aria-label="UI 스타일 선택">${STYLE_CATALOG.map(s=>`<option value="${s.id}" ${s.id===state.style?"selected":""}>${s.name}</option>`).join("")}</select><a href="./styles.html">Style Studio</a>`;
}
function saveBuilder(){localStorage.setItem("pa-builder",JSON.stringify(state.builder))}
function loadRecipe(id){
  const r=RECIPES.find(x=>x.id===id);if(!r)return;
  STAGES.forEach((s,i)=>state.builder[s.id]=r.path[i]);saveBuilder();
  location.href="./builder.html";
}

document.addEventListener("click",event=>{
  const fav=event.target.closest("[data-fav]");
  if(fav){
    const id=fav.dataset.fav;
    state.fav=state.fav.includes(id)?state.fav.filter(x=>x!==id):[...state.fav,id];
    localStorage.setItem("pa-fav",JSON.stringify(state.fav));renderPage();return;
  }
  const load=event.target.closest("[data-load]");if(load){loadRecipe(load.dataset.load);return}
  const copy=event.target.closest("[data-copy]");if(copy){const r=RECIPES.find(x=>x.id===copy.dataset.copy);if(r)copyText(promptFor(r.path));return}
  const block=event.target.closest("[data-block]");if(block){const [stage,id]=block.dataset.block.split(":");state.builder[stage]=id;saveBuilder();renderPage();return}
  const mx=event.target.closest("[data-matrix]");if(mx){const [structure,visualize]=mx.dataset.matrix.split(":");state.builder.structure=structure;state.builder.visualize=visualize;saveBuilder();location.href="./builder.html";return}
  const apply=event.target.closest("[data-apply-style]");if(apply){applyStyle(apply.dataset.applyStyle);renderPage();toast("스타일을 적용했습니다.");return}
  if(event.target.id==="copy-builder"){copyText(promptFor(STAGES.map(s=>state.builder[s.id])));return}
  if(event.target.id==="copy-share"){
    const url=new URL(location.href);url.searchParams.set("combo",STAGES.map(s=>state.builder[s.id]).join("."));url.searchParams.set("style",state.style);copyText(url.toString());return;
  }
  if(event.target.id==="reset-style"){applyStyle("minimalism-and-swiss-style");renderPage();toast("기본 스타일로 돌아왔습니다.");}
});

document.addEventListener("input",event=>{
  if(event.target.id==="recipe-q"){state.q=event.target.value;renderPage()}
  if(event.target.id==="style-q"){state.styleQ=event.target.value;renderPage()}
});
document.addEventListener("change",event=>{
  if(event.target.dataset.filter){state[event.target.dataset.filter]=event.target.value;renderPage();return}
  if(event.target.dataset.build){state.builder[event.target.dataset.build]=event.target.value;saveBuilder();renderPage();return}
  if(event.target.id==="style-status"){state.styleStatus=event.target.value;renderPage();return}
  if(event.target.id==="global-style-picker"){applyStyle(event.target.value);if(pageView==="styles")renderPage();return}
});

const params=new URLSearchParams(location.search);
const combo=params.get("combo");
if(combo){
  const ids=combo.split(".");
  if(ids.length===STAGES.length) STAGES.forEach((s,i)=>{if(BLOCKS[s.id].some(([id])=>id===ids[i])) state.builder[s.id]=ids[i]});
}
const requestedStyle=params.get("style");
if(requestedStyle&&STYLE_CATALOG.some(s=>s.id===requestedStyle)) state.style=requestedStyle;
applyStyle(state.style,{persist:true});
renderPage();
