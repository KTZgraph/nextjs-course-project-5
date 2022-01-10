import { Fragment } from "react";
import Head from "next/head";

import FeaturesPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

// 1) Hero section (zwyczajowa nazwa) - welcome section when we presents products our ourself
// 2) Featured Posts

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Max blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturesPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  //getServerSide strasznie zwolni stronę  nie ma za bardzo sensu bo raczej się markdown nie zmieni za bardzo
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 100 //mają sie odświeżać bo dane mogę się zmienić do rebuildzie
  };
}

export default HomePage;
