import { colors, expandGlob, Marked, parseFlags } from "../deps.ts";
import * as stylesheets from "../styles/mod.ts";

const flags = parseFlags(Deno.args);
const stylesheetTitle = flags.s || "modest";
const postsGlob = "./posts/**/*.md"; // TODO: Allow image files and copy them into their respective directories.
const exportRoot = "./site/";
const postsPrefixPattern = /^.*\\posts\\/gi;
const postsExtensionPattern = /\.md$/gi;
const postFiles = expandGlob(postsGlob); // https://deno.land/std/fs/README.md#expandglob
const decoder = new TextDecoder("utf-8");

for await (const file of postFiles) {
  if (file.isFile) {
    const fileContents = await Deno.readFile(file.path);
    const decodedFileContents = decoder.decode(fileContents);
    const { content, meta } = Marked.parse(decodedFileContents);
    if (!meta.published) {
      continue;
    }
    const exportPath = file.path.replace(postsPrefixPattern, exportRoot)
      .replace(postsExtensionPattern, "");
    await Deno.mkdir(exportPath, { recursive: true });
    const markup = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title}</title>
</head>
<style>
  ${(stylesheets as Record<string, string>)[stylesheetTitle]}
</style>
<body>${content}</body>
</html>
    `; // TODO: Create good metadata based on frontmatter. Goal: perfect lighthouse score.
    const filename = `${exportPath}/index.html`;
    await Deno.writeTextFile(filename, markup);
    const successMessage = `${colors.green("Generated")} ${
      colors.italic(filename)
    } ${colors.bold(`(${new Blob([markup]).size} bytes)`)}`;
    console.log(successMessage);
  }
}
