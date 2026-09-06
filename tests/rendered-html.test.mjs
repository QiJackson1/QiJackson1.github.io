import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("exports a complete GitHub Pages homepage", async () => {
  const html = await readFile(new URL("dist/client/index.html", projectRoot), "utf8");
  assert.match(html, /Jason Qi/);
  assert.match(html, /Robotics &amp; Embodied Intelligence/);
  assert.match(html, /Selected Publications/);
  assert.match(html, /Selected Projects/);
  assert.match(html, /Education &amp; Experience/);
  assert.doesNotMatch(html, /[\u3400-\u9fff]/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
  await access(new URL("dist/client/avatar.jpg", projectRoot));
  await access(new URL("dist/client/og.png", projectRoot));
});
