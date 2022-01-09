import Link from "next/link";
import Image from 'next/image';

import classes from './post-item.module.css';

function PostItem(props) {
  // elemnt listy <li> bo jestesstesmy w komponencie PostGrid który jest unordered list
  // całąść powinna być klikalna
  const {title, image, excerpt, date, slug} = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long', //1 =? Janu
    year: 'numeric'
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          {/* trzeba dodać <a> bo skompilowaka cała struktura ma być linkiem */}
          <div className={classes.image}>
            {/* layout żeby siatka postów ładnie się zachodziła layout='responsive' będą rosły/malały razem z kontenerem */}
            <Image src={imagePath} alt={title} width={300} height={200} layout='responsive'/>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
