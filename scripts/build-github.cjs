const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const repo = process.env.GITHUB_REPOSITORY || "";
const repoName = repo.split("/")[1] || "";
const base = repoName.endsWith(".github.io") ? "/" : `/${repoName}/`;

execFileSync(process.execPath, [path.join(root, "site", "build.js")], {
  cwd: root,
  stdio: "inherit",
});

const publicDir = path.join(root, "public");
const files = [];
function collect(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) collect(full);
    else if (entry.name.endsWith(".html") || entry.name.endsWith(".xml") || entry.name === "robots.txt") files.push(full);
  }
}
collect(publicDir);

if (base !== "/") {
  for (const file of files) {
    let text = fs.readFileSync(file, "utf8");
    text = text.replaceAll('href="/', `href="${base}`).replaceAll('src="/', `src="${base}`).replaceAll('action="/', `action="${base}`);
    text = text.replaceAll('content="https://www.youlichina.com/', `content="${base}`);
    fs.writeFileSync(file, text);
  }
}

fs.copyFileSync(path.join(publicDir, "index.html"), path.join(publicDir, "404.html"));
fs.writeFileSync(path.join(publicDir, ".nojekyll"), "");
console.log(`GitHub Pages build complete: ${files.length} generated files, base ${base}`);
