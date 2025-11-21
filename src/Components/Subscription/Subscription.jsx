// SubscriptionSection.jsx
import { NavLink } from "react-router-dom";

const plans = [
  {
    name: "الباقة الثالثة",
    features: ["8 حصص شهرياً", "4 ساعات", "مدة الحلقة 'نصف ساعة'"],
    // highlighted: false,
  },
  {
    name: "الباقة الرابعة",
    features: ["8 حصص شهرياً", "8 ساعات", "مدة الحلقة 'ساعة'"],
    // highlighted: false,
  },
];
const plans2 = [
  {
    name: "الباقة المميزة",
    features: [
      "عدد حصص من اختيارك",
      "عدد ساعات من اختياراك",
      "متابعة فردية أسبوعية مع المدرب",
      "تقرير شهري لتقييم التقدم",
      "تمارين تفاعلية وحصرية",
    ],
    // highlighted: false,
  },
];
const plans3 = [
  {
    name: "الباقة الأولي",
    features: ["4 حصص شهرياً", "ساعتين", "مدة الحلقة 'نصف ساعة'"],
    // highlighted: false,
  },
  {
    name: "الباقة الثانية",
    features: ["4 حصص شهرياً", "4 ساعات", "مدة الحلقة 'ساعة'"],
    // highlighted: false,
  },
];

const Subscription = () => {
  return (
    <section className="bg-hover pt-12 pb-20 ">
      <div className=" xl:pb-10  flex justify-center ">
        <h1 className="main-title text-center font-Amiri-Bold xl:text-5xl text-text bg-white  p-4 text-4xl xl:p-8 rounded-lg ">
          الباقات الشهرية
        </h1>
      </div>
      <div className="flex  justify-center items-center gap-y-8 flex-col-reverse xl:flex-row ">
        <div className="flex  flex-col justify-center items-center gap-y-8 xl:gap-8 xl:px-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl  shadow-lg bg-white w-[300px]  xl:w-[400px] flex flex-col justify-center items-center py-6`}
            >
              <h2 className="text-4xl text-hover font-Amiri-Bold mb-2 text-center">
                {plan.name}
              </h2>

              <ul className="text-right self-end mb-6 space-y-2 mr-4" dir="rtl">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-2xl text-text">
                    {feature}
                  </li>
                ))}
              </ul>
              <NavLink to="/contact">
                <button className="bg-hover outline-none border-none text-xl text-white px-6 py-2 rounded-xl hover:bg-opacity-80 transition cursor-pointer">
                  اشترك الآن
                </button>
              </NavLink>
            </div>
          ))}
        </div>

        <div className="flex  flex-col justify-center items-center gap-y-8 xl:gap-8 xl:px-8">
          {plans2.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl  shadow-lg bg-white w-[300px] xl:w-[400px] flex flex-col justify-center items-center py-6`}
            >
              <h2 className="text-4xl text-hover font-Amiri-Bold mb-2 text-center">
                {plan.name}
              </h2>

              <ul className="text-right self-end mb-6 space-y-2 mr-4" dir="rtl">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-2xl text-text">
                    {feature}
                  </li>
                ))}
              </ul>
              <NavLink to="/contact">
                <button className="bg-hover outline-none border-none text-xl text-white px-6 py-2 rounded-xl hover:bg-opacity-80 transition cursor-pointer">
                  اشترك الآن
                </button>
              </NavLink>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-8 xl:gap-8 xl:px-8">
          {plans3.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl  shadow-lg bg-white w-[300px] xl:w-[400px] flex flex-col justify-center items-center py-6`}
            >
              <h2 className="text-4xl text-hover font-Amiri-Bold mb-2 text-center">
                {plan.name}
              </h2>

              <ul className="text-right self-end mb-6 space-y-2 mr-4" dir="rtl">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-2xl text-text">
                    {feature}
                  </li>
                ))}
              </ul>
              <NavLink to="/contact">
                <button className="bg-hover outline-none border-none text-xl text-white px-6 py-2 rounded-xl hover:bg-opacity-80 transition cursor-pointer">
                  اشترك الآن
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
