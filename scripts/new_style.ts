import { colors } from "../deps.ts";
import { generateDiscriminator } from "./util/generateDiscriminator.ts";

export const newStyle = async (
  discriminator: string = generateDiscriminator(),
  title: string = `style_${discriminator}`,
): Promise<void> => {
  const decoder = new TextDecoder();
  const filename = `./styles/${title}.ts`;
  const date = new Date().toISOString();

  const content = `/*
---
title: ${title}
date: ${date}
---
*/

export default \`html { font-size: 12px; }\` // Here is where you sprinkle your custom CSS.`;

  await Deno.writeTextFile(filename, content);

  const stylesModulePath = "./styles/mod.ts";
  const stylesModuleFile = await Deno.readFile(stylesModulePath);
  const decodedStylesModuleContent = decoder.decode(stylesModuleFile);
  const updatedModuleContent = `${decodedStylesModuleContent}
export { default as ${title} } from "./${title}.ts";`;
  await Deno.writeTextFile(stylesModulePath, updatedModuleContent);

  const successMessage1 = `${colors.green("Generated")} ${
    colors.italic(filename)
  } (To integrate your custom stylesheet, open this file)`;
  console.log(successMessage1);

  const successMessage2 = `${colors.green("Updated")} ${
    colors.italic(stylesModulePath)
  } (Pass ${
    colors.bold(title)
  } as the stylesheet title when your blog gets built)`;
  console.log(successMessage2);
};

if (import.meta.main) {
  newStyle();
}
