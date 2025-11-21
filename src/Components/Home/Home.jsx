import { Element } from "react-scroll";
import Hero from "../Hero/Hero";
import Opinions from "../Opinions/Opinions";
import Footer from "../Footer/Footer";
import Why from "../About/why";
import Team from "../Team/Team";
import Subscription from "../Subscription/Subscription";
import Courses from "../Courses/Courses";

function Home() {
  return (
    <div className="pt-16 xl:pt-28">
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <Why />
      </Element>
      <Element name="team">
        <Team />
      </Element>
      <Element name="opinions">
        <Opinions />
      </Element>
      <Element name="courses">
        <Courses />
      </Element>
      <Element name="subscription">
        <Subscription />
      </Element>
      <Footer />
    </div>
  );
}
export default Home;
