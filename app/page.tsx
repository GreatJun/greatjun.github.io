/* Local portfolio art is pre-sized and served directly from the public directory. */
/* eslint-disable @next/next/no-img-element */

const capabilityTransformations = [
  {
    verb: "책임",
    from: "PLAYABLE",
    to: "HANDOFF",
    label: "END-TO-END OWNERSHIP",
    detail: "핵심 규칙 구현부터 MVP·Live·인수인계까지 제품의 다음 단계를 맡습니다.",
  },
  {
    verb: "경계",
    from: "CHANGE",
    to: "BOUNDARY",
    label: "CHANGE RESILIENCE",
    detail: "콘텐츠·View·SDK의 변경이 다른 시스템으로 번지지 않도록 분리합니다.",
  },
  {
    verb: "근거",
    from: "PROFILE",
    to: "DECISION",
    label: "EVIDENCE-DRIVEN",
    detail: "CPU·GC·Memory·Loading을 측정해 최적화의 우선순위를 정합니다.",
  },
  {
    verb: "자산화",
    from: "PROJECT",
    to: "PACKAGE",
    label: "REUSABLE R&D",
    detail: "반복 검증한 계약을 CoreForge 패키지와 Entity R&D로 남깁니다.",
  },
];

const strengths = [
  {
    number: "01",
    title: "규칙을 명시합니다",
    copy: "입력·상태·판정·피드백을 추적 가능한 하나의 흐름으로 정의합니다.",
    evidence: "RULE CLARITY",
  },
  {
    number: "02",
    title: "변경의 경계를 나눕니다",
    copy: "코어와 콘텐츠·View·SDK의 수명과 변경 주기를 분리합니다.",
    evidence: "CHANGE BOUNDARIES",
  },
  {
    number: "03",
    title: "측정과 반복을 자산화합니다",
    copy: "프로파일링과 반복 사례를 제작 도구·모듈·문서로 남깁니다.",
    evidence: "EVIDENCE TO ASSET",
  },
];

