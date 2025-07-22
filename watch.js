const chokidar = require("chokidar");
const path = require("path");
const { getDependencies } = require("./getGraph");

function normalize(p) {
  return p.replace(/\.(ts|tsx|js|jsx)$/, "").replace(/^\.\/|\\/g, "");
}

async function startWatcher() {
  const deps = await getDependencies();
  console.log("✅ Dependency graph built. Waiting for changes...\n");

  // Use a relative glob pattern

  const watcher = chokidar.watch(".", {
    ignored: /node_modules/,
    ignoreInitial: true,
    usePolling: true,
    interval: 100,
    binaryInterval: 300,
  });

  watcher
    .on("change", (changedPath) => {
      console.log("🔥 File changed:", changedPath);

      const relativePath = normalize(path.relative(process.cwd(), changedPath));
      console.log(`💡 Normalized changed file: ${relativePath}`);

      const affected = [];

      for (const [file, imports] of Object.entries(deps)) {
        const normalizedImports = imports.map(normalize);
        if (normalizedImports.includes(relativePath)) {
          affected.push(file);
        }
      }

      if (affected.length > 0) {
        console.log("📍 Affected files:");
        affected.forEach((f) => console.log(` - ${f}`));
      } else {
        console.log("🟢 No affected files.\n");
      }
    })
    .on("error", (error) => {
      console.error("❌ Error in watcher:", error);
    });
}

startWatcher();
