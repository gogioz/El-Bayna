import { useEffect, useRef } from "react";

const Opinions = () => {
  const scrollRef = useRef(null);

  const opinions = [
    {
      name: "أميرة",
      content: "حضرتك أول معلمة ارتاح معاها كدة واتشجع اني احفظ.",
    },
    {
      name: "نوران",
      content: "بحب حضرتك جداً وبستني الحلقة, وحضرتك سهلتي عليا الحفظ خالص.",
    },
    {
      name: "إسراء",
      content:
        "حبيت الحلقة وإسلوب حضرتك التشجيعي وعدم الانتقاد زي ما كان بيحصل معايا قبل كدة.",
    },
    { name: "مني", content: "من أفضل المعلمات جزاكم الله خيراً." },
    {
      name: "أميرة",
      content: "جزاكم الله خيراً على مجهودكم وعلى التشجيع وتيسير الحفظ.",
    },
    {
      name: "مريم/عالية",
      content: "أشكركم علة جهودكم, مستوي البنات تحسن جداً بارك الله فيكم.",
    },
  ];
  const loopedOpinions = [...opinions, ...opinions];
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: scrollRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" pt-12 xl:pt-8  bg-hover shadow-lg pb-16  ">
      <div className="xl:pb-10  flex justify-center items-center">
        <h1 className="main-title text-center font-Amiri-Bold xl:text-5xl text-text bg-white  xl:p-8 rounded-lg   text-4xl">
          آراء الطلاب
        </h1>
      </div>

      <div className="relative w-full overflow-x-hidden ">
        <div className="flex w-max animate-slide gap-6" dir="rtl">
          {loopedOpinions.map((opinion, index) => (
            <div
              key={index}
              className="w-[200px] h-[250px] px-4 xl:w-[450px] xl:h-[225px] bg-white text-text xl:p-6 rounded-xl shadow-md flex-shrink-0"
            >
              <p className="text-2xl xl:text-3xl font-Amiri-Bold xl:mb-3 leading-10">
                {opinion.content}
              </p>
              <p className="text-right text-2xl xl:text-4xl font-Amiri-Bold">
                - {opinion.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opinions;
