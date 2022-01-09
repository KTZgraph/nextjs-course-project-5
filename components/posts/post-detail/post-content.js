//markdown krótszy od html ale może zostać w niego zmieniony(HTML) albo w JSX z jakąs dodatkową bilbioteką
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import PostHeader from "./post-header";
import classes from "./post-content.module.css";

function PostConentent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;


  //mówic markdownowi jak ma nadpisać defaultowe  ustawienia - sprawa ładnego wyświetlania obrazka
  const customRenderers = {
    // img(image) {
    //   // metoda z React MArkdown ma atrybut image i dnormalnie zwraca <img/> NIE korzystając z nextjs Image
    //   //image argument alttext to ten z markdowna w []
    //   //image.src to nazwa pliku z markdowna (nextjs-file-based-routing.png)
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       // alt={image.alt}
    //       alt={image.src}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      //obrazek jest w paragrafie - to robi nextjs
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`images/posts/${post.slug}/${image.properties.src}`}
              // alt={image.alt}
              alt={`images/posts/${post.slug}/${image.properties.src}`}
              width={600}
              height={300}
            />
          </div>
        );
      }

      // jak nie ma to zwracam zwykły paragraf
      return <p>{paragraph.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />

      {/* z markdowna do (html) jsx */}
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostConentent;
