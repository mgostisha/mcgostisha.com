import type { MetaFunction } from "remix";

import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

export let meta: MetaFunction = () => {
  return {
    title: "Martin Gostisha",
    description: "Welcome to my website!"
  };
};

export default function Index() {
  return (
    <div id="root">
      <Navbar>Hi, Navbar</Navbar>
      <main>Martin Gostisha</main>
      <Footer>Hi, Footer</Footer>
    </div>
  );
}
