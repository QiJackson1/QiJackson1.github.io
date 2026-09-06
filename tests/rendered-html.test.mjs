import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("exports a complete GitHub Pages homepage", async () => {
  const html = await readFile(new URL("dist/client/index.html", projectRoot), "utf8");
  assert.match(html, /Jason Qi/);
  assert.match(html, /机器人与具身智能/);
  assert.match(html, /代表性论文/);
  assert.match(html, /核心项目/);
  assert.match(html, /教育与经历/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
  await access(new URL("dist/client/avatar.jpg", projectRoot));
  await access(new URL("dist/client/og.png", projectRoot));
});
