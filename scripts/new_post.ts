import { colors, parseFlags } from "../deps.ts";
import { generateDiscriminator } from "./util/generateDiscriminator.ts";

const flags = parseFlags(Deno.args);
const title = flags.t || "Your Title Here";
const description = flags.d || "Your description here.";
const date = new Date().toISOString();
const content = `---
title: ${title}
description: ${description}
date: ${date}
published: false
---

## Hello, World! 😁

I hope you are having a nice day today!
`;

const discriminator = generateDiscriminator();
const filename = `./posts/post_${discriminator}.md`;
await Deno.writeTextFile(filename, content);

const successMessage = `${colors.green("Generated")} ${
  colors.italic(filename)
}`;
console.log(successMessage);
