import { Fragment } from "react";

import MainNavigation from './main-navigation';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      {/* props children bo ten komponent opakuje komponenty z pages/_app.js */}
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
