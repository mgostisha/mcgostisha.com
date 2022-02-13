import { useLoaderData } from "remix";
import type { LinksFunction, LoaderFunction } from "remix";

import { Link } from "~/core";
import ContentMetadata from "~/core/ContentMetadata";
import { getTIL } from "~/til";
import type { TILItem } from "~/til";

import tilCssUrl from '~/styles/routes/til.css';

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tilCssUrl },
  ];
};

type Props = {};

export let loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) return {};
  return getTIL(params.slug);
};

export default function TILPostRoute(props: Props) {
  const data = useLoaderData<TILItem>();

  return (
    <div className="tilSlug grid">
      <Link to="/til" className="grid-column-container">Back to TILs</Link>
      <h1 className="tilSlug__title grid-column-prose">{data.title}</h1>
      <ContentMetadata createdAt={data.created_at} updatedAt={data.updated_at} />
      <div className="tilSlug__content grid-column-prose" dangerouslySetInnerHTML={{ __html: data.html || '' }} />
    </div>
  );
};
