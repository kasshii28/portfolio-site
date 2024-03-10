import { NotionToMarkdown } from "notion-to-md";

const { Client } = require("@notionhq/client");

interface NotionPostProps {
  id: string;
  title: string;
  date: string;
  types: string[];
  files: string[];
  author: string;
}

interface NotionPostInfoProps {
  title: string;
  date: string;
  author: string;
}

const notion = new Client({
  auth: "secret_WMi8xDkcBSXkNPEx2Xf2ia67ZDwMAFwZLvWcBByOclx",
});

export async function getAllPosts(): Promise<NotionPostProps[]> {
  const res = await notion.databases.query({
    database_id: "e14a7577a2b543b4be9f1025142946a0",
    sorts: [
      {
        property: "createdate",
        direction: "descending",
      },
    ],
  });

  const posts = res.results;
  const postsProperties = posts.map((post: any) => {
    const id = post.id;
    const title = post.properties.title.title[0]?.plain_text;
    const date = post.properties.createdate.date.start;
    const types = post.properties.types.multi_select.map(
    (item: any) => item.name);
    const files = post.properties.file.files.map(
      (file: any) => file.file.url);
    const author = post.properties.author.select.name;
    return { id, title, date, types, files, author };
  });
  return postsProperties;
}

export async function getPageInfo(
  pageId: string,
): Promise<NotionPostInfoProps> {
  const res = await notion.pages.retrieve({ page_id: pageId });
  const pageInfo = res.properties;

  const title = pageInfo.title.title[0]?.plain_text;
  const date = pageInfo.createdate.date.start;
  const author = pageInfo.author.select.name;

  return { title, date, author };
}

const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPageContent(pageId: string) {
  const mdblocks = await n2m.pageToMarkdown(pageId, 2);

  return mdblocks;
}
