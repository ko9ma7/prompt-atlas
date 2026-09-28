const STAGES=[
  {id:"source",label:"원본",en:"SOURCE"},
  {id:"extract",label:"추출",en:"EXTRACT"},
  {id:"structure",label:"구조화",en:"STRUCTURE"},
  {id:"visualize",label:"표현",en:"VISUALIZE"},
  {id:"use",label:"활용",en:"USE"},
  {id:"package",label:"패키지",en:"PACKAGE"}
];

const BLOCKS={
  source:[
    ["book","책 / PDF"],["paper","논문"],["lecture","강의 / 영상"],["meeting","회의록"],
    ["article","기사 / 리포트"],["interview","인터뷰"],["manual","매뉴얼"],["data","데이터 / 표"],
    ["image","이미지 / 사진"],["screenshot","스크린샷"],["webpage","웹페이지"],["email","이메일"],
    ["chat","대화 / 채팅"],["code","코드 / 저장소"],["product","제품 / 서비스"],["notes","메모 / 필기"]
  ],
  extract:[
    ["summary","요약"],["keyideas","핵심 아이디어"],["insights","인사이트"],["evidence","근거 / 데이터"],
    ["quotes","핵심 문장"],["questions","질문거리"],["actions","행동 항목"],["terms","용어"],
    ["facts","사실"],["claims","주장"],["risks","리스크"],["decisions","결정사항"],
    ["painpoints","문제 / 페인포인트"],["requirements","요구사항"],["numbers","수치"],["examples","사례"]
  ],
  structure:[
    ["mindmap","마인드맵"],["concept","개념맵"],["timeline","타임라인"],["framework","프레임워크"],
    ["flow","플로차트"],["compare","비교표"],["outline","아웃라인"],["matrix","매트릭스"],
    ["hierarchy","계층도"],["causeeffect","원인-결과"],["journey","여정맵"],["swot","SWOT"],
    ["decisiontree","의사결정 트리"],["taxonomy","분류체계"],["roadmap","로드맵"],["kanban","칸반 구조"]
  ],
  visualize:[
    ["sketch","스케치노트"],["info","인포그래픽"],["diagram","다이어그램"],["onepage","원페이지"],
    ["poster","포스터"],["cards","카드"],["table","표"],["story","스토리보드"],
    ["comic","코믹 / 만화"],["whiteboard","화이트보드"],["dashboard","대시보드"],["chart","차트"],
    ["annotated","주석 이미지"],["blueprint","블루프린트"],["explainer","설명 그림"],["worksheet","워크시트"]
  ],
  use:[
    ["learn","이해"],["remember","암기"],["quiz","퀴즈"],["teach","설명 / Teach-back"],
    ["present","발표"],["decide","의사결정"],["apply","실행"],["create","콘텐츠 제작"],
    ["review","검토"],["plan","계획"],["brainstorm","브레인스토밍"],["verify","검증"],
    ["onboard","온보딩"],["teachkids","쉬운 설명"],["pitch","피치"],["publish","퍼블리시"]
  ],
  package:[
    ["studykit","학습 키트"],["brief","브리핑"],["deck","발표자료"],["workbook","워크북"],
    ["playbook","실행 매뉴얼"],["cheatsheet","치트시트"],["report","리포트"],["contentkit","콘텐츠 키트"],
    ["faq","FAQ"],["checklist","체크리스트"],["template","템플릿"],["handbook","핸드북"],
    ["course","미니 코스"],["campaign","캠페인 키트"],["dashboardpack","대시보드 팩"],["visualpack","비주얼 팩"]
  ]
};

