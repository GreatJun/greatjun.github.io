import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the compact, evidence-led portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="ko"/i);
  assert.match(html, /<title>이준호 \| Unity Client Developer<\/title>/i);
  assert.match(html, /<h1[^>]*id="hero-title"[^>]*>이준호<\/h1>/i);
  assert.match(html, /게임의 규칙을 구현하고/);
  assert.match(html, /제품을 지탱하는 기반을 설계합니다/);
  assert.match(html, /ljun19970@gmail\.com/);
  assert.match(html, /github\.com\/GreatJun/);

  assert.equal(
    (html.match(/class="capability-pillar"/g) ?? []).length,
    4,
    "the first view should retain four portfolio-wide capability pillars",
  );
  for (const capability of [
    "책임",
    "경계",
    "근거",
    "자산화",
    "PLAYABLE",
    "HANDOFF",
    "BOUNDARY",
    "DECISION",
    "PACKAGE",
  ]) {
    assert.match(html, new RegExp(capability));
  }
  assert.equal(
    (html.match(/class="strength-card"/g) ?? []).length,
    3,
    "How I Decide should be limited to three decision principles",
  );
  assert.doesNotMatch(html, /MY DEVELOPMENT THESIS/);

  for (const projectName of [
    "장난감 특공대",
    "홀캣",
    "머지 편의점",
    "매치 편의점",
    "니트 블럭 루프",
    "캐슬",
    "고양이 청소부",
    "우드드득",
  ]) {
    assert.match(html, new RegExp(projectName));
  }
  assert.equal(
    (html.match(/class="featured-project"/g) ?? []).length,
    8,
    "the selected-project section should keep eight compact project cards",
  );
  assert.equal(
    (html.match(/class="featured-identity"/g) ?? []).length,
    8,
    "each selected project should integrate its icon with its title",
  );
  assert.equal(
    (
      html.match(/class="featured-icon(?: featured-icon--poster)?"/g) ?? []
    ).length,
    8,
  );
  assert.equal(
    (html.match(/class="tag-row"/g) ?? []).length,
    0,
    "duplicated technology tag rows should be removed from project cards",
  );
  assert.equal(
    (
      html.match(
        /<a[^>]*aria-label="[^"]*스토어에서 보기"[^>]*>/g,
      ) ?? []
    ).length,
    15,
    "eight AOS and seven iOS links should remain available",
  );

  assert.equal(
    (html.match(/class="archive-group"/g) ?? []).length,
    3,
    "thirteen secondary projects should be summarized as three work groups",
  );
  assert.match(
    html,
    /PARTICIPATED PROJECTS<\/span><strong>13<\/strong>/,
  );
  for (const archiveExample of [
    "마블컬러링소트",
    "트리플매치편의점",
    "캣타워소트",
    "토이블럭",
    "얼음빙",
    "냥냥팡팡",
    "솔리테어",
    "드리미룸",
    "블럭팡",
    "외 3",
    "외 1",
  ]) {
    assert.match(html, new RegExp(archiveExample));
  }
  for (const omittedArchiveName of [
    "마크블럭",
    "쥬얼슬라이딩",
    "2048클릭",
    "퐁당냥",
  ]) {
    assert.doesNotMatch(
      html,
      new RegExp(omittedArchiveName),
      "the compact archive should show scope and count instead of every title",
    );
  }
  assert.equal((html.match(/class="archive-item"/g) ?? []).length, 0);

  assert.equal(
    (html.match(/class="architecture-compact-card"/g) ?? []).length,
    3,
    "cross-project architecture should be reduced to three verified boundaries",
  );
  for (const architectureEvidence of [
    "App Root",
    "Scene Scope",
    "World Delta",
    "Command Queue",
    "Registry · Factory",
    "World · UI View",
    "Knit",
    "Toy",
    "Castle",
    "Backpack",
    "FatCat",
  ]) {
    assert.match(html, new RegExp(architectureEvidence));
  }
  assert.equal((html.match(/class="architecture-card"/g) ?? []).length, 0);

  assert.match(html, /<h2[^>]*id="coreforge-title"[^>]*>CoreForge<\/h2>/i);
  assert.match(html, /v0\.1\.0/);
  assert.match(html, /WHY ANOTHER FRAMEWORK\?/);
  assert.match(html, /라이브러리를 대체하지 않습니다/);
  assert.equal((html.match(/class="framework-reason"/g) ?? []).length, 3);
  assert.equal(
    (html.match(/class="framework-overview-row"/g) ?? []).length,
    4,
    "the implementation map should be four concise status rows",
  );
  assert.equal((html.match(/class="entity-choice"/g) ?? []).length, 3);
  assert.equal(
    (html.match(/class="entity-roadmap"/g) ?? []).length,
    1,
  );
  assert.match(html, /왜 곧바로 DOTS로 가지 않는가\?/);
  assert.match(html, /CURRENT · PARTIAL/);
  assert.match(html, /PLANNED · NOT IMPLEMENTED/);
  assert.match(html, /QueryExact 구현 · 다형 Query 미구현/);
  assert.match(html, /DOTS 또는 Kernel의 우위를 전제하지 않음/);
  assert.doesNotMatch(html, /class="framework-item"/);
  assert.doesNotMatch(html, /304 PlayMode Tests/i);

  assert.equal(
    (html.match(/class="fast-summary-card"/g) ?? []).length,
    2,
    "Playable and Assist should be summarized as two cards",
  );
  assert.equal((html.match(/class="tech-grid"/g) ?? []).length, 1);
  assert.equal(
    (html.match(/<article><h3>(?:Unity Client|Architecture &amp; Runtime|Data &amp; Tooling|Live &amp; Integration)<\/h3>/g) ?? []).length,
    4,
  );
  assert.match(html, /CONTINUOUS TECHNICAL PRACTICE/);
  assert.match(html, /TECH SESSION/);
  assert.match(html, /PROTOTYPE \/ PROFILE/);
  assert.match(html, /PROJECT \/ COREFORGE/);
  assert.doesNotMatch(html, />APPLIED<|>R&amp;D DIRECTION<|>ROADMAP</);

  assert.doesNotMatch(html, /프로젝트 타임라인|다음 세 프로젝트도 제작 중입니다/);
  assert.doesNotMatch(html, /Watermelon Warrior/);
  assert.doesNotMatch(
    html,
    /\b20(?:24|25|26)\b/,
    "project dates should not appear in the portfolio",
  );
  assert.match(html, /property="og:title"/i);
  assert.match(
    html,
    /rel="canonical" href="https:\/\/greatjun\.github\.io\/"/i,
  );
  assert.match(
    html,
    /property="og:image" content="https:\/\/greatjun\.github\.io\/og\.png"/i,
  );
  assert.match(
    html,
    /name="twitter:card" content="summary_large_image"/i,
  );
  assert.match(
    html,
    /name="twitter:image" content="https:\/\/greatjun\.github\.io\/og\.png"/i,
  );
  assert.doesNotMatch(
    html,
    /(?:property="og:image"|rel="(?:icon|apple-touch-icon)")[^>]*\/projects\//i,
  );
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});

