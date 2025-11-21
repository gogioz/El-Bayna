import { useState } from "react";
export const WhyPurpose = () => {
  const [selected, setSelected] = useState("الأهداف");
  const content = {
    الأهداف: {
      text: "١. تقديم برامج تعليمية في اللغة العربية والتجويد لجميع الأعمار.\n٢. تمكين المتعلمين من قراءة القرآن الكريم بشكل صحيح وفق أحكام التجويد.\n٣. تحفيظ القرآن الكريم بأفضل الطرق التربوية الحديثة.\n٤. تعزيز مهارات القراءة والكتابة لدى الطلاب باللغة العربية.\n٥. دمج التكنولوجيا في التعليم لتسهيل الفهم وزيادة التفاعل.",

      image: "/three.jpg",
    },
    الرسالة: {
      text: "١. تقديم تعليم متميز في اللغة العربية والتجويد وحفظ القرآن بأساليب تفاعلية تناسب جميع الفئات العمرية.\n٢. بناء جيل محب للقرآن، متقن للغة العربية قراءة، وكتابة ونطقاً.\n٣. تسهيل تعليم القراءة والتجويد للناشئة والبالغين باستخدام منهجية مبسطة ومؤصلة.",
      image: "/one.jpg", // Make sure one.jpg is inside the public folder
    },
    الرؤية: {
      text: "١. أن نكون المنصة التعليمية الرائدة في تعليم اللغة العربية وعلوم القرآن الكريم.\n٢. المساهمة في تخريج جيل متقن للغة العربية حافظ لكتاب الله.\n٣. تحقيق التميز في منهجيات التعليم والتدريب المعتمدة.",

      image: "/two.jpg",
    },
  };
  return (
    <div className="flex flex-col justify-between text-4xl text-right text-text w-[55%] leading-10 font-Amiri-Bold bg-white pr-4 rounded-lg  ">
      <div className="flex justify-start items-center gap-6 flex-row-reverse pt-6 ">
        {["الأهداف", "الرسالة", "الرؤية"].map((item) => (
          <button
            key={item}
            onClick={() => setSelected(item)}
            className={`px-6 py-3 font-Amiri-Bold rounded-lg text-2xl outline-none border-none cursor-pointer transition-all duration-200 ${
              selected === item
                ? "bg-hover text-white ring-4 ring-hover font-bold scale-105"
                : "bg-text text-white hover:bg-hover hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="h-[450px] ">
        {content[selected].text.split("\n").map((line, index) => (
          <p key={index} className="" dir="rtl">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
