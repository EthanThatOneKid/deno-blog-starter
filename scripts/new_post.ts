import { colors } from "../deps.ts";
import { generateDiscriminator } from "./util/generateDiscriminator.ts";

export const newPost = async (
  title: string = "Your Title Here",
  description: string = "Your description here.",
  discriminator: string = generateDiscriminator(),
): Promise<void> => {
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
  const filename = `./posts/post_${discriminator}.md`;
  await Deno.mkdir("posts");
  await Deno.writeTextFile(filename, content);

  const successMessage = `${colors.green("Generated")} ${
    colors.italic(filename)
  }`;
  console.log(successMessage);
};

if (import.meta.main) {
  newPost();
}