const RECIPES=[
  ["image-mindmap","이미지 시작","사진 한 장 → 마인드맵","책 표지, 노트, 화이트보드 사진에서 주제를 읽고 관계를 시각화","이해","초급",["image","keyideas","mindmap","sketch","","visualpack"],"이미지에서 읽은 핵심을 스케치형 마인드맵으로"],
  ["image-infographic","이미지 시작","이미지 → 인포그래픽","사진이나 캡처의 정보를 한 장짜리 정보 그래픽으로 바꾸기","발표","중급",["image","facts","","info","present","visualpack"],"사실 중심의 한 장 인포그래픽"],
  ["image-annotate","이미지 시작","스크린샷 주석 분석","화면 캡처 위에 문제점과 개선 포인트를 표시","검토","중급",["screenshot","painpoints","","annotated","review","report"],"주석이 달린 UI/문서 검토 자료"],
  ["image-comic","이미지 시작","사진 → 설명 만화","한 장의 이미지 속 상황을 순서와 맥락이 있는 만화로 설명","콘텐츠","중급",["image","insights","","comic","create","contentkit"],"설명용 짧은 코믹 시퀀스"],
  ["image-direct-sketch","이미지 시작","이미지 → 스케치노트 바로 변환","분석 단계 없이 이미지의 내용을 시각 필기로 재구성","이해","초급",["image","","","sketch","",""],"원본 이미지 기반 스케치노트"],
  ["image-poster","이미지 시작","이미지 → 포스터","한 이미지의 핵심 메시지를 포스터형으로 강조","퍼블리시","초급",["image","keyideas","","poster","publish",""],"공유 가능한 핵심 메시지 포스터"],

  ["book-onepage","독서","책 한 권 핵심 한 장","책 전체 논리와 핵심 개념을 한눈에 보기","이해","중급",["book","keyideas","mindmap","sketch","teach","cheatsheet"],"핵심 개념 관계가 보이는 시각 학습노트"],
  ["book-summary","독서","책 빠른 요약","구조화나 시각화 없이 핵심만 빠르게 읽기","이해","초급",["book","summary","","","","brief"],"짧은 핵심 요약 브리핑"],
  ["book-action","독서","자기계발서 실행 전환","읽고 끝내지 않고 실제 행동으로 옮기기","실행","중급",["book","actions","framework","onepage","apply","playbook"],"원칙 → 행동 → 체크리스트 실행 매뉴얼"],
  ["book-memory","독서","시험형 독서 노트","오래 기억하고 복습할 때","암기","고급",["book","terms","concept","cards","remember","studykit"],"개념 카드와 복습 루프 학습 키트"],
  ["book-quote-cards","독서","핵심 문장 카드","좋은 문장과 핵심 주장만 카드로 저장","콘텐츠","초급",["book","quotes","","cards","publish","contentkit"],"인용문 중심 카드 세트"],
  ["book-framework","독서","저자의 사고 프레임","저자의 원칙과 사고방식을 모델로 추출","이해","중급",["book","insights","framework","diagram","",""],"저자의 사고방식 다이어그램"],
  ["book-history","독서","역사책 타임라인","사건 순서와 인과를 시간축으로 보기","이해","중급",["book","facts","timeline","info","learn","cheatsheet"],"시간순 사건과 원인이 연결된 타임라인"],
  ["book-kids","독서","어려운 책 쉽게 설명","복잡한 내용을 쉬운 말과 그림으로 설명","쉬운 설명","중급",["book","keyideas","concept","comic","teachkids","workbook"],"쉬운 설명과 그림이 결합된 워크북"],

  ["paper-brief","연구","논문 10분 브리핑","긴 논문을 빠르게 파악","이해","중급",["paper","summary","outline","diagram","present","brief"],"연구 질문·방법·결과·한계 브리핑"],
  ["paper-map","연구","논문 구조 지도","주장과 근거의 연결을 파악","이해","고급",["paper","evidence","concept","diagram","learn","report"],"주장-근거 연결 구조도"],
  ["paper-compare","연구","복수 논문 비교","여러 논문의 차이와 공통점 비교","비교","고급",["paper","insights","matrix","table","decide","report"],"가설·방법·결과·한계 비교 리포트"],
  ["paper-findings","연구","결과만 빠르게 추출","연구 결과와 수치만 필요한 상황","검토","초급",["paper","numbers","","table","review",""],"핵심 수치와 결과표"],
  ["paper-method","연구","연구방법 플로우","실험/조사 절차를 흐름으로 이해","이해","중급",["paper","facts","flow","diagram","",""],"연구 절차 다이어그램"],
  ["paper-limitations","연구","한계와 리스크 점검","논문의 한계, 불확실성, 후속 연구 포인트 찾기","검증","고급",["paper","risks","","table","verify","brief"],"한계·불확실성 검토 브리핑"],
  ["paper-presentation","연구","논문 발표 7장","세미나 발표용으로 압축","발표","중급",["paper","keyideas","outline","diagram","present","deck"],"7장 내외 연구 발표 구성"],

  ["lecture-kit","학습","강의 복습 패키지","강의 후 시험 대비","암기","고급",["lecture","keyideas","outline","cards","quiz","studykit"],"요약·암기카드·퀴즈 복습 패키지"],
  ["lecture-teach","학습","강의 Teach-back","자기 말로 설명하며 이해 확인","이해","중급",["lecture","questions","concept","diagram","teach","workbook"],"설명 질문과 빈칸 자기점검 워크북"],
  ["lecture-quiz","학습","강의 → 문제만 만들기","구조화 없이 바로 문제 생성","퀴즈","초급",["lecture","keyideas","","","quiz",""],"핵심 내용 기반 퀴즈"],
  ["notes-clean","학습","필기 정리","엉킨 메모를 계층형 노트로 정리","이해","초급",["notes","keyideas","hierarchy","","","cheatsheet"],"깔끔한 계층형 필기"],
  ["notes-mindmap","학습","손필기 → 개념맵","필기 사진이나 메모를 개념 관계로 정리","이해","중급",["notes","terms","concept","sketch","",""],"개념 연결형 시각 노트"],
  ["exam-cram","학습","시험 직전 치트시트","필수 개념과 자주 틀리는 점만 압축","암기","중급",["notes","terms","outline","onepage","remember","cheatsheet"],"시험 직전 1페이지 요약"],
  ["flash-only","학습","텍스트 → 암기카드","다른 단계 없이 바로 카드로 만들기","암기","초급",["notes","","","cards","remember",""],"Q/A 암기카드"],

  ["meeting-action","업무","회의를 실행계획으로","결정과 할 일을 빠르게 정리","실행","중급",["meeting","actions","flow","table","apply","playbook"],"담당자·기한·의존성이 정리된 실행 목록"],
  ["meeting-brief","업무","회의 1페이지 브리핑","불참자에게 빠르게 전달","발표","초급",["meeting","summary","outline","onepage","present","brief"],"결정사항과 다음 단계 1페이지 브리핑"],
  ["meeting-decisions","업무","결정사항만 추출","회의에서 결론만 필요할 때","의사결정","초급",["meeting","decisions","","table","",""],"결정·보류·담당자 표"],
  ["meeting-risk","업무","회의 리스크 레이더","논의 속 리스크와 막힘을 찾기","검토","중급",["meeting","risks","matrix","dashboard","review","dashboardpack"],"리스크 우선순위 대시보드"],
  ["email-actions","업무","이메일 → 할 일","긴 메일 스레드에서 할 일만 추출","실행","초급",["email","actions","","","apply","checklist"],"실행 체크리스트"],
  ["email-brief","업무","메일 스레드 요약","앞뒤 맥락과 현재 상태만 정리","이해","초급",["email","summary","timeline","","","brief"],"시간순 메일 맥락 브리핑"],
  ["manual-cheat","업무","매뉴얼 치트시트","복잡한 절차를 빠르게 참고","실행","중급",["manual","actions","flow","diagram","apply","cheatsheet"],"절차와 예외가 압축된 치트시트"],
  ["manual-onboard","업무","신입 온보딩 핸드북","매뉴얼을 초보자 학습 순서로 재구성","온보딩","고급",["manual","requirements","roadmap","worksheet","onboard","handbook"],"단계형 온보딩 핸드북"],

  ["article-check","정보","기사 핵심 주장 점검","주장과 근거를 분리","의사결정","중급",["article","claims","framework","table","decide","brief"],"사실·주장·근거·불확실성 판단 자료"],
  ["trend-map","정보","트렌드 맵","여러 기사에서 반복되는 흐름 찾기","이해","중급",["article","insights","mindmap","info","learn","report"],"트렌드·원인·영향 시각 리포트"],
  ["webpage-summary","정보","웹페이지 한 줄씩 압축","길고 복잡한 페이지를 빠르게 정리","이해","초급",["webpage","summary","outline","","","brief"],"페이지 핵심 아웃라인"],
  ["fact-only","정보","사실만 추출","해석 없이 확인 가능한 사실만 모으기","검증","초급",["article","facts","","table","verify",""],"사실 목록 및 출처 확인표"],
  ["interview-insight","리서치","인터뷰 인사이트 맵","사용자 인터뷰 패턴 찾기","의사결정","고급",["interview","insights","framework","cards","decide","report"],"니즈·문제·행동 패턴 인사이트 리포트"],
  ["interview-pain","리서치","인터뷰 페인포인트","불편과 요구만 빠르게 분리","검토","중급",["interview","painpoints","matrix","","review","brief"],"페인포인트 우선순위 표"],
  ["interview-journey","리서치","사용자 여정 재구성","인터뷰에서 행동 흐름을 여정맵으로 만들기","이해","고급",["interview","insights","journey","diagram","present","report"],"행동·감정·장벽 사용자 여정맵"],

  ["data-story","데이터","데이터 스토리","수치를 이해하기 쉬운 메시지로 바꾸기","발표","고급",["data","insights","framework","info","present","deck"],"핵심 수치 → 의미 → 시사점 발표 구조"],
  ["data-decision","데이터","의사결정 매트릭스","여러 선택지를 데이터로 비교","의사결정","고급",["data","evidence","matrix","table","decide","report"],"기준·가중치·근거 비교 리포트"],
  ["data-chart","데이터","표 → 차트","분석 단계 없이 시각 차트로 변환","발표","초급",["data","numbers","","chart","present",""],"핵심 수치 차트"],
  ["data-dashboard","데이터","데이터 → 대시보드 설계","지표를 모니터링 화면으로 구성","검토","고급",["data","numbers","hierarchy","dashboard","review","dashboardpack"],"KPI 중심 대시보드 팩"],
  ["data-anomaly","데이터","이상치 점검","수치에서 이상 신호와 검토 포인트 찾기","검증","고급",["data","risks","","table","verify","report"],"이상치와 확인 항목 리포트"],

  ["plan-roadmap","기획","기획안을 로드맵으로","아이디어를 실행 순서로 바꾸기","실행","고급",["article","actions","roadmap","diagram","plan","playbook"],"마일스톤·리스크 실행 로드맵"],
  ["idea-framework","기획","아이디어 → 프레임워크","흩어진 아이디어의 구조만 빠르게 잡기","브레인스토밍","중급",["notes","insights","framework","","brainstorm",""],"아이디어 구조 프레임"],
  ["swot-plan","기획","SWOT → 실행 전략","상황 분석에서 액션까지 연결","계획","중급",["article","facts","swot","table","plan","playbook"],"SWOT 기반 실행전략"],
  ["decision-tree","기획","선택지 의사결정 트리","조건에 따라 선택 경로를 나누기","의사결정","중급",["notes","requirements","decisiontree","diagram","decide",""],"조건별 선택 경로도"],
  ["requirement-blueprint","기획","요구사항 블루프린트","요구사항을 구조와 기능으로 시각화","계획","고급",["notes","requirements","hierarchy","blueprint","plan","report"],"요구사항 구조 블루프린트"],
  ["brainstorm-only","기획","키워드 → 브레인스토밍","정리 단계 없이 아이디어 확장","브레인스토밍","초급",["notes","keyideas","","","brainstorm",""],"확장 아이디어 목록"],

  ["content-series","콘텐츠","한 자료로 콘텐츠 시리즈","원본 하나를 여러 포맷으로 확장","콘텐츠","중급",["article","keyideas","outline","story","create","contentkit"],"롱폼·카드·숏폼 콘텐츠 키트"],
  ["interview-content","콘텐츠","인터뷰 콘텐츠 키트","인터뷰를 SNS 포맷으로 재가공","콘텐츠","중급",["interview","quotes","outline","story","create","contentkit"],"카드뉴스·숏폼·게시물 아이디어"],
  ["quote-poster","콘텐츠","핵심 문장 포스터","한 문장만 강하게 시각화","퍼블리시","초급",["notes","quotes","","poster","publish",""],"공유용 문장 포스터"],
  ["comic-explainer","콘텐츠","개념 설명 만화","복잡한 개념을 장면별로 쉽게 설명","콘텐츠","중급",["article","keyideas","story","comic","create","contentkit"],"장면별 설명 만화"],
  ["campaign-kit","마케팅","캠페인 메시지 키트","자료를 광고/캠페인 메시지로 재구성","퍼블리시","고급",["article","insights","framework","cards","publish","campaign"],"메시지·카피·카드 캠페인 키트"],
  ["product-pitch","마케팅","제품 피치 한 장","제품의 가치와 증거를 피치 구조로 압축","피치","중급",["product","keyideas","framework","onepage","pitch","deck"],"한 장 가치제안 + 발표 흐름"],
  ["review-to-content","마케팅","후기 → 소셜프루프 카드","사용자 후기에서 인용문과 성과를 추출","콘텐츠","중급",["interview","quotes","","cards","publish","contentkit"],"후기 기반 소셜프루프 카드"],
  ["landing-outline","마케팅","랜딩페이지 구조","제품 자료에서 섹션 구조만 설계","계획","중급",["product","requirements","outline","","plan","template"],"랜딩페이지 섹션 템플릿"],

  ["code-onboard","개발","코드베이스 온보딩","저장소 구조를 신규 개발자에게 설명","온보딩","고급",["code","keyideas","hierarchy","diagram","onboard","handbook"],"아키텍처와 시작점이 보이는 개발자 핸드북"],
  ["code-flow","개발","코드 실행 흐름","핵심 로직의 호출 흐름을 시각화","이해","고급",["code","facts","flow","diagram","learn",""],"호출/처리 흐름 다이어그램"],
  ["code-review","개발","코드 검토 체크리스트","위험과 요구사항 중심으로 리뷰","검토","고급",["code","risks","","table","review","checklist"],"리뷰 체크리스트"],
  ["bug-map","개발","버그 원인-결과 지도","증상과 가능한 원인을 연결","검증","고급",["code","painpoints","causeeffect","diagram","verify","report"],"원인 가설과 검증 순서도"],
  ["product-requirements","제품","제품 요구사항 맵","요구사항을 기능과 사용자 가치로 묶기","계획","고급",["product","requirements","taxonomy","diagram","plan","report"],"기능 분류와 우선순위 요구사항 맵"],
  ["ui-screenshot-review","디자인","UI 스크린샷 리뷰","스크린샷만으로 정보 구조와 사용성 개선점 찾기","검토","중급",["screenshot","painpoints","hierarchy","annotated","review","report"],"주석형 UX 리뷰"],

  ["trip-plan","생활","여행 자료 → 일정표","모아둔 정보에서 동선과 일정만 만들기","계획","중급",["article","actions","timeline","table","plan","checklist"],"날짜별 여행 일정과 준비 체크리스트"],
  ["shopping-compare","생활","구매 후보 비교","후보들의 조건과 근거를 표로 정리","의사결정","중급",["product","evidence","compare","table","decide","report"],"조건별 구매 비교표"],
  ["recipe-card","생활","레시피 → 요리 카드","긴 조리법을 한눈에 보는 단계 카드로","실행","초급",["article","actions","flow","cards","apply",""],"조리 순서 카드"],
  ["personal-notes","생활","메모 → 실행 체크리스트","복잡한 개인 메모에서 할 일만 추출","실행","초급",["notes","actions","","","apply","checklist"],"바로 실행 가능한 개인 체크리스트"]
].map(r=>({id:r[0],scenario:r[1],title:r[2],desc:r[3],goal:r[4],level:r[5],path:r[6],outcome:r[7]}));

