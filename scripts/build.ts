import { Marked } from "../deps.ts";
import { expandGlob } from "../deps.ts";

const postsGlob = "./posts/**/*.md";
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
    const exportPath = file.path.replace(postsPrefixPattern, exportRoot)
      .replace(postsExtensionPattern, "");
    await Deno.mkdir(exportPath, { recursive: true });
    const markup = content; // TODO: Create html template system and include CSS and frontmatter info. Goal: perfect lighthouse score.
    await Deno.writeTextFile(`${exportPath}/index.html`, markup);
    console.log({ meta, exportPath }, file.path);
  }
}
