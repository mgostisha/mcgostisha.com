import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import { getTIL } from "~/til";
import type { TILItem } from "~/til";

type Props = {};

export let loader: LoaderFunction = async ({ params }) => {
  console.log('PARAMS:', params);
  if (!params.slug) return {};
  return getTIL(params.slug);
};

export default function TILPostRoute(props: Props) {
  const data = useLoaderData<TILItem>();
  return (
    <div dangerouslySetInnerHTML={{ __html: data.html || '' }} />
  );
};
