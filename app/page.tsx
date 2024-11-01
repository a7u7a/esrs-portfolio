import Main from '@/components/main'
import { extractFirstFrame } from '@/lib/video';

export default async function Home() {
  const posterUrl = await extractFirstFrame("/assets/slides/boids-sim.mp4");
  console.log("posterUrl", posterUrl);
  return <Main />
}
