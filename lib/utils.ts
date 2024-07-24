import fs from 'fs';
import path from 'path';
import { IProject } from './types';

export async function getAllProjects(): Promise<IProject[]> {
  const contentDirectory = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(contentDirectory);

  const projects = await Promise.all(
    filenames
      .filter(filename => filename.endsWith('.ts') && !filename.startsWith('index'))
      .map(async (filename) => {
        // Remove the file extension
        const name = filename.replace(/\.ts$/, '');
        // Use a dynamic import with a template literal
        const _ = await import(`@/content/${name}`);
        return _.default;
      })
  );

  return projects;
}