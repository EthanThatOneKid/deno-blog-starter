# Deno Blog Starter 🦕

> Static blog project-starter in Deno.

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

To develop, it is suggested to [install Deno][deno_installation].

### Create Blog Post

To create a new blog post, run the following command:

`deno run --unstable --allow-write scripts/new.ts`.

You can pass your title and description as well:

`deno run --unstable --allow-write scripts/new.ts -t "Your Title" -d "Your description."`.

### Generate Blog

To generate the files for your static blog, run the following command:

`deno run --unstable --allow-read --allow-write scripts/build.ts`

## Development 👨‍💻

### Goals 🏁

- [ ] Built-in deployment methods...
  - [ ] GitHub Pages
  - [ ] Netlify

---

Created with 💖 by [EthanThatOneKid][creator_url]

[creator_url]: https://github.com/EthanThatOneKid/
[deno_installation]: https://github.com/denoland/deno_install
[markdown_definition]: https://commonmark.org/help/