const featuredProjects = [
  {
    name: "장난감 특공대",
    englishName: "Toy Survivor: The War",
    role: "전체 아키텍처 / 인게임 오너",
    image: "/projects/toy-survivor-cover.png",
    imageAlt: "Toy Survivor: The War 대표 이미지",
    imagePosition: "center",
    summary:
      "무기·행동 조합 전투와 데이터 파이프라인을 설계하고, 아웃게임 담당자와 통합 경계를 맞췄습니다.",
    contributions: [
      "VContainer · Registry · Factory 기반 인게임 경계",
      "11종 무기 × 22종 행동 · 스테이지 데이터 파이프라인",
    ],
    stores: [
      {
        platform: "AOS",
        href: "https://play.google.com/store/apps/details?id=com.actionfit.toy.defense.aos&hl=ko",
      },
      {
        platform: "iOS",
        href: "https://apps.apple.com/kr/app/toy-survivor-the-war/id6763046599",
      },
    ],
  },
  {
    name: "홀캣",
    englishName: "Hole Cat",
    role: "스테이지 에디터 / 제품화",
    image: "/projects/hole-cat-icon.png",
    imageAlt: "홀캣 앱 아이콘",
    imagePosition: "center",
    summary:
      "기존 코어를 제품으로 이어가기 위한 전용 제작 도구와 검증 흐름을 만들고 인수인계까지 연결했습니다.",
    contributions: [
      "배치 · Mirror · JSON Save / Load 기반 Stage Editor",
      "런타임 Validation · 스테이지 1–250 적용 · 인계",
    ],
    stores: [
      {
        platform: "AOS",
        href: "https://play.google.com/store/apps/details?id=com.hole.cat.aos&hl=ko",
      },
      {
        platform: "iOS",
        href: "https://apps.apple.com/kr/app/hole-cat/id6755466043",
      },
    ],
  },
  {
    name: "머지 편의점",
    englishName: "Merge Supermarket",
    role: "라이브 시스템 / 최적화",
    image: "/projects/merge-supermarket-icon.png",
    imageAlt: "머지 편의점 앱 아이콘",
    imagePosition: "center",
    summary:
      "콘텐츠가 계속 늘어나는 라이브 Merge 프로젝트에서 기능 확장과 성능·용량 대응을 함께 맡았습니다.",
    contributions: [
      "보드 · 주문 · 인벤토리 · 메타 · 시즌 콘텐츠",
      "Atlas · Font · Spine · Loading 최적화 · 라이브 SDK 6종",
    ],
    stores: [
      {
        platform: "AOS",
        href: "https://play.google.com/store/apps/details?id=com.actionfit.merge.supermarket&hl=ko",
      },
      {
        platform: "iOS",
        href: "https://apps.apple.com/kr/app/%EB%A8%B8%EC%A7%80-%ED%8E%B8%EC%9D%98%EC%A0%90-%EC%AA%BC%EA%B7%B8%EB%A7%8C-%EA%B7%80%EC%97%AC%EC%9A%B4-%EB%A8%B8%EC%A7%80%EA%B2%8C%EC%9E%84/id6599609546",
      },
    ],
  },
  {
    name: "매치 편의점",
    englishName: "Match Supermarket",
    role: "라이브 콘텐츠 / SDK",
    image: "/projects/match-supermarket.png",
    imageAlt: "매치 편의점 앱 아이콘",
    imagePosition: "center",
    summary:
      "상용 Match-3 프로젝트의 콘텐츠 업데이트와 라이브 SDK·빌드 이슈를 지속적으로 관리했습니다.",
    contributions: [
      "라이브 콘텐츠 업데이트 · 단위 검증",
      "광고 · 분석 SDK · Firebase · 플랫폼 빌드 대응",
    ],
    stores: [
      {
        platform: "AOS",
        href: "https://play.google.com/store/apps/details?id=com.actionfit.matchsupermarket&hl=ko",
      },
      {
        platform: "iOS",
        href: "https://apps.apple.com/kr/app/%EB%A7%A4%EC%B9%98-%ED%8E%B8%EC%9D%98%EC%A0%90/id6743162816",
      },
    ],
  },
  {
    name: "니트 블럭 루프",
    englishName: "Knit Block Loop",
    role: "코어 / MVP",
    image: "/projects/knit-block-loop.png",
    imageAlt: "니트 블럭 루프 앱 아이콘",
    imagePosition: "center",
    summary:
      "순환 컨베이어와 배치 퍼즐의 핵심 규칙을 데이터 기반 제작 환경까지 연결한 MVP를 구축했습니다.",
    contributions: [
      "BeltGraph 기반 순환 컨베이어",
      "7종+ 기믹 · JSON Stage Editor · 90 Stages",
    ],
    stores: [
      {
        platform: "AOS",
        href: "https://play.google.com/store/apps/details?id=com.actionfit.knit.block.loop&hl=ko",
      },
      {
        platform: "iOS",
        href: "https://apps.apple.com/kr/app/cat-loop-knit-block-puzzle/id6760704405",
      },
    ],
  },
  {
    name: "캐슬",
    englishName: "The Living Fortress",
    role: "코어 / Playable MVP",
    image: "/projects/living-fortress.png",
    imageAlt: "The Living Fortress 앱 아이콘",
    imagePosition: "center",
    summary:
      "이동하는 성을 중심으로 전투 개체와 웨이브가 확장되는 플레이어블 MVP를 설계하고 구현했습니다.",
    contributions: [
      "Entity · Factory · State 경계",
      "Non-alloc SpatialGrid 탐색 · CSV Wave 데이터",
    ],
    stores: [
      {
        platform: "AOS",
        href: "https://play.google.com/store/apps/details?id=com.actionfit.defense.castle&hl=ko",
      },
      {
        platform: "iOS",
        href: "https://apps.apple.com/kr/app/the-living-fortress/id6758047747",
      },
    ],
  },
  {
    name: "고양이 청소부",
    englishName: "Cat Cleaner",
    role: "AI / 라이브 콘텐츠 / SDK",
    image: "/projects/cat-cleaner.png",
    imageAlt: "고양이 청소부 앱 아이콘",
    imagePosition: "center",
    summary:
      "직원과 손님이 움직이는 타이쿤 흐름을 AI·비동기 처리·성장 콘텐츠와 라이브 운영으로 확장했습니다.",
    contributions: [
      "A* 직원 · 손님 이동 AI",
      "Async Queue · State 생산 흐름 · 성장 콘텐츠 · SDK 6종",
    ],
    stores: [
      {
        platform: "AOS",
        href: "https://play.google.com/store/apps/details?id=com.actionfit.catclean&hl=ko",
      },
      {
        platform: "iOS",
        href: "https://apps.apple.com/kr/app/%EA%B3%A0%EC%96%91%EC%9D%B4-%EC%B2%AD%EC%86%8C%EB%B6%80-%ED%96%84%EB%B2%84%EA%B1%B0%EA%B0%80%EA%B2%8C-%ED%83%80%EC%9D%B4%EC%BF%A4/id6639597179",
      },
    ],
  },
  {
    name: "우드드득",
    englishName: "Wood Block",
    role: "코어 / 변형 제작 / 밸런스",
    image: "/projects/woodpang.png",
    imageAlt: "우드드득 앱 아이콘",
    imagePosition: "center",
    summary:
      "블록 배치 코어를 기준으로 리소스·연출·규칙을 조정하며 여러 제품 변형을 제작하고 라이브 환경에 연결했습니다.",
    contributions: [
      "블록 배치 코어 · 게임 규칙 수정",
      "리소스 · 연출 · 밸런스 조정과 테마 변형 제작",
    ],
    stores: [
      {
        platform: "AOS",
        href: "https://play.google.com/store/apps/details?id=com.stormborn.wood.block&hl=ko",
      },
    ],
  },
];

