function Team() {
  return (
    <div className=" xl:px-16">
      <div className="flex justify-center">
        <h1 className="bg-text text-white w-fit p-4 text-4xl xl:p-8 rounded-lg xl:text-5xl">
          عن الفريق
        </h1>
      </div>
      <div className="flex flex-col-reverse xl:flex-row xl:justify-around xl:items-center gap-8 xl:gap-0 px-4 xl:px-0 py-8">
        <div className="flex justify-center items-center xl:w-[45%]">
          <img
            src="team.png"
            alt=""
            className="w-[80%] xl:w-full xl:max-w-[500px]"
          />
        </div>
        <div dir="rtl" className="xl:w-[45%]">
          <ul className="list-none font-Amiri-Bold text-right text-text space-y-4 xl:space-y-6">
            {[
              "نخبة من أفضل المعلمين والمعلمات يحملون إجازات متصلة السند بالنبي ﷺ.",
              "فريق عمل متميز من المعلمين والمعلمات المتخصصين في تدريس القرءان الكريم وعلومه.",
              "خبرة واسعة وشهادات معترف بها في علوم القرءان والتجويد واللغة العربية.",
              "يتميز فريق العمل بقدرة عالية على توصيل المعلومات بأسلوب مبسط وفعال.",
              "فريق قادر على مساعدة الطلاب على تحقيق أهدافهم التعليمية بكفاءة وسهولة.",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start justify-end gap-x-3 text-2xl sm:text-3xl lg:text-[34px] xl:text-4xl leading-relaxed"
              >
                <span className="w-2 h-2 xl:w-4 xl:h-4 rounded-full bg-text shrink-0 mt-3" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;
