import AllPosts from "../../components/posts/all-posts";

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

function AllPostsPage() {
    return <AllPosts posts={DUMMY_POST}/>
}

export default AllPostsPage;
