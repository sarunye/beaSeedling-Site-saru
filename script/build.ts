import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();
  
  // Create 404.html for SPA routing support on GitHub Pages/Static hosts
  const fs = await import("fs/promises");
  try {
    await fs.copyFile("dist/public/index.html", "dist/public/404.html");
    console.log("created 404.html for SPA routing");
  } catch (e) {
    console.warn("failed to create 404.html:", e);
  }

  // Skip server build for Vercel/Static deployments
  console.log("skipping server build for static deployment...");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
