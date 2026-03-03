// SubscriptionSection.jsx
import { NavLink } from "react-router-dom";

const allPlans = [
  // col 3 - first on mobile
  {
    name: "الباقة الأولي",
    features: ["4 حصص شهرياً", "ساعتين", "مدة الحلقة 'نصف ساعة'"],
    col: 3,
  },
  {
    name: "الباقة الثانية",
    features: ["4 حصص شهرياً", "4 ساعات", "مدة الحلقة 'ساعة'"],
    col: 3,
  },
  // col 2 - second on mobile
  {
    name: "الباقة المميزة",
    features: [
      "عدد حصص من اختيارك",
      "عدد ساعات من اختياراك",
      "متابعة فردية أسبوعية مع المدرب",
      "تقرير شهري لتقييم التقدم",
      "تمارين تفاعلية وحصرية",
    ],
    col: 2,
  },
  // col 1 - last on mobile
  {
    name: "الباقة الثالثة",
    features: ["8 حصص شهرياً", "4 ساعات", "مدة الحلقة 'نصف ساعة'"],
    col: 1,
  },
  {
    name: "الباقة الرابعة",
    features: ["8 حصص شهرياً", "8 ساعات", "مدة الحلقة 'ساعة'"],
    col: 1,
  },
];

const PlanCard = ({ plan }) => (
  <div className="rounded-xl shadow-lg bg-white sm:w-[300px] md:w-[350px] lg:w-[600px] xl:w-full flex flex-col justify-center items-center py-6">
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
);

const Subscription = () => {
  return (
    <section className="bg-hover pt-12 pb-20">
      <div className="xl:pb-10 flex justify-center">
        <h1 className="main-title-1 text-center font-Amiri-Bold sm:text-5xl sm:p-2 xl:text-5xl text-text bg-white p-4 lg:text-4xl xl:p-8 rounded-lg">
          الباقات الشهرية
        </h1>
      </div>

      {/* Mobile: col3 → col2 → col1 */}
      <div className="flex xl:hidden flex-col items-center gap-y-8">
        {allPlans.map((plan, i) => (
          <PlanCard key={i} plan={plan} />
        ))}
      </div>

      {/* Desktop: 3-column grid */}
      <div className="hidden xl:grid xl:grid-cols-3 xl:gap-x-8 xl:px-16 xl:items-start">
        <div className="flex flex-col items-center gap-y-8">
          {allPlans
            .filter((p) => p.col === 1)
            .map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
        </div>
        <div className="flex flex-col items-center gap-y-8">
          {allPlans
            .filter((p) => p.col === 2)
            .map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
        </div>
        <div className="flex flex-col items-center gap-y-8">
          {allPlans
            .filter((p) => p.col === 3)
            .map((plan, i) => (
              <PlanCard key={i} plan={plan} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;
