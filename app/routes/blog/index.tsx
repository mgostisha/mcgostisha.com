import { useLoaderData } from "@remix-run/react";
import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";

import { Link, Outline } from '~/core';
import { formatDate } from '~/utils/dates';

import blogCssUrl from '~/styles/routes/blog.css';

type Post = {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  tags: string[];
}

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: blogCssUrl },
  ];
};

export let meta: MetaFunction = () => {
  return {
    title: "blog | mcgostisha",
    description: "Blogging about web development, engineering management, the NBA, and much more.",
    'og:title': "Blog",
    'og:description': "Blogging about web development, engineering management, the NBA, and much more.",
    'og:image': "https://mcgostisha.com/images/og-image-blog.png",
    'og:url': "https://mcgostisha.com/blog",
  };
};

export let loader: LoaderFunction = async () => {
  return [];
}

type BlogItemProps = {
  post: Post;
}

function BlogItem({ post }: BlogItemProps) {
  const createdAt = formatDate(post.created_at);
  const updatedAt = formatDate(post.updated_at);

  return (
    <div className="blogItem">
      <Link to={`${post.id}`}>{post.title}</Link>
      <p>{createdAt === updatedAt ? createdAt : `Written on ${createdAt}`}</p>
      {updatedAt === createdAt ? null : <p>{`Last updated ${updatedAt}`}</p>}
    </div>
  );
}

export default function BlogIndexRoute() {
  const data = useLoaderData<Post[]>();

  return (
    <div className="blog grid">
      <h1 className="grid-column-container"><Outline>Blog</Outline></h1>
      <div className="blog__list grid-column-container">
        {
          data.length ?
            data.map(post => {
              return (<BlogItem key={post.id} post={post} />)
            }) : <p>coming soon</p>
        }
      </div>
    </div>
  );
};
