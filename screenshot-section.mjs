import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const scrollY = parseInt(process.argv[3] || '0');
const label = process.argv[4] || `scroll${scrollY}`;

const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

const existing = fs.readdirSync(screenshotDir).filter(f => f.endsWith('.png'));
const nums = existing.map(f => parseInt(f.match(/screenshot-(\d+)/)?.[1] || '0')).filter(n => !isNaN(n));
const nextNum = nums.length > 0 ? Math.max(...nums) + 1 : 1;
const outputPath = path.join(screenshotDir, `screenshot-${nextNum}-${label}.png`);

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1200));
  if (scrollY > 0) {
    await page.evaluate(y => {
      window.scrollTo(0, y);
      // Dispatch scroll event to trigger IntersectionObserver fallback
      window.dispatchEvent(new Event('scroll'));
    }, scrollY);
  }
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: outputPath, fullPage: false });
  await browser.close();
  console.log(`Saved: ${outputPath}`);
})();
