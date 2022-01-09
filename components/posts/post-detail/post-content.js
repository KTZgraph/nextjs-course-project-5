//markdown krótszy od html ale może zostać w niego zmieniony(HTML) albo w JSX z jakąs dodatkową bilbioteką
import ReactMarkdown from 'react-markdown';

import PostHeader from "./post-header";
import classes from './post-content.module.css';

const DUMMY_POST = {
  slug: "getting-started-with-nextjs1",
  title: "Getting started with Nextjs",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# Jakis długi kontent w markdwon", // # zamieni na tytuł teraz stringa w htmla trzeba zamienić
};

function PostConentent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />

      {/* z markdowna do (html) jsx */}
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostConentent;
