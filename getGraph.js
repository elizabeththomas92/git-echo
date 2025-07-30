const madge = require("madge");

async function getDependencies(entryPath = "./") {
  const result = await madge(entryPath, {
    fileExtensions: ["ts", "tsx", "js", "jsx"],
    tsConfig: "./tsconfig.json",
  });

  const deps = await result.obj();
  return deps; // returns {file:[dependencies]}
}

module.exports = { getDependencies };