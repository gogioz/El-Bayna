function Team() {
  return (
    <div className=" xl:px-16">
      <div className="flex justify-center">
        <h1 className="bg-text text-white w-fit p-4 text-4xl xl:p-8 rounded-lg xl:text-5xl">
          عن الفريق
        </h1>
      </div>
      <div className="flex flex-col-reverse xl:justify-around items-center">
        <div className="flex justify-center items-center">
          <img src="team.png" alt="" className="w-[80%] xl:w-[125%]" />
        </div>
        <div dir="rtl">
          <ul className="list-disc list-inside font-Amiri-Bold text-xl leading-9 xl:text-4xl xl:leading-[55px] text-right text-text xl:w-[80%]">
            <li>
              نخبة من أفضل المعلمين والمعلمات يحملون إجازات متصلة السند بالنبي
              ﷺ.
            </li>
            <li>
              فريق عمل متميز من المعلمين والمعلمات المتخصصين في تدريس القرءان
              الكريم وعلومه.
            </li>
            <li>
              خبرة واسعة وشهادات معترف بها في علوم القرءان والتجويد واللغة
              العربية.
            </li>
            <li>
              يتميز فريق العمل بقدرة عالية على توصيل المعلومات بأسلوب مبسط
              وفعال.
            </li>
            <li>
              فريق قادر على مساعدة الطلاب على تحقيق أهدافهم التعليمية بكفاءة
              وسهولة.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;
