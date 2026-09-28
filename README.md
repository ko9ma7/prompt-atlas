# Prompt Atlas — AI 결과 조합 사전

책 표지·페이지 사진·스크린샷 같은 **이미지에서 시작**해 마인드맵, 스케치노트, 인포그래픽 등으로 시각화하거나, 책·논문·강의·회의록·기사·인터뷰를 **원본 → 추출 → 구조화 → 표현 → 활용 → 패키지** 흐름으로 조합하는 정적 웹서비스입니다.

**Live:** https://ko9ma7.github.io/prompt-atlas/

## 페이지 구성

- `index.html` — 이미지 중심 시작 화면 + 상황별 조합 탐색\n- `visuals.html` — 24가지 시각 결과를 선택하는 Visual Lab
- `recipes.html` — 완성 레시피 라이브러리
- `pipeline.html` — 6단계 파이프라인
- `matrix.html` — 구조화 × 표현 매트릭스
- `builder.html` — 조합 빌더 / 최종 프롬프트
- `styles.html` — UI 스타일 스튜디오

## 조합 방식\n\nPrompt Atlas는 전체 파이프라인만 강제하지 않습니다. 예를 들어 다음처럼 일부 단계만 사용할 수 있습니다.\n\n- 이미지 → 스케치노트\n- 책 → 요약 → 브리핑\n- 논문 → 수치 → 표\n- 코드 → 리스크 → 검토 → 체크리스트\n- 구조화(마인드맵) → 표현(인포그래픽)\n- 이미지 → 마인드맵 + 스케치노트 + 인포그래픽\n\n## Style Studio

[UI UX Pro Max](https://github.com/ko9ma7/ui-ux-pro-max-skill)의 MIT 라이선스 스타일 분류 체계를 참고해 다음을 제공합니다.

- 검색 가능한 스타일 **79개**
- Active **50개**
- Supplemental **29개**
- 서비스 전체에 실시간 적용
- 페이지 이동 후에도 LocalStorage로 선택 유지
- 스타일 검색 / 상태 필터
- Glass, Brutal, Soft UI, Clay, Neon/HUD, Organic, Retro, Paper, Editorial, Bauhaus, Design System, Pixel, Terminal 등 렌더링 패밀리
- Bento, Kinetic Typography, Data Dense, Spatial UI 등 스타일별 레이아웃 시그니처

스타일 이름/분류 출처는 `NOTICE`를 참고하세요.

## 주요 기능

- 상황별 레시피 탐색
- 검색 / 목적 / 원본 / 난이도 필터
- 즐겨찾기 저장
- 6단계 파이프라인(각 단계 생략 가능)
- 구조화 × 표현 매트릭스
- 부분 조합을 지원하는 조합 빌더
- 복사 가능한 최종 프롬프트
- 조합 URL 공유
- 79개 UI 스타일 변경
- 모바일 반응형
- 접근성 포커스 / reduced-motion 대응
- 서버·DB·API Key 없이 동작

## GitHub Pages

현재 GitHub Pages는 branch publishing 방식으로 배포합니다.

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

GitHub Pages URL:

```
https://ko9ma7.github.io/prompt-atlas/
```

과거의 실패한 `Deploy Prompt Atlas to GitHub Pages` Actions 기록은 초기 설정 실패 이력입니다. 해당 커스텀 workflow는 제거했으며, 현재는 GitHub의 기본 **pages build and deployment**가 배포를 담당합니다.

## Repository About 권장값

Description:

```
상황별 AI 결과 조합을 탐색하고, 원본 → 추출 → 구조화 → 표현 → 활용 → 패키지 흐름으로 프롬프트를 설계하는 웹서비스
```

Website:

```
https://ko9ma7.github.io/prompt-atlas/
```

Topics:

```
ai
chatgpt
prompt-engineering
prompt-library
productivity
learning
knowledge-management
visualization
github-pages
korean
```

## 로컬 실행

```bash
python -m http.server 8000
```

그 후 `http://localhost:8000`에 접속합니다.

## 참고

`/mindmap`, `/sketchnotes` 같은 표현은 ChatGPT의 공식 명령어가 아니라, 원하는 출력 형식을 빠르게 설명하기 위한 프롬프트 별칭으로 다룹니다.

## License

MIT
