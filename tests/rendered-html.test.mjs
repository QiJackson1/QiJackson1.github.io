import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("exports a complete GitHub Pages homepage", async () => {
  const html = await readFile(new URL("dist/client/index.html", projectRoot), "utf8");
  assert.match(html, /Kaijie Qi/);
  assert.match(html, /<strong>戚凯杰<\/strong>/);
  assert.match(html, /Robotics &amp; Embodied Intelligence/);
  assert.match(html, /Selected Publications/);
  assert.match(html, /Selected Patents/);
  assert.match(html, /<h2>Education<\/h2>/);
  assert.match(html, /<h2>Experience<\/h2>/);
  assert.match(html, /Li Auto · Humanoid Robotics/);
  assert.match(html, /HONOR Device Co\., Ltd\. · Humanoid Robotics/);
  assert.match(html, /exoskeleton robotics\.<br\/>GPA: 3\.82\/4\.0/);
  assert.match(html, /nanoindentation testing\.<br\/>GPA: 3\.77\/4\.0/);
  assert.match(html, /<h2>Awards<\/h2>/);
  assert.match(html, /<h2>Honors<\/h2>/);
  assert.match(html, /Henan Advanced Graphics Competition/);
  assert.match(html, /Tingya Scholarship/);
  assert.doesNotMatch(html, /Awards &amp; Honors/);
  assert.match(html, /rel="icon" href="\/github-favicon\.png"/);
  assert.match(html, /rel="shortcut icon" href="\/github-favicon\.png"/);
  assert.doesNotMatch(html.replaceAll("戚凯杰", ""), /[\u3400-\u9fff]/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
  await access(new URL("dist/client/profile-speaking.jpg", projectRoot));
  await access(new URL("dist/client/github-favicon.png", projectRoot));
  await access(new URL("dist/client/og.png", projectRoot));
});
