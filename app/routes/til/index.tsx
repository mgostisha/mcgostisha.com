import { useLoaderData } from "@remix-run/react";
import type { LinksFunction, LoaderFunction, MetaFunction } from "@remix-run/node";

import { getTILs } from "~/til";
import type { TILItem } from "~/til";

import { Link, Outline } from '~/core';

import tilCssUrl from '~/styles/routes/til.css';

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tilCssUrl },
  ];
};

export let meta: MetaFunction = () => {
  return {
    title: "til | mcgostisha",
    description: "Short snippets of content I've learned recently",
    'og:title': "TIL (Today I Learned)",
    'og:description': "Quick snippets of things I've learned recently.",
    'og:image': "https://mcgostisha.com/images/og-image-til.png",
    'og:url': "https://mcgostisha.com/til",
  };
};

export let loader: LoaderFunction = async () => {
  const data = await getTILs();
  if (data.error) throw data.error;
  return data.tils;
}

type TILItemProps = {
  til: TILItem;
}

function TILListItem({ til }: TILItemProps) {
  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(date);
  }

  const createdAt = formatDate(new Date(til.created_at));
  const updatedAt = formatDate(new Date(til.updated_at));

  return (
    <div className="til__listItem">
      <Link to={`${til.slug}`}>{til.title}</Link>
      <p>{createdAt === updatedAt ? createdAt : `Written on ${createdAt}`}</p>
      {updatedAt === createdAt ? null : <p>{`Last updated ${updatedAt}`}</p>}
    </div>
  );
}

type Props = {};

export default function TILIndexRoute(props: Props) {
  const data = useLoaderData<TILItem[]>();
  return (
    <div className="til grid">
      <h1 className="grid-column-container"><Outline>T</Outline>oday <Outline>I</Outline> <Outline>L</Outline>earned</h1>
      <div className="til__list grid-column-container">
        {
          data.length ?
            data.map(til => {
              return (<TILListItem key={til.slug} til={til} />)
            }) : <p>coming soon!</p>
        }
      </div>
    </div>
  );
};