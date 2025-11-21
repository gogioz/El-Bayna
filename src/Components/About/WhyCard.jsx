import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// Custom hook for animated count up
const useCountUp = (targetCount, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetCount;

    if (end <= 0 || duration <= 0) {
      setCount(end); // Handle edge cases
      return;
    }

    const incrementTime = Math.floor(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetCount, duration]);

  return count;
};

// Card component
export const WhyCard = ({ targetCount, duration, text, icon }) => {
  const count = useCountUp(targetCount, duration);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {icon}
      <h5 className="font-Amiri-Bold text-3xl text-center">
        +{count} {text}
      </h5>
    </div>
  );
};

// Prop validation

WhyCard.propTypes = {
  text: PropTypes.string.isRequired,
  targetCount: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  icon: PropTypes.element,
};
