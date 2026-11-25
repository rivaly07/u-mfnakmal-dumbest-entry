import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const entry = 'I fixed the repo path, then committed the fix to the wrong repo. The commit message was "path fixed."';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), `${entry}\n`, 'utf8');
