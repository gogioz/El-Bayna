import "./hero.css";

import { WWD } from "./WWD/wwd";

function Hero() {
  return (
    <div className=" bg-bg pb-10">
      <div className="xl:pt-16 xl:pb-20">
        <div className="text-text  flex justify-center items-center w-[100%] xl:justify-between  xl:items-center xl:flex-row-reverse ">
          <WWD />
        </div>
      </div>
    </div>
  );
}

export default Hero;
