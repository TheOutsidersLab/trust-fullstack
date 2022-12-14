import { Fragment } from "react";
import HomepageHeader from "./Header";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <Fragment>
      <HomepageHeader />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Footer />
    </Fragment>
  );
}
