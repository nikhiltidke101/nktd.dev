const fs = require("fs");
const path = require("path");

const updateTimestamps = (filePath, overrideCreated = false) => {
  const mdxContent = fs.readFileSync(filePath, "utf-8");
  const frontmatterRegex = /---\n([\s\S]*?)\n---/;
  const match = frontmatterRegex.exec(mdxContent);

  if (match) {
    let frontmatter = match[1];

    const fileStats = fs.statSync(filePath);
    const created = fileStats.birthtime.toISOString();
    const updated = fileStats.mtime.toISOString();

    if (overrideCreated || !frontmatter.includes("created:")) {
      if (frontmatter.includes("created:")) {
        frontmatter = frontmatter.replace(/created: ".*"/, `created: "${created}"`);
      } else if (frontmatter.includes("time:")) {
        frontmatter = frontmatter.replace(/time:\n\s*created: ".*"/, `time:\n  created: "${created}"`);
      } else {
        frontmatter += `\ntime:\n    created: "${created}"`;
      }
    }

    if (frontmatter.includes("updated:")) {
      frontmatter = frontmatter.replace(/updated: ".*"/, `updated: "${updated}"`);
    } else if (frontmatter.includes("time:")) {
      frontmatter = frontmatter.replace(/time:\n\s*created: ".*"/, `time:\n  created: "${created}"\n  updated: "${updated}"`);
    } else {
      frontmatter += `\ntime:\n    updated: "${updated}"`;
    }

    const newContent = mdxContent.replace(frontmatterRegex, `---\n${frontmatter}\n---`);

    fs.writeFileSync(filePath, newContent, "utf-8");
  }
};

const findAllMdxFiles = (dirPath, overrideCreated = false, stagedMdxFiles) => {
  for (const file of stagedMdxFiles) {
    const fullPath = path.join(dirPath, file);
    
    if (fs.existsSync(fullPath)) {
      updateTimestamps(fullPath, overrideCreated);
      console.log(`Timestamp updated for file: ${file}`);
    } else {
      console.log(`File not found: ${fullPath}`);
    }
  }
};

const overrideCreated = process.argv.includes("--override-created");
const stagedMdxFiles = process.argv.slice(2);

findAllMdxFiles(process.cwd(), overrideCreated, stagedMdxFiles);