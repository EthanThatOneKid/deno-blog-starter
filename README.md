# Deno Blog Starter 🦕

> Blog CLI and static blog project-starter in Deno.

## Usage 🐱‍🐉

> 💡 For a simple tutorial, check out the [Getting Started](docs/GETTING_STARTED.md) document.

Make sure that you have [installed Deno][deno_installation].
Then, install `deno-blog-starter` by executing the following command:

`deno install --unstable https://deno.land/x/dbs/mod.ts`

<details>
<summary>Create Blog Post ✨</summary>

---

Each of your [blog posts](posts) are represented by a markdown file (file with the `.md` extension).
Your blog posts can have the following frontmatter associated with them:

```yaml
---
title: Your Title Here
date: Date
description: Your description here.
published: false # Change to true to include this blog-post.
---

```

To create a new blog post, run the following command.

`dbs --new-post -t "Your Title" -d "Your description."`

> 💡 You can pass your title and description as well, but they are not required.

The rest of the contents of the blog-post file are written in [Markdown][markdown_definition].

<details>
<summary>Or run as an individual script.</summary>

`deno run --unstable --allow-write --allow-read scripts/new_post.ts -t "Your Title" -d "Your description."`.

</details>

<details>
<summary>Or run via the API.</summary>

```ts
import { newPost } from "https://deno.land/x/dbs/mod.ts";
const title = "Your Title",
  description = "Your description.";
await newPost(title, description);
```

</details>
</details>

---

<details>
<summary>Generate Blog 🧙‍♂️</summary>

---

To generate the files for your static blog, run the following command:

`dbs --build -s "chosen_stylesheet"`

> You can pass the name of your chosen stylesheet.
> You may choose between [`air`](styles/air.ts), [`modest`](styles/modest.ts), [`retro`](styles/retro.ts), or [`splendor`](styles/spendor.ts).
> The `modest` stylesheet is chosen by default.
> _Or_ you may [create a custom stylesheet](#add-custom-stylesheet).

<details>
<summary>Or run as an individual script.</summary>

`deno run --unstable --allow-read --allow-write scripts/build.ts -s YOUR_STYLE_TITLE`

</details>

<details>
<summary>Or run via the API.</summary>

```ts
import { build } from "https://deno.land/x/dbs/mod.ts";
const stylesheetTitle = "modest"; // Replace `modest` with your chosen stylesheet's title.
await build(stylesheetTitle);
```

</details>
</details>

---

<details>
<summary>Preview Blog 📡</summary>

---

To preview your blog on your machine, run the following command:

`dbs --serve`

> 💡 Visit http://localhost:8000/ to preview your blog.

> 💡 To see your latest changes, remember to re-generate the site.

<details>
<summary>Or run as an individual script.</summary>

`deno run --allow-read --allow-net --unstable scripts/serve.ts`

</details>

<details>
<summary>Or run via the API.</summary>

```ts
import { serve } from "https://deno.land/x/dbs/mod.ts";
await serve();
```

</details>
</details>

---

<details>
<summary>Add Custom Stylesheet 💅</summary>

---

To add a custom stylesheet, run the following command:

`dbs --new-style -t "YOUR_STYLE_TITLE"`

> 💡 You may pass the title of your custom stylesheet as well.

> 💡 To integrate your custom stylesheet, update the [`styles/YOUR_STYLE_TITLE.ts`](styles) file.

<details>
<summary>Or run as an individual script.</summary>

`deno run --unstable --allow-read --allow-write scripts/new_style.ts -t "YOUR_STYLE_TITLE"`

</details>

<details>
<summary>Or run via the API.</summary>

```ts
import { newStyle } from "https://deno.land/x/dbs/mod.ts";
const title = "new_stylesheet_title";
await newStyle(undefined, title);
```

</details>
</details>

---

## Project Fundamentals 👨‍💻

This project is...

1. A [template/starter repository](https://github.com/EthanThatOneKid/deno-blog-starter/generate) on GitHub.
1. A TypeScript [module](https://deno.land/x/dbs) on `deno.land/x`.
1. And a CLI (command-line interface).

> Final thoughts: This project is not limited to blogging; any directory of loosely organized markdown files will work seamlessly with the `deno-blog-starter` project (such as documentation).

---

[![Deploy with Vercel](https://vercel.com/button "Import this project on Vercel!")](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FEthanThatOneKid%2Fdeno-blog-starter%2F)

Created with 🦕 by [EthanThatOneKid][creator_url]

[creator_url]: https://github.com/EthanThatOneKid/
[deno_installation]: https://github.com/denoland/deno_install
[markdown_definition]: https://commonmark.org/help/
