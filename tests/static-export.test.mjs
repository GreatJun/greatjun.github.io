import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("..", import.meta.url));
const outputRoot = path.join(projectRoot, "out");

test("GitHub Pages export is self-contained and production-ready", async () => {
  await Promise.all(
    ["index.html", "404.html", "og.png"].map((file) =>
      access(path.join(outputRoot, file)),
    ),
  );

  const html = await readFile(path.join(outputRoot, "index.html"), "utf8");

  assert.match(html, /<title>이준호 \| Unity Client Developer<\/title>/i);
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
  assert.doesNotMatch(html, /localhost|127\.0\.0\.1|\/_vinext\/image/i);

  assert.equal(
    (
      html.match(
        /<a[^>]*aria-label="[^"]*스토어에서 보기"[^>]*>/g,
      ) ?? []
    ).length,
    15,
    "all public store links should survive the static export",
  );

  const localReferences = [
    ...new Set(
      [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
        .map((match) => match[1])
        .filter(
          (reference) =>
            reference.startsWith("/_next/") ||
            reference.startsWith("/projects/") ||
            reference === "/og.png",
        ),
    ),
  ];

  assert.ok(localReferences.length > 0, "the export should reference local assets");

  await Promise.all(
    localReferences.map((reference) => {
      const pathname = decodeURIComponent(
        new URL(reference, "https://greatjun.github.io").pathname,
      );
      return access(path.join(outputRoot, pathname.replace(/^\//, "")));
    }),
  );
});
