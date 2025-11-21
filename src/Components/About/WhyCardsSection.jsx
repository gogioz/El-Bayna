import { WhyCard } from "./WhyCard";
import {
  FaBookQuran,
  FaClock,
  FaEarthAfrica,
  FaGraduationCap,
} from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";

const cardData = [
  {
    count: 7,
    duration: 2000,
    text: "دولة",
    icon: <FaEarthAfrica size={90} className="animated-icon w-[300px] pt-4" />,
  },
  {
    count: 1000,
    duration: 2000,
    text: "ساعة",
    icon: <FaClock size={90} className="animated-icon w-[300px] pt-4" />,
  },
  {
    count: 1000,
    duration: 2000,
    text: "حلقة",
    icon: <FaBookQuran size={80} className="animated-icon w-[300px] pt-4" />,
  },
  {
    count: 90,
    duration: 10,
    text: "معلم",
    icon: (
      <FaChalkboardTeacher size={90} className="animated-icon w-[300px] pt-4" />
    ),
  },
  {
    count: 500,
    duration: 10,
    text: "طالب",
    icon: (
      <FaGraduationCap size={90} className="animated-icon w-[300px] pt-4" />
    ),
  },
];

function WhyCardsSection() {
  return (
    <ul className="list-none grid grid-cols-5 gap-x-10 text-white">
      {cardData.map((item, index) => (
        <li
          key={index}
          className="bg-hover rounded-xl flex flex-col justify-center items-center shadow-md shadow-hover"
        >
          <WhyCard
            targetCount={item.count}
            duration={item.duration}
            text={item.text}
            icon={item.icon}
          />
        </li>
      ))}
    </ul>
  );
}

export default WhyCardsSection;
