// 1) Hero section (zwyczajowa nazwa) - welcome section when we presents products our ourself
// 2) Featured Posts
import { Fragment } from "react";
import Hero from '../components/home-page/hero';

function HomePage() {
  return (
    <Fragment>
      <Hero />
      {/* <FeaturesPosts/> */}
    </Fragment>
  );
}

export default HomePage;