const VISUAL_OUTPUTS=[
  ["mindmap","마인드맵","중앙 주제에서 핵심 개념을 가지로 확장","map"],
  ["sketchnote","스케치노트","손글씨 느낌의 키워드·아이콘·화살표 요약","sketch"],
  ["infographic","인포그래픽","핵심 수치·메시지를 한 장에 시각 배치","info"],
  ["conceptmap","개념맵","개념 사이 관계와 연결어를 중심으로 표현","map"],
  ["flowchart","플로차트","과정·조건·분기를 순서도로 표현","flow"],
  ["timeline","타임라인","사건·단계를 시간축으로 배치","timeline"],
  ["comparison","비교 시트","두 개 이상 대상을 기준별로 비교","compare"],
  ["framework","프레임워크","원칙·축·단계를 하나의 모델로 표현","framework"],
  ["onepager","원페이지","핵심 전체를 한 장 문서로 압축","onepage"],
  ["poster","포스터","하나의 메시지를 강하게 강조","poster"],
  ["flashcards","플래시카드","질문/답 또는 앞/뒤 카드 형태","cards"],
  ["comic","설명 만화","복잡한 내용을 장면과 대사로 설명","comic"],
  ["storyboard","스토리보드","장면 순서와 메시지를 연속 프레임으로","story"],
  ["whiteboard","화이트보드","회의·브레인스토밍 보드처럼 자유롭게 배치","whiteboard"],
  ["annotated","주석 이미지","원본 위에 번호·화살표·설명을 덧붙임","annotated"],
  ["dashboard","대시보드","지표·상태·우선순위를 패널로 배치","dashboard"],
  ["checklist","체크리스트 카드","실행 항목을 체크 가능한 카드로","cards"],
  ["quotecard","인용문 카드","핵심 문장을 공유용 카드로 강조","poster"],
  ["cheatsheet","치트시트","빠른 참고를 위한 압축 요약 시트","onepage"],
  ["roadmap","로드맵","단계와 마일스톤을 진행 순서로 표현","timeline"],
  ["decisiontree","의사결정 트리","조건에 따라 갈리는 선택지를 트리로","flow"],
  ["processmap","프로세스 맵","역할·단계·입출력 관계를 시각화","flow"],
  ["studysheet","학습 시트","정리·빈칸·핵심 포인트를 학습용으로","sketch"],
  ["presentation","발표 한 장","발표용 핵심 메시지와 시각 구조","info"]
];

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
const label=id=>id?(LABEL_CACHE[id]||id):"";
const activeSteps=path=>path.map((id,i)=>id?{id,stage:STAGES[i],label:label(id)}:null).filter(Boolean);
const safeJSON=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key)??"null")??fallback}catch{return fallback}};
const pageView=document.body.dataset.view||"home";

