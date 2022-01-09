import Image from "next/Image";
import classes from './post-header.module.css';

function PostHeader(props) {
  const { title, image } = props;
    //tu się spodziewam, że image to pełna ściezka do obrazka

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={200} />
    </header>
  );
}

export default PostHeader;
