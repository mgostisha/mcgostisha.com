import { useLoaderData } from "remix";
import type { LinksFunction, LoaderFunction, MetaFunction } from "remix";

import { Link } from '~/core';
import Outline from '~/components/Outline';

import tilCssUrl from '~/styles/routes/til.css';

type TIL = {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
  tags: string[];
}

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tilCssUrl },
  ];
};

export let meta: MetaFunction = () => {
  return {
    title: "til | mcgostisha",
    description: "Short snippets of content I've learned recently"
  };
};

export let loader: LoaderFunction = async () => {
  return [
    {
      id: 3,
      title: 'Remix loader functions',
      created_at: '2022-01-29T06:00:00.000Z',
      updated_at: '2022-01-29T06:00:00.000Z',
      content: 'This is this content of the TIL'
    },
    {
      id: 2,
      title: 'Turning off reply notifications for large meetings',
      created_at: '2022-01-28T06:00:00.000Z',
      updated_at: '2022-01-29T06:00:00.000Z',
      content: 'This is this content of the TIL'
    },
    {
      id: 1,
      title: 'CSS backdrop-filter',
      created_at: '2022-01-27T06:00:00.000Z',
      updated_at: '2022-01-27T06:00:00.000Z',
      content: 'This is this content of the TIL'
    },
  ]
}

type TILItemProps = {
  til: TIL;
}

function TILItem({ til }: TILItemProps) {
  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).format(date);
  }

  const createdAt = formatDate(new Date(til.created_at));
  const updatedAt = formatDate(new Date(til.updated_at));

  return (
    <div className="tilItem">
      <Link to={`${til.id}`}>{til.title}</Link>
      <p>{createdAt === updatedAt ? createdAt : `Written on ${createdAt}`}</p>
      {updatedAt === createdAt ? null : <p>{`Last updated ${updatedAt}`}</p>}
    </div>
  );
}

type Props = {};

export default function TILIndexRoute(props: Props) {
  const data = useLoaderData<TIL[]>();
  return (
    <div className="til">
      <h1><Outline>T</Outline>oday <Outline>I</Outline> <Outline>L</Outline>earned</h1>
      <div className="til__list">
        {
          data.length ?
            data.map(til => {
              return (<TILItem key={til.id} til={til} />)
            }) : <p>coming soon</p>
        }
      </div>
    </div>
  );
};