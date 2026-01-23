import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();
  
  // Skip server build for Vercel/Static deployments
  console.log("skipping server build for static deployment...");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