const architecturePatterns = [
  {
    id: "scope-flow",
    number: "01",
    category: "SCOPE & FLOW",
    title: "수명과 게임 흐름의 소유자를 분명히 둡니다.",
    copy: "App Root와 additive Scene Scope가 전역·장면 수명을 나누고, EntryPoint와 GameController·State가 생성부터 결과까지의 전이를 소유합니다.",
    evidence:
      "Knit·Toy·Backpack: App/Scene Scope · Castle·FatCat: Controller/State 변형",
    flow: [
      "App Root",
      "Scene Scope",
      "EntryPoint",
      "Controller · State",
    ],
  },
  {
    id: "runtime-order",
    number: "02",
    category: "RUNTIME ORDER",
    title: "한 프레임 안의 변경 순서를 중앙에서 통제합니다.",
    copy: "GameLoop가 World Delta 반영, System 실행, Command 소비, Controller·State Tick을 순서대로 호출해 등록·실행·결과 전달의 시점을 예측 가능하게 만듭니다.",
    evidence:
      "Knit·Backpack·FatCat: Command · Toy·Knit·Backpack·FatCat: EventPipe",
    flow: [
      "World Delta",
      "Ordered Systems",
      "Command Queue",
      "Controller · State Tick",
    ],
  },
  {
    id: "data-presentation",
    number: "03",
    category: "DATA & PRESENTATION",
    title: "콘텐츠 조립과 화면 표현을 게임 규칙에서 분리합니다.",
    copy: "CSV·JSON·ScriptableObject를 Registry·Factory·DI가 런타임 객체로 조립하고, Camera·World Root·UI Canvas는 별도 표현 계층에서 화면 비율과 좌표계를 처리합니다.",
    evidence:
      "Toy: 무기·행동 · Knit: Feature · Castle·Backpack·FatCat: CSV/SO",
    flow: [
      "CSV · JSON · SO",
      "Registry · Factory",
      "Runtime Model",
      "World · UI View",
    ],
  },
];

const coreForgeReasons = [
  {
    label: "CONNECT, NOT REPLACE",
    title: "라이브러리를 대체하지 않습니다.",
    copy: "VContainer·UniTask·Addressables 같은 검증된 도구는 유지하고, 생성·비동기·리소스·해제의 연결 규칙을 계약으로 묶습니다.",
  },
  {
    label: "INDEPENDENT CORE",
    title: "Core는 독립적으로 사용합니다.",
    copy: "Common·Pool·Resource·Data Core는 Module 없이 직접 사용할 수 있고, 상위 조립 계층을 역참조하지 않습니다.",
  },
  {
    label: "OPTIONAL MODULE",
    title: "Module은 필요한 만큼 더합니다.",
    copy: "선택적 Module이 ConfigSO 조립·초기화 순서·구성 검증·역순 해제와 좁은 facade를 제공합니다.",
  },
];

