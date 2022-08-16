import fs from 'fs/promises';
import path from 'path';
import parseFrontMatter from "front-matter";
import invariant from 'tiny-invariant';
import { marked } from 'marked';

export type TILItem = {
  slug: string;
  title: string;
  created_at: string;
  updated_at: string;
  html?: string;
};

export type PostMarkdownAttributes = {
  title: string;
  created_at: string;
  updated_at: string;
};

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title;
}

const tilPath = path.join(process.cwd(), "public", "content", "til");

export async function getTILs() {
  try {
    const dir = await fs.readdir(tilPath);
    const tils = await Promise.all(
      dir.map(async filename => {
        const file = await fs.readFile(path.join(tilPath, filename));
        const { attributes } = parseFrontMatter(file.toString());
  
        invariant(isValidPostAttributes(attributes));
        const data = {
          slug: filename.replace(/\.md$/, ""),
          ...attributes
        };
        return data;
      })
    );

    return { tils: tils.sort((a, b) => (a.created_at > b.created_at ? -1 : 1)) };
  } catch (ex) {
    return { error: ex };
  }
}

export async function getTIL(slug: string) {
  const file = await fs.readFile(path.join(tilPath, `${slug}.md`));
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(isValidPostAttributes(attributes));
  return {
    slug,
    html: marked(body),
    ...attributes
  };
}