test("keeps links, assets, status claims, and compact layout contracts valid", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  const source = `${page}\n${layout}`;
  const assetPaths = [
    ...new Set(
      [...source.matchAll(/["'](\/projects\/[^"']+)["']/g)].map(
        (match) => match[1],
      ),
    ),
  ];
  await Promise.all(
    assetPaths.map((assetPath) =>
      access(new URL(`../public${assetPath}`, import.meta.url)),
    ),
  );

  const anchors = [
    ...new Set(
      [...page.matchAll(/href=["']#([^"']+)["']/g)].map(
        (match) => match[1],
      ),
    ),
  ];
  for (const anchor of anchors) {
    assert.match(page, new RegExp(`id=["']${anchor}["']`));
  }

  const sectionOrder = [
    'id="featured"',
    'id="archive"',
    'id="architecture"',
    'id="coreforge"',
    'id="playable"',
  ].map((marker) => page.indexOf(marker));
  assert.ok(
    sectionOrder.every(
      (position, index) =>
        position >= 0 && (index === 0 || position > sectionOrder[index - 1]),
    ),
  );

  assert.match(
    page,
    /href="https:\/\/github\.com\/GreatJun"[\s\S]{0,100}target="_blank"[\s\S]{0,100}rel="noreferrer"/,
  );
  assert.match(
    page,
    /className="project-store-links"[\s\S]*?target="_blank"[\s\S]*?rel="noreferrer"/,
  );
  assert.equal((page.match(/platform: "AOS"/g) ?? []).length, 8);
  assert.equal((page.match(/platform: "iOS"/g) ?? []).length, 7);
  for (const [projectName, assetPath] of [
    ["장난감 특공대", "/projects/toy-survivor-cover.png"],
    ["홀캣", "/projects/hole-cat-icon.png"],
    ["머지 편의점", "/projects/merge-supermarket-icon.png"],
  ]) {
    assert.match(
      page,
      new RegExp(
        `name: "${projectName}"[\\s\\S]{0,220}image: "${assetPath.replace(".", "\\.")}"`,
      ),
    );
  }

  assert.match(
    css,
    /\.featured-list\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/,
  );
  assert.match(
    css,
    /\.featured-project\s*\{[\s\S]*?min-height:\s*370px/,
    "desktop project cards should be materially shorter than the previous layout",
  );
  assert.doesNotMatch(page, /className="featured-media"/);
  assert.match(
    css,
    /\.project-store-links a\s*\{[\s\S]*?min-height:\s*44px/,
  );
  assert.match(
    css,
    /\.archive-groups\s*\{[\s\S]*?grid-template-columns:\s*repeat\(3,/,
  );
  assert.match(
    css,
    /\.architecture-compact-grid\s*\{[\s\S]*?grid-template-columns:\s*repeat\(3,/,
  );
  assert.match(
    css,
    /\.fast-summary-grid\s*\{[\s\S]*?grid-template-columns:\s*repeat\(2,/,
  );

  assert.match(page, /const coreForgeReasons = \[/);
  assert.match(page, /const frameworkOverview = \[/);
  assert.match(page, /const entityChoices = \[/);
  assert.match(page, /const entityRoadmap = \[/);
  assert.match(
    page,
    /name: "EntityWorld"[\s\S]{0,160}phase: "CURRENT · PARTIAL"/,
  );
  assert.match(
    page,
    /name: "EntityWorld\.Jobs"[\s\S]{0,160}phase: "PLANNED · NOT IMPLEMENTED"/,
  );
  assert.match(
    page,
    /name: "EntityKernel & Benchmark"[\s\S]{0,180}phase: "PLANNED · NOT IMPLEMENTED"/,
  );
  assert.doesNotMatch(page, /const frameworkGroups = \[/);
  assert.doesNotMatch(page, /const technicalPractice = \[/);
  assert.doesNotMatch(page, /const quickWorks = \[/);
  assert.doesNotMatch(page, /const archive = \[/);
  assert.doesNotMatch(page, /Persistent Scene/);
  assert.doesNotMatch(page, /304 PlayMode Tests/i);

  assert.doesNotMatch(
    css,
    /font-size:\s*(?:[0-9](?:\.[0-9]+)?)px/,
    "fixed pixel text should not be smaller than 10px",
  );
});
