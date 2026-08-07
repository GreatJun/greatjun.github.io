# 이준호 — Unity Client Developer Portfolio

모바일 게임의 코어 플레이와 인게임 시스템부터 데이터·제작 도구,
런타임 최적화, 라이브 운영, 모듈형 프레임워크 R&D까지 정리한 반응형
원페이지 포트폴리오입니다.

현재 프로젝트는 로컬 전용이며 외부 호스팅 연결을 사용하지 않습니다.

핵심 메시지는 “게임의 규칙을 구현하고, 제품을 지탱하는 기반을
설계한다”입니다. 게임플레이 구현 경험과 제작·런타임 시스템 경험을 함께
보여주고, 반복해서 확인한 경계를 개인 Unity 프레임워크 `CoreForge`로
정리하는 과정까지 담았습니다.

## 구성

- 책임·경계·근거·자산화로 차별점을 압축한 첫 화면 역량 밴드
- 개발 판단 원칙과 실제 제품에서 반복한 시스템
- 장난감 특공대, 홀캣, 머지 편의점, 매치 편의점, 니트 블럭 루프,
  The Living Fortress, 고양이 청소부, 우드드득의 2열 대표 사례와 AOS·iOS
  스토어 링크
- 대표작 외 13개 작업을 코어·변형·라이브 3개 작업군으로 압축한
  프로젝트 아카이브
- Knit Block Loop, Toy Commando, The Living Fortress, Backpack Fight,
  FatCat 코드를 대조한 3개 런타임 설계 경계
- 기존 라이브러리를 대체하지 않고 반복되는 조립 규칙을 패키지화하는
  CoreForge v0.1.0(WIP)의 제작 이유와 구현 지도
- EntityWorld의 현재 범위와 Jobs·EntityKernel·Benchmark의 미구현 계획,
  DOTS 전환 비용을 함께 보여주는 Entity Runtime R&D
- 플레이어블·어시스트 요약과 4개 범주의 기술 스택
- 모바일·태블릿·데스크톱·인쇄 레이아웃

## 연락처

- Email: `ljun19970@gmail.com`
- GitHub: `https://github.com/GreatJun`

## 실행

```bash
npm install
npm run dev
```

검증은 `npm run lint`와 `npm test`로 수행합니다.

## GitHub Pages

`main` 브랜치에 변경이 올라가면 GitHub Actions가 정적 사이트를 빌드해
`https://greatjun.github.io/`에 배포합니다. 로컬에서 같은 정적 결과를
확인하려면 `npm run build:pages`를 실행합니다.
