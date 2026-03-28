import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const routes = ["/catalogo", "/sobre", "/contato", "/outros-produtos"];

const distDir = resolve("dist");
const sourceIndex = resolve(distDir, "index.html");

if (!existsSync(sourceIndex)) {
  throw new Error("Build não encontrado: dist/index.html");
}

for (const route of routes) {
  const cleanRoute = route.replace(/^\/+|\/+$/g, "");
  if (!cleanRoute) continue;

  const targetFile = resolve(distDir, cleanRoute, "index.html");
  mkdirSync(dirname(targetFile), { recursive: true });
  copyFileSync(sourceIndex, targetFile);
}

console.log(`Subpáginas geradas: ${routes.join(", ")}`);
