import { BsPeopleFill } from "react-icons/bs";
import WhyFeatureItem from "./WhyFeatureItem";
import { FaBookReader, FaUserClock } from "react-icons/fa";
import { FaBookQuran } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import { TbCertificate } from "react-icons/tb";

// New file: WhyFeaturesSection.jsx
function WhyFeaturesSection() {
  return (
    <div className="flex justify-center items-center px-16 ">
      <ul className="grid grid-cols-3 gap-12">
        <WhyFeatureItem
          icon={<TbCertificate size={110} color="#2D4F2B" />}
          title="مسابقات وشهادات"
          description="تُقيم الأكاديمية مسابقات شهرية لقياس مدى التميز، وتُمنح شهادات تقدير للطلاب المتفوقين دعمًا لمسيرتهم التعليمية."
        />
        <WhyFeatureItem
          icon={<FaBookReader size={70} color="#2D4F2B" className="pt-2" />}
          title="دروس للقراءة والكتابة"
          description="يوجد دروس للقراءة والكتابة بطريقتي النورانية ونور البيان."
        />
        <WhyFeatureItem
          icon={<TfiWrite size={80} color="#2D4F2B" className="pt-2" />}
          title="إختبارات دورية"
          description="يُجرى للدارسين اختبارات دورية شهرية لقياس مستوى التقدم في اللغة العربية والتجويد وحفظ القرآن."
        />
        <WhyFeatureItem
          icon={<FaBookQuran size={70} color="#2D4F2B" className="pt-2" />}
          title="دورات في التجويد "
          description="توفر الأكاديمية برامج مكثفة لإتقان أحكام التجويد عمليًا ونظريًا."
        />
        <WhyFeatureItem
          icon={<FaUserClock size={100} color="#2D4F2B" className="pt-2" />}
          title="مرونة في اخيار الوقت"
          description="للطالب حرية اختيار الأوقات والأيام المتاحة له، وتغيير المواعيد متى أراد ذلك بما يناسبه."
        />
        <WhyFeatureItem
          icon={<BsPeopleFill size={100} color="#2D4F2B" className="pt-2" />}
          title="حلقات فردية أو مجموعات"
          description="الطالب والمدرس في محاضرة مخصصة للوقت المناسب لكل طالب على حدة أو في مجموعات على حسب التفضيل."
        />
      </ul>
    </div>
  );
}
export default WhyFeaturesSection;
