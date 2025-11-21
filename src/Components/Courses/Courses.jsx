import { IoIosInformationCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom"; // Add this at the top

import { useState } from "react";
import { IoClose } from "react-icons/io5";

// CoursesSection.jsx
const courses = [
  {
    title: "الطفل المسلم",
    image: "course-4.png",
    description: "ما لا يسع الطفل المسلم جهله من الآداب والسيرة.",
    info: {
      title: "برنامج ما لا يسغ الطفل المسلم جهله",
      description: ["ما لا يسع الطفل المسلم جهله من الآداب والسيرة."],
      adv: [
        "عقيدة الطفل المسلم بأسلوب بسيط يناسب سنهم.",
        "آداب إسلامية في حياتهم اليومية.",
        "سيرة نبوية يتعلموا منها عظمة سيدنا محمد ﷺ.",
        "تفسير قصار السور وسورة الفاتحة.",
        "أحاديث نبوية يحتاجوها في تعاملاتهم.",
        "فقه مبسط: الصلاة-الصيام-الوضوء-الطهارة.",
        "آداب عامة وإسلامية تنظم تعاملاتهم وعلاقاتهم.",
      ],
    },
  },
  {
    title: "اللغة العربية",
    image: "course-3.png",
    description: "دراسة أحكام التجويد نظري وعملي وعملي وعملي.",
    info: {
      title: "دورة أبطال اللغة العربية للأطفال",
      description: [
        "دورة مميزة تهدف إلي تقوية مهارات اللغة العربية وتنمية قدرات الأطفال في القرءاة والكتابة بطريقة ممتعة وشيقة.",
      ],
      adv: [
        "تلعم الحروف العربية بطريقة تفاعلية.",
        "تطوير مهارات القراءة والكتابة من خلال الأنشطة والألعاب.",
        "تنمية المفردات وتعليم القواعد الأساسية للغة العربية.",
        "قصص وحكايات تساهم في تثبيت المعلومات وتوسيع الأفق الثقافي للأطفال.",
      ],
    },
  },
  {
    title: "التجويد",
    image: "course-2.png",
    description: "دراسة أحكام التجويد نظري وعملي وعملي وعملي.",
    info: {
      title: "دورة التجويد للمبتدئين",
      description: [
        "علمُّ التجويد هو أول خطوة تدبُّر كتاب اللَّه رب العالمين; حيث إن النطق الصحيح للكلمات يساعد كثيرًا في الفهم الصحيح لمعانيها.",
      ],
      adv: [
        "يتعلم فيه الطالب أحكام التجويد الصحيحة.",
        "القدرة على قرءاة آيات القرآن الكريم خالية من الأخطاء واللحن في القراءة.",
        "تطوير مهارات الطالب في قراءة القرآن.",
        "الحصول على الأجر العظيم من تلاوة القرآن الكريم كما أنزل على ﷺ.",
      ],
    },
  },
  {
    title: "سورة البقرة",
    image: "course-1.jpg",
    description: "حفظ ومدارسة وتدبر سورة البقرة بجدول زمني محدد.",
    info: {
      title: "دورة حفظ سورة البقرة",
      description: [
        "الوقاية من الشيطان.",
        "أخذها بركة وتركها حسرة.",
        "الشافعة لصاحبها يوم القيامة.",
      ],
      adv: [
        "تفسير وتدبر الآيات وضبط المتشابهات.",
        "خطة حفظ منظمة لتناسب جدولك اليومي.",
        "تصحيح التلاوة وعرض المحفوظ.",
        "اختبارات دورية على كل جزء.",
        "اختبار شامل بعد نهاية السورة.",
      ],
    },
  },
];

const Courses = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (index) => {
    setOpenCard((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white py-16 px-5 flex flex-col justify-center items-center ">
      <div className="flex justify-center pb-10">
        <h1 className="bg-text text-white w-fit xl:p-8 rounded-lg xl:text-5xl p-4 text-4xl">
          الدورات المتاحة
        </h1>
      </div>
      <div className="grid xl:grid-cols-4 gap-y-8  xl:gap-x-24 xl:px-20">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition w-[350px]"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full shadow-sm h-[345px]"
            />
            <div className="px-4" dir="rtl">
              <h3 className="text-3xl xl:text-4xl font-Amiri-Regular text-text tracking-widest m-0 mt-3">
                {course.title}
              </h3>
              <p className="text-xl mb-2 xl:text-2xl text-text m-0 mt-5">
                {course.description}
              </p>
            </div>
            <div className="flex gap-x-3 justify-between">
              <NavLink to="/contact" className="w-[40%]">
                <button className="bg-text hover:bg-hover hover:text-white transition-colors p-2 rounded text-white w-full text-xl border-none mb-2 ml-2 hover:cursor-pointer">
                  للتسجيل
                </button>
              </NavLink>

              {/* Info button + card */}
              <div className="relative inline-block">
                <button
                  onClick={() => toggleCard(index)}
                  className="text-text pr-4 flex rounded-lg outline-none border-none bg-white pt-3 hover:cursor-pointer"
                >
                  <IoIosInformationCircleOutline size={28} />
                </button>

                {openCard === index && course.info && (
                  <div
                    className="fixed inset-0 flex  items-center justify-center bg-black bg-opacity-40 z-50"
                    dir="rtl"
                    onClick={() => setOpenCard(null)}
                  >
                    {/* Card container */}
                    <div
                      className="relative w-full h-[70%] overflow-scroll xl:w-fit xl:h-fit xl:overflow-y-auto bg-white shadow-lg rounded-2xl p-6"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Exit button */}
                      <button
                        onClick={() => setOpenCard(null)}
                        className="absolute top-3 left-3 text-text bg-white border-none text-2xl cursor-pointer"
                      >
                        <IoClose size={32} />
                      </button>

                      <div className="flex flex-col xl:flex-row justify-center font-Amiri-Bold text-text">
                        <h1 className="text-4xl text-center xl:text-4xl">
                          {course.info.title}
                        </h1>
                      </div>

                      <div className="flex flex-col xl:flex-row justify-around gap-x-4 text-text mt-6">
                        <div className="xl:w-[300px]">
                          <h3 className="text-3xl m-0">عن الدورة:</h3>
                          <ul className="list-disc text-2xl">
                            {course.info.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-3xl m-0">مميزات الدورة:</h4>
                          <ul className="list-disc text-2xl">
                            {course.info.adv.map((adv, i) => (
                              <li key={i}>{adv}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