const state={
  q:"",
  goal:"all",
  source:"all",
  level:"all",
  steps:"all",
  styleQ:"",
  styleStatus:"all",
  fav:safeJSON("pa-fav",[]),
  style:localStorage.getItem("pa-style")||"minimalism-and-swiss-style",
  builder:safeJSON("pa-builder",{source:"book",extract:"keyideas",structure:"mindmap",visualize:"sketch",use:"",package:"visualpack"}),
  visual:{
    fileName:"",
    fileType:"",
    preview:"",
    selected:safeJSON("pa-visual-selected",["mindmap","sketchnote","infographic"])
  }
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
  const active=activeSteps(path);
  if(!active.length) return "원하는 작업을 한 가지 이상 선택해줘.";
  const lines=active.map((item,i)=>`[${i+1}] ${item.stage.label} — ${item.label}`).join("\n");
  return `다음 자료를 아래 선택된 단계만 사용해서 처리해줘.

${lines}

선택되지 않은 단계는 억지로 추가하지 마.
${active.length>1?"각 단계의 결과가 다음 선택 단계로 자연스럽게 이어지도록 처리해.":"이 한 가지 목적에 집중해."}
원본에 없는 사실은 임의로 만들지 말고 사실·해석·추론을 구분해.
최종 결과는 바로 사용할 수 있는 완성형으로 작성해.`;
}
function visualPrompt(){
  const selected=VISUAL_OUTPUTS.filter(v=>state.visual.selected.includes(v[0]));
  const fileLine=state.visual.fileName?`업로드한 파일: ${state.visual.fileName}`:"업로드한 이미지·문서의 내용을 기준으로 작업해.";
  if(!selected.length) return `${fileLine}\n원본의 핵심을 시각적으로 가장 적합한 한 가지 형식으로 정리해줘.`;
  return `${fileLine}

먼저 원본에서 확인 가능한 핵심 내용과 구조를 파악해.
그 다음 아래 결과물을 각각 만들어줘.

${selected.map((v,i)=>`[${i+1}] ${v[1]} — ${v[2]}`).join("\n")}

공통 조건:
- 원본에 없는 사실을 임의로 만들지 마.
- 한국어 텍스트는 짧고 선명하게 써.
- 핵심어, 도형, 연결선, 계층을 이용해 한눈에 이해되게 구성해.
- 각 결과물은 서로 복제하지 말고 형식의 장점을 살려 다르게 설계해.
- 이미지 생성이 가능한 환경이라면 실제 시각 결과물로 만들고, 그렇지 않으면 바로 이미지 생성에 사용할 수 있는 상세 프롬프트를 함께 제공해.`;
}
function recipeCard(r){
  const fav=state.fav.includes(r.id);
  const active=activeSteps(r.path);
  const path=active.map((item,i)=>`<span>${item.label}</span>${i<active.length-1?'<span class="arrow">→</span>':""}`).join("");
  return `<article class="card">
    <div class="card-top">
      <span class="badge">${r.goal}</span><span class="badge muted">${r.level}</span>
      <span class="badge muted">${active.length}단계</span>
      <button class="fav ${fav?"on":""}" data-fav="${r.id}" aria-label="즐겨찾기">${fav?"★":"☆"}</button>
    </div>
    <h3>${r.title}</h3>
    <p>${r.desc}</p>
    <div class="path">${path||'<span>직접 작업</span>'}</div>
    <div class="outcome"><strong>최종 결과</strong><br>${r.outcome}</div>
    <div class="card-actions">
      <button class="small-btn primary" data-load="${r.id}">이 조합 사용</button>
      <button class="small-btn" data-copy="${r.id}">프롬프트 복사</button>
    </div>
  </article>`;
}
function filters(){
  return `<div class="toolbar toolbar-wide">
    <input class="input" id="recipe-q" type="search" placeholder="예: 이미지, 논문, 마인드맵, 회의, 코드, 여행..." value="${state.q}">
    <select class="select" data-filter="goal">
      <option value="all">목적 전체</option>
      ${["이해","암기","비교","발표","실행","의사결정","콘텐츠","검토","계획","브레인스토밍","검증","온보딩","쉬운 설명","피치","퍼블리시","퀴즈"].map(x=>`<option value="${x}" ${state.goal===x?"selected":""}>${x}</option>`).join("")}
    </select>
    <select class="select" data-filter="source">
      <option value="all">원본 전체</option>
      ${BLOCKS.source.map(([id,name])=>`<option value="${id}" ${state.source===id?"selected":""}>${name}</option>`).join("")}
    </select>
    <select class="select" data-filter="steps">
      <option value="all">단계 수 전체</option>
      <option value="1-2" ${state.steps==="1-2"?"selected":""}>1–2단계 빠른 작업</option>
      <option value="3-4" ${state.steps==="3-4"?"selected":""}>3–4단계 조합</option>
      <option value="5-6" ${state.steps==="5-6"?"selected":""}>5–6단계 완성형</option>
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
    const count=activeSteps(r.path).length;
    const stepOK=state.steps==="all"||(state.steps==="1-2"&&count<=2)||(state.steps==="3-4"&&count>=3&&count<=4)||(state.steps==="5-6"&&count>=5);
    const sourceId=r.path[0]||"";
    const hay=[r.title,r.desc,r.scenario,r.goal,r.outcome,...r.path.filter(Boolean).map(label)].join(" ").toLowerCase();
    return (!q||hay.includes(q))&&(state.goal==="all"||r.goal===state.goal)&&(state.source==="all"||sourceId===state.source)&&(state.level==="all"||r.level===state.level)&&stepOK;
  });
}
function visualMock(kind){
  if(kind==="map") return '<div class="mock-node center"></div><div class="mock-line l1"></div><div class="mock-line l2"></div><div class="mock-node n1"></div><div class="mock-node n2"></div><div class="mock-node n3"></div>';
  if(kind==="flow") return '<div class="mock-box b1"></div><div class="mock-arrow a1"></div><div class="mock-box b2"></div><div class="mock-arrow a2"></div><div class="mock-box b3"></div>';
  if(kind==="timeline") return '<div class="mock-timeline"></div><i class="dot d1"></i><i class="dot d2"></i><i class="dot d3"></i><i class="dot d4"></i>';
  if(kind==="cards") return '<div class="mock-grid"><i></i><i></i><i></i><i></i></div>';
  if(kind==="dashboard") return '<div class="mock-kpi"></div><div class="mock-bars"><i></i><i></i><i></i><i></i></div>';
  if(kind==="compare") return '<div class="mock-col c1"></div><div class="mock-vs">VS</div><div class="mock-col c2"></div>';
  if(kind==="poster") return '<div class="mock-title"></div><div class="mock-circle"></div><div class="mock-caption"></div>';
  if(kind==="comic"||kind==="story") return '<div class="mock-panels"><i></i><i></i><i></i></div>';
  if(kind==="annotated") return '<div class="mock-photo"></div><i class="pin p1">1</i><i class="pin p2">2</i><i class="pin p3">3</i>';
  if(kind==="sketch") return '<div class="mock-scribble"></div><div class="mock-note nA"></div><div class="mock-note nB"></div>';
  if(kind==="info") return '<div class="mock-donut"></div><div class="mock-bars horizontal"><i></i><i></i><i></i></div>';
  if(kind==="framework") return '<div class="mock-ring r1"></div><div class="mock-ring r2"></div><div class="mock-ring r3"></div>';
  if(kind==="whiteboard") return '<div class="sticky s1"></div><div class="sticky s2"></div><div class="sticky s3"></div><div class="mock-arrow wa"></div>';
  return '<div class="mock-doc"><i></i><i></i><i></i><i></i></div>';
}
function visualCard(v,{compact=false}={}){
  const selected=state.visual.selected.includes(v[0]);
  return `<button class="visual-card ${selected?"selected":""} ${compact?"compact":""}" data-visual="${v[0]}" type="button">
    <div class="visual-thumb kind-${v[3]}">${visualMock(v[3])}</div>
    <strong>${v[1]}</strong>
    <span>${v[2]}</span>
  </button>`;
}
function visualWorkspace({compact=false}={}){
  const selected=VISUAL_OUTPUTS.filter(v=>state.visual.selected.includes(v[0]));
  const cards=(compact?VISUAL_OUTPUTS.slice(0,8):VISUAL_OUTPUTS).map(v=>visualCard(v,{compact})).join("");
  const preview=state.visual.preview
    ? `<img src="${state.visual.preview}" alt="업로드한 원본 미리보기">`
    : '<div class="drop-placeholder"><div class="sample-cover"><span>BOOK</span><b>YOUR<br>IMAGE</b><small>사진 · 표지 · 캡처 · 노트</small></div></div>';
  return `<div class="image-first ${compact?"compact":""}">
    <section class="source-zone">
      <div class="source-zone-head"><div><div class="kicker">1 · INPUT</div><h2>이미지에서 시작</h2></div><span class="badge muted">브라우저 안에서 미리보기</span></div>
      <label class="dropzone" id="dropzone" for="source-file">
        <input id="source-file" type="file" accept="image/*,.pdf" hidden>
        <div class="upload-preview">${preview}</div>
        <div class="upload-copy">
          <strong>${state.visual.fileName||"이미지·책 표지·스크린샷을 올리세요"}</strong>
          <span>클릭하거나 파일을 끌어놓기 · 이미지와 PDF 지원</span>
        </div>
      </label>
      ${state.visual.fileName?'<button class="small-btn" id="clear-source">원본 지우기</button>':""}
    </section>
    <section class="visual-zone">
      <div class="source-zone-head"><div><div class="kicker">2 · OUTPUT</div><h2>원하는 결과를 여러 개 선택</h2></div><span class="badge">${selected.length}개 선택</span></div>
      <div class="visual-grid">${cards}</div>
      ${compact?'<a class="small-btn visual-more" href="./visuals.html">24개 결과 형식 전체 보기 →</a>':""}
    </section>
    <section class="visual-result">
      <div><div class="kicker">3 · PROMPT</div><h2>${selected.length?selected.map(v=>v[1]).join(" + "):"결과 형식을 선택하세요"}</h2><p>모든 단계를 채울 필요가 없습니다. 이미지 → 스케치노트처럼 2단계만 써도 되고, 여러 결과물을 한 번에 선택해도 됩니다.</p></div>
      <div class="visual-actions"><button class="btn primary" id="copy-visual-prompt">이미지 작업 프롬프트 복사</button><a class="btn secondary" href="./builder.html">세부 조합 열기</a></div>
    </section>
  </div>`;
}
function renderHome(){
  const groups=[...new Set(RECIPES.map(r=>r.scenario))];
  const list=filteredRecipes();
  const shownGroups=groups.slice(0,8);
  return `
    <section class="wrap image-hero">
      <div class="image-hero-copy">
        <div class="kicker">Image First · Visual Knowledge Workflow</div>
        <h1>이미지를 올리고,<br><em>어떻게 보일지 고르세요.</em></h1>
        <p>처음 아이디어처럼 책 표지, 페이지 사진, 스크린샷, 손필기에서 시작합니다. 마인드맵 하나만 만들 수도 있고, 스케치노트 + 인포그래픽 + 치트시트처럼 여러 결과를 동시에 설계할 수도 있습니다.</p>
      </div>
      ${visualWorkspace({compact:true})}
    </section>
    <section class="wrap section situation-start">
      <div class="section-head"><div><div class="kicker">Situation Explorer</div><h2>${RECIPES.length}개 상황 레시피에서 시작</h2></div><p>6단계를 전부 채우는 방식만 제공하지 않습니다. 1–2단계 빠른 작업, 3–4단계 실용 조합, 5–6단계 완성형을 함께 탐색할 수 있습니다.</p></div>
      ${filters()}
      ${shownGroups.map(g=>{const rs=list.filter(r=>r.scenario===g).slice(0,6);return rs.length?`<div class="scenario-group"><div class="section-head"><h2 style="font-size:20px">${g} <span class="badge muted">${list.filter(r=>r.scenario===g).length}</span></h2></div><div class="grid">${rs.map(recipeCard).join("")}</div></div>`:""}).join("")||'<div class="empty">조건에 맞는 조합이 없습니다.</div>'}
      <div class="cta-row"><a class="btn primary" href="./recipes.html">전체 레시피 보기</a><a class="btn secondary" href="./visuals.html">이미지 결과 형식 전체 보기</a></div>
    </section>`;
}
function renderRecipes(){
  const list=filteredRecipes();
  const quick=RECIPES.filter(r=>activeSteps(r.path).length<=2).length;
  const mid=RECIPES.filter(r=>{const n=activeSteps(r.path).length;return n>=3&&n<=4}).length;
  const full=RECIPES.filter(r=>activeSteps(r.path).length>=5).length;
  return `<section class="wrap page-head"><div class="kicker">Recipe Library</div><h1>${RECIPES.length}개 상황별 조합</h1><p>완성형 파이프라인뿐 아니라 중간 단계를 생략한 짧은 조합까지 함께 제공합니다. 상황, 목적, 원본, 단계 수, 난이도로 좁혀보세요.</p></section>
    <section class="wrap section">
      <div class="stats"><div class="stat"><b>${RECIPES.length}</b><span>전체 레시피</span></div><div class="stat"><b>${quick}</b><span>1–2단계 빠른 작업</span></div><div class="stat"><b>${mid}</b><span>3–4단계 조합</span></div><div class="stat"><b>${full}</b><span>5–6단계 완성형</span></div></div>
      ${filters()}<div class="grid">${list.length?list.map(recipeCard).join(""):'<div class="empty">조건에 맞는 레시피가 없습니다.</div>'}</div>
    </section>`;
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
  const active=activeSteps(path);
  return `<section class="wrap page-head"><div class="kicker">Flexible Combination Builder</div><h1>필요한 단계만 골라 연결하세요</h1><p>원본부터 패키지까지 모두 선택할 필요가 없습니다. 각 단계의 <strong>사용 안 함</strong>을 선택하면 해당 단계는 프롬프트에서 완전히 빠집니다.</p></section>
    <section class="wrap section">
      <div class="builder-modebar">
        <button class="small-btn" data-preset="quick">빠른 2단계</button>
        <button class="small-btn" data-preset="visual">이미지 시각화</button>
        <button class="small-btn" data-preset="study">학습 4단계</button>
        <button class="small-btn" data-preset="full">완성형 6단계</button>
        <button class="small-btn" data-preset="clear">모두 비우기</button>
        <span class="badge">${active.length}단계 사용 중</span>
      </div>
      <div class="builder">
        <div class="panel">${STAGES.map(s=>`<div class="builder-row ${state.builder[s.id]?"":"disabled-stage"}"><label>${s.label} · ${s.en}<small>${state.builder[s.id]?"사용":"생략"}</small></label><select data-build="${s.id}"><option value="" ${!state.builder[s.id]?"selected":""}>— 사용 안 함 —</option>${BLOCKS[s.id].map(([id,name])=>`<option value="${id}" ${state.builder[s.id]===id?"selected":""}>${name}</option>`).join("")}</select></div>`).join("")}</div>
        <div class="panel"><div class="kicker">Final Prompt · ${active.length} steps</div><h2 style="font-size:19px">${active.length?active.map(x=>x.label).join(" → "):"선택된 단계 없음"}</h2><div class="prompt-box">${escapeHTML(promptFor(path))}</div><div class="cta-row"><button class="btn primary" id="copy-builder" ${active.length?"":"disabled"}>프롬프트 복사</button><button class="btn secondary" id="copy-share">조합 링크 복사</button></div></div>
      </div>
    </section>`;
}
function renderVisuals(){
  return `<section class="wrap page-head"><div class="kicker">Visual Output Lab</div><h1>이미지 한 장에서 24가지 결과로</h1><p>마인드맵, 스케치노트, 인포그래픽처럼 원래 원하셨던 이미지 중심 사용법을 가장 앞에 두었습니다. 여러 결과를 동시에 선택할 수 있습니다.</p></section>
    <section class="wrap section">${visualWorkspace({compact:false})}
      <div class="panel visual-notes"><h2>조합 예시</h2><div class="visual-example-list">
        <span>이미지 → 스케치노트</span><span>책 표지 → 핵심 아이디어 → 마인드맵</span><span>스크린샷 → 페인포인트 → 주석 이미지</span><span>표 → 수치 → 차트</span><span>이미지 → 인포그래픽 + 포스터 + 카드</span><span>노트 사진 → 개념맵 → 학습 시트</span>
      </div></div>
    </section>`;
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

function rerenderKeepingFocus(id,value,selectionStart){
  renderPage();
  requestAnimationFrame(()=>{
    const el=document.getElementById(id);
    if(!el)return;
    el.focus();
    const pos=Math.min(selectionStart??value.length,value.length);
    if(typeof el.setSelectionRange==="function") el.setSelectionRange(pos,pos);
  });
}
document.addEventListener("input",event=>{
  if(event.target.id==="recipe-q"){
    state.q=event.target.value;
    rerenderKeepingFocus("recipe-q",state.q,event.target.selectionStart);
  }
  if(event.target.id==="style-q"){
    state.styleQ=event.target.value;
    rerenderKeepingFocus("style-q",state.styleQ,event.target.selectionStart);
  }
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
