import { colors, parseFlags } from "../deps.ts";

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

const generateDiscriminator = (length = 5): string =>
  Math.random().toString().substring(2, length + 2);
const discriminator = generateDiscriminator();
const filename = `./posts/post-${discriminator}.md`;
await Deno.writeTextFile(filename, content);

const successMessage = `${colors.green("Generated")} ${
  colors.italic(filename)
}`;
console.log(successMessage);