const frameworkOverview = [
  {
    area: "COMMON & PATTERNS",
    status: "구현 · 부분 · 진행",
    tone: "progress",
    detail:
      "Result·Logging·Disposal과 State·Event·Command·Loop는 구현, DI와 Serialization 일부는 정리 중입니다.",
  },
  {
    area: "POOL · RESOURCE · DATA",
    status: "구현",
    tone: "ready",
    detail:
      "직접 사용하는 Core API와 선택적 Module 조립을 구현했고, Resource 경계에서 Resources·Addressables를 연결합니다.",
  },
  {
    area: "INPUT & UNITY BRIDGE",
    status: "구현 · 부분 · 계획",
    tone: "partial",
    detail:
      "Input Dispatch는 구현, Entity.Unity는 부분 구현이며 UI/MVVM 표현 구조는 계획 단계입니다.",
  },
  {
    area: "ADAPTERS & SCALE",
    status: "계획",
    tone: "planned",
    detail:
      "VContainer·UniTask·서비스 Adapter, Persistence·Platform·Simulation·Jobs 경계를 순차적으로 설계합니다.",
  },
];

const entityChoices = [
  {
    label: "WHY MANAGED FIRST",
    title: "기존 제작 방식을 유지합니다.",
    copy: "GameObject와 Managed OOP의 Authoring·View 연결은 보존하고, Entity 등록·조회·Tick의 통제 지점부터 분리합니다.",
  },
  {
    label: "WHAT IT BUYS",
    title: "변경 시점을 한곳에 둡니다.",
    copy: "EntityID·exact-type Bucket으로 등록·조회를 중앙화하고, 자동 Tick 대상의 Add/Remove는 Delta로 분리합니다.",
  },
  {
    label: "TRADE-OFF",
    title: "범용 성능을 가정하지 않습니다.",
    copy: "Managed 비용과 exact-type 조회 한계를 인정하고, 병목이 확인된 데이터만 Jobs 또는 별도 Kernel 후보로 검증합니다.",
  },
];

const entityRoadmap = [
  {
    name: "EntityWorld",
    phase: "CURRENT · PARTIAL",
    tone: "current",
    description:
      "EntityID·exact-type Bucket과 자동 Tick 대상의 Add/Remove Delta를 구현했습니다.",
    boundary: "QueryExact 구현 · 다형 Query 미구현",
  },
  {
    name: "EntityWorld.Jobs",
    phase: "PLANNED · NOT IMPLEMENTED",
    tone: "planned",
    description:
      "병목 데이터만 Native Snapshot으로 분리하는 Schedule·Complete 경계를 설계할 계획입니다.",
    boundary: "Jobs / Burst 구현 없음",
  },
  {
    name: "EntityKernel & Benchmark",
    phase: "PLANNED · NOT IMPLEMENTED",
    tone: "planned",
    description:
      "Lite-ECS/DOD 후보와 기존 방식을 같은 부하·CPU·GC·메모리·최악 프레임으로 비교할 계획입니다.",
    boundary: "DOTS 또는 Kernel의 우위를 전제하지 않음",
  },
];

const archiveGroups = [
  {
    label: "CORE & TOOLING",
    title: "코어 · 제작 도구",
    company: "액션핏",
    count: 3,
    summary:
      "퍼즐 규칙 구현, 스테이지 제작 환경, 라이브 기믹 확장까지 코어와 콘텐츠 생산 경계를 맡았습니다.",
    examples: ["마블컬러링소트", "트리플매치편의점", "캣타워소트"],
  },
  {
    label: "VARIANT & RELEASE",
    title: "변형 제작 · 출시 대응",
    company: "스톰본",
    count: 6,
    summary:
      "공통 블록 코어의 테마·연출·밸런스 변형과 로컬라이즈·광고·플랫폼 빌드 대응을 수행했습니다.",
    examples: ["토이블럭", "얼음빙", "냥냥팡팡", "외 3"],
  },
  {
    label: "LIVE & ASSIST",
    title: "콘텐츠 · 유지보수 · 어시스트",
    company: "액션핏",
    count: 4,
    summary:
      "캐주얼 퍼즐 참여, iOS·SDK·빌드 이슈 수정, 스테이지 제작 등 필요한 범위를 분명히 나눠 지원했습니다.",
    examples: ["솔리테어", "드리미룸", "블럭팡", "외 1"],
  },
];

