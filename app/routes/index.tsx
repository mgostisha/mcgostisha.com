import type { MetaFunction } from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Martin Gostisha",
    description: "Welcome to my website!"
  };
};

export default function Index() {
  return (
    <p>lol hi?</p>
  );
}
