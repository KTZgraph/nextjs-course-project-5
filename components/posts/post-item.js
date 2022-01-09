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

  return (
    <li className={classes.post}>
      <Link>
        <a>
          {/* trzeba dodać <a> bo skompilowaka cała struktura ma być linkiem */}
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200}/>
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
