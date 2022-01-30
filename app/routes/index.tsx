import type { LinksFunction, MetaFunction } from "remix";
import { Link } from '~/core';
import Outline from '~/components/Outline';

import indexCssUrl from '~/styles/routes/index.css';

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: indexCssUrl },
  ];
};

export let meta: MetaFunction = () => {
  return {
    title: "home | mcgostisha",
    description: "Homepage for Marty Gostisha"
  };
};

export default function Index() {
  return (
    <div className="index">
      <h1>I'm <Outline>Marty</Outline>, an engineer(ing manager).</h1>
      <p>I lead the <Outline>web product team</Outline> for <Link external to="https://info.flipgrid.com">Flipgrid</Link> at <Link external to="https://careers.microsoft.com/us/en/search-results?keywords=Flipgrid">Microsoft</Link>.</p>
      <p>I'm <Outline>writing</Outline> on my <Link to="blog">blog</Link>.</p>
      <p>Sometimes I <Link external to="https://twitter.com/mg0stisha">tweet</Link>.</p>
      <p>I post snippets about what I'm <Outline>learning</Outline> on <Link to="til">TIL</Link>.</p>
      <p>You can view my <del>unfinished side projects</del> code on <Link external to="https://github.com/mgostisha">github</Link>.</p>
      <p>Feel free to send me an <Link external to="mailto:martingostisha@gmail.com">email</Link>.</p>
    </div >
  );
}
