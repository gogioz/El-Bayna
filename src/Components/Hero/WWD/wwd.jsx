export const WWD = () => {
  return (
    <div className="flex flex-col-reverse gap-y-0 xl:flex-row-reverse xl:items-center xl:justify-center w-full xl:gap-x-28">
      {/* Hero Animation */}
      <div className="flex justify-center items-center xl:w-[40%]">
        <img
          src="animited-hero.png"
          alt="Hero Animation"
          className="w-[80%] xl:w-full"
        />
      </div>

      {/* Logo & List */}
      <div className="flex flex-col-reverse w-[100%] xl:w-[40%]" dir="rtl">
        <div className="hidden xl:flex xl:justify-center xl:mb-6">
          <img src="hero22 - Copy.png" alt="Academy Logo" className="w-[55%]" />
        </div>
        <ul className="list-disc list-inside font-Amiri-Bold text-right text-2xl leading-[50px] xl:text-4xl xl:leading-[80px] xl:text-right">
          <li>تيسير حفظ القرآن الكريم.</li>
          <li>حلقات فردية للنساء والأطفال.</li>
          <li>دراسة أحكام التجويد.</li>
          <li>تعليم اللغة العربية.</li>
          <li>ما لا يسع الطفل المسلم جهله.</li>
        </ul>
      </div>
    </div>
  );
};
