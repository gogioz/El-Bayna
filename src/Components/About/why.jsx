import { WhyVideo } from "./WhyVideo";
import { WhyPurpose } from "./WhyPurpose";
import WhyFeaturesSection from "./WhyFeatureSection";
import WhyCardsSection from "./WhyCardsSection";
import "./why.css";

function Why() {
  return (
    <div className="bg-[url(wall.jpg)] bg-cover pt-6 hidden">
      <div className="flex justify-center">
        <h1 className="bg-text text-white w-fit p-8 rounded-lg text-5xl">
          عن الاكاديمية
        </h1>
      </div>

      <div className=" pb-10  flex flex-col justify-center items-center">
        <h1 className="main-title text-center font-Amiri-Bold text-8xl text-text bg-white w-fit p-4  rounded-lg">
          لماذا؟
        </h1>
        <WhyFeaturesSection />
      </div>

      <div className="text-white text-3xl text-center py-4 bg-white bg-cover mx-32 rounded-2xl  ">
        <div className="flex flex-col md:flex-row items-center justify-around gap-12 h-[550px] transition-all duration-300 ease-in-out ">
          <WhyVideo />
          <WhyPurpose />
        </div>
      </div>
      <div className="flex justify-center items-center  py-4  ">
        <WhyCardsSection />
      </div>
    </div>
  );
}

export default Why;