const quickWorkGroups = [
  {
    type: "PLAYABLE · 3 PROJECTS · 1 WEEK EACH",
    title: "광고용 플레이어블",
    copy: "각 제품의 핵심 입력·규칙·피드백 루프를 1주 단위로 재구성했습니다.",
    projects: ["캣 타워 소트", "고양이 청소부", "매치 편의점"],
  },
  {
    type: "ASSIST · 2 PROJECTS",
    title: "클라이언트 어시스트",
    copy: "요청받은 로직과 제작 범위를 기존 프로젝트 규칙에 맞춰 구현했습니다.",
    projects: ["고양이 편의점 · 이동·생산 로직", "드리미 룸 · 스테이지 제작"],
  },
];

const techGroups = [
  {
    title: "Unity Client",
    items: ["Unity 6", "C#", "UniTask", "DOTween", "VContainer"],
  },
  {
    title: "Architecture & Runtime",
    items: ["State", "Command", "Factory", "Object Pool", "SpatialGrid"],
  },
  {
    title: "Data & Tooling",
    items: ["ScriptableObject", "CSV / JSON", "Custom Editor", "Addressables"],
  },
  {
    title: "Live & Integration",
    items: [
      "Firebase",
      "AppLovin MAX",
      "GameAnalytics",
      "Singular",
      "AdMob",
    ],
  },
];


