import fs from "node:fs";
import path from "node:path";

const publicContent = path.resolve(process.cwd(), "Website_Content");
const forbidden = [/-QC\.md$/i, /-SUPERVISED\.md$/i, /-REFORMATTED\.md$/i, /^SUMMARY-/i];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;

  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      if (name === "Internal_Review") continue;
      walk(full, out);
      continue;
    }

    out.push(full);
  }

  return out;
}

const violations = walk(publicContent).filter((file) => forbidden.some((pattern) => pattern.test(path.basename(file))));

if (violations.length) {
  console.error("Public content contains internal review files:");
  for (const file of violations) console.error(`- ${path.relative(publicContent, file)}`);
  process.exit(1);
}

console.log("Public content clean.");
