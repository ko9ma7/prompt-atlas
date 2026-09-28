# Prompt Atlas — AI 결과 조합 사전

책, 논문, 강의, 회의록, 기사, 인터뷰 같은 원본을 **추출 → 구조화 → 표현 → 활용 → 패키지** 흐름으로 조합해 원하는 최종 결과를 설계하는 정적 웹서비스입니다.

**Live**: https://ko9ma7.github.io/prompt-atlas/

## 주요 기능
- 상황별 레시피 탐색
- 검색 / 목적 / 원본 / 난이도 필터
- 즐겨찾기 LocalStorage 저장
- 6단계 파이프라인 보기
- 구조화 × 표현 매트릭스 보기
- 직접 조합 빌더 + 최종 프롬프트 생성
- 조합 링크 공유
- Light / Dark / System 테마
- 모바일 반응형
- 서버·DB·API Key 없이 동작

## 보기 방식
1. **상황별** — 독서, 연구, 학습, 업무, 리서치, 정보, 데이터, 기획, 콘텐츠 등 실제 상황에서 시작
2. **레시피** — 완성된 조합을 카드로 비교
3. **파이프라인** — SOURCE → EXTRACT → STRUCTURE → VISUALIZE → USE → PACKAGE 전체 옵션 확인
4. **매트릭스** — 구조화 방식 × 표현 방식을 교차 탐색
5. **조합 빌더** — 원하는 블록을 골라 복붙 가능한 프롬프트 생성

## 기술
- HTML / CSS / Vanilla JavaScript
- LocalStorage
- GitHub Pages
- 별도 서버, DB, API Key 없음

## 로컬 실행
```bash
python -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속.

## GitHub Pages 배포

이 저장소는 빌드 과정이 필요 없는 정적 사이트이므로 **GitHub Actions가 아니라 branch publishing**을 사용합니다.

최초 1회 다음 설정만 필요합니다.

1. Repository → **Settings**
2. 왼쪽 **Pages**
3. **Build and deployment**
4. Source: **Deploy from a branch**
5. Branch: **main**
6. Folder: **/(root)**
7. **Save**

이후 `main` 브랜치의 변경사항이 GitHub Pages에 반영됩니다.

> 과거의 실패한 GitHub Actions deployment 기록은 이력으로 남을 수 있지만, 현재 배포 방식과는 무관합니다.

## 콘텐츠 확장
현재 레시피와 옵션 데이터는 `index.html` 내부 JavaScript에 있습니다. 레시피 배열에 항목을 추가하면 상황별/레시피 화면에 자동 반영됩니다.

## Repository About 권장값

**Description**
```
상황별 AI 결과 조합을 탐색하고, 원본 → 추출 → 구조화 → 표현 → 활용 → 패키지 흐름으로 프롬프트를 설계하는 웹서비스
```

**Website**
```
https://ko9ma7.github.io/prompt-atlas/
```

**Topics**
```
ai, chatgpt, prompt-engineering, prompt-library, productivity, learning, knowledge-management, visualization, github-pages, korean
```

## 참고
`/mindmap`, `/sketchnotes` 같은 표현은 ChatGPT의 공식 명령어가 아니라 원하는 출력 형식을 빠르게 설명하기 위한 프롬프트 별칭으로 다룹니다.

## License
MIT
