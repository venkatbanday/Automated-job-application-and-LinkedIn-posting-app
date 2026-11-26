import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const root = new URL('../', import.meta.url);
const required = ['index.html','toolkit.html','career-hub.html','job-fit.html','resume-builder.html','interview-coach.html','linkedin-post.html','carousel-studio.html','data-tools.html','404.html','manifest.webmanifest','sw.js','icon.svg','icon-192.png','icon-512.png'];
const errors = [];
for (const file of required) {
  const p = new URL(file, root);
  if (!fs.existsSync(p)) errors.push(`Missing required file: ${file}`);
}
for (const file of required.filter(x => x.endsWith('.html'))) {
  const html = fs.readFileSync(new URL(file, root), 'utf8');
  if (!/<html[\s>]/i.test(html)) errors.push(`${file}: missing html root`);
  if (!/<meta[^>]+name=["']viewport["']/i.test(html)) errors.push(`${file}: missing viewport meta`);
  for (const href of [...html.matchAll(/href=["']([^"'#?]+\.html)(?:[?#][^"']*)?["']/gi)].map(x=>x[1])) {
    if (!fs.existsSync(new URL(href, root))) errors.push(`${file}: broken local link ${href}`);
  }
  for (const [,script] of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)) {
    if (!script.trim()) continue;
    try { new vm.Script(script, {filename:`${file}:inline-script`}); }
    catch (e) { errors.push(`${file}: JavaScript syntax error: ${e.message}`); }
  }
}
try {
  const m = JSON.parse(fs.readFileSync(new URL('manifest.webmanifest', root), 'utf8'));
  if (!m.name || !m.start_url || !Array.isArray(m.icons)) errors.push('Invalid PWA manifest fields');
  for (const icon of m.icons || []) if (!fs.existsSync(new URL(icon.src, root))) errors.push(`Missing PWA icon: ${icon.src}`);
} catch(e) { errors.push(`Manifest parse error: ${e.message}`); }
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
const sw = fs.readFileSync(new URL('sw.js', root), 'utf8');
for (const page of ['index.html','toolkit.html','career-hub.html','job-fit.html','resume-builder.html','interview-coach.html','linkedin-post.html','carousel-studio.html','data-tools.html']) if (!sw.includes(page)) errors.push(`Service worker cache missing: ${page}`);
if (errors.length) { console.error(errors.join('\\n')); process.exit(1); }
console.log(`CareerOS smoke tests passed: ${required.length} release assets present, HTML links resolved, inline JavaScript parsed, manifest and offline cache valid.`);
