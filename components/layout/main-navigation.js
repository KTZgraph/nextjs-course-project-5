// głowna nawigacja - layout jest podzielony na pliku
// tu powinno też być logo dla bloga
import Link from "next/link";

import Logo from './logo'
import classes from './main-navigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        {/* jak w Linku dziecko nie jeset zwykły tekstem to nie generuje tagu a - trzeba samemu dodac <a> */}
        <a> {/* nie trzeba do a dodawać teraz href, fajnie bo wszsytko można w linka przekształcić*/}
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
