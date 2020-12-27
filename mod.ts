import { colors, parseFlags } from "./deps.ts";
import { build } from "./scripts/build.ts";
import { newPost } from "./scripts/new_post.ts";
import { newStyle } from "./scripts/new_style.ts";
import { serve } from "./scripts/serve.ts";

export interface DenoBlogStarterSettings {
  "new-post"?: boolean;
  "new-style"?: boolean;
  "serve"?: boolean;
  "build"?: boolean;
  "help"?: boolean;

  t?: string; // title
  d?: string; // description
  s?: string; // stylesheetTitle
}

export const main = async (settings: DenoBlogStarterSettings) => {
  if ("new-post" in settings) {
    await newPost(settings.t, settings.d);
  } else if ("new-style" in settings) {
    await newStyle(undefined, settings.t);
  } else if ("serve" in settings) {
    await serve();
  } else if ("build" in settings) {
    await build(settings.s);
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
export { build, newPost, newStyle, serve };
