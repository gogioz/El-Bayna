export const WWD = () => {
  return (
    <div className="flex flex-col-reverse xl:flex-row-reverse items-center justify-between w-full gap-y-20 xl:gap-x-16 px-6 xl:px-20 sm:pt-16 lg:pt-28 pb-12 xl:py-0">
      {/* Hero Animation */}
      <div className="flex justify-center items-center w-full xl:w-[45%]">
        <img
          src="animited-hero.png"
          alt="Hero Animation"
          className="w-[70%] sm:w-[100%] md:w-[90%] lg:w-[65%] xl:w-full drop-shadow-lg"
        />
      </div>

      {/* List */}
      <div
        className="flex flex-col items-end w-full xl:w-[45%] mr-0 xl:mr-8"
        dir="rtl"
      >
        <ul
          className="list-none w-full font-Amiri-Bold  sm:text-right space-y-4 xl:space-y-6"
          dir="rtl"
        >
          {[
            "تيسير حفظ القرآن الكريم.",
            "حلقات فردية للنساء والأطفال.",
            "دراسة أحكام التجويد.",
            "تعليم اللغة العربية.",
            "ما لا يسع الطفل المسلم جهله.",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-start gap-x-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-text"
              dir="rtl"
            >
              <span className="w-2 h-2 xl:w-4 xl:h-4 rounded-full bg-text shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