export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 건너뛰기
      </a>

      <header className="topbar">
        <div className="nav-shell">
          <a className="brand" href="#top" aria-label="이준호 포트폴리오 홈">
            <span className="brand-mark">GJ</span>
            <span>
              이준호
              <small>Unity Client Developer</small>
            </span>
          </a>
          <div className="main-nav-rail">
            <nav className="main-nav" aria-label="주요 섹션">
              <a href="#philosophy">How I Decide</a>
              <a href="#featured">Projects</a>
              <a href="#architecture">Architecture</a>
              <a href="#coreforge">CoreForge</a>
              <a href="#playable">Playable</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <a className="nav-contact" href="#contact">
            Contact <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="section-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">UNITY CLIENT DEVELOPER</p>
              <h1 id="hero-title">이준호</h1>
              <p className="hero-scope">
                GAMEPLAY · PRODUCTION · RUNTIME · FRAMEWORK
              </p>
              <h2 className="hero-tagline">
                게임의 규칙을 구현하고,
                <br />
                <span>제품을 지탱하는 기반을 설계합니다.</span>
              </h2>
              <p className="hero-lead">
                코어 플레이와 인게임 시스템을 구현해 왔습니다. 반복되는
                제작·운영 문제는 데이터·제작 도구·런타임 최적화·모듈형
                프레임워크 R&amp;D로 구조화합니다.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#featured">
                  대표 프로젝트 <span aria-hidden="true">↓</span>
                </a>
                <a className="button button-ghost" href="mailto:ljun19970@gmail.com">
                  Email <span aria-hidden="true">↗</span>
                </a>
              </div>
              <a
                className="hero-github"
                href="https://github.com/GreatJun"
                target="_blank"
                rel="noreferrer"
              >
                github.com/GreatJun <span aria-hidden="true">↗</span>
              </a>
            </div>

            <aside className="hero-profile" aria-labelledby="profile-title">
              <div className="profile-head">
                <span>DEVELOPMENT RANGE</span>
                <strong>GAMEPLAY ↔ SYSTEMS</strong>
              </div>
              <h2 id="profile-title">
                플레이 경험과
                <br />
                기반 시스템을 함께 봅니다.
              </h2>
              <div className="profile-track">
                <div>
                  <span>01</span>
                  <strong>GAMEPLAY SYSTEMS</strong>
                  <p>게임 규칙 · 상태 · 전투 · AI</p>
                </div>
                <div>
                  <span>02</span>
                  <strong>PRODUCTION SYSTEMS</strong>
                  <p>데이터 · 에디터 · 파이프라인</p>
                </div>
                <div>
                  <span>03</span>
                  <strong>RUNTIME ENGINEERING</strong>
                  <p>성능 · 리소스 · 수명 관리</p>
                </div>
                <div>
                  <span>04</span>
                  <strong>FRAMEWORK R&amp;D</strong>
                  <p>계약 · 모듈 · Adapter 경계</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="evidence-strip" aria-label="개발 범위와 접근 방식">
          <div className="section-shell capability-band">
            {capabilityTransformations.map((capability, index) => (
              <article className="capability-pillar" key={capability.label}>
                <div className="capability-meta">
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{capability.label}</strong>
                </div>
                <h2>{capability.verb}</h2>
                <div className="capability-shift" aria-hidden="true">
                  <strong>{capability.from}</strong>
                  <i>→</i>
                  <strong>{capability.to}</strong>
                </div>
                <p>{capability.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-block philosophy-section"
          id="philosophy"
          aria-labelledby="philosophy-title"
        >
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">01 · HOW I DECIDE</p>
                <h2 id="philosophy-title">
                  지금 검증할 규칙과
                  <br />
                  오래 남길 기반을 구분합니다.
                </h2>
              </div>
              <p>
                플레이를 검증하는 코드와 제품이 반복해서 사용할 기반은
                수명과 변경 주기가 다릅니다. 핵심 규칙을 먼저 확인하고,
                반복되는 변경이 드러난 지점에 경계를 설계합니다.
              </p>
            </div>

            <div className="strength-grid">
              {strengths.map((strength) => (
                <article className="strength-card" key={strength.number}>
                  <span>{strength.number}</span>
                  <h3>{strength.title}</h3>
                  <p>{strength.copy}</p>
                  <div>{strength.evidence}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section-block featured-section"
          id="featured"
          aria-labelledby="featured-title"
        >
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">02 · SELECTED PROJECTS</p>
                <h2 id="featured-title">대표 프로젝트</h2>
              </div>
              <p>
                같은 형식으로 역할과 기여를 비교할 수 있게 정리했습니다.
                설명 가능한 구현 범위와 확인 가능한 결과만 담았습니다.
              </p>
            </div>

            <div className="featured-list">
              {featuredProjects.map((project, index) => (
                <article className="featured-project" key={project.name}>
                  <div className="featured-content">
                    <div className="featured-meta">
                      <span>
                        PROJECT {String(index + 1).padStart(2, "0")}
                      </span>
                      <strong>{project.role}</strong>
                    </div>
                    <div className="featured-identity">
                      <div
                        className={
                          project.name === "장난감 특공대"
                            ? "featured-icon featured-icon--poster"
                            : "featured-icon"
                        }
                      >
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          width="192"
                          height="192"
                          loading="lazy"
                          style={{ objectPosition: project.imagePosition }}
                        />
                      </div>
                      <div>
                        <p className="project-english">
                          {project.englishName}
                        </p>
                        <h3>{project.name}</h3>
                      </div>
                    </div>
                    <p className="project-summary">{project.summary}</p>
                    <ul>
                      {project.contributions.slice(0, 2).map((contribution) => (
                        <li key={contribution}>{contribution}</li>
                      ))}
                    </ul>
                    <div
                      className="project-store-links"
                      aria-label={`${project.name} 스토어 링크`}
                    >
                      {project.stores.map((store) => (
                        <a
                          href={store.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.name} ${store.platform} 스토어에서 보기`}
                          key={store.platform}
                        >
                          {store.platform}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section-block archive-section"
          id="archive"
          aria-labelledby="archive-title"
        >
          <div className="section-shell">
            <div className="section-heading split-heading inverse-heading">
              <div>
                <p className="section-kicker">PROJECT ARCHIVE</p>
                <h2 id="archive-title">프로젝트 아카이브</h2>
              </div>
              <p>
                대표작 외 13개 프로젝트는 코어·변형·라이브 세 작업군으로
                묶어 참여 범위만 남겼습니다.
              </p>
            </div>

            <div className="archive-overview">
              <div className="archive-summary">
                <span>PARTICIPATED PROJECTS</span>
                <strong>
                  {archiveGroups.reduce(
                    (total, group) => total + group.count,
                    0,
                  )}
                </strong>
                <p>대표작 외 프로젝트를 역할의 성격에 따라 묶었습니다.</p>
              </div>
              <div className="archive-groups">
                {archiveGroups.map((group, index) => (
                  <article className="archive-group" key={group.label}>
                    <header>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <small>{group.label}</small>
                    </header>
                    <h3>{group.title}</h3>
                    <p>{group.summary}</p>
                    <div>
                      <strong>{group.company}</strong>
                      <span>{group.count} PROJECTS</span>
                    </div>
                  <ul className="archive-project-names">
                      {group.examples.map((project) => (
                        <li key={project}>{project}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-block architecture-section"
          id="architecture"
          aria-labelledby="architecture-title"
        >
          <div className="section-shell">
            <div className="section-heading split-heading architecture-heading">
              <div>
                <p className="section-kicker">REUSABLE GAME RUNTIME</p>
                <h2 id="architecture-title">
                  프로젝트를 가로지르는 런타임 설계
                </h2>
              </div>
              <p>
                Knit Block Loop, Toy Commando, The Living Fortress, Backpack
                Fight, FatCat에서 반복한 구조입니다. 장르가 달라도 수명·실행
                순서·데이터 조립의 경계는 일관되게 유지합니다.
              </p>
            </div>

            <div className="architecture-compact-grid">
              {architecturePatterns.map((pattern) => (
                <article
                  className="architecture-compact-card"
                  id={`architecture-${pattern.id}`}
                  aria-labelledby={`architecture-${pattern.id}-title`}
                  key={pattern.id}
                >
                  <span>
                    ARCHITECTURE {pattern.number} · {pattern.category}
                  </span>
                  <h3 id={`architecture-${pattern.id}-title`}>
                    {pattern.title}
                  </h3>
                  <p>{pattern.copy}</p>
                  <div className="architecture-compact-flow">
                    {pattern.flow.join(" → ")}
                  </div>
                  <small className="architecture-evidence">
                    {pattern.evidence}
                  </small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section-block coreforge-section"
          id="coreforge"
          aria-labelledby="coreforge-title"
        >
          <div className="section-shell">
            <div className="section-heading split-heading forge-heading">
              <div>
                <p className="section-kicker">03 · FRAMEWORK R&amp;D</p>
                <h2 id="coreforge-title">CoreForge</h2>
                <p className="forge-product-mark">
                  PERSONAL UNITY FRAMEWORK · v0.1.0 · WIP
                </p>
              </div>
              <div className="forge-intro">
                <strong>
                  이미 있는 도구를 다시 만들기보다, 도구 사이에 남는 조립
                  규칙을 패키지로 고정합니다.
                </strong>
                <p>
                  라이브러리 하나로 해결되지 않는 초기화 순서·수명·실패·검증·
                  Adapter 경계를 반복 사례에서 추려냅니다. 모든 기능을
                  범용화하지 않고, 여러 프로젝트에서 필요가 확인된 경계만
                  CoreForge로 옮깁니다.
                </p>
              </div>
            </div>

            <div className="framework-board">
              <div className="framework-board-head">
                <div>
                  <span>WHY ANOTHER FRAMEWORK?</span>
                  <h3>새 기능보다 반복되는 결정 비용을 줄입니다.</h3>
                </div>
              </div>

              <div className="framework-rationale">
                {coreForgeReasons.map((reason, index) => (
                  <article className="framework-reason" key={reason.label}>
                    <span>
                      {String(index + 1).padStart(2, "0")} · {reason.label}
                    </span>
                    <h4>{reason.title}</h4>
                    <p>{reason.copy}</p>
                  </article>
                ))}
              </div>

              <div className="framework-board-head">
                <div>
                  <span>IMPLEMENTATION MAP</span>
                  <h3>현재 코드와 계획을 같은 무게로 보이지 않게 합니다.</h3>
                </div>
              </div>

              <div className="framework-overview" aria-label="CoreForge 구현 맵">
                {frameworkOverview.map((item) => (
                  <article
                    className="framework-overview-row"
                    data-status={item.tone}
                    key={item.area}
                  >
                    <span>{item.status}</span>
                    <h4>{item.area}</h4>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>

              <section
                className="entity-decision"
                aria-labelledby="entity-runtime-title"
              >
                <header>
                  <div>
                    <span>ENTITY RUNTIME R&amp;D</span>
                    <h3 id="entity-runtime-title">
                      왜 곧바로 DOTS로 가지 않는가?
                    </h3>
                  </div>
                  <p>
                    MonoBehaviour와 GameObject는 제작·View 연결에 강하지만,
                    개체가 늘면 등록·조회·Update 순서가 흩어집니다. 전면 DOTS
                    전환의 이주·디버깅·협업 비용을 먼저 지불하지 않고, 필요한
                    통제 지점부터 분리해 복잡도의 값을 측정합니다.
                  </p>
                </header>

                <div className="entity-choice-grid">
                  {entityChoices.map((choice) => (
                    <article className="entity-choice" key={choice.label}>
                      <span>{choice.label}</span>
                      <h4>{choice.title}</h4>
                      <p>{choice.copy}</p>
                    </article>
                  ))}
                </div>

                <ol className="entity-roadmap">
                  {entityRoadmap.map((item) => (
                    <li data-phase={item.tone} key={item.name}>
                      <span>{item.phase}</span>
                      <strong>{item.name}</strong>
                      <p>{item.description}</p>
                      <small>{item.boundary}</small>
                    </li>
                  ))}
                </ol>
              </section>

              <p className="forge-boundary">
                CoreForge는 진행 중인 개인 R&amp;D입니다. 구현·부분 구현·계획을
                현재 코드 기준으로 구분하며, Jobs·EntityKernel·Benchmark는
                아직 구현하지 않았습니다.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section-block fast-lane"
          id="playable"
          aria-labelledby="fast-title"
        >
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">
                  04 · PLAYABLE PRODUCTION / ASSIST
                </p>
                <h2 id="fast-title">
                  핵심 경험을 압축하고,
                  <br />
                  맡은 범위를 정확히 구현합니다.
                </h2>
              </div>
              <p>
                각 프로젝트의 핵심 루프를 1주 안에 광고용 플레이어블로
                재구성했습니다. 어시스트 작업은 요청받은 로직과 제작
                범위에 맞춰 수행했습니다.
              </p>
            </div>
            <div className="fast-summary-grid">
              {quickWorkGroups.map((work) => (
                <article className="fast-summary-card" key={work.title}>
                  <span>{work.type}</span>
                  <h3>{work.title}</h3>
                  <p>{work.copy}</p>
                  <ul aria-label={`${work.title} 프로젝트`}>
                    {work.projects.map((project) => (
                      <li key={project}>{project}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section-block tech-section"
          id="tech"
          aria-labelledby="tech-title"
        >
          <div className="section-shell">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">TOOLKIT</p>
                <h2 id="tech-title">기술 스택</h2>
              </div>
              <p>
                기술 이름보다 선택 이유와 경계를 설명할 수 있는 도구를
                중심으로 정리했습니다.
              </p>
            </div>
            <div className="tech-grid">
              {techGroups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <div>
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <aside
              className="technical-practice technical-practice--compact"
              aria-labelledby="technical-practice-title"
            >
              <div className="technical-practice-copy">
                <span>CONTINUOUS TECHNICAL PRACTICE</span>
                <h3 id="technical-practice-title">
                  기술 세션을 구현 가능한 근거로 바꿉니다.
                </h3>
                <p>
                  사례를 그대로 적용하지 않고 작은 실험과 프로파일링으로
                  확인한 뒤 프로젝트 또는 CoreForge R&amp;D로 연결합니다.
                </p>
              </div>
              <div
                className="technical-practice-flow"
                aria-label="기술 학습 적용 흐름"
              >
                <span>TECH SESSION</span>
                <i aria-hidden="true">→</i>
                <span>PROTOTYPE / PROFILE</span>
                <i aria-hidden="true">→</i>
                <strong>PROJECT / COREFORGE</strong>
              </div>
            </aside>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-shell">
            <div className="contact-grid">
              <div>
                <p className="section-kicker">GAMEPLAY TO FRAMEWORK</p>
                <h2 id="contact-title">
                  플레이와 기반을
                  <br />
                  함께 설계합니다.
                </h2>
              </div>
              <div className="contact-copy">
                <p>
                  게임플레이·콘텐츠 클라이언트부터 런타임 최적화·공통
                  시스템·프레임워크 R&amp;D까지, 문제의 층에 맞는 구현과
                  구조를 만들어 왔습니다.
                </p>
                <div className="contact-links">
                  <a href="mailto:ljun19970@gmail.com">
                    ljun19970@gmail.com <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    href="https://github.com/GreatJun"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/GreatJun <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <dl>
                  <div>
                    <dt>NAME</dt>
                    <dd>이준호 · GreatJun</dd>
                  </div>
                  <div>
                    <dt>ROLE</dt>
                    <dd>Unity Client Developer</dd>
                  </div>
                  <div>
                    <dt>FOCUS</dt>
                    <dd>Gameplay · Production · Runtime · Framework</dd>
                  </div>
                </dl>
              </div>
            </div>
            <footer className="footer-line">
              <span>GreatJun Portfolio</span>
              <span>UNITY CLIENT DEVELOPER PORTFOLIO</span>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
