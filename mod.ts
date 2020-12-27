import { colors, parseFlags } from "./deps.ts";
export { build } from "./scripts/build.ts";
export { newPost } from "./scripts/new_post.ts";
export { newStyle } from "./scripts/new_style.ts";
export { serve } from "./scripts/serve.ts";

export interface DenoBlogStarterSettings {
  "new-post"?: boolean;
  "new-style"?: boolean;
  "serve"?: boolean;
  "build"?: boolean;
  "help"?: boolean;

  title?: string;
  description?: string;
  stylesheetTitle?: string;
}

export const main = async (settings: DenoBlogStarterSettings) => {
  if ("new-post" in settings) {
    await newPost(settings.title, settings.description);
  } else if ("new-style" in settings) {
    await newStyle(undefined, settings.title);
  } else if ("serve" in settings) {
    await serve();
  } else if ("build" in settings) {
    await build(settings.stylesheetTitle);
  } else if ("help" in settings) {
    console.log(`
+------------------------+
| ${colors.bold("deno-blog-starter")} menu |
+------------------------+----------------------+
| usage: ${colors.bold("deno-blog-starter")} ${colors.green("[script]")} ${
      colors.yellow("[detail(s)]")
    } |
+-----------------------------------------------+
| ${colors.green("scripts")}:                                      |
  deno-blog-starter ${colors.green("--new-post")}
    ${colors.yellow("--title")} "YOUR_TITLE"
    ${colors.yellow("--description")} "YOUR_DESCRIPTION"
|                                               |
  deno-blog-starter ${colors.green("--new-style")}
    ${colors.yellow("--stylesheetTitle")} "STYLE_TITLE"
|                                               |
  deno-blog-starter ${colors.green("--build")}
    ${colors.yellow("--stylesheetTitle")} "STYLE_TITLE"
|                                               |  
  deno-blog-starter ${colors.green("--serve")}
|                                               |
  deno-blog-starter ${colors.green("--help")}
|                                               |
+-----------------------------------------------+`);
  }
};

if (import.meta.main) {
  const flags = parseFlags(Deno.args) as DenoBlogStarterSettings;
  await main(flags);
}

export default main;
