import { exec } from 'child_process';
import path from 'path';
import fs from 'fs/promises';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function extractFirstFrame(videoPath: string): Promise<string> {
  // For development, just return the video path if ffmpeg isn't available
  if (process.env.NODE_ENV === 'development') {
    return '/assets/fallback-poster.jpg';
  }

  const fullPath = path.join(process.cwd(), 'public', videoPath);
  const thumbnailDir = path.join(process.cwd(), 'public/thumbnails');
  const thumbnailName = `${path.parse(videoPath).name}.jpg`;
  const thumbnailPath = path.join(thumbnailDir, thumbnailName);
  
  try {
    await fs.mkdir(thumbnailDir, { recursive: true });
    
    await execAsync(
      `ffmpeg -i "${fullPath}" -vf "select=eq(n\\,0)" -vframes 1 "${thumbnailPath}"`
    );
    
    return `/thumbnails/${thumbnailName}`;
  } catch (error) {
    console.error('Error generating thumbnail:', error);
    return '/assets/fallback-poster.jpg';
  }
}