// 1) Hero section (zwyczajowa nazwa) - welcome section when we presents products our ourself
// 2) Featured Posts
import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturesPosts from "../components/home-page/featured-posts";

const DUMMY_POST = [
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is a React framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is a React framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is a React framework for production",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with Nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "Nextjs is a React framework for production",
    date: "2022-02-10",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturesPosts posts={DUMMY_POST} />
    </Fragment>
  );
}

export default HomePage;
