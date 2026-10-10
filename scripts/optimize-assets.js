import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inDir = path.join(__dirname, '..', 'image');
const outDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function optimize() {
  console.log('Optimizing portfolio assets...');

  // 1. Profile Portrait (800x800 square, crisp WebP & JPG)
  await sharp(path.join(inDir, 'profile.jpg'))
    .resize(800, 800, { fit: 'cover', position: 'center' })
    .webp({ quality: 88 })
    .toFile(path.join(outDir, 'profile.webp'));
  await sharp(path.join(inDir, 'profile.jpg'))
    .resize(800, 800, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 88, progressive: true })
    .toFile(path.join(outDir, 'profile.jpg'));
  console.log('Profile optimized.');

  // 2. Sathi Preview
  await sharp(path.join(inDir, 'sathi_preview.png'))
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(outDir, 'sathi_preview.webp'));
  console.log('Sathi optimized.');

  // 3. Fiira Logo
  await sharp(path.join(inDir, 'fiira_logo.png'))
    .resize(800, null, { withoutEnlargement: true })
    .png({ quality: 90 })
    .toFile(path.join(outDir, 'fiira_logo.png'));
  await sharp(path.join(inDir, 'fiira_logo.png'))
    .resize(800, null, { withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'fiira_logo.webp'));
  console.log('Fiira logo optimized.');

  // 4. DP Jewels
  await sharp(path.join(inDir, 'dpjewels_founder.jpg'))
    .resize(1200, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(outDir, 'dpjewels_founder.webp'));
  
  fs.copyFileSync(
    path.join(inDir, 'dpjewels_preview.jpg'),
    path.join(outDir, 'dpjewels_preview.webp')
  );
  console.log('DP Jewels optimized.');

  // 5. Proof of Work Photos
  const proofs = [
    { src: 'ai_innovate.jpg', out: 'ai_innovate.webp', maxW: 1400 },
    { src: 'icaiest_research_paper (2).jpg', out: 'icaiest_cert.webp', maxW: 1200 },
    { src: 'icaiest_research_paper (3).jpg', out: 'icaiest_talk.webp', maxW: 1200 },
    { src: 'ide_bootcamp (2).jpg', out: 'ide_bootcamp_cohort.webp', maxW: 1400 },
    { src: 'iiit_gwalior.jpg', out: 'iiit_gwalior.webp', maxW: 1400 },
    { src: 'solve_expo.jpg', out: 'solve_expo.webp', maxW: 1200 },
    { src: 'IMG_20260415_150855094.jpg', out: 'deepesh_portrait_2026.webp', maxW: 1200 },
  ];

  for (const p of proofs) {
    const srcPath = path.join(inDir, p.src);
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .resize(p.maxW, null, { withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(path.join(outDir, p.out));
      console.log(`Optimized ${p.out}`);
    }
  }

  console.log('All image optimization complete!');
}

optimize().catch(err => {
  console.error('Error optimizing assets:', err);
  process.exit(1);
});
