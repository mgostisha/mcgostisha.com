import { useLoaderData } from "remix";
import type { LinksFunction, LoaderFunction, MetaFunction } from "remix";

import { Link } from '~/core';
import Outline from '~/components/Outline';

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
    description: "Marty Gostisha's blog"
  };
};

export let loader: LoaderFunction = async () => {
  return [];
}

type BlogItemProps = {
  post: Post;
}

function BlogItem({ post }: BlogItemProps) {
  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(date);
  }

  const createdAt = formatDate(new Date(post.created_at));
  const updatedAt = formatDate(new Date(post.updated_at));

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
    <div className="blog">
      <h1><Outline>Blog</Outline></h1>
      <div className="blog__list">
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
