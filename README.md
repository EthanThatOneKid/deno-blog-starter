# Deno Blog Starter 🦕

> Blog CLI and Static blog project-starter in Deno.

## Blogging 💌

Each of your blog posts are represented by a markdown file (file with the `.md` extension).
Your blog posts can have the following frontmatter associated with them:

```yaml
---
title: Your Title Here
date: Date
description: Your description here.
published: false # Change to true to include this blog-post.
---

```

The rest of the contents of the blog-post file are written in [Markdown][markdown_definition].

## Usage 🐱‍🐉

Make sure that you have [installed Deno][deno_installation].

<details>
  <summary>
  
  ### Create Blog Post
</summary>

To create a new blog post, run the following command.

> 💡 You can pass your title and description as well, but they are not required.

`dbs --new-post -t "Your Title" -d "Your description."`

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

### Generate Blog

To generate the files for your static blog, run the following command:

`deno run --unstable --allow-read --allow-write scripts/build.ts`

You can pass the name of your chosen stylesheet.
You may choose between [`air`](styles/air.ts), [`modest`](styles/modest.ts), [`retro`](styles/retro.ts), or [`splendor`](styles/spendor.ts).
The `modest` stylesheet is chosen by default.
_Or_ you may [create a custom stylesheet](#add-custom-stylesheet).

`deno run --unstable --allow-read --allow-write scripts/build.ts -s YOUR_STYLE_TITLE`

### Preview Blog

To preview your blog on your machine, run the following command:

`deno run --allow-read --allow-net --unstable https://deno.land/std/http/file_server.ts site/ -p 8000 --host localhost`

Visit http://localhost:8000/ to preview your blog.

### Add Custom Stylesheet

To add a custom stylesheet, run the following command:

`deno run --unstable --allow-read --allow-write scripts/new_style.ts`

You can pass the title of your custom stylesheet as well.

`deno run --unstable --allow-read --allow-write scripts/new_style.ts -t YOUR_STYLE_TITLE`

### Dealing with Future Updates

You may have cloned the `deno-blog-starter` repository for your blog quite some time ago.
It is likely that there have been improvements/updates to the base program.

## Development 👨‍💻

### Goals 🏁

- [ ] Built-in deployment methods...
  - [ ] GitHub Pages
  - [ ] Netlify
  - [ ] Vercel

---

Created with 💖 by [EthanThatOneKid][creator_url]

[creator_url]: https://github.com/EthanThatOneKid/
[deno_installation]: https://github.com/denoland/deno_install
[markdown_definition]: https://commonmark.org/help/